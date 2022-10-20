const $stories = document.querySelector('.stories');
if ($stories) {
  const $close = $stories.querySelector('.stories__close');
  $close.addEventListener('click', () => {
    $stories.classList.remove('stories--active');
  });

  const $openBtns = document.querySelectorAll('.js-open-stories');
  $openBtns.forEach($btn => {
    $btn.addEventListener('click', () => $stories.classList.add('stories--active'));
  });
}