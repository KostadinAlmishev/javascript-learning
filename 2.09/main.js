var a, b = NaN, c = null;
console.log(a == b);  // false
console.log(a === b); // false
console.log(a == c);  // true
console.log(a === c); // false
console.log(b == c);  // false
console.log(b === c); // false