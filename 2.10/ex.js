function isInteger(num) {
    return (num ^ 0) === num;
}

console.log(isInteger(5));   // true
console.log(isInteger(5.5)); // false

