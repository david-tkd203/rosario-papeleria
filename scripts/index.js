"use strict";

let burgermenu = document.getElementById('burger-menu');
let navmenu = document.querySelector('.links');

burgermenu.addEventListener('click' ,() => {
  navmenu.classList.toggle('is-active');
})
