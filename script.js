"use strict";

console.log('----------------------------------');

let arr = [6, 14, 3, 22, 5, 1];

let mySort = function (a, b) { // сортировка для .sort
   return a - b;
};
arr.sort(mySort);

// arr.pop(6);
arr.push('Hi');


for (let velue of arr) {
   console.log(velue);
}

console.log('----------------------------------');

arr.forEach(function (item, i, arr) {
   console.log(`${i}: ${item} --- ${arr.length}`);
});

console.log('----------------------------------');