'use strict';
function sumTo(n) {
    if (n == 1) {
        return n;
    }
     
    return n + sumTo(n - 1);
}

console.log(sumTo(10));

function fact(n) {
    if (n == 1) return 1;
    return n * fact(n - 1);
}

console.log(fact(5));

function fib(n) {
    if (n == 1 || n == 2)
        return 1;
    return fib(n - 1) + fib(n - 2);
}

function fibLoop(n) {
    var a = 1, b = 1;
    for (var i = 3; i <= n; i++)
    {
        var c = a + b;
        a = b;
        b = c;
    }
    return c;
}

console.log(fib(3));
console.log(fibLoop(3));
console.log(fib(7));
console.log(fibLoop(7));
console.log(fibLoop(77));

// console.log(fib(77)); // TOO SLOW