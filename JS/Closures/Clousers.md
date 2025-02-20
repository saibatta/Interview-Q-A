In JavaScript, a **closure** is a function that has access to its own scope, the outer function's scope, and the global scope, even after the outer function has finished executing. Closures are created every time a function is created, at function creation time.

Here are some examples of closures in JavaScript:

---

### Example 1: Basic Closure
```javascript
function outerFunction() {
    let outerVariable = "I'm outside!";

    function innerFunction() {
        console.log(outerVariable); // Accessing outerVariable from the outer scope
    }

    return innerFunction;
}

const closureExample = outerFunction();
closureExample(); // Output: "I'm outside!"
```
- The `innerFunction` is a closure because it "closes over" the `outerVariable` from its outer scope, even after `outerFunction` has finished executing.

---

### Example 2: Closure with Parameters
```javascript
function createCounter() {
    let count = 0;

    return function() {
        count++;
        return count;
    };
}

const counter = createCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3
```
- The inner function "closes over" the `count` variable, maintaining its state between calls.

---

### Example 3: Closure in a Loop
```javascript
for (var i = 1; i <= 3; i++) {
    setTimeout(function() {
        console.log(i); // Output: 4, 4, 4 (due to var's function scope)
    }, 1000);
}

// Fix using a closure
for (var i = 1; i <= 3; i++) {
    (function(j) {
        setTimeout(function() {
            console.log(j); // Output: 1, 2, 3
        }, 1000);
    })(i);
}
```
- The IIFE (Immediately Invoked Function Expression) creates a new scope for each iteration, preserving the value of `i` at that moment.

---

### Example 4: Private Variables with Closures
```javascript
function createBankAccount(initialBalance) {
    let balance = initialBalance;

    return {
        deposit: function(amount) {
            balance += amount;
            return `New balance: ${balance}`;
        },
        withdraw: function(amount) {
            if (amount > balance) {
                return "Insufficient funds!";
            }
            balance -= amount;
            return `New balance: ${balance}`;
        },
        getBalance: function() {
            return `Current balance: ${balance}`;
        }
    };
}

const account = createBankAccount(100);
console.log(account.getBalance()); // Output: "Current balance: 100"
console.log(account.deposit(50));  // Output: "New balance: 150"
console.log(account.withdraw(30)); // Output: "New balance: 120"
```
- The `balance` variable is private and can only be accessed or modified through the returned methods.

---

### Example 5: Closure with Event Listeners
```javascript
function setupButton() {
    let count = 0;
    const button = document.createElement("button");
    button.textContent = "Click me";

    button.addEventListener("click", function() {
        count++;
        console.log(`Button clicked ${count} times`);
    });

    document.body.appendChild(button);
}

setupButton();
```
- The event listener function is a closure that retains access to the `count` variable, even after `setupButton` has finished executing.

---

### Example 6: Closure with Function Factories
```javascript
function createMultiplier(multiplier) {
    return function(number) {
        return number * multiplier;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15
```
- The inner function "closes over" the `multiplier` parameter, creating a reusable function.

---

### Key Takeaways:
- Closures allow functions to "remember" the environment in which they were created.
- They are useful for encapsulation, data privacy, and functional programming patterns.
- Be mindful of memory usage, as closures can retain references to variables, preventing them from being garbage-collected.