# Unexpected NaN and +/- 0 Comparison in JavaScript

This repository demonstrates a common pitfall in JavaScript's loose comparison using the '==' operator. Specifically, it highlights the unexpected behavior when comparing NaN (Not a Number) and positive/negative zero (+0, -0).

## The Problem

JavaScript's loose equality (`==`) has quirks.  `NaN` is never equal to itself, including `NaN == NaN`, which evaluates to `false`.  Conversely, `+0` and `-0` are considered equal (`+0 == -0` is `true`).  This behavior can lead to unexpected results if not carefully considered.

## The Code

The `bug.js` file contains a simple function that demonstrates these inconsistencies:

```javascript
function foo(a, b) {
  if (a === b) {
    return true; 
  }
  return false;
}

console.log(foo(NaN, NaN)); // false
console.log(foo(0, -0)); // true
console.log(foo(0, +0)); // true
```

## The Solution

The `bugSolution.js` file offers a more robust approach using the strict equality operator (`===`) and `Number.isNaN()` to handle `NaN` comparisons correctly.

```javascript
function foo(a, b) {
  if (Number.isNaN(a) && Number.isNaN(b)) {
    return true;
  } else if (a === b) {
    return true;
  } else {
    return false;
  }
}

console.log(foo(NaN, NaN)); // true
console.log(foo(0, -0)); // true
console.log(foo(0, +0)); // true
```

Using strict equality (`===`) and `Number.isNaN()` is vital for writing reliable and predictable JavaScript code.  Avoid loose equality when possible, especially when dealing with special numeric values like `NaN` and `+/- 0`.