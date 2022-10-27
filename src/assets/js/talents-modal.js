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
}