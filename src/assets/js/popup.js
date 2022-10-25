const $popups = document.querySelectorAll('.popup');
$popups.forEach($popup => {
  $popup.addEventListener('click', e => {
    if (e.target === $popup) {
      $popup.classList.remove('popup--show');
    }

    if (e.target.classList.contains('popup__btn')) {
      $popup.classList.remove('popup--show');
    }

    if (e.target.classList.contains('popup__close')) {
      $popup.classList.remove('popup--show');
    }
  });
});