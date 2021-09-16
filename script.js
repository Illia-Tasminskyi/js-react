"use strict";

function f1() {
  console.log("1");
}

function f2(callback1, callback3) {
  console.log("2");
  callback1();
  callback3();
}

function f3() {
   console.log("3");
}


f2(f1, f3);