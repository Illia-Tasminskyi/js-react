"use strict";

let num = [1, 2, 3, 4, 5, 6];
let num2 = [...num, 7];

num[2] = 'new';
console.log(num);
console.log(num2);