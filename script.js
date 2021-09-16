"use strict";

let text;

function start() {
   while(text == '' || text == null || isNaN(text)) {
      text = +prompt('Сколько тебе лет?', '');
   }
   alert(text);
}

start();