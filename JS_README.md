Here are some advanced JavaScript interview questions along with their answers:

### 1. **Explain the concept of closures in JavaScript.**
   **Answer:**
   A closure is a function that retains access to its lexical scope, even when the function is executed outside that scope. In other words, a closure gives you access to an outer function’s scope from an inner function.

   ```javascript
   function outerFunction() {
       let outerVariable = 'I am outside!';

       function innerFunction() {
           console.log(outerVariable);
       }

       return innerFunction;
   }

   const closure = outerFunction();
   closure(); // Output: 'I am outside!'
   ```

   In this example, `innerFunction` is a closure that retains access to `outerVariable` even after `outerFunction` has finished executing.

### 2. **What is the event loop in JavaScript?**
   **Answer:**
   The event loop is a mechanism that allows JavaScript to perform non-blocking I/O operations despite being single-threaded. It continuously checks the call stack and the callback queue. If the call stack is empty, it pushes the first event from the callback queue to the call stack for execution.

   ```javascript
   console.log('Start');

   setTimeout(() => {
       console.log('Timeout');
   }, 0);

   Promise.resolve().then(() => {
       console.log('Promise');
   });

   console.log('End');

   // Output:
   // Start
   // End
   // Promise
   // Timeout
   ```

   In this example, even though the `setTimeout` has a delay of 0ms, the Promise's callback is executed first because microtasks (like Promises) have higher priority than macrotasks (like `setTimeout`).

### 3. **What is the difference between `==` and `===` in JavaScript?**
   **Answer:**
   - `==` is the equality operator that performs type coercion if the types of the operands are different.
   - `===` is the strict equality operator that does not perform type coercion and requires both the value and the type to be the same.

   ```javascript
   console.log(1 == '1');  // true (type coercion)
   console.log(1 === '1'); // false (no type coercion)
   ```

### 4. **Explain the concept of prototypal inheritance in JavaScript.**
   **Answer:**
   JavaScript uses prototypal inheritance, where objects can inherit properties and methods from other objects. Each object has an internal property `[[Prototype]]` that points to another object, forming a prototype chain.

   ```javascript
   const parent = {
       greet() {
           console.log('Hello from parent');
       }
   };

   const child = Object.create(parent);
   child.greet(); // Output: 'Hello from parent'
   ```

   In this example, `child` inherits the `greet` method from `parent` through the prototype chain.

### 5. **What are JavaScript Promises and how do they work?**
   **Answer:**
   A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises have three states:
   - **Pending**: Initial state, neither fulfilled nor rejected.
   - **Fulfilled**: The operation completed successfully.
   - **Rejected**: The operation failed.

   ```javascript
   const promise = new Promise((resolve, reject) => {
       setTimeout(() => {
           resolve('Success!');
       }, 1000);
   });

   promise.then((result) => {
       console.log(result); // Output: 'Success!'
   }).catch((error) => {
       console.error(error);
   });
   ```

   In this example, the Promise resolves after 1 second, and the `then` method is called with the resolved value.

### 6. **What is the difference between `let`, `const`, and `var`?**
   **Answer:**
   - `var`: Function-scoped, can be re-declared and updated.
   - `let`: Block-scoped, can be updated but not re-declared within the same scope.
   - `const`: Block-scoped, cannot be updated or re-declared.

   ```javascript
   if (true) {
       var x = 1;
       let y = 2;
       const z = 3;
   }

   console.log(x); // 1
   console.log(y); // ReferenceError: y is not defined
   console.log(z); // ReferenceError: z is not defined
   ```

   In this example, `x` is accessible outside the block because it is declared with `var`, while `y` and `z` are not accessible because they are block-scoped.

### 7. **What is the `this` keyword in JavaScript?**
   **Answer:**
   The `this` keyword refers to the context in which a function is executed. Its value depends on how the function is called:
   - In a method, `this` refers to the object that owns the method.
   - In a function, `this` refers to the global object (in non-strict mode) or `undefined` (in strict mode).
   - In an event handler, `this` refers to the element that received the event.

   ```javascript
   const obj = {
       value: 42,
       method() {
           console.log(this.value);
       }
   };

   obj.method(); // Output: 42
   ```

   In this example, `this` inside `method` refers to `obj`.

### 8. **What are JavaScript Generators?**
   **Answer:**
   Generators are special functions that can be paused and resumed, allowing for the generation of a sequence of values over time. They are defined using the `function*` syntax and use the `yield` keyword to produce values.

   ```javascript
   function* generator() {
       yield 1;
       yield 2;
       yield 3;
   }

   const gen = generator();
   console.log(gen.next().value); // 1
   console.log(gen.next().value); // 2
   console.log(gen.next().value); // 3
   ```

   In this example, the generator produces a sequence of values that can be iterated over using the `next` method.

### 9. **What is the difference between `null` and `undefined`?**
   **Answer:**
   - `undefined` means a variable has been declared but has not been assigned a value.
   - `null` is an assignment value that represents no value or no object.

   ```javascript
   let x;
   console.log(x); // undefined

   let y = null;
   console.log(y); // null
   ```

   In this example, `x` is `undefined` because it has not been assigned a value, while `y` is explicitly set to `null`.

### 10. **What is the purpose of the `async` and `await` keywords in JavaScript?**
   **Answer:**
   The `async` and `await` keywords are used to work with Promises in a more synchronous-looking way. An `async` function returns a Promise, and `await` pauses the execution of the function until the Promise is resolved.

   ```javascript
   async function fetchData() {
       const response = await fetch('https://api.example.com/data');
       const data = await response.json();
       return data;
   }

   fetchData().then(data => console.log(data));
   ```

   In this example, `fetchData` is an `async` function that waits for the `fetch` call to resolve before proceeding to the next line.

### 11. **What is the difference between `call`, `apply`, and `bind`?**
   **Answer:**
   - `call`: Calls a function with a given `this` value and arguments provided individually.
   - `apply`: Calls a function with a given `this` value and arguments provided as an array.
   - `bind`: Creates a new function with a given `this` value and initial arguments, which can be called later.

   ```javascript
   const obj = { value: 42 };

   function greet(greeting) {
       console.log(`${greeting}, ${this.value}`);
   }

   greet.call(obj, 'Hello'); // Hello, 42
   greet.apply(obj, ['Hi']); // Hi, 42

   const boundGreet = greet.bind(obj, 'Hey');
   boundGreet(); // Hey, 42
   ```

   In this example, `call` and `apply` immediately invoke the function with the specified `this` value, while `bind` returns a new function that can be called later.

### 12. **What is the purpose of the `Symbol` type in JavaScript?**
   **Answer:**
   `Symbol` is a primitive data type that is used to create unique identifiers. Symbols are often used as property keys to avoid name collisions.

   ```javascript
   const sym1 = Symbol('key');
   const sym2 = Symbol('key');

   console.log(sym1 === sym2); // false

   const obj = {
       [sym1]: 'value'
   };

   console.log(obj[sym1]); // value
   ```

   In this example, `sym1` and `sym2` are unique symbols, even though they have the same description.

### 13. **What is the difference between `Object.create()` and `new`?**
   **Answer:**
   - `Object.create()` creates a new object with the specified prototype object and properties.
   - `new` creates an instance of a user-defined object type or of one of the built-in object types that has a constructor function.

   ```javascript
   const parent = {
       greet() {
           console.log('Hello');
       }
   };

   const child = Object.create(parent);
   child.greet(); // Hello

   function Person(name) {
       this.name = name;
   }

   const person = new Person('John');
   console.log(person.name); // John
   ```

   In this example, `Object.create()` is used to create an object with `parent` as its prototype, while `new` is used to create an instance of the `Person` constructor.

### 14. **What is the purpose of the `Proxy` object in JavaScript?**
   **Answer:**
   The `Proxy` object is used to define custom behavior for fundamental operations (e.g., property lookup, assignment, enumeration, function invocation, etc.).

   ```javascript
   const target = {
       message: 'Hello, World!'
   };

   const handler = {
       get(target, prop) {
           if (prop === 'message') {
               return target[prop].toUpperCase();
           }
           return target[prop];
       }
   };

   const proxy = new Proxy(target, handler);
   console.log(proxy.message); // HELLO, WORLD!
   ```

   In this example, the `Proxy` intercepts the `get` operation and modifies the returned value.

### 15. **What is the difference between `Map` and `Object` in JavaScript?**
   **Answer:**
   - `Map` is a collection of key-value pairs where keys can be of any type, including objects, functions, and primitives.
   - `Object` is a collection of key-value pairs where keys are limited to strings and symbols.

   ```javascript
   const map = new Map();
   map.set({}, 'value');
   console.log(map.get({})); // undefined (different object reference)

   const obj = {};
   obj[{}] = 'value';
   console.log(obj['[object Object]']); // value
   ```

   In this example, `Map` allows using an object as a key, while `Object` converts the key to a string.

### 16. **What is the purpose of the `WeakMap` and `WeakSet` in JavaScript?**
   **Answer:**
   - `WeakMap` is a collection of key-value pairs where keys are weakly referenced, meaning they do not prevent garbage collection if there are no other references to the key.
   - `WeakSet` is a collection of objects where objects are weakly referenced, meaning they do not prevent garbage collection if there are no other references to the object.

   ```javascript
   let obj = {};
   const weakMap = new WeakMap();
   weakMap.set(obj, 'value');

   obj = null; // The object can now be garbage collected
   ```

   In this example, the `WeakMap` does not prevent the `obj` from being garbage collected when it is no longer referenced.

### 17. **What is the difference between `for...in` and `for...of` loops?**
   **Answer:**
   - `for...in` iterates over the enumerable properties of an object, including inherited properties.
   - `for...of` iterates over the values of an iterable object, such as arrays, strings, maps, sets, etc.

   ```javascript
   const arr = [3, 5, 7];
   arr.foo = 'bar';

   for (let i in arr) {
       console.log(i); // 0, 1, 2, foo
   }

   for (let i of arr) {
       console.log(i); // 3, 5, 7
   }
   ```

   In this example, `for...in` iterates over the array indices and the `foo` property, while `for...of` iterates over the array values.

### 18. **What is the purpose of the `Array.prototype.reduce()` method?**
   **Answer:**
   The `reduce()` method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

   ```javascript
   const arr = [1, 2, 3, 4];
   const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
   console.log(sum); // 10
   ```

   In this example, `reduce()` is used to sum all the elements of the array.

### 19. **What is the difference between `slice()` and `splice()` in JavaScript?**
   **Answer:**
   - `slice()` returns a shallow copy of a portion of an array into a new array object selected from `start` to `end` (end not included).
   - `splice()` changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

   ```javascript
   const arr = [1, 2, 3, 4, 5];
   const sliced = arr.slice(1, 3);
   console.log(sliced); // [2, 3]

   arr.splice(1, 2, 'a', 'b');
   console.log(arr); // [1, 'a', 'b', 4, 5]
   ```

   In this example, `slice()` creates a new array with elements from index 1 to 2, while `splice()` modifies the original array by removing elements from index 1 to 2 and adding 'a' and 'b'.

### 20. **What is the purpose of the `Promise.all()` method?**
   **Answer:**
   `Promise.all()` takes an iterable of Promises and returns a single Promise that resolves when all of the Promises in the iterable have resolved, or rejects if any of the Promises reject.

   ```javascript
   const promise1 = Promise.resolve(1);
   const promise2 = Promise.resolve(2);
   const promise3 = Promise.resolve(3);

   Promise.all([promise1, promise2, promise3]).then(values => {
       console.log(values); // [1, 2, 3]
   });
   ```

   In this example, `Promise.all()` waits for all three Promises to resolve and then logs their values.

### 21. **What is the purpose of the `Promise.race()` method?**
   **Answer:**
   `Promise.race()` takes an iterable of Promises and returns a single Promise that resolves or rejects as soon as one of the Promises in the iterable resolves or rejects.

   ```javascript
   const promise1 = new Promise((resolve) => setTimeout(resolve, 500, 'one'));
   const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'two'));

   Promise.race([promise1, promise2]).then(value => {
       console.log(value); // 'two'
   });
   ```

   In this example, `Promise.race()` resolves with the value of the first Promise that resolves, which is `promise2`.

### 22. **What is the purpose of the `Object.freeze()` method?**
   **Answer:**
   `Object.freeze()` freezes an object, preventing new properties from being added to it, existing properties from being removed, and existing properties from being changed.

   ```javascript
   const obj = { prop: 42 };
   Object.freeze(obj);

   obj.prop = 33; // Throws an error in strict mode
   console.log(obj.prop); // 42
   ```

   In this example, `Object.freeze()` prevents the `prop` property from being modified.

### 23. **What is the purpose of the `Object.seal()` method?**
   **Answer:**
   `Object.seal()` seals an object, preventing new properties from being added and marking all existing properties as non-configurable. However, the values of existing properties can still be changed.

   ```javascript
   const obj = { prop: 42 };
   Object.seal(obj);

   obj.prop = 33; // Allowed
   delete obj.prop; // Throws an error in strict mode
   console.log(obj.prop); // 33
   ```

   In this example, `Object.seal()` allows the `prop` property to be modified but prevents it from being deleted.

### 24. **What is the purpose of the `Object.assign()` method?**
   **Answer:**
   `Object.assign()` is used to copy the values of all enumerable own properties from one or more source objects to a target object. It returns the target object.

   ```javascript
   const target = { a: 1, b: 2 };
   const source = { b: 4, c: 5 };

   const result = Object.assign(target, source);
   console.log(result); // { a: 1, b: 4, c: 5 }
   ```

   In this example, `Object.assign()` copies the properties from `source` to `target`, overwriting the `b` property.

### 25. **What is the purpose of the `Array.prototype.map()` method?**
   **Answer:**
   The `map()` method creates a new array populated with the results of calling a provided function on every element in the calling array.

   ```javascript
   const arr = [1, 2, 3];
   const doubled = arr.map(x => x * 2);
   console.log(doubled); // [2, 4, 6]
   ```

   In this example, `map()` creates a new array with each element doubled.

### 26. **What is the purpose of the `Array.prototype.filter()` method?**
   **Answer:**
   The `filter()` method creates a new array with all elements that pass the test implemented by the provided function.

   ```javascript
   const arr = [1, 2, 3, 4, 5];
   const evens = arr.filter(x => x % 2 === 0);
   console.log(evens); // [2, 4]
   ```

   In this example, `filter()` creates a new array containing only the even numbers from the original array.

### 27. **What is the purpose of the `Array.prototype.forEach()` method?**
   **Answer:**
   The `forEach()` method executes a provided function once for each array element.

   ```javascript
   const arr = [1, 2, 3];
   arr.forEach(x => console.log(x));
   // Output:
   // 1
   // 2
   // 3
   ```

   In this example, `forEach()` logs each element of the array to the console.

### 28. **What is the purpose of the `Array.prototype.some()` method?**
   **Answer:**
   The `some()` method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.

   ```javascript
   const arr = [1, 2, 3, 4, 5];
   const hasEven = arr.some(x => x % 2 === 0);
   console.log(hasEven); // true
   ```

   In this example, `some()` returns `true` because there is at least one even number in the array.

### 29. **What is the purpose of the `Array.prototype.every()` method?**
   **Answer:**
   The `every()` method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

   ```javascript
   const arr = [2, 4, 6, 8, 10];
   const allEven = arr.every(x => x % 2 === 0);
   console.log(allEven); // true
   ```

   In this example, `every()` returns `true` because all elements in the array are even.

### 30. **What is the purpose of the `Array.prototype.find()` method?**
   **Answer:**
   The `find()` method returns the value of the first element in the array that satisfies the provided testing function. If no elements satisfy the testing function, `undefined` is returned.

   ```javascript
   const arr = [1, 2, 3, 4, 5];
   const found = arr.find(x => x > 3);
   console.log(found); // 4
   ```

   In this example, `find()` returns the first element greater than 3, which is `4`.

### 31. **What is the purpose of the `Array.prototype.findIndex()` method?**
   **Answer:**
   The `findIndex()` method returns the index of the first element in the array that satisfies the provided testing function. If no elements satisfy the testing function, `-1` is returned.

   ```javascript
   const arr = [1, 2, 3, 4, 5];
   const index = arr.findIndex(x => x > 3);
   console.log(index); // 3
   ```

   In this example, `findIndex()` returns the index of the first element greater than 3, which is `3`.

### 32. **What is the purpose of the `Array.prototype.includes()` method?**
   **Answer:**
   The `includes()` method determines whether an array includes a certain value among its entries, returning `true` or `false` as appropriate.

   ```javascript
   const arr = [1, 2, 3, 4, 5];
   const includesThree = arr.includes(3);
   console.log(includesThree); // true
   ```

   In this example, `includes()` returns `true` because the array contains the value `3`.

### 33. **What is the purpose of the `Array.prototype.flat()` method?**
   **Answer:**
   The `flat()` method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

   ```javascript
   const arr = [1, [2, [3, [4]]];
   const flattened = arr.flat(2);
   console.log(flattened); // [1, 2, 3, [4]]
   ```

   In this example, `flat(2)` flattens the array up to a depth of 2, resulting in `[1, 2, 3, [4]]`.

### 34. **What is the purpose of the `Array.prototype.flatMap()` method?**
   **Answer:**
   The `flatMap()` method first maps each element using a mapping function, then flattens the result into a new array. It is identical to a `map()` followed by a `flat()` of depth 1.

   ```javascript
   const arr = [1, 2, 3];
   const result = arr.flatMap(x => [x, x * 2]);
   console.log(result); // [1, 2, 2, 4, 3, 6]
   ```

   In this example, `flatMap()` maps each element to an array containing the element and its double, then flattens the result.

### 35. **What is the purpose of the `Array.prototype.sort()` method?**
   **Answer:**
   The `sort()` method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code unit values.

   ```javascript
   const arr = [3, 1, 4, 1, 5, 9];
   arr.sort((a, b) => a - b);
   console.log(arr); // [1, 1, 3, 4, 5, 9]
   ```

   In this example, `sort()` sorts the array in ascending order.

### 36. **What is the purpose of the `Array.prototype.reverse()` method?**
   **Answer:**
   The `reverse()` method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.

   ```javascript
   const arr = [1, 2, 3, 4, 5];
   arr.reverse();
   console.log(arr); // [5, 4, 3, 2, 1]
   ```

   In this example, `reverse()` reverses the order of the elements in the array.

### 37. **What is the purpose of the `Array.prototype.join()` method?**
   **Answer:**
   The `join()` method creates and returns a new string by concatenating all of the elements in an array, separated by commas or a specified separator string.

   ```javascript
   const arr = ['Hello', 'World'];
   const str = arr.join(' ');
   console.log(str); // 'Hello World'
   ```

   In this example, `join(' ')` concatenates the elements of the array with a space separator.

### 38. **What is the purpose of the `Array.prototype.concat()` method?**
   **Answer:**
   The `concat()` method is used to merge two or more arrays. This method does not change the existing arrays but instead returns a new array.

   ```javascript
   const arr1 = [1, 2, 3];
   const arr2 = [4, 5, 6];
   const combined = arr1.concat(arr2);
   console.log(combined); // [1, 2, 3, 4, 5, 6]
   ```

   In this example, `concat()` merges `arr1` and `arr2` into a new array.

### 39. **What is the purpose of the `Array.prototype.slice()` method?**
   **Answer:**
   The `slice()` method returns a shallow copy of a portion of an array into a new array object selected from `start` to `end` (end not included). The original array will not be modified.

   ```javascript
   const arr = [1, 2, 3, 4, 5];
   const sliced = arr.slice(1, 3);
   console.log(sliced); // [2, 3]
   ```

   In this example, `slice(1, 3)` creates a new array containing elements from index 1 to 2.

### 40. **What is the purpose of the `Array.prototype.splice()` method?**
   **Answer:**
   The `splice()` method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

   ```javascript
   const arr = [1, 2, 3, 4, 5];
   arr.splice(1, 2, 'a', 'b');
   console.log(arr); // [1, 'a', 'b', 4, 5]
   ```

   In this example, `splice(1, 2, 'a', 'b')` removes 2 elements starting from index 1 and adds 'a' and 'b' in their place.

### 41. **What is the purpose of the `Array.prototype.reduceRight()` method?**
   **Answer:**
   The `reduceRight()` method applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.

   ```javascript
   const arr = [[0, 1], [2, 3], [4, 5]];
   const flattened = arr.reduceRight((acc, val) => acc.concat(val), []);
   console.log(flattened); // [4, 5, 2, 3, 0, 1]
   ```

   In this example, `reduceRight()` flattens the array from right to left.

### 42. **What is the purpose of the `Array.prototype.indexOf()` method?**
   **Answer:**
   The `indexOf()` method returns the first index at which a given element can be found in the array, or -1 if it is not present.

   ```javascript
   const arr = [1, 2, 3, 4, 5];
   const index = arr.indexOf(3);
   console.log(index); // 2
   ```

   In this example, `indexOf(3)` returns the index of the first occurrence of `3` in the array.

### 43. **What is the purpose of the `Array.prototype.lastIndexOf()` method?**
   **Answer:**
   The `lastIndexOf()` method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at `fromIndex`.

   ```javascript
   const arr = [1, 2, 3, 4, 3, 5];
   const lastIndex = arr.lastIndexOf(3);
   console.log(lastIndex); // 4
   ```

   In this example, `lastIndexOf(3)` returns the index of the last occurrence of `3` in the array.

### 44. **What is the purpose of the `Array.prototype.toString()` method?**
   **Answer:**
   The `toString()` method returns a string representing the specified array and its elements.

   ```javascript
   const arr = [1, 2, 3, 4, 5];
   const str = arr.toString();
   console.log(str); // '1,2,3,4,5'
   ```

   In this example, `toString()` converts the array to a comma-separated string.

### 45. **What is the purpose of the `Array.prototype.toLocaleString()` method?**
   **Answer:**
   The `toLocaleString()` method returns a string representing the elements of the array. The elements are converted to strings using their `toLocaleString` methods.

   ```javascript
   const arr = [1000, 2000, 3000];
   const str = arr.toLocaleString('en-US');
   console.log(str); // '1,000,2,000,3,000'
   ```

   In this example, `toLocaleString('en-US')` converts the numbers to a locale-specific string format.

### 46. **What is the purpose of the `Array.prototype.values()` method?**
   **Answer:**
   The `values()` method returns a new array iterator object that contains the values for each index in the array.

   ```javascript
   const arr = [1, 2, 3];
   const iterator = arr.values();

   for (const value of iterator) {
       console.log(value);
   }
   // Output:
   // 1
   // 2
   // 3
   ```

   In this example, `values()` returns an iterator that can be used to iterate over the values of the array.

### 47. **What is the purpose of the `Array.prototype.keys()` method?**
   **Answer:**
   The `keys()` method returns a new array iterator object that contains the keys for each index in the array.

   ```javascript
   const arr = [1, 2, 3];
   const iterator = arr.keys();

   for (const key of iterator) {
       console.log(key);
   }
   // Output:
   // 0
   // 1
   // 2
   ```

   In this example, `keys()` returns an iterator that can be used to iterate over the keys (indices) of the array.

### 48. **What is the purpose of the `Array.prototype.entries()` method?**
   **Answer:**
   The `entries()` method returns a new array iterator object that contains the key/value pairs for each index in the array.

   ```javascript
   const arr = [1, 2, 3];
   const iterator = arr.entries();

   for (const [index, value] of iterator) {
       console.log(index, value);
   }
   // Output:
   // 0 1
   // 1 2
   // 2 3
   ```

   In this example, `entries()` returns an iterator that can be used to iterate over the key/value pairs of the array.

### 49. **What is the purpose of the `Array.prototype.copyWithin()` method?**
   **Answer:**
   The `copyWithin()` method shallow copies part of an array to another location in the same array and returns it, without modifying its size.

   ```javascript
   const arr = [1, 2, 3, 4, 5];
   arr.copyWithin(0, 3);
   console.log(arr); // [4, 5, 3, 4, 5]
   ```

   In this example, `copyWithin(0, 3)` copies the elements from index 3 to the end of the array to the beginning of the array.

### 50. **What is the purpose of the `Array.prototype.fill()` method?**
   **Answer:**
   The `fill()` method fills all the elements of an array from a start index to an end index with a static value. The end index is not included.

   ```javascript
   const arr = [1, 2, 3, 4, 5];
   arr.fill(0, 1, 3);
   console.log(arr); // [1, 0, 0, 4, 5]
   ```

   In this example, `fill(0, 1, 3)` fills the array with `0` from index 1 to 2.

### 51. **What is the purpose of the `Array.prototype.pop()` method?**
   **Answer:**
   The `pop()` method removes the last element from an array and returns that element. This method changes the length of the array.

   ```javascript
   const arr = [1, 2, 3, 4, 5];
   const lastElement = arr.pop();
   console.log(lastElement); // 5
   console.log(arr); // [1, 2, 3, 4]
   ```

   In this example, `pop()` removes the last element `5` from the array and returns it.

### 52. **What is the purpose of the `Array.prototype.push()` method?**
   **Answer:**
   The `push()` method adds one or more elements to the end of an array and returns the new length of the array.

   ```javascript
   const arr = [1, 2, 3];
   const newLength = arr.push(4, 5);
   console.log(newLength); // 5
   console.log(arr); // [1, 2, 3, 4, 5]
   ```

   In this example, `push(4, 5)` adds `4` and `5` to the end of the array and returns the new length `5`.

### 53. **What is the purpose of the `Array.prototype.shift()` method?**
   **Answer:**
   The `shift()` method removes the first element from an array and returns that removed element. This method changes the length of the array.

   ```javascript
   const arr = [1, 2, 3, 4, 5];
   const firstElement = arr.shift();
   console.log(firstElement); // 1
   console.log(arr); // [2, 3, 4, 5]
   ```

   In this example, `shift()` removes the first element `1` from the array and returns it.

### 54. **What is the purpose of the `Array.prototype.unshift()` method?**
   **Answer:**
   The `unshift()` method adds one or more elements to the beginning of an array and returns the new length of the array.

   ```javascript
   const arr = [1, 2, 3];
   const newLength = arr.unshift(4, 5);
   console.log(newLength); // 5
   console.log(arr); // [4, 5, 1, 2, 3]
   ```

   In this example, `unshift(4, 5)` adds `4` and `5` to the beginning of the array and returns the new length `5`.

### 55. **What is the purpose of the `Array.prototype.includes()` method?**
   **Answer:**
   The `includes()` method determines whether an array includes a certain value among its entries, returning `true` or `false` as appropriate.

   ```javascript
   const arr = [1, 2, 3, 4, 5];
   const includesThree = arr.includes(3);
   console.log(includesThree); // true
   ```

   In this example, `includes(3)` returns `true` because the array contains the value `3`.

### 56. **What is the purpose of the `Array.prototype.flat()` method?**
   **Answer:**
   The `flat()` method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

   ```javascript
   const arr = [1, [2, [3, [4]]];
   const flattened = arr.flat(2);
   console.log(flattened); // [1, 2, 3, [4]]
   ```

   In this example, `flat(2)` flattens the array up to a depth of 2, resulting in `[1, 2, 3, [4]]`.

### 57. **What is the purpose of the `Array.prototype.flatMap()` method?**
   **Answer:**
   The `flatMap()` method first maps each element using a mapping function, then flattens the result into a new array. It is identical to a `map()` followed by a `flat()` of depth 1.

   ```javascript
   const arr = [1, 2, 3];
   const result = arr.flatMap(x => [x, x * 2]);
   console.log(result); // [1, 2, 2, 4, 3, 6]
   ```

   In this example, `flatMap()` maps each element to an array containing the element and its double, then flattens the result.

### 58. **What is the purpose of the `Array.prototype.sort()` method?**
   **Answer:**
   The `sort()` method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code unit values.

   ```javascript
   const arr = [3, 1, 4, 1, 5, 9];
   arr.sort((a, b) => a - b);
   console.log(arr); // [1, 1, 3, 4, 5, 9]
   ```

   In this example, `sort()` sorts the array in ascending order.

### 59. **What is the purpose of the `Array.prototype.reverse()` method?**
   **Answer:**
   The `reverse()` method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.

   ```javascript
   const arr = [1
