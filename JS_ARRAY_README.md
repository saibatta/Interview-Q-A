JavaScript arrays are a fundamental data structure, and interview questions often focus on their manipulation, iteration, and methods. Below are some common JavaScript array interview questions along with answers and examples:

---

### 1. **How do you create an array in JavaScript?**
You can create an array using the array literal syntax or the `Array` constructor.

```javascript
// Using array literal
let arr1 = [1, 2, 3];

// Using Array constructor
let arr2 = new Array(1, 2, 3);

console.log(arr1); // [1, 2, 3]
console.log(arr2); // [1, 2, 3]
```

---

### 2. **How do you check if a variable is an array?**
Use the `Array.isArray()` method to check if a variable is an array.

```javascript
let arr = [1, 2, 3];
let notArr = "Hello";

console.log(Array.isArray(arr)); // true
console.log(Array.isArray(notArr)); // false
```

---

### 3. **How do you add or remove elements from an array?**
- **Add elements**: Use `push()` (end), `unshift()` (start), or `splice()` (any position).
- **Remove elements**: Use `pop()` (end), `shift()` (start), or `splice()` (any position).

```javascript
let arr = [1, 2, 3];

// Add elements
arr.push(4); // [1, 2, 3, 4]
arr.unshift(0); // [0, 1, 2, 3, 4]

// Remove elements
arr.pop(); // [0, 1, 2, 3]
arr.shift(); // [1, 2, 3]

// Using splice
arr.splice(1, 1); // Removes 1 element at index 1: [1, 3]
arr.splice(1, 0, 2); // Inserts 2 at index 1: [1, 2, 3]
```

---

### 4. **How do you iterate over an array?**
You can use `for` loops, `forEach()`, `map()`, `for...of`, or `reduce()`.

```javascript
let arr = [1, 2, 3];

// Using for loop
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// Using forEach
arr.forEach((item) => console.log(item));

// Using for...of
for (let item of arr) {
  console.log(item);
}
```

---

### 5. **What is the difference between `map()` and `forEach()`?**
- `map()` creates a new array by applying a function to each element.
- `forEach()` executes a function for each element but does not return a new array.

```javascript
let arr = [1, 2, 3];

// Using map
let doubled = arr.map((item) => item * 2);
console.log(doubled); // [2, 4, 6]

// Using forEach
arr.forEach((item) => console.log(item * 2)); // Logs 2, 4, 6
```

---

### 6. **How do you find the length of an array?**
Use the `length` property.

```javascript
let arr = [1, 2, 3];
console.log(arr.length); // 3
```

---

### 7. **How do you check if an element exists in an array?**
Use `includes()`, `indexOf()`, or `find()`.

```javascript
let arr = [1, 2, 3];

// Using includes
console.log(arr.includes(2)); // true

// Using indexOf
console.log(arr.indexOf(2) !== -1); // true

// Using find
console.log(arr.find((item) => item === 2)); // 2
```

---

### 8. **How do you merge two arrays?**
Use the `concat()` method or the spread operator (`...`).

```javascript
let arr1 = [1, 2];
let arr2 = [3, 4];

// Using concat
let merged1 = arr1.concat(arr2); // [1, 2, 3, 4]

// Using spread operator
let merged2 = [...arr1, ...arr2]; // [1, 2, 3, 4]
```

---

### 9. **How do you remove duplicates from an array?**
Use `Set` or `filter()` with `indexOf()`.

```javascript
let arr = [1, 2, 2, 3, 4, 4];

// Using Set
let unique1 = [...new Set(arr)]; // [1, 2, 3, 4]

// Using filter and indexOf
let unique2 = arr.filter((item, index) => arr.indexOf(item) === index); // [1, 2, 3, 4]
```

---

### 10. **How do you sort an array?**
Use the `sort()` method. By default, it sorts elements as strings.

```javascript
let arr = [3, 1, 4, 2];

// Default sort (lexicographical)
arr.sort(); // [1, 2, 3, 4]

// Numeric sort
arr.sort((a, b) => a - b); // [1, 2, 3, 4]
```

---

### 11. **What is the difference between `slice()` and `splice()`?**
- `slice()` returns a shallow copy of a portion of an array without modifying the original array.
- `splice()` modifies the original array by adding, removing, or replacing elements.

```javascript
let arr = [1, 2, 3, 4];

// Using slice
let sliced = arr.slice(1, 3); // [2, 3]
console.log(arr); // [1, 2, 3, 4] (unchanged)

// Using splice
let spliced = arr.splice(1, 2); // [2, 3]
console.log(arr); // [1, 4] (modified)
```

---

### 12. **How do you flatten a nested array?**
Use `flat()` or `reduce()` with `concat()`.

```javascript
let arr = [1, [2, [3, [4]]];

// Using flat
let flattened1 = arr.flat(Infinity); // [1, 2, 3, 4]

// Using reduce and concat
let flattened2 = arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? val.flat() : val), []);
```

---

### 13. **How do you find the sum of all elements in an array?**
Use `reduce()`.

```javascript
let arr = [1, 2, 3, 4];
let sum = arr.reduce((acc, val) => acc + val, 0);
console.log(sum); // 10
```

---

### 14. **What is the difference between `filter()` and `find()`?**
- `filter()` returns all elements that match a condition as a new array.
- `find()` returns the first element that matches the condition.

```javascript
let arr = [1, 2, 3, 4];

// Using filter
let filtered = arr.filter((item) => item > 2); // [3, 4]

// Using find
let found = arr.find((item) => item > 2); // 3
```

---

### 15. **How do you reverse an array?**
Use the `reverse()` method.

```javascript
let arr = [1, 2, 3];
arr.reverse();
console.log(arr); // [3, 2, 1]
```

---
Certainly! Here are **more JavaScript array interview questions** along with detailed answers and examples:

---

### 16. **How do you convert an array to a string?**
Use the `join()` method to convert an array to a string with a specified separator.

```javascript
let arr = [1, 2, 3];
let str = arr.join("-"); // "1-2-3"
console.log(str);
```

---

### 17. **How do you find the maximum and minimum values in an array?**
Use `Math.max()` and `Math.min()` with the spread operator (`...`).

```javascript
let arr = [1, 2, 3, 4];

let max = Math.max(...arr); // 4
let min = Math.min(...arr); // 1

console.log(max, min);
```

---

### 18. **How do you copy an array?**
You can use the spread operator (`...`), `slice()`, or `Array.from()`.

```javascript
let arr = [1, 2, 3];

// Using spread operator
let copy1 = [...arr];

// Using slice
let copy2 = arr.slice();

// Using Array.from
let copy3 = Array.from(arr);

console.log(copy1, copy2, copy3); // [1, 2, 3]
```

---

### 19. **How do you check if two arrays are equal?**
JavaScript does not have a built-in method for deep equality checks. You can compare arrays by converting them to strings or writing a custom function.

```javascript
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];

// Using JSON.stringify
console.log(JSON.stringify(arr1) === JSON.stringify(arr2)); // true

// Custom function
function areArraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

console.log(areArraysEqual(arr1, arr2)); // true
```

---

### 20. **How do you find the index of an element in an array?**
Use `indexOf()` or `findIndex()`.

```javascript
let arr = [1, 2, 3, 4];

// Using indexOf
console.log(arr.indexOf(3)); // 2

// Using findIndex
console.log(arr.findIndex((item) => item === 3)); // 2
```

---

### 21. **How do you remove falsy values from an array?**
Use `filter()` with `Boolean`.

```javascript
let arr = [0, 1, false, 2, "", 3, null, undefined, NaN];

let filtered = arr.filter(Boolean);
console.log(filtered); // [1, 2, 3]
```

---

### 22. **How do you shuffle an array?**
Use the Fisher-Yates shuffle algorithm.

```javascript
let arr = [1, 2, 3, 4, 5];

for (let i = arr.length - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i + 1));
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

console.log(arr); // Randomly shuffled array
```

---

### 23. **How do you group elements of an array based on a condition?**
Use `reduce()` to group elements.

```javascript
let arr = [1, 2, 3, 4, 5];

let grouped = arr.reduce((acc, val) => {
  let key = val % 2 === 0 ? "even" : "odd";
  acc[key].push(val);
  return acc;
}, { even: [], odd: [] });

console.log(grouped); // { even: [2, 4], odd: [1, 3, 5] }
```

---

### 24. **How do you find the intersection of two arrays?**
Use `filter()` and `includes()`.

```javascript
let arr1 = [1, 2, 3];
let arr2 = [2, 3, 4];

let intersection = arr1.filter((item) => arr2.includes(item));
console.log(intersection); // [2, 3]
```

---

### 25. **How do you find the difference between two arrays?**
Use `filter()` and `includes()`.

```javascript
let arr1 = [1, 2, 3];
let arr2 = [2, 3, 4];

let difference = arr1.filter((item) => !arr2.includes(item));
console.log(difference); // [1]
```

---

### 26. **How do you chunk an array into smaller arrays?**
Use a loop or `reduce()`.

```javascript
let arr = [1, 2, 3, 4, 5, 6];
let chunkSize = 2;

let chunks = [];
for (let i = 0; i < arr.length; i += chunkSize) {
  chunks.push(arr.slice(i, i + chunkSize));
}

console.log(chunks); // [[1, 2], [3, 4], [5, 6]]
```

---

### 27. **How do you rotate an array?**
Use `splice()` and `push()`.

```javascript
let arr = [1, 2, 3, 4, 5];
let k = 2; // Rotate by 2 steps

let rotated = arr.splice(-k).concat(arr);
console.log(rotated); // [4, 5, 1, 2, 3]
```

---

### 28. **How do you find the second largest number in an array?**
Sort the array and access the second last element.

```javascript
let arr = [1, 2, 3, 4, 5];

let sorted = arr.sort((a, b) => b - a);
console.log(sorted[1]); // 4
```

---

### 29. **How do you count the occurrences of each element in an array?**
Use `reduce()`.

```javascript
let arr = [1, 2, 2, 3, 3, 3];

let count = arr.reduce((acc, val) => {
  acc[val] = (acc[val] || 0) + 1;
  return acc;
}, {});

console.log(count); // { 1: 1, 2: 2, 3: 3 }
```

---

### 30. **How do you flatten and sort an array of arrays?**
Use `flat()` and `sort()`.

```javascript
let arr = [[3, 2], [1, 4], [5, 0]];

let flattenedAndSorted = arr.flat().sort((a, b) => a - b);
console.log(flattenedAndSorted); // [0, 1, 2, 3, 4, 5]
```

---

### 31. **How do you replace an element in an array?**
Use `splice()` or direct assignment.

```javascript
let arr = [1, 2, 3, 4];

// Using splice
arr.splice(2, 1, 5); // Replace element at index 2 with 5
console.log(arr); // [1, 2, 5, 4]

// Using direct assignment
arr[2] = 6;
console.log(arr); // [1, 2, 6, 4]
```

---

### 32. **How do you find the cumulative sum of an array?**
Use `map()` and `reduce()`.

```javascript
let arr = [1, 2, 3, 4];

let cumulativeSum = arr.map((sum => value => sum += value)(0));
console.log(cumulativeSum); // [1, 3, 6, 10]
```

---

### 33. **How do you find the longest word in an array of strings?**
Use `reduce()`.

```javascript
let words = ["apple", "banana", "kiwi"];

let longest = words.reduce((acc, word) => (word.length > acc.length ? word : acc), "");
console.log(longest); // "banana"
```

---

### 34. **How do you remove all occurrences of a specific element from an array?**
Use `filter()`.

```javascript
let arr = [1, 2, 3, 2, 4];
let elementToRemove = 2;

let filtered = arr.filter((item) => item !== elementToRemove);
console.log(filtered); // [1, 3, 4]
```

---

### 35. **How do you find the average of an array of numbers?**
Use `reduce()` and divide by the array length.

```javascript
let arr = [1, 2, 3, 4];

let average = arr.reduce((acc, val) => acc + val, 0) / arr.length;
console.log(average); // 2.5
```

---
Absolutely! Here are **even more JavaScript array interview questions** with detailed answers and examples:

---

### 36. **How do you find the first non-repeating element in an array?**
Use a combination of `filter()` and `indexOf()`.

```javascript
let arr = [1, 2, 3, 2, 1, 4];

let nonRepeating = arr.find((item) => arr.indexOf(item) === arr.lastIndexOf(item));
console.log(nonRepeating); // 3
```

---

### 37. **How do you find the union of two arrays?**
Use the spread operator (`...`) and `Set` to remove duplicates.

```javascript
let arr1 = [1, 2, 3];
let arr2 = [2, 3, 4];

let union = [...new Set([...arr1, ...arr2])];
console.log(union); // [1, 2, 3, 4]
```

---

### 38. **How do you find the symmetric difference between two arrays?**
Use `filter()` and `includes()` to find elements that are in one array but not the other.

```javascript
let arr1 = [1, 2, 3];
let arr2 = [2, 3, 4];

let symmetricDifference = [
  ...arr1.filter((item) => !arr2.includes(item)),
  ...arr2.filter((item) => !arr1.includes(item)),
];

console.log(symmetricDifference); // [1, 4]
```

---

### 39. **How do you find the product of all elements in an array?**
Use `reduce()`.

```javascript
let arr = [1, 2, 3, 4];

let product = arr.reduce((acc, val) => acc * val, 1);
console.log(product); // 24
```

---

### 40. **How do you find the median of an array of numbers?**
Sort the array and find the middle element.

```javascript
let arr = [5, 3, 1, 2, 4];

let sorted = arr.sort((a, b) => a - b);
let mid = Math.floor(sorted.length / 2);

let median = sorted.length % 2 === 0 ? (sorted[mid - 1] + sorted[mid]) / 2 : sorted[mid];
console.log(median); // 3
```

---

### 41. **How do you find the mode of an array of numbers?**
Use `reduce()` to count occurrences and find the most frequent number.

```javascript
let arr = [1, 2, 2, 3, 3, 3];

let mode = Object.entries(
  arr.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {})
).reduce((a, b) => (a[1] > b[1] ? a : b))[0];

console.log(mode); // "3"
```

---

### 42. **How do you find the factorial of each element in an array?**
Use `map()` and a factorial function.

```javascript
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

let arr = [1, 2, 3, 4];

let factorials = arr.map((item) => factorial(item));
console.log(factorials); // [1, 2, 6, 24]
```

---

### 43. **How do you find the first `n` elements of an array?**
Use `slice()`.

```javascript
let arr = [1, 2, 3, 4, 5];
let n = 3;

let firstN = arr.slice(0, n);
console.log(firstN); // [1, 2, 3]
```

---

### 44. **How do you find the last `n` elements of an array?**
Use `slice()` with a negative index.

```javascript
let arr = [1, 2, 3, 4, 5];
let n = 3;

let lastN = arr.slice(-n);
console.log(lastN); // [3, 4, 5]
```

---

### 45. **How do you find the sum of squares of all elements in an array?**
Use `reduce()`.

```javascript
let arr = [1, 2, 3];

let sumOfSquares = arr.reduce((acc, val) => acc + val ** 2, 0);
console.log(sumOfSquares); // 14
```

---

### 46. **How do you find the largest difference between two elements in an array?**
Use `Math.max()` and `Math.min()`.

```javascript
let arr = [1, 2, 3, 4, 5];

let maxDiff = Math.max(...arr) - Math.min(...arr);
console.log(maxDiff); // 4
```

---

### 47. **How do you find the smallest missing positive integer in an array?**
Use a loop and a set to track positive integers.

```javascript
let arr = [3, 4, -1, 1];

let set = new Set(arr);
let smallestMissing = 1;

while (set.has(smallestMissing)) {
  smallestMissing++;
}

console.log(smallestMissing); // 2
```

---

### 48. **How do you find the longest increasing subsequence in an array?**
Use dynamic programming.

```javascript
let arr = [10, 9, 2, 5, 3, 7, 101, 18];

let dp = new Array(arr.length).fill(1);

for (let i = 1; i < arr.length; i++) {
  for (let j = 0; j < i; j++) {
    if (arr[i] > arr[j]) {
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
}

console.log(Math.max(...dp)); // 4
```

---

### 49. **How do you find the kth largest element in an array?**
Sort the array and access the kth element.

```javascript
let arr = [3, 2, 1, 5, 6, 4];
let k = 2;

let sorted = arr.sort((a, b) => b - a);
console.log(sorted[k - 1]); // 5
```

---

### 50. **How do you find the kth smallest element in an array?**
Sort the array and access the kth element.

```javascript
let arr = [3, 2, 1, 5, 6, 4];
let k = 2;

let sorted = arr.sort((a, b) => a - b);
console.log(sorted[k - 1]); // 2
```

---

### 51. **How do you find the number of subarrays with a given sum?**
Use a hash map to track cumulative sums.

```javascript
let arr = [1, 2, 3, 4];
let targetSum = 3;

let count = 0;
let sum = 0;
let map = { 0: 1 };

for (let num of arr) {
  sum += num;
  if (map[sum - targetSum]) {
    count += map[sum - targetSum];
  }
  map[sum] = (map[sum] || 0) + 1;
}

console.log(count); // 2
```

---

### 52. **How do you find the number of pairs in an array with a given sum?**
Use a hash map to track pairs.

```javascript
let arr = [1, 2, 3, 4];
let targetSum = 5;

let count = 0;
let map = {};

for (let num of arr) {
  if (map[targetSum - num]) {
    count += map[targetSum - num];
  }
  map[num] = (map[num] || 0) + 1;
}

console.log(count); // 2
```

---

### 53. **How do you find the number of triangles that can be formed from an array of positive integers?**
Sort the array and use a two-pointer approach.

```javascript
let arr = [4, 6, 3, 7];
arr.sort((a, b) => a - b);

let count = 0;

for (let i = arr.length - 1; i >= 2; i--) {
  let left = 0;
  let right = i - 1;
  while (left < right) {
    if (arr[left] + arr[right] > arr[i]) {
      count += right - left;
      right--;
    } else {
      left++;
    }
  }
}

console.log(count); // 3
```

---

### 54. **How do you find the number of islands in a 2D array?**
Use Depth-First Search (DFS).

```javascript
let grid = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];

function dfs(grid, i, j) {
  if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === "0") {
    return;
  }
  grid[i][j] = "0";
  dfs(grid, i + 1, j);
  dfs(grid, i - 1, j);
  dfs(grid, i, j + 1);
  dfs(grid, i, j - 1);
}

let count = 0;

for (let i = 0; i < grid.length; i++) {
  for (let j = 0; j < grid[0].length; j++) {
    if (grid[i][j] === "1") {
      count++;
      dfs(grid, i, j);
    }
  }
}

console.log(count); // 3
```

---

Certainly! Here are **even more JavaScript array interview questions** with detailed answers and examples:

---

### 55. **How do you find the number of subarrays with an even sum?**
Use prefix sums and count the number of even and odd prefix sums.

```javascript
let arr = [1, 2, 3, 4];

let count = 0;
let sum = 0;
let even = 1; // Prefix sum of 0 is even
let odd = 0;

for (let num of arr) {
  sum += num;
  if (sum % 2 === 0) {
    count += even;
    even++;
  } else {
    count += odd;
    odd++;
  }
}

console.log(count); // 6
```

---

### 56. **How do you find the number of subarrays with an odd sum?**
Use prefix sums and count the number of even and odd prefix sums.

```javascript
let arr = [1, 2, 3, 4];

let count = 0;
let sum = 0;
let even = 1; // Prefix sum of 0 is even
let odd = 0;

for (let num of arr) {
  sum += num;
  if (sum % 2 === 0) {
    count += odd;
    even++;
  } else {
    count += even;
    odd++;
  }
}

console.log(count); // 4
```

---

### 57. **How do you find the number of subarrays with a given XOR?**
Use a hash map to track prefix XORs.

```javascript
let arr = [4, 2, 2, 6, 4];
let targetXOR = 6;

let count = 0;
let xor = 0;
let map = { 0: 1 };

for (let num of arr) {
  xor ^= num;
  if (map[xor ^ targetXOR]) {
    count += map[xor ^ targetXOR];
  }
  map[xor] = (map[xor] || 0) + 1;
}

console.log(count); // 4
```

---

### 58. **How do you find the number of subarrays with a given product?**
Use a sliding window approach.

```javascript
let arr = [10, 5, 2, 6];
let targetProduct = 100;

let count = 0;
let product = 1;
let left = 0;

for (let right = 0; right < arr.length; right++) {
  product *= arr[right];
  while (product >= targetProduct && left <= right) {
    product /= arr[left];
    left++;
  }
  count += right - left + 1;
}

console.log(count); // 8
```

---

### 59. **How do you find the number of subarrays with a given average?**
Use prefix sums and a hash map.

```javascript
let arr = [1, 3, 2, 4];
let targetAverage = 2;

let count = 0;
let sum = 0;
let map = { 0: 1 };

for (let i = 0; i < arr.length; i++) {
  sum += arr[i] - targetAverage;
  if (map[sum]) {
    count += map[sum];
  }
  map[sum] = (map[sum] || 0) + 1;
}

console.log(count); // 3
```

---

### 60. **How do you find the number of subarrays with a given median?**
Use prefix sums and a hash map.

```javascript
let arr = [1, 3, 2, 4];
let targetMedian = 2;

let count = 0;
let sum = 0;
let map = { 0: 1 };

for (let i = 0; i < arr.length; i++) {
  sum += arr[i] - targetMedian;
  if (map[sum]) {
    count += map[sum];
  }
  map[sum] = (map[sum] || 0) + 1;
}

console.log(count); // 3
```

---

### 61. **How do you find the number of subarrays with a given mode?**
Use a hash map to track the frequency of each element.

```javascript
let arr = [1, 2, 2, 3, 3, 3];
let targetMode = 3;

let count = 0;
let map = {};

for (let num of arr) {
  map[num] = (map[num] || 0) + 1;
  if (map[num] === targetMode) {
    count++;
  }
}

console.log(count); // 3
```

---

### 62. **How do you find the number of subarrays with a given range?**
Use a sliding window approach.

```javascript
let arr = [1, 2, 3, 4, 5];
let range = [2, 4];

let count = 0;
let left = 0;

for (let right = 0; right < arr.length; right++) {
  if (arr[right] >= range[0] && arr[right] <= range[1]) {
    count += right - left + 1;
  } else {
    left = right + 1;
  }
}

console.log(count); // 6
```

---

### 63. **How do you find the number of subarrays with a given length?**
Use a sliding window approach.

```javascript
let arr = [1, 2, 3, 4, 5];
let length = 3;

let count = 0;

for (let i = 0; i <= arr.length - length; i++) {
  count++;
}

console.log(count); // 3
```

---

### 64. **How do you find the number of subarrays with a given start and end?**
Use a sliding window approach.

```javascript
let arr = [1, 2, 3, 4, 5];
let start = 2;
let end = 4;

let count = 0;
let left = 0;

for (let right = 0; right < arr.length; right++) {
  if (arr[right] >= start && arr[right] <= end) {
    count += right - left + 1;
  } else {
    left = right + 1;
  }
}

console.log(count); // 6
```

---

### 65. **How do you find the number of subarrays with a given start and length?**
Use a sliding window approach.

```javascript
let arr = [1, 2, 3, 4, 5];
let start = 2;
let length = 3;

let count = 0;

for (let i = 0; i <= arr.length - length; i++) {
  if (arr[i] === start) {
    count++;
  }
}

console.log(count); // 1
```

---

### 66. **How do you find the number of subarrays with a given end and length?**
Use a sliding window approach.

```javascript
let arr = [1, 2, 3, 4, 5];
let end = 4;
let length = 3;

let count = 0;

for (let i = 0; i <= arr.length - length; i++) {
  if (arr[i + length - 1] === end) {
    count++;
  }
}

console.log(count); // 1
```

---

### 67. **How do you find the number of subarrays with a given start and end and length?**
Use a sliding window approach.

```javascript
let arr = [1, 2, 3, 4, 5];
let start = 2;
let end = 4;
let length = 3;

let count = 0;

for (let i = 0; i <= arr.length - length; i++) {
  if (arr[i] === start && arr[i + length - 1] === end) {
    count++;
  }
}

console.log(count); // 1
```

---

### 68. **How do you find the number of subarrays with a given start and end and sum?**
Use a sliding window approach.

```javascript
let arr = [1, 2, 3, 4, 5];
let start = 2;
let end = 4;
let sum = 9;

let count = 0;

for (let i = 0; i <= arr.length - (end - start + 1); i++) {
  if (arr[i] === start && arr[i + (end - start)] === end) {
    let currentSum = arr.slice(i, i + (end - start + 1)).reduce((acc, val) => acc + val, 0);
    if (currentSum === sum) {
      count++;
    }
  }
}

console.log(count); // 1
```

---

### 69. **How do you find the number of subarrays with a given start and end and product?**
Use a sliding window approach.

```javascript
let arr = [1, 2, 3, 4, 5];
let start = 2;
let end = 4;
let product = 24;

let count = 0;

for (let i = 0; i <= arr.length - (end - start + 1); i++) {
  if (arr[i] === start && arr[i + (end - start)] === end) {
    let currentProduct = arr.slice(i, i + (end - start + 1)).reduce((acc, val) => acc * val, 1);
    if (currentProduct === product) {
      count++;
    }
  }
}

console.log(count); // 1
```

---

### 70. **How do you find the number of subarrays with a given start and end and average?**
Use a sliding window approach.

```javascript
let arr = [1, 2, 3, 4, 5];
let start = 2;
let end = 4;
let average = 3;

let count = 0;

for (let i = 0; i <= arr.length - (end - start + 1); i++) {
  if (arr[i] === start && arr[i + (end - start)] === end) {
    let currentSum = arr.slice(i, i + (end - start + 1)).reduce((acc, val) => acc + val, 0);
    let currentAverage = currentSum / (end - start + 1);
    if (currentAverage === average) {
      count++;
    }
  }
}

console.log(count); // 1
```

---
