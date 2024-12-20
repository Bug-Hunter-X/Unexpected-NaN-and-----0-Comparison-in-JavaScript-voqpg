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