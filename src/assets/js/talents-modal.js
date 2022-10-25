const $modal = document.querySelector('.talents-modal');
if ($modal) {
  const $close = $modal.querySelector('.talents-modal__close');
  $close.addEventListener('click', () => {
    $modal.classList.remove('talents-modal--active');
  });

  const $openBtns = document.querySelectorAll('.js-open-talents');
  $openBtns.forEach($btn => {
    $btn.addEventListener('click', () => $modal.classList.toggle('talents-modal--active'));
  });

  const $addTalentBtns = $modal.querySelectorAll('.talents-modal__add');
  $addTalentBtns.forEach(($btn) => {
    $btn.addEventListener('click', () => {
      const $talentsAddPopup = document.querySelector('.popup[data-name="added-talent"]');
      $talentsAddPopup.classList.add('popup--show');
    });
  });
}