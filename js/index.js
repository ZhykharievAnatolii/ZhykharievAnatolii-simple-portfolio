'use strict'
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
let markupDeveloper = document.querySelector('.markup-developer');
menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    markupDeveloper.classList.toggle('developer-menu');
})
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function(){
    menu.classList.toggle('active');
})