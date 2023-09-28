'use strict';

const info = document.querySelector('.info');
const buttonInfo = document.querySelector('.info-button');
const infoClose = document.querySelector('.button--info-close');
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelectorAll('.main-menu');

buttonInfo.addEventListener('click', function () {
  info.classList.remove('info--close');
});

infoClose.addEventListener('click', function () {
  info.classList.add('info--close');
});

hamburger.addEventListener('click', function () {
  Array.from(menu).forEach(function (menuItem) {
    menuItem.classList.toggle('main-menu--open');
  });
  hamburger.classList.toggle('hamburger--close');
});

window.addEventListener('click', e => {
  const target = e.target
  if (!target.closest('.main-menu') && !target.closest('.hamburger')) {
    Array.from(menu).forEach(function (menuItem) {
      menuItem.classList.remove('main-menu--open');
    })
  }
});
