Here are some common Angular interview questions along with answers and examples to help you prepare:

---

### **1. What is Angular?**
**Answer:**  
Angular is a popular open-source front-end web application framework developed and maintained by Google. It is used for building dynamic, single-page applications (SPAs) using TypeScript. Angular provides a structured way to create scalable and maintainable web applications.

---

### **2. What are the key features of Angular?**
**Answer:**  
- **Two-Way Data Binding:** Automatically synchronizes data between the model and view.  
- **Dependency Injection:** Helps in creating and injecting dependencies.  
- **Modularity:** Applications are divided into modules (NgModules).  
- **Directives:** Extend HTML with custom attributes and elements.  
- **TypeScript:** Angular is built with TypeScript, which provides strong typing and object-oriented features.  
- **Routing:** Built-in support for client-side routing.  

---

### **3. What is the difference between AngularJS and Angular?**
**Answer:**  
- **AngularJS (1.x):** Uses JavaScript and has a two-way data binding feature. It follows the MVC architecture.  
- **Angular (2+):** Uses TypeScript, has a component-based architecture, and supports one-way and two-way data binding. It is faster and more modular than AngularJS.  

---

### **4. What are Angular Components?**
**Answer:**  
Components are the building blocks of an Angular application. They control a part of the UI and consist of:  
- **Template:** HTML view.  
- **Class:** TypeScript code for logic.  
- **Metadata:** Defined using the `@Component` decorator.  

**Example:**  
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Hello, {{name}}!</h1>`,
})
export class AppComponent {
  name = 'Angular';
}
```

---

### **5. What is Data Binding in Angular?**
**Answer:**  
Data binding is a mechanism to synchronize data between the component and the view. Angular supports:  
- **Interpolation:** `{{ data }}`  
- **Property Binding:** `[property]="data"`  
- **Event Binding:** `(event)="handler()"`  
- **Two-Way Binding:** `[(ngModel)]="data"`  

**Example:**  
```html
<input [(ngModel)]="name">
<p>Hello, {{ name }}!</p>
```

---

### **6. What is Dependency Injection (DI) in Angular?**
**Answer:**  
Dependency Injection is a design pattern in which a class receives its dependencies from an external source rather than creating them itself. Angular's DI framework provides dependencies to a class upon instantiation.

**Example:**  
```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  getData() {
    return 'Some data';
  }
}

@Component({
  selector: 'app-root',
  template: `<p>{{ data }}</p>`,
})
export class AppComponent {
  data: string;
  constructor(private dataService: DataService) {
    this.data = this.dataService.getData();
  }
}
```

---

### **7. What are Angular Directives?**
**Answer:**  
Directives are used to extend the behavior of HTML elements. There are three types:  
- **Component Directives:** Components with templates.  
- **Structural Directives:** Change the DOM layout (e.g., `*ngIf`, `*ngFor`).  
- **Attribute Directives:** Change the appearance or behavior of an element (e.g., `ngStyle`, `ngClass`).  

**Example:**  
```html
<div *ngIf="isVisible">Visible Content</div>
<div [ngClass]="{'active': isActive}">Class Binding</div>
```

---

### **8. What is Angular Routing?**
**Answer:**  
Angular Router enables navigation between views in a single-page application. It maps URLs to components.

**Example:**  
```typescript
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

---

### **9. What is an Angular Module?**
**Answer:**  
An Angular module (`NgModule`) is a container for a cohesive block of functionality. It declares components, directives, pipes, and services.

**Example:**  
```typescript
@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule, FormsModule],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

---

### **10. What is the difference between `ngIf` and `hidden`?**
**Answer:**  
- **`ngIf`:** Removes the element from the DOM when the condition is false.  
- **`hidden`:** Hides the element using CSS (`display: none`) but keeps it in the DOM.  

**Example:**  
```html
<div *ngIf="isVisible">This is ngIf</div>
<div [hidden]="!isVisible">This is hidden</div>
```

---

### **11. What is Angular Pipe?**
**Answer:**  
Pipes are used to transform data in the template. Angular provides built-in pipes like `date`, `uppercase`, `lowercase`, and `currency`.

**Example:**  
```html
<p>{{ today | date:'fullDate' }}</p>
<p>{{ name | uppercase }}</p>
```

---

### **12. What is the purpose of `ngOnInit`?**
**Answer:**  
`ngOnInit` is a lifecycle hook in Angular that is called after the component is initialized. It is used for initialization logic.

**Example:**  
```typescript
export class AppComponent implements OnInit {
  ngOnInit() {
    console.log('Component initialized');
  }
}
```

---

### **13. What is Lazy Loading in Angular?**
**Answer:**  
Lazy loading is a technique where Angular loads feature modules only when they are needed, improving application performance.

**Example:**  
```typescript
const routes: Routes = [
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
];
```

---

### **14. What is the difference between `Promise` and `Observable`?**
**Answer:**  
- **Promise:** Represents a single value in the future.  
- **Observable:** Represents a stream of values over time (used in RxJS).  

**Example:**  
```typescript
// Promise
getData().then(data => console.log(data));

// Observable
getData().subscribe(data => console.log(data));
```

---

### **15. How do you handle errors in Angular?**
**Answer:**  
Errors can be handled using the `catchError` operator in RxJS or by implementing error handling in HTTP requests.

**Example:**  
```typescript
import { catchError } from 'rxjs/operators';

this.http.get('url').pipe(
  catchError(error => {
    console.error('Error occurred:', error);
    return throwError(error);
  })
).subscribe();
```

---
Certainly! Here are **more Angular interview questions and answers** with examples to further enhance your preparation:

---

### **16. What is the purpose of `ngOnChanges`?**
**Answer:**  
`ngOnChanges` is a lifecycle hook that is called whenever an input property of a component changes. It receives a `SimpleChanges` object containing the current and previous values.

**Example:**  
```typescript
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<p>{{ value }}</p>`,
})
export class ChildComponent implements OnChanges {
  @Input() value: string;

  ngOnChanges(changes: SimpleChanges) {
    console.log('Input changed:', changes.value.currentValue);
  }
}
```

---

### **17. What is the difference between `@ViewChild` and `@ContentChild`?**
**Answer:**  
- **`@ViewChild`:** Used to access a child component, directive, or DOM element within the component's view.  
- **`@ContentChild`:** Used to access content projected into the component using `<ng-content>`.  

**Example:**  
```typescript
@ViewChild('myElement') myElement: ElementRef;
@ContentChild(ProjectedComponent) projectedComponent: ProjectedComponent;
```

---

### **18. What is Angular Interpolation?**
**Answer:**  
Interpolation is a way to bind data from the component to the view using double curly braces `{{ }}`. It evaluates expressions and displays the result in the template.

**Example:**  
```html
<p>Welcome, {{ username }}!</p>
```

---

### **19. What is the purpose of `ng-template`?**
**Answer:**  
`ng-template` is used to define template fragments that can be conditionally rendered or reused. It is often used with structural directives like `*ngIf` and `*ngFor`.

**Example:**  
```html
<ng-template #noData>
  <p>No data available.</p>
</ng-template>

<div *ngIf="data; else noData">
  <p>{{ data }}</p>
</div>
```

---

### **20. What is Angular Change Detection?**
**Answer:**  
Change detection is the process by which Angular checks for changes in the component's data and updates the DOM accordingly. Angular uses a **zone.js** library to detect changes automatically.

**Example:**  
```typescript
import { ChangeDetectorRef } from '@angular/core';

constructor(private cdr: ChangeDetectorRef) {}

ngOnInit() {
  setTimeout(() => {
    this.data = 'Updated Data';
    this.cdr.detectChanges(); // Manually trigger change detection
  }, 1000);
}
```

---

### **21. What is the purpose of `ng-container`?**
**Answer:**  
`ng-container` is a logical container that does not render any additional DOM element. It is useful for grouping elements without introducing extra nodes.

**Example:**  
```html
<ng-container *ngIf="isLoggedIn">
  <p>Welcome, {{ username }}!</p>
  <button (click)="logout()">Logout</button>
</ng-container>
```

---

### **22. What is the difference between `ngModel` and `formControl`?**
**Answer:**  
- **`ngModel`:** Used for two-way data binding in template-driven forms.  
- **`formControl`:** Used in reactive forms to manage the state of a form control programmatically.  

**Example:**  
```html
<!-- Template-Driven Form -->
<input [(ngModel)]="username">

<!-- Reactive Form -->
<input [formControl]="usernameControl">
```

---

### **23. What is the purpose of `ngAfterViewInit`?**
**Answer:**  
`ngAfterViewInit` is a lifecycle hook that is called after the component's view has been fully initialized. It is useful for performing DOM-related operations.

**Example:**  
```typescript
import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div #myDiv>Hello World</div>`,
})
export class AppComponent implements AfterViewInit {
  @ViewChild('myDiv') myDiv: ElementRef;

  ngAfterViewInit() {
    console.log('Div content:', this.myDiv.nativeElement.textContent);
  }
}
```

---

### **24. What is the difference between `pure` and `impure` pipes?**
**Answer:**  
- **Pure Pipes:** Only execute when the input value changes (default).  
- **Impure Pipes:** Execute on every change detection cycle, even if the input value hasn't changed.  

**Example:**  
```typescript
@Pipe({
  name: 'customPipe',
  pure: false // Impure pipe
})
export class CustomPipe implements PipeTransform {
  transform(value: any): any {
    return value + ' transformed';
  }
}
```

---

### **25. What is Angular Universal?**
**Answer:**  
Angular Universal is a technology that allows Angular applications to be rendered on the server side (Server-Side Rendering - SSR). This improves performance and SEO.

**Example:**  
```bash
ng add @nguniversal/express-engine
```

---

### **26. What is the purpose of `ngZone`?**
**Answer:**  
`ngZone` is a service provided by Angular to manage change detection and asynchronous operations outside Angular's zone.

**Example:**  
```typescript
import { NgZone } from '@angular/core';

constructor(private ngZone: NgZone) {}

runOutsideAngular() {
  this.ngZone.runOutsideAngular(() => {
    setTimeout(() => {
      console.log('Outside Angular zone');
    }, 1000);
  });
}
```

---

### **27. What is the difference between `RouterModule.forRoot()` and `RouterModule.forChild()`?**
**Answer:**  
- **`forRoot()`:** Used to define routes for the root module.  
- **`forChild()`:** Used to define routes for feature modules.  

**Example:**  
```typescript
// app-routing.module.ts
const routes: Routes = [
  { path: '', component: HomeComponent },
];
RouterModule.forRoot(routes);

// feature-routing.module.ts
const featureRoutes: Routes = [
  { path: 'feature', component: FeatureComponent },
];
RouterModule.forChild(featureRoutes);
```

---

### **28. What is the purpose of `ng-content`?**
**Answer:**  
`ng-content` is used for content projection, allowing you to insert external content into a component.

**Example:**  
```html
<!-- Parent Component -->
<app-card>
  <p>This content is projected into the card.</p>
</app-card>

<!-- Child Component (app-card) -->
<div class="card">
  <ng-content></ng-content>
</div>
```

---

### **29. What is the difference between `BehaviorSubject` and `Subject`?**
**Answer:**  
- **`Subject`:** Does not hold a value and only emits values after subscription.  
- **`BehaviorSubject`:** Holds a current value and emits it immediately to new subscribers.  

**Example:**  
```typescript
import { BehaviorSubject, Subject } from 'rxjs';

const subject = new Subject();
subject.subscribe(value => console.log('Subject:', value));
subject.next('Hello'); // Logs: Subject: Hello

const behaviorSubject = new BehaviorSubject('Initial Value');
behaviorSubject.subscribe(value => console.log('BehaviorSubject:', value)); // Logs: BehaviorSubject: Initial Value
behaviorSubject.next('Updated Value'); // Logs: BehaviorSubject: Updated Value
```

---

### **30. How do you optimize Angular applications?**
**Answer:**  
- Use **lazy loading** for modules.  
- Enable **AOT (Ahead-of-Time) compilation**.  
- Use **OnPush change detection** strategy.  
- Minimize the use of heavy libraries.  
- Optimize API calls and use caching.  
- Use **trackBy** with `*ngFor` to improve performance.  

**Example:**  
```html
<div *ngFor="let item of items; trackBy: trackByFn">{{ item.name }}</div>
```

```typescript
trackByFn(index: number, item: any): number {
  return item.id;
}
```

---
Absolutely! Here are **even more Angular interview questions and answers** with examples to help you prepare thoroughly:

---

### **31. What is the purpose of `ngAfterContentInit`?**
**Answer:**  
`ngAfterContentInit` is a lifecycle hook that is called after Angular projects external content into the component's view (using `<ng-content>`).

**Example:**  
```typescript
import { AfterContentInit, Component, ContentChild } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `<ng-content></ng-content>`,
})
export class CardComponent implements AfterContentInit {
  @ContentChild('header') header: ElementRef;

  ngAfterContentInit() {
    console.log('Header content:', this.header.nativeElement.textContent);
  }
}
```

---

### **32. What is the difference between `ngOnDestroy` and `ngAfterViewChecked`?**
**Answer:**  
- **`ngOnDestroy`:** Called when a component is about to be destroyed. It is used for cleanup logic (e.g., unsubscribing from observables).  
- **`ngAfterViewChecked`:** Called after Angular checks the component's view and child views. It is used for post-view update logic.  

**Example:**  
```typescript
ngOnDestroy() {
  console.log('Component destroyed');
}

ngAfterViewChecked() {
  console.log('View checked');
}
```

---

### **33. What is the purpose of `ngModelChange`?**
**Answer:**  
`ngModelChange` is an event emitted by `ngModel` when the value of a form control changes. It allows you to perform actions when the value changes.

**Example:**  
```html
<input [(ngModel)]="username" (ngModelChange)="onUsernameChange($event)">
```

```typescript
onUsernameChange(newValue: string) {
  console.log('Username changed to:', newValue);
}
```

---

### **34. What is the difference between `RouterLink` and `Router.navigate`?**
**Answer:**  
- **`RouterLink`:** A directive used in templates to navigate to a route.  
- **`Router.navigate`:** A method used in component classes to navigate programmatically.  

**Example:**  
```html
<!-- RouterLink -->
<a routerLink="/home">Home</a>

<!-- Router.navigate -->
<button (click)="navigateToHome()">Go to Home</button>
```

```typescript
import { Router } from '@angular/router';

constructor(private router: Router) {}

navigateToHome() {
  this.router.navigate(['/home']);
}
```

---

### **35. What is the purpose of `ngSwitch`?**
**Answer:**  
`ngSwitch` is a structural directive used to conditionally display content based on a switch expression.

**Example:**  
```html
<div [ngSwitch]="role">
  <p *ngSwitchCase="'admin'">Welcome, Admin!</p>
  <p *ngSwitchCase="'user'">Welcome, User!</p>
  <p *ngSwitchDefault>Welcome, Guest!</p>
</div>
```

---

### **36. What is the difference between `async` and `async` pipe?**
**Answer:**  
- **`async` (JavaScript):** A keyword used to define asynchronous functions.  
- **`async` pipe (Angular):** A pipe used to subscribe to observables or promises and automatically unsubscribe when the component is destroyed.  

**Example:**  
```html
<p>{{ data$ | async }}</p>
```

```typescript
data$ = this.http.get('url');
```

---

### **37. What is the purpose of `ngClass`?**
**Answer:**  
`ngClass` is used to dynamically add or remove CSS classes based on conditions.

**Example:**  
```html
<div [ngClass]="{'active': isActive, 'disabled': isDisabled}">Content</div>
```

---

### **38. What is the difference between `ngForm` and `FormGroup`?**
**Answer:**  
- **`ngForm`:** Used in template-driven forms to create a form group.  
- **`FormGroup`:** Used in reactive forms to define a group of form controls programmatically.  

**Example:**  
```html
<!-- Template-Driven Form -->
<form #myForm="ngForm">
  <input name="username" ngModel>
</form>

<!-- Reactive Form -->
<form [formGroup]="myForm">
  <input formControlName="username">
</form>
```

```typescript
myForm = new FormGroup({
  username: new FormControl('')
});
```

---

### **39. What is the purpose of `ngAfterContentChecked`?**
**Answer:**  
`ngAfterContentChecked` is a lifecycle hook called after Angular checks the content projected into the component.

**Example:**  
```typescript
ngAfterContentChecked() {
  console.log('Content checked');
}
```

---

### **40. What is the difference between `ViewEncapsulation.None` and `ViewEncapsulation.Emulated`?**
**Answer:**  
- **`ViewEncapsulation.None`:** Disables Angular's view encapsulation, making styles global.  
- **`ViewEncapsulation.Emulated`:** Emulates shadow DOM by adding unique attributes to styles (default).  

**Example:**  
```typescript
@Component({
  selector: 'app-root',
  template: `<p>Hello World</p>`,
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {}
```

---

### **41. What is the purpose of `ngrx` in Angular?**
**Answer:**  
`ngrx` is a state management library for Angular based on the Redux pattern. It helps manage application state in a predictable way using actions, reducers, and effects.

**Example:**  
```typescript
// Action
export const loadData = createAction('[Data] Load Data');

// Reducer
export const dataReducer = createReducer(
  initialState,
  on(loadData, (state) => ({ ...state, loading: true }))
);

// Effect
loadData$ = createEffect(() => this.actions$.pipe(
  ofType(loadData),
  switchMap(() => this.dataService.getData().pipe(
    map(data => loadDataSuccess({ data }))
  ))
));
```

---

### **42. What is the purpose of `ngx-translate`?**
**Answer:**  
`ngx-translate` is a library for internationalization (i18n) in Angular applications. It allows you to translate your app into multiple languages.

**Example:**  
```typescript
// app.module.ts
TranslateModule.forRoot({
  loader: {
    provide: TranslateLoader,
    useFactory: HttpLoaderFactory,
    deps: [HttpClient],
  },
});

// component.ts
constructor(private translate: TranslateService) {
  translate.setDefaultLang('en');
}

switchLanguage(lang: string) {
  this.translate.use(lang);
}
```

---

### **43. What is the difference between `ElementRef` and `Renderer2`?**
**Answer:**  
- **`ElementRef`:** Provides direct access to the DOM element.  
- **`Renderer2`:** A service for manipulating the DOM in a platform-agnostic way.  

**Example:**  
```typescript
// ElementRef
@ViewChild('myElement') myElement: ElementRef;
ngAfterViewInit() {
  this.myElement.nativeElement.style.color = 'red';
}

// Renderer2
constructor(private renderer: Renderer2, private el: ElementRef) {}
ngAfterViewInit() {
  this.renderer.setStyle(this.el.nativeElement, 'color', 'blue');
}
```

---

### **44. What is the purpose of `ngx-bootstrap`?**
**Answer:**  
`ngx-bootstrap` is a library that provides Bootstrap components for Angular applications.

**Example:**  
```html
<button type="button" class="btn btn-primary" (click)="openModal()">Open Modal</button>
```

---

### **45. What is the difference between `ng serve` and `ng build`?**
**Answer:**  
- **`ng serve`:** Starts a development server and serves the application.  
- **`ng build`:** Compiles the application into output files for deployment.  

**Example:**  
```bash
ng serve --port 4200
ng build --prod
```

---

### **46. What is the purpose of `ng test`?**
**Answer:**  
`ng test` is used to run unit tests in an Angular application using Karma and Jasmine.

**Example:**  
```bash
ng test
```

---

### **47. What is the purpose of `ng lint`?**
**Answer:**  
`ng lint` is used to check the codebase for linting errors and enforce coding standards.

**Example:**  
```bash
ng lint
```

---

### **48. What is the difference between `ng update` and `ng add`?**
**Answer:**  
- **`ng update`:** Updates Angular packages and dependencies.  
- **`ng add`:** Adds new libraries or packages to the project.  

**Example:**  
```bash
ng update @angular/core
ng add @ngrx/store
```

---

### **49. What is the purpose of `ng eject`?**
**Answer:**  
`ng eject` was used to eject the Angular CLI configuration and customize the build process. However, it has been **removed** in Angular CLI v12+.

---

### **50. What is the purpose of `ng deploy`?**
**Answer:**  
`ng deploy` is used to deploy an Angular application to a hosting provider.

**Example:**  
```bash
ng deploy --base-href=/my-app/
```

---
Certainly! Let’s dive even deeper into **Angular interview questions and answers** with examples to ensure you’re fully prepared:

---

### **51. What is the purpose of `ngOnChanges` and how does it work?**
**Answer:**  
`ngOnChanges` is a lifecycle hook that is called whenever an input property of a component changes. It receives a `SimpleChanges` object that contains the current and previous values of the input properties.

**Example:**  
```typescript
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<p>{{ value }}</p>`,
})
export class ChildComponent implements OnChanges {
  @Input() value: string;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.value) {
      console.log('Value changed from', changes.value.previousValue, 'to', changes.value.currentValue);
    }
  }
}
```

---

### **52. What is the difference between `ngAfterViewInit` and `ngAfterViewChecked`?**
**Answer:**  
- **`ngAfterViewInit`:** Called once after the component's view and child views are initialized.  
- **`ngAfterViewChecked`:** Called after every check of the component's view and child views.  

**Example:**  
```typescript
ngAfterViewInit() {
  console.log('View initialized');
}

ngAfterViewChecked() {
  console.log('View checked');
}
```

---

### **53. What is the purpose of `ng-template` and `ng-container`?**
**Answer:**  
- **`ng-template`:** Defines a template that can be conditionally rendered or reused.  
- **`ng-container`:** A logical container that does not render any additional DOM element.  

**Example:**  
```html
<ng-template #noData>
  <p>No data available.</p>
</ng-template>

<ng-container *ngIf="data; else noData">
  <p>{{ data }}</p>
</ng-container>
```

---

### **54. What is the difference between `ngModel` and `formControlName`?**
**Answer:**  
- **`ngModel`:** Used for two-way data binding in template-driven forms.  
- **`formControlName`:** Used in reactive forms to bind a form control to a `FormControl` instance.  

**Example:**  
```html
<!-- Template-Driven Form -->
<input [(ngModel)]="username">

<!-- Reactive Form -->
<input formControlName="username">
```

---

### **55. What is the purpose of `ngAfterContentInit` and `ngAfterContentChecked`?**
**Answer:**  
- **`ngAfterContentInit`:** Called after Angular projects external content into the component (using `<ng-content>`).  
- **`ngAfterContentChecked`:** Called after Angular checks the projected content.  

**Example:**  
```typescript
ngAfterContentInit() {
  console.log('Content initialized');
}

ngAfterContentChecked() {
  console.log('Content checked');
}
```

---

### **56. What is the difference between `BehaviorSubject` and `ReplaySubject`?**
**Answer:**  
- **`BehaviorSubject`:** Holds a current value and emits it immediately to new subscribers.  
- **`ReplaySubject`:** Emits a specified number of previous values to new subscribers.  

**Example:**  
```typescript
const behaviorSubject = new BehaviorSubject('Initial Value');
behaviorSubject.subscribe(value => console.log('BehaviorSubject:', value)); // Logs: BehaviorSubject: Initial Value

const replaySubject = new ReplaySubject(2);
replaySubject.next('Value 1');
replaySubject.next('Value 2');
replaySubject.subscribe(value => console.log('ReplaySubject:', value)); // Logs: ReplaySubject: Value 1, Value 2
```

---

### **57. What is the purpose of `ngx-translate` and how do you use it?**
**Answer:**  
`ngx-translate` is a library for internationalization (i18n) in Angular applications. It allows you to translate your app into multiple languages.

**Example:**  
```typescript
// app.module.ts
TranslateModule.forRoot({
  loader: {
    provide: TranslateLoader,
    useFactory: HttpLoaderFactory,
    deps: [HttpClient],
  },
});

// component.ts
constructor(private translate: TranslateService) {
  translate.setDefaultLang('en');
}

switchLanguage(lang: string) {
  this.translate.use(lang);
}
```

---

### **58. What is the difference between `ng serve` and `ng build --watch`?**
**Answer:**  
- **`ng serve`:** Starts a development server and serves the application with live reload.  
- **`ng build --watch`:** Compiles the application and watches for changes, but does not serve it.  

**Example:**  
```bash
ng serve --port 4200
ng build --watch
```

---

### **59. What is the purpose of `ngx-bootstrap` and how do you use it?**
**Answer:**  
`ngx-bootstrap` is a library that provides Bootstrap components for Angular applications.

**Example:**  
```html
<button type="button" class="btn btn-primary" (click)="openModal()">Open Modal</button>
```

---

### **60. What is the difference between `ng update` and `npm update`?**
**Answer:**  
- **`ng update`:** Updates Angular packages and dependencies, and can also migrate your codebase to new versions.  
- **`npm update`:** Updates all packages in the `node_modules` folder to their latest versions.  

**Example:**  
```bash
ng update @angular/core
npm update
```

---

### **61. What is the purpose of `ng lint` and how do you use it?**
**Answer:**  
`ng lint` is used to check the codebase for linting errors and enforce coding standards.

**Example:**  
```bash
ng lint
```

---

### **62. What is the difference between `ng add` and `npm install`?**
**Answer:**  
- **`ng add`:** Adds a library or package to the Angular project and configures it automatically.  
- **`npm install`:** Installs a package in the `node_modules` folder.  

**Example:**  
```bash
ng add @ngrx/store
npm install lodash
```

---

### **63. What is the purpose of `ng deploy` and how do you use it?**
**Answer:**  
`ng deploy` is used to deploy an Angular application to a hosting provider.

**Example:**  
```bash
ng deploy --base-href=/my-app/
```

---

### **64. What is the difference between `ng test` and `ng e2e`?**
**Answer:**  
- **`ng test`:** Runs unit tests using Karma and Jasmine.  
- **`ng e2e`:** Runs end-to-end tests using Protractor.  

**Example:**  
```bash
ng test
ng e2e
```

---

### **65. What is the purpose of `ng build --prod`?**
**Answer:**  
`ng build --prod` compiles the Angular application for production, enabling optimizations like minification, tree-shaking, and Ahead-of-Time (AOT) compilation.

**Example:**  
```bash
ng build --prod
```

---

### **66. What is the difference between `ng generate component` and `ng generate module`?**
**Answer:**  
- **`ng generate component`:** Creates a new component.  
- **`ng generate module`:** Creates a new module.  

**Example:**  
```bash
ng generate component my-component
ng generate module my-module
```

---

### **67. What is the purpose of `ng generate service`?**
**Answer:**  
`ng generate service` creates a new service that can be injected into components or other services.

**Example:**  
```bash
ng generate service data
```

---

### **68. What is the difference between `ng generate directive` and `ng generate pipe`?**
**Answer:**  
- **`ng generate directive`:** Creates a new directive.  
- **`ng generate pipe`:** Creates a new pipe.  

**Example:**  
```bash
ng generate directive my-directive
ng generate pipe my-pipe
```

---

### **69. What is the purpose of `ng generate guard`?**
**Answer:**  
`ng generate guard` creates a new route guard that can be used to protect routes.

**Example:**  
```bash
ng generate guard auth
```

---

### **70. What is the difference between `ng generate class` and `ng generate interface`?**
**Answer:**  
- **`ng generate class`:** Creates a new TypeScript class.  
- **`ng generate interface`:** Creates a new TypeScript interface.  

**Example:**  
```bash
ng generate class my-class
ng generate interface my-interface
```

---
Absolutely! Let’s continue with **even more Angular interview questions and answers** to ensure you’re fully prepared for your interview. These questions will cover advanced topics, best practices, and real-world scenarios.

---

### **71. What is the purpose of `ng generate enum`?**
**Answer:**  
`ng generate enum` creates a new TypeScript enum, which is useful for defining a set of named constants.

**Example:**  
```bash
ng generate enum user-role
```

```typescript
export enum UserRole {
  Admin = 'Admin',
  User = 'User',
  Guest = 'Guest',
}
```

---

### **72. What is the difference between `ng generate module` and `ng generate library`?**
**Answer:**  
- **`ng generate module`:** Creates a new Angular module within the application.  
- **`ng generate library`:** Creates a new Angular library that can be shared across multiple projects.  

**Example:**  
```bash
ng generate module my-module
ng generate library my-library
```

---

### **73. What is the purpose of `ng generate application`?**
**Answer:**  
`ng generate application` creates a new Angular application within a workspace. This is useful for creating multiple apps in a single workspace (monorepo).

**Example:**  
```bash
ng generate application admin-app
```

---

### **74. What is the difference between `ng generate component` and `ng generate directive`?**
**Answer:**  
- **`ng generate component`:** Creates a new component with a template, styles, and logic.  
- **`ng generate directive`:** Creates a new directive that can modify the behavior or appearance of DOM elements.  

**Example:**  
```bash
ng generate component my-component
ng generate directive my-directive
```

---

### **75. What is the purpose of `ng generate service` in a library?**
**Answer:**  
`ng generate service` in a library creates a new service that can be shared across multiple applications or modules within the library.

**Example:**  
```bash
ng generate service data --project=my-library
```

---

### **76. What is the difference between `ng generate guard` and `ng generate interceptor`?**
**Answer:**  
- **`ng generate guard`:** Creates a route guard to protect routes.  
- **`ng generate interceptor`:** Creates an HTTP interceptor to modify HTTP requests or responses.  

**Example:**  
```bash
ng generate guard auth
ng generate interceptor auth
```

---

### **77. What is the purpose of `ng generate resolver`?**
**Answer:**  
`ng generate resolver` creates a route resolver that fetches data before navigating to a route.

**Example:**  
```bash
ng generate resolver user
```

```typescript
@Injectable({ providedIn: 'root' })
export class UserResolver implements Resolve<User> {
  constructor(private userService: UserService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<User> {
    return this.userService.getUser(route.params.id);
  }
}
```

---

### **78. What is the difference between `ng generate pipe` and `ng generate directive`?**
**Answer:**  
- **`ng generate pipe`:** Creates a new pipe for transforming data in templates.  
- **`ng generate directive`:** Creates a new directive for modifying DOM elements.  

**Example:**  
```bash
ng generate pipe capitalize
ng generate directive highlight
```

---

### **79. What is the purpose of `ng generate class` in Angular?**
**Answer:**  
`ng generate class` creates a new TypeScript class, which can be used for models, services, or utility functions.

**Example:**  
```bash
ng generate class user
```

```typescript
export class User {
  id: number;
  name: string;
}
```

---

### **80. What is the difference between `ng generate interface` and `ng generate class`?**
**Answer:**  
- **`ng generate interface`:** Creates a TypeScript interface for defining object shapes.  
- **`ng generate class`:** Creates a TypeScript class with properties and methods.  

**Example:**  
```bash
ng generate interface user
ng generate class user
```

---

### **81. What is the purpose of `ng generate enum` in Angular?**
**Answer:**  
`ng generate enum` creates a TypeScript enum, which is useful for defining a set of named constants.

**Example:**  
```bash
ng generate enum user-role
```

```typescript
export enum UserRole {
  Admin = 'Admin',
  User = 'User',
  Guest = 'Guest',
}
```

---
