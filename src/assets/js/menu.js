const $menu = document.querySelector('.menu');
if ($menu) {
  const $close = $menu.querySelector('.menu__close');
  $close.addEventListener('click', () => close($menu));

  const $openBtns = document.querySelectorAll('.js-open-menu');
  $openBtns.forEach($btn => {
    $btn.addEventListener('click', () => toggle($menu));
  });
}

function toggle($menu) {
  $menu?.classList.toggle('menu--active');
  document.body.classList.toggle('body--lock')
}

function close($menu) {
  $menu?.classList.remove('menu--active');
  document.body.classList.remove('body--lock')
}