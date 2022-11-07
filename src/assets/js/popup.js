const $popups = document.querySelectorAll('.popup');
$popups.forEach($popup => {
  $popup.addEventListener('click', e => {
    if (e.target === $popup) {
      close($popup);
    }

    if (e.target.classList.contains('popup__btn')) {
      close($popup);
    }

    if (e.target.classList.contains('js-close-popup')) {
      close($popup);
    }
  });
});

const $openBtns = document.querySelectorAll('.js-open-popup');
$openBtns.forEach($btn => {
  $btn.addEventListener('click', () => {
    const name = $btn.dataset.popupName;
    const $popup = document.querySelector(`.popup[data-popup-name="${name}"]`);
    if ($popup) {
      open($popup);
    }
  });
});

function open($popup) {
  $popup?.classList.add('popup--show');
  document.body.classList.add('body--lock')
}

function close($popup) {
  $popup?.classList.remove('popup--show');
  document.body.classList.remove('body--lock')
}