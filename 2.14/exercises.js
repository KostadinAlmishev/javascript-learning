"" + 1 + 0          // 10       
"" - 1 + 0          // -1
true + false        // 1
6 / "3"             // 2
"2" * "3"           // 6
4 + 5 + "px"        // 9px
"$" + 4 + 5         // $45
"4" - 2             // 2
"4px" - 2           // NaN
7 / 0               // (NaN)        Infinity
"  -9\n" + 5        // "  -9\n5"
"  -9\n" - 5        // -14
5 && 2              // 2
2 && 5              // 5
5 || 0              // 5
0 || 5              // 5
null + 1            // (null)       1
undefined + 1       // (undefined)  NaN
null == "\n0\n"     // false
+null == +"\n0\n"   // true