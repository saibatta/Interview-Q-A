Here are some common CSS3 interview questions along with answers and examples to help you prepare:

---

### 1. **What is CSS3, and how is it different from CSS2?**
   - **Answer**: CSS3 is the latest version of CSS (Cascading Style Sheets) and introduces new features like animations, transitions, gradients, rounded corners, and media queries. Unlike CSS2, which was a single specification, CSS3 is modular, meaning features are developed and released independently.

   **Example**:
   ```css
   /* CSS2 */
   .box {
       background-color: #f0f0f0;
       border: 1px solid #000;
   }

   /* CSS3 */
   .box {
       background: linear-gradient(to right, #f0f0f0, #ccc);
       border-radius: 10px;
       box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
   }
   ```

---

### 2. **What are CSS3 media queries, and how are they used?**
   - **Answer**: Media queries allow you to apply styles based on the device's characteristics, such as screen width, height, or orientation. They are commonly used for responsive web design.

   **Example**:
   ```css
   @media screen and (max-width: 768px) {
       .container {
           width: 100%;
           padding: 10px;
       }
   }
   ```

---

### 3. **Explain CSS3 transitions and provide an example.**
   - **Answer**: Transitions allow you to change property values smoothly over a specified duration. You can define the property, duration, timing function, and delay.

   **Example**:
   ```css
   .button {
       background-color: blue;
       transition: background-color 0.5s ease;
   }

   .button:hover {
       background-color: red;
   }
   ```

---

### 4. **What are CSS3 animations, and how do they work?**
   - **Answer**: CSS3 animations allow you to create complex animations by defining keyframes. You can control the animation's duration, timing, and iteration count.

   **Example**:
   ```css
   @keyframes slide {
       0% { transform: translateX(0); }
       100% { transform: translateX(100px); }
   }

   .box {
       animation: slide 2s infinite;
   }
   ```

---

### 5. **What is the `flexbox` layout model, and how is it used?**
   - **Answer**: Flexbox is a layout model that allows you to design flexible and responsive layouts. It aligns and distributes space among items in a container.

   **Example**:
   ```css
   .container {
       display: flex;
       justify-content: space-between;
       align-items: center;
   }

   .item {
       flex: 1;
   }
   ```

---

### 6. **What is the `grid` layout model, and how does it differ from `flexbox`?**
   - **Answer**: CSS Grid is a two-dimensional layout system that allows you to create complex grid-based designs. Unlike Flexbox, which is one-dimensional, Grid works with rows and columns simultaneously.

   **Example**:
   ```css
   .container {
       display: grid;
       grid-template-columns: repeat(3, 1fr);
       gap: 10px;
   }

   .item {
       background-color: #ccc;
   }
   ```

---

### 7. **How do you create rounded corners in CSS3?**
   - **Answer**: Use the `border-radius` property to create rounded corners.

   **Example**:
   ```css
   .box {
       border-radius: 15px;
   }
   ```

---

### 8. **What are CSS3 gradients, and how are they used?**
   - **Answer**: Gradients allow you to create smooth transitions between two or more colors. CSS3 supports linear and radial gradients.

   **Example**:
   ```css
   .box {
       background: linear-gradient(to right, red, yellow);
   }
   ```

---

### 9. **What is the `box-shadow` property, and how is it used?**
   - **Answer**: The `box-shadow` property adds shadow effects to an element. You can specify the horizontal and vertical offset, blur radius, spread radius, and color.

   **Example**:
   ```css
   .box {
       box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
   }
   ```

---

### 10. **What is the `transform` property, and how is it used?**
   - **Answer**: The `transform` property allows you to rotate, scale, skew, or translate an element.

   **Example**:
   ```css
   .box {
       transform: rotate(45deg) scale(1.2);
   }
   ```

---

### 11. **What is the `::before` and `::after` pseudo-element, and how is it used?**
   - **Answer**: These pseudo-elements allow you to insert content before or after an element's content. They are often used for decorative purposes.

   **Example**:
   ```css
   .box::before {
       content: "Before";
       color: red;
   }

   .box::after {
       content: "After";
       color: blue;
   }
   ```

---

### 12. **What is the `@font-face` rule, and how is it used?**
   - **Answer**: The `@font-face` rule allows you to use custom fonts in your web pages.

   **Example**:
   ```css
   @font-face {
       font-family: 'MyFont';
       src: url('myfont.woff2') format('woff2');
   }

   body {
       font-family: 'MyFont', sans-serif;
   }
   ```

---

### 13. **What is the `calc()` function, and how is it used?**
   - **Answer**: The `calc()` function allows you to perform calculations to determine CSS property values.

   **Example**:
   ```css
   .box {
       width: calc(100% - 50px);
   }
   ```

---

### 14. **What is the `z-index` property, and how does it work?**
   - **Answer**: The `z-index` property controls the stacking order of elements. Higher values appear above lower values.

   **Example**:
   ```css
   .box1 {
       z-index: 1;
   }

   .box2 {
       z-index: 2;
   }
   ```

---

### 15. **What is the difference between `em` and `rem` units?**
   - **Answer**: 
     - `em` is relative to the font size of the parent element.
     - `rem` is relative to the font size of the root (`<html>`) element.

   **Example**:
   ```css
   html {
       font-size: 16px;
   }

   .box {
       font-size: 1.5rem; /* 24px */
       padding: 2em; /* Relative to parent's font size */
   }
   ```

---

Certainly! Here are **additional CSS3 interview questions and answers** with examples to further enhance your preparation:

---

### 16. **What is the `opacity` property, and how is it used?**
   - **Answer**: The `opacity` property sets the transparency level of an element, where `1` is fully opaque and `0` is fully transparent.

   **Example**:
   ```css
   .box {
       opacity: 0.5; /* 50% transparent */
   }
   ```

---

### 17. **What is the `overflow` property, and how is it used?**
   - **Answer**: The `overflow` property controls how content that overflows an element's box is handled. Common values include `visible`, `hidden`, `scroll`, and `auto`.

   **Example**:
   ```css
   .box {
       width: 200px;
       height: 100px;
       overflow: scroll;
   }
   ```

---

### 18. **What is the `position` property, and what are its values?**
   - **Answer**: The `position` property specifies the positioning method for an element. Values include:
     - `static` (default)
     - `relative` (positioned relative to its normal position)
     - `absolute` (positioned relative to the nearest positioned ancestor)
     - `fixed` (positioned relative to the viewport)
     - `sticky` (switches between `relative` and `fixed` based on scroll position)

   **Example**:
   ```css
   .box {
       position: fixed;
       top: 10px;
       right: 10px;
   }
   ```

---

### 19. **What is the `vh` and `vw` unit in CSS3?**
   - **Answer**: 
     - `vh` (viewport height): Represents 1% of the viewport's height.
     - `vw` (viewport width): Represents 1% of the viewport's width.

   **Example**:
   ```css
   .box {
       width: 50vw; /* 50% of the viewport width */
       height: 100vh; /* 100% of the viewport height */
   }
   ```

---

### 20. **What is the `object-fit` property, and how is it used?**
   - **Answer**: The `object-fit` property specifies how an image or video should be resized to fit its container. Values include `fill`, `contain`, `cover`, `none`, and `scale-down`.

   **Example**:
   ```css
   img {
       width: 200px;
       height: 200px;
       object-fit: cover;
   }
   ```

---

### 21. **What is the `filter` property, and how is it used?**
   - **Answer**: The `filter` property applies visual effects like blur, brightness, contrast, and grayscale to an element.

   **Example**:
   ```css
   img {
       filter: grayscale(100%) blur(2px);
   }
   ```

---

### 22. **What is the `clip-path` property, and how is it used?**
   - **Answer**: The `clip-path` property allows you to clip an element to a specific shape, such as a circle, polygon, or ellipse.

   **Example**:
   ```css
   .box {
       clip-path: circle(50% at 50% 50%);
   }
   ```

---

### 23. **What is the `will-change` property, and how is it used?**
   - **Answer**: The `will-change` property hints to the browser which properties are likely to change, allowing it to optimize rendering performance.

   **Example**:
   ```css
   .box {
       will-change: transform;
   }
   ```

---

### 24. **What is the `backface-visibility` property, and how is it used?**
   - **Answer**: The `backface-visibility` property determines whether the back face of an element is visible when it is rotated. Values include `visible` and `hidden`.

   **Example**:
   ```css
   .card {
       transform: rotateY(180deg);
       backface-visibility: hidden;
   }
   ```

---

### 25. **What is the `resize` property, and how is it used?**
   - **Answer**: The `resize` property allows users to resize an element. Values include `none`, `both`, `horizontal`, and `vertical`.

   **Example**:
   ```css
   textarea {
       resize: both;
   }
   ```

---

### 26. **What is the `column-count` property, and how is it used?**
   - **Answer**: The `column-count` property divides content into a specified number of columns.

   **Example**:
   ```css
   .container {
       column-count: 3;
   }
   ```

---

### 27. **What is the `counter` property, and how is it used?**
   - **Answer**: The `counter` property allows you to create and manipulate counters for numbering elements.

   **Example**:
   ```css
   body {
       counter-reset: section;
   }

   h2::before {
       counter-increment: section;
       content: "Section " counter(section) ": ";
   }
   ```

---

### 28. **What is the `mix-blend-mode` property, and how is it used?**
   - **Answer**: The `mix-blend-mode` property defines how an element's content should blend with its background.

   **Example**:
   ```css
   .box {
       background-color: red;
       mix-blend-mode: multiply;
   }
   ```

---

### 29. **What is the `aspect-ratio` property, and how is it used?**
   - **Answer**: The `aspect-ratio` property sets a preferred aspect ratio for an element, ensuring it maintains a specific width-to-height ratio.

   **Example**:
   ```css
   .box {
       aspect-ratio: 16 / 9;
   }
   ```

---

### 30. **What is the `scroll-snap` property, and how is it used?**
   - **Answer**: The `scroll-snap` property creates snap points when scrolling, making it easier to align content.

   **Example**:
   ```css
   .container {
       scroll-snap-type: y mandatory;
   }

   .item {
       scroll-snap-align: start;
   }
   ```

---

### 31. **What is the `gap` property, and how is it used?**
   - **Answer**: The `gap` property sets the spacing between rows and columns in grid and flexbox layouts.

   **Example**:
   ```css
   .container {
       display: grid;
       gap: 20px;
   }
   ```

---

### 32. **What is the `currentColor` keyword, and how is it used?**
   - **Answer**: The `currentColor` keyword refers to the current value of the `color` property, allowing you to reuse it for other properties.

   **Example**:
   ```css
   .box {
       color: red;
       border: 2px solid currentColor;
   }
   ```

---

### 33. **What is the `all` property, and how is it used?**
   - **Answer**: The `all` property resets all properties (except `unicode-bidi` and `direction`) to their initial, inherited, or unset values.

   **Example**:
   ```css
   .box {
       all: unset;
   }
   ```

---

### 34. **What is the `isolation` property, and how is it used?**
   - **Answer**: The `isolation` property creates a new stacking context, preventing elements from blending with their ancestors.

   **Example**:
   ```css
   .box {
       isolation: isolate;
   }
   ```

---

### 35. **What is the `user-select` property, and how is it used?**
   - **Answer**: The `user-select` property controls whether text can be selected by the user.

   **Example**:
   ```css
   .box {
       user-select: none; /* Prevents text selection */
   }
   ```

---

Absolutely! Here are **even more CSS3 interview questions and answers** with examples to help you master CSS3 concepts:

---

### 36. **What is the `@supports` rule, and how is it used?**
   - **Answer**: The `@supports` rule allows you to apply styles only if the browser supports a specific CSS feature. It is useful for progressive enhancement.

   **Example**:
   ```css
   @supports (display: grid) {
       .container {
           display: grid;
       }
   }
   ```

---

### 37. **What is the `min-content` and `max-content` value in CSS3?**
   - **Answer**: 
     - `min-content`: The smallest size an element can take based on its content.
     - `max-content`: The size an element takes to fit its content without wrapping.

   **Example**:
   ```css
   .box {
       width: min-content; /* Shrinks to fit the smallest content size */
   }

   .box2 {
       width: max-content; /* Expands to fit the content without wrapping */
   }
   ```

---

### 38. **What is the `viewport` meta tag, and how is it used in responsive design?**
   - **Answer**: The `viewport` meta tag controls the layout on mobile browsers. It ensures the page width matches the device width.

   **Example**:
   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   ```

---

### 39. **What is the `writing-mode` property, and how is it used?**
   - **Answer**: The `writing-mode` property defines whether text is laid out horizontally or vertically.

   **Example**:
   ```css
   .box {
       writing-mode: vertical-rl; /* Vertical text, right to left */
   }
   ```

---

### 40. **What is the `text-overflow` property, and how is it used?**
   - **Answer**: The `text-overflow` property specifies how overflowed text should be displayed. Common values include `clip` and `ellipsis`.

   **Example**:
   ```css
   .box {
       white-space: nowrap;
       overflow: hidden;
       text-overflow: ellipsis;
   }
   ```

---

### 41. **What is the `shape-outside` property, and how is it used?**
   - **Answer**: The `shape-outside` property defines how content wraps around a floated element's shape.

   **Example**:
   ```css
   .box {
       float: left;
       shape-outside: circle(50%);
   }
   ```

---

### 42. **What is the `mask` property, and how is it used?**
   - **Answer**: The `mask` property hides parts of an element using a mask image or gradient.

   **Example**:
   ```css
   .box {
       mask: url(mask.png) center/cover;
   }
   ```

---

### 43. **What is the `scroll-behavior` property, and how is it used?**
   - **Answer**: The `scroll-behavior` property enables smooth scrolling for elements with overflow.

   **Example**:
   ```css
   html {
       scroll-behavior: smooth;
   }
   ```

---

### 44. **What is the `overscroll-behavior` property, and how is it used?**
   - **Answer**: The `overscroll-behavior` property controls the behavior when a user scrolls past the boundary of an element.

   **Example**:
   ```css
   .box {
       overscroll-behavior: contain; /* Prevents scroll chaining */
   }
   ```

---

### 45. **What is the `conic-gradient` function, and how is it used?**
   - **Answer**: The `conic-gradient` function creates a gradient that rotates around a center point.

   **Example**:
   ```css
   .box {
       background: conic-gradient(red, yellow, green);
   }
   ```

---

### 46. **What is the `env()` function, and how is it used?**
   - **Answer**: The `env()` function allows you to use environment variables, such as the safe area insets for notch devices.

   **Example**:
   ```css
   .box {
       padding-top: env(safe-area-inset-top);
   }
   ```

---

### 47. **What is the `:focus-within` pseudo-class, and how is it used?**
   - **Answer**: The `:focus-within` pseudo-class applies styles to an element if any of its descendants have focus.

   **Example**:
   ```css
   .form:focus-within {
       border: 2px solid blue;
   }
   ```

---

### 48. **What is the `:empty` pseudo-class, and how is it used?**
   - **Answer**: The `:empty` pseudo-class selects elements that have no children (including text nodes).

   **Example**:
   ```css
   .box:empty {
       background-color: lightgray;
   }
   ```

---

### 49. **What is the `:not()` pseudo-class, and how is it used?**
   - **Answer**: The `:not()` pseudo-class selects elements that do not match a specific selector.

   **Example**:
   ```css
   .box:not(.special) {
       opacity: 0.5;
   }
   ```

---

### 50. **What is the `:nth-child()` pseudo-class, and how is it used?**
   - **Answer**: The `:nth-child()` pseudo-class selects elements based on their position in a group of siblings.

   **Example**:
   ```css
   li:nth-child(odd) {
       background-color: lightblue;
   }
   ```

---

### 51. **What is the `:checked` pseudo-class, and how is it used?**
   - **Answer**: The `:checked` pseudo-class selects checked radio buttons, checkboxes, or options.

   **Example**:
   ```css
   input[type="checkbox"]:checked {
       border-color: green;
   }
   ```

---

### 52. **What is the `:hover` pseudo-class, and how is it used?**
   - **Answer**: The `:hover` pseudo-class applies styles when the user hovers over an element.

   **Example**:
   ```css
   .button:hover {
       background-color: blue;
   }
   ```

---

### 53. **What is the `:active` pseudo-class, and how is it used?**
   - **Answer**: The `:active` pseudo-class applies styles when an element is being activated (e.g., clicked).

   **Example**:
   ```css
   .button:active {
       transform: scale(0.95);
   }
   ```

---

### 54. **What is the `:visited` pseudo-class, and how is it used?**
   - **Answer**: The `:visited` pseudo-class applies styles to visited links.

   **Example**:
   ```css
   a:visited {
       color: purple;
   }
   ```

---

### 55. **What is the `:first-of-type` pseudo-class, and how is it used?**
   - **Answer**: The `:first-of-type` pseudo-class selects the first element of its type among siblings.

   **Example**:
   ```css
   p:first-of-type {
       font-weight: bold;
   }
   ```

---

### 56. **What is the `:last-of-type` pseudo-class, and how is it used?**
   - **Answer**: The `:last-of-type` pseudo-class selects the last element of its type among siblings.

   **Example**:
   ```css
   p:last-of-type {
       color: red;
   }
   ```

---

### 57. **What is the `:only-child` pseudo-class, and how is it used?**
   - **Answer**: The `:only-child` pseudo-class selects elements that are the only child of their parent.

   **Example**:
   ```css
   .box:only-child {
       background-color: yellow;
   }
   ```

---

### 58. **What is the `:root` pseudo-class, and how is it used?**
   - **Answer**: The `:root` pseudo-class selects the root element of the document (`<html>`). It is often used to define CSS variables.

   **Example**:
   ```css
   :root {
       --primary-color: blue;
   }

   .box {
       color: var(--primary-color);
   }
   ```

---

### 59. **What is the `:target` pseudo-class, and how is it used?**
   - **Answer**: The `:target` pseudo-class selects an element that is the target of a URL fragment.

   **Example**:
   ```css
   #section1:target {
       background-color: lightgreen;
   }
   ```

---

### 60. **What is the `:disabled` pseudo-class, and how is it used?**
   - **Answer**: The `:disabled` pseudo-class selects disabled form elements.

   **Example**:
   ```css
   input:disabled {
       background-color: lightgray;
   }
   ```

---

Sure! Here are **even more CSS3 interview questions and answers** with examples to help you dive deeper into CSS3 concepts:

---

### 61. **What is the `:enabled` pseudo-class, and how is it used?**
   - **Answer**: The `:enabled` pseudo-class selects form elements that are enabled (not disabled).

   **Example**:
   ```css
   input:enabled {
       border: 2px solid green;
   }
   ```

---

### 62. **What is the `:invalid` pseudo-class, and how is it used?**
   - **Answer**: The `:invalid` pseudo-class selects form elements with invalid input.

   **Example**:
   ```css
   input:invalid {
       border-color: red;
   }
   ```

---

### 63. **What is the `:valid` pseudo-class, and how is it used?**
   - **Answer**: The `:valid` pseudo-class selects form elements with valid input.

   **Example**:
   ```css
   input:valid {
       border-color: green;
   }
   ```

---

### 64. **What is the `:required` pseudo-class, and how is it used?**
   - **Answer**: The `:required` pseudo-class selects form elements that are required.

   **Example**:
   ```css
   input:required {
       border: 2px solid orange;
   }
   ```

---

### 65. **What is the `:optional` pseudo-class, and how is it used?**
   - **Answer**: The `:optional` pseudo-class selects form elements that are optional (not required).

   **Example**:
   ```css
   input:optional {
       border: 2px dashed gray;
   }
   ```

---

### 66. **What is the `:read-only` pseudo-class, and how is it used?**
   - **Answer**: The `:read-only` pseudo-class selects elements that are read-only.

   **Example**:
   ```css
   input:read-only {
       background-color: #f0f0f0;
   }
   ```

---

### 67. **What is the `:read-write` pseudo-class, and how is it used?**
   - **Answer**: The `:read-write` pseudo-class selects elements that are editable.

   **Example**:
   ```css
   input:read-write {
       background-color: white;
   }
   ```

---

### 68. **What is the `:in-range` pseudo-class, and how is it used?**
   - **Answer**: The `:in-range` pseudo-class selects elements with values within a specified range.

   **Example**:
   ```css
   input:in-range {
       border-color: green;
   }
   ```

---

### 69. **What is the `:out-of-range` pseudo-class, and how is it used?**
   - **Answer**: The `:out-of-range` pseudo-class selects elements with values outside a specified range.

   **Example**:
   ```css
   input:out-of-range {
       border-color: red;
   }
   ```

---

### 70. **What is the `:placeholder-shown` pseudo-class, and how is it used?**
   - **Answer**: The `:placeholder-shown` pseudo-class selects input elements that are displaying placeholder text.

   **Example**:
   ```css
   input:placeholder-shown {
       border: 2px dashed blue;
   }
   ```

---

### 71. **What is the `:default` pseudo-class, and how is it used?**
   - **Answer**: The `:default` pseudo-class selects the default element in a group (e.g., the default button in a form).

   **Example**:
   ```css
   input[type="radio"]:default {
       border: 2px solid green;
   }
   ```

---

### 72. **What is the `:indeterminate` pseudo-class, and how is it used?**
   - **Answer**: The `:indeterminate` pseudo-class selects elements in an indeterminate state (e.g., checkboxes that are neither checked nor unchecked).

   **Example**:
   ```css
   input[type="checkbox"]:indeterminate {
       background-color: yellow;
   }
   ```

---

### 73. **What is the `:lang()` pseudo-class, and how is it used?**
   - **Answer**: The `:lang()` pseudo-class selects elements based on their language attribute.

   **Example**:
   ```css
   p:lang(fr) {
       font-style: italic;
   }
   ```

---

### 74. **What is the `:dir()` pseudo-class, and how is it used?**
   - **Answer**: The `:dir()` pseudo-class selects elements based on their text direction (e.g., `ltr` or `rtl`).

   **Example**:
   ```css
   p:dir(rtl) {
       text-align: right;
   }
   ```

---

### 75. **What is the `:any-link` pseudo-class, and how is it used?**
   - **Answer**: The `:any-link` pseudo-class selects all anchor elements, whether visited or unvisited.

   **Example**:
   ```css
   a:any-link {
       color: blue;
   }
   ```

---

### 76. **What is the `:where()` pseudo-class, and how is it used?**
   - **Answer**: The `:where()` pseudo-class allows you to apply styles to elements that match a selector, without increasing specificity.

   **Example**:
   ```css
   :where(.box, .container) p {
       color: red;
   }
   ```

---

### 77. **What is the `:is()` pseudo-class, and how is it used?**
   - **Answer**: The `:is()` pseudo-class allows you to apply styles to elements that match any of the selectors in its argument list.

   **Example**:
   ```css
   :is(h1, h2, h3) {
       color: blue;
   }
   ```

---

### 78. **What is the `:has()` pseudo-class, and how is it used?**
   - **Answer**: The `:has()` pseudo-class selects elements that contain a specific descendant.

   **Example**:
   ```css
   div:has(p) {
       border: 2px solid green;
   }
   ```

---

### 79. **What is the `:focus-visible` pseudo-class, and how is it used?**
   - **Answer**: The `:focus-visible` pseudo-class applies styles to an element when it is focused and the focus is visible (e.g., via keyboard navigation).

   **Example**:
   ```css
   button:focus-visible {
       outline: 2px solid blue;
   }
   ```

---

### 80. **What is the `:blank` pseudo-class, and how is it used?**
   - **Answer**: The `:blank` pseudo-class selects empty input elements or text areas.

   **Example**:
   ```css
   input:blank {
       border: 2px dashed gray;
   }
   ```

---

### 81. **What is the `:current` pseudo-class, and how is it used?**
   - **Answer**: The `:current` pseudo-class selects the current element in a time-based media context (e.g., a video or audio track).

   **Example**:
   ```css
   video::cue(:current) {
       color: yellow;
   }
   ```

---

### 82. **What is the `:past` pseudo-class, and how is it used?**
   - **Answer**: The `:past` pseudo-class selects elements that are before the current element in a time-based media context.

   **Example**:
   ```css
   video::cue(:past) {
       opacity: 0.5;
   }
   ```

---

### 83. **What is the `:future` pseudo-class, and how is it used?**
   - **Answer**: The `:future` pseudo-class selects elements that are after the current element in a time-based media context.

   **Example**:
   ```css
   video::cue(:future) {
       opacity: 0.5;
   }
   ```

---

### 84. **What is the `:playing` pseudo-class, and how is it used?**
   - **Answer**: The `:playing` pseudo-class selects media elements that are currently playing.

   **Example**:
   ```css
   video:playing {
       border: 2px solid green;
   }
   ```

---

### 85. **What is the `:paused` pseudo-class, and how is it used?**
   - **Answer**: The `:paused` pseudo-class selects media elements that are currently paused.

   **Example**:
   ```css
   video:paused {
       border: 2px solid red;
   }
   ```

---

### 86. **What is the `:fullscreen` pseudo-class, and how is it used?**
   - **Answer**: The `:fullscreen` pseudo-class selects elements that are in fullscreen mode.

   **Example**:
   ```css
   video:fullscreen {
       background-color: black;
   }
   ```

---

### 87. **What is the `:modal` pseudo-class, and how is it used?**
   - **Answer**: The `:modal` pseudo-class selects elements that are in a modal state (e.g., a dialog).

   **Example**:
   ```css
   dialog:modal {
       background-color: white;
   }
   ```

---

### 88. **What is the `:picture-in-picture` pseudo-class, and how is it used?**
   - **Answer**: The `:picture-in-picture` pseudo-class selects video elements that are in picture-in-picture mode.

   **Example**:
   ```css
   video:picture-in-picture {
       border: 2px solid blue;
   }
   ```

---

### 89. **What is the `:autofill` pseudo-class, and how is it used?**
   - **Answer**: The `:autofill` pseudo-class selects input elements that have been autofilled by the browser.

   **Example**:
   ```css
   input:autofill {
       background-color: lightyellow;
   }
   ```

---

### 90. **What is the `:user-invalid` pseudo-class, and how is it used?**
   - **Answer**: The `:user-invalid` pseudo-class selects form elements that are invalid after user interaction.

   **Example**:
   ```css
   input:user-invalid {
       border-color: red;
   }
   ```

---
