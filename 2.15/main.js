/*
do {
  var num = prompt("Введите число больше 100?", 0);
} while (num <= 100 && num != null);

if (num) alert(num);
*/
var n = 10
outer:
for (var i = 2; i <= 10; i++) {
    for (var k = 2; k < i; k++) {
        if (i % k == 0) {
            continue outer;
        }
    }
    console.log(i);
}