const $popups = document.querySelectorAll('.popup');
$popups.forEach($popup => {
  $popup.addEventListener('click', e => {
    if (e.target === $popup) {
      $popup.classList.remove('popup--show');
    }

    if (e.target.classList.contains('popup__btn')) {
      $popup.classList.remove('popup--show');
    }

    if (e.target.classList.contains('js-close-popup')) {
      $popup.classList.remove('popup--show');
    }
  });
});

const $openBtns = document.querySelectorAll('.js-open-popup');
$openBtns.forEach($btn => {
  const name = $btn.dataset.popupName;
  $btn.addEventListener('click', () => {
    const $popup = document.querySelector(`.popup[data-popup-name="${name}"]`);
    $popup?.classList.add('popup--show');
  });
});