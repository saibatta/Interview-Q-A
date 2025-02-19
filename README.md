Here’s a comprehensive list of **JavaScript interview questions and answers with examples** to help you prepare for your interview. These questions cover fundamental concepts, advanced topics, and practical coding examples.

---

### **1. What is JavaScript?**
**Answer:**  
JavaScript is a lightweight, interpreted programming language used for building dynamic and interactive web applications. It is primarily used for client-side scripting but can also be used on the server-side (e.g., Node.js).

---

### **2. What are the data types in JavaScript?**
**Answer:**  
JavaScript has 7 primitive data types and 1 non-primitive data type:
- **Primitive:** `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`
- **Non-primitive:** `object` (includes arrays, functions, and objects)

**Example:**  
```javascript
let name = "John"; // string
let age = 25; // number
let isStudent = true; // boolean
let car = null; // null
let job; // undefined
let id = Symbol("id"); // symbol
let bigNumber = 12345678901234567890n; // bigint
let person = { name: "John", age: 25 }; // object
```

---

### **3. What is the difference between `let`, `const`, and `var`?**
**Answer:**  
- `let`: Block-scoped, can be reassigned.
- `const`: Block-scoped, cannot be reassigned.
- `var`: Function-scoped, can be reassigned.

**Example:**  
```javascript
let a = 10;
a = 20; // Valid

const b = 30;
b = 40; // Error: Assignment to constant variable

var c = 50;
c = 60; // Valid
```

---

### **4. What is hoisting in JavaScript?**
**Answer:**  
Hoisting is a mechanism where variable and function declarations are moved to the top of their scope during the compilation phase.

**Example:**  
```javascript
console.log(x); // undefined
var x = 5;

console.log(y); // Error: Cannot access 'y' before initialization
let y = 10;
```

---

### **5. What is the difference between `==` and `===`?**
**Answer:**  
- `==`: Compares values after type coercion.
- `===`: Compares values and types without coercion.

**Example:**  
```javascript
console.log(5 == "5"); // true
console.log(5 === "5"); // false
```

---

### **6. What is a closure in JavaScript?**
**Answer:**  
A closure is a function that retains access to its lexical scope even when the function is executed outside that scope.

**Example:**  
```javascript
function outer() {
  let x = 10;
  function inner() {
    console.log(x); // Accesses x from outer function
  }
  return inner;
}

let closure = outer();
closure(); // 10
```

---

### **7. What is the `this` keyword in JavaScript?**
**Answer:**  
The `this` keyword refers to the object that is executing the current function. Its value depends on how the function is called.

**Example:**  
```javascript
const person = {
  name: "John",
  greet: function() {
    console.log(`Hello, ${this.name}`);
  }
};

person.greet(); // Hello, John
```

---

### **8. What is an arrow function?**
**Answer:**  
An arrow function is a concise way to write functions in JavaScript. It does not have its own `this` and cannot be used as a constructor.

**Example:**  
```javascript
const add = (a, b) => a + b;
console.log(add(2, 3)); // 5
```

---

### **9. What is the difference between `null` and `undefined`?**
**Answer:**  
- `null`: Represents an intentional absence of any object value.
- `undefined`: Represents a variable that has been declared but not assigned a value.

**Example:**  
```javascript
let a;
console.log(a); // undefined

let b = null;
console.log(b); // null
```

---

### **10. What is the event loop in JavaScript?**
**Answer:**  
The event loop is a mechanism that allows JavaScript to perform non-blocking I/O operations by offloading tasks to the browser or Node.js runtime.

**Example:**  
```javascript
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");

// Output: Start, End, Promise, Timeout
```

---

### **11. What is a promise in JavaScript?**
**Answer:**  
A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

**Example:**  
```javascript
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success!");
  }, 1000);
});

promise.then((result) => {
  console.log(result); // Success!
});
```

---

### **12. What is async/await in JavaScript?**
**Answer:**  
`async/await` is syntactic sugar for working with promises. It allows you to write asynchronous code that looks like synchronous code.

**Example:**  
```javascript
async function fetchData() {
  const response = await fetch("https://api.example.com/data");
  const data = await response.json();
  console.log(data);
}

fetchData();
```

---

### **13. What is the difference between `call`, `apply`, and `bind`?**
**Answer:**  
- `call`: Invokes a function with a specific `this` value and arguments provided individually.
- `apply`: Similar to `call`, but arguments are provided as an array.
- `bind`: Returns a new function with a specific `this` value and arguments.

**Example:**  
```javascript
const person = { name: "John" };

function greet(greeting) {
  console.log(`${greeting}, ${this.name}`);
}

greet.call(person, "Hello"); // Hello, John
greet.apply(person, ["Hi"]); // Hi, John

const boundGreet = greet.bind(person, "Hey");
boundGreet(); // Hey, John
```

---

### **14. What is the difference between `map` and `forEach`?**
**Answer:**  
- `map`: Creates a new array by applying a function to each element of the original array.
- `forEach`: Executes a function for each element of the array but does not return a new array.

**Example:**  
```javascript
const numbers = [1, 2, 3];

const doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6]

numbers.forEach((num) => console.log(num)); // 1, 2, 3
```

---

### **15. What is the difference between `slice` and `splice`?**
**Answer:**  
- `slice`: Returns a shallow copy of a portion of an array without modifying the original array.
- `splice`: Changes the contents of an array by removing or replacing elements.

**Example:**  
```javascript
const numbers = [1, 2, 3, 4, 5];

const sliced = numbers.slice(1, 3);
console.log(sliced); // [2, 3]

numbers.splice(1, 2, 6, 7);
console.log(numbers); // [1, 6, 7, 4, 5]
```

---

### **16. What is the difference between `let` and `var` in terms of scope?**
**Answer:**  
- `let`: Block-scoped (limited to the block in which it is defined).
- `var`: Function-scoped (limited to the function in which it is defined).

**Example:**  
```javascript
if (true) {
  let a = 10;
  var b = 20;
}

console.log(a); // Error: a is not defined
console.log(b); // 20
```

---

### **17. What is the purpose of `use strict` in JavaScript?**
**Answer:**  
`use strict` enforces stricter parsing and error handling in your code. It helps catch common coding mistakes and prevents the use of unsafe features.

**Example:**  
```javascript
"use strict";

x = 10; // Error: x is not defined
```

---

### **18. What is the difference between `==` and `Object.is()`?**
**Answer:**  
- `==`: Performs type coercion.
- `Object.is()`: Compares values without type coercion and treats `NaN`, `+0`, and `-0` differently.

**Example:**  
```javascript
console.log(NaN == NaN); // false
console.log(Object.is(NaN, NaN)); // true

console.log(+0 == -0); // true
console.log(Object.is(+0, -0)); // false
```

---

### **19. What is a generator function in JavaScript?**
**Answer:**  
A generator function is a special type of function that can be paused and resumed. It uses the `function*` syntax and the `yield` keyword.

**Example:**  
```javascript
function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generator();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
```

---

### **20. What is the difference between `null` and `undefined`?**
**Answer:**  
- `null`: Represents an intentional absence of any object value.
- `undefined`: Represents a variable that has been declared but not assigned a value.

**Example:**  
```javascript
let a;
console.log(a); // undefined

let b = null;
console.log(b); // null
```

---

Let me know if you need further clarification or additional examples!