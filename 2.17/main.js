'ise strict';
let text = 'Vasq';
function print() {
    text = 'test';
    console.log(text);
}

if (1)
    let a = 2;
print();        // test
console.log(a); // error