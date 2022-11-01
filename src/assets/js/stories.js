const $stories = document.querySelector('.stories');
if ($stories) {
  const $close = $stories.querySelector('.stories__close');
  $close.addEventListener('click', () => close($stories));

  const $openBtns = document.querySelectorAll('.js-open-stories');
  $openBtns.forEach($btn => {
    $btn.addEventListener('click', () => open($stories));
  });
}

function open($stories) {
  $stories?.classList.toggle('stories--active');
  document.body.classList.toggle('body--lock')
}

function close($stories) {
  $stories?.classList.remove('stories--active');
  document.body.classList.remove('body--lock')
}