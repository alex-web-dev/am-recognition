const $menu = document.querySelector('.menu');
if ($menu) {
  const $close = $menu.querySelector('.menu__close');
  $close.addEventListener('click', () => {
    $menu.classList.remove('menu--active');
  });

  const $openBtns = document.querySelectorAll('.js-open-menu');
  $openBtns.forEach($btn => {
    $btn.addEventListener('click', () => $menu.classList.toggle('menu--active'));
  });
}