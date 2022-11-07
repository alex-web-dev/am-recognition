const $accordions = document.querySelectorAll('.accordion');
$accordions.forEach($accordion => {
  const $button = $accordion.querySelector('.accordion__btn');
  const $content = $accordion.querySelector('.accordion__content');

  $button.addEventListener('click', () => {
    if (!$accordion.classList.contains('accordion--active')) {
      $button.classList.add('accordion__btn--active');
      $accordion.classList.add('accordion--activating');
      $content.style.height = `${$content.scrollHeight}px`;
    } else {
      $button.classList.remove('accordion__btn--active');
      $content.style.height = `${$content.scrollHeight}px`;
      $accordion.classList.add('accordion--activating');
      setTimeout(() => $content.style.height = '0px');
    }
  });

  $content.addEventListener('transitionend', () => {
    $accordion.classList.remove('accordion--activating');

    if (!$accordion.classList.contains('accordion--active')) {
      $content.setAttribute('style', '');
      $accordion.classList.add('accordion--active');
    } else {
      $accordion.classList.remove('accordion--active');
    }
  });
});