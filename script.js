"use strict";

let obj = {
  name: "illia",
  age: "18",
  city: "Krem...",
  color: {
    bg1: "red",
    bg2: "green",
  },
};

const {bg1, bg2} = obj.color;

console.log(bg1);

for (let key in obj) {
  if (typeof obj[key] == "object") {
    for (let i in obj[key]) {
      console.log(`Ключ - |${i}| имеет значание - |${obj[key][i]}|`);
    }
  } else {
    console.log(`Ключ - |${key}| имеет значание - |${obj[key]}|`);
  }
}
console.log(Object.keys(obj).length);
