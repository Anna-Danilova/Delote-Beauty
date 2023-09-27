const info = document.querySelector('.info');
const buttonInfo = document.querySelector('.info-button');
const infoClose = document.querySelector('.button--info-close');

buttonInfo.addEventListener('click', function () {
  info.classList.remove('info--close');
});

infoClose.addEventListener('click', function () {
  info.classList.add('info--close');
});
