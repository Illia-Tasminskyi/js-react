"use strict";

const btns = document.querySelectorAll('button');
// btns.forEach(btn => {
//     btn.style.backgroundColor = 'red';
// });

btns[0].addEventListener('click', () => {
    for (let i = 1; i < btns.length; i++) {
        btns[i].style.backgroundColor = 'red';
    }
    
    btns[0].classList.toggle('black');
});

// console.log(btns);

