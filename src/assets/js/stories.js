const $stories = document.querySelector('.stories');
if ($stories) {
  const DEFAULT_DELAY = 4000;
  const object = {
    $el: $stories,
    timer: null,
    delay: $stories.dataset.storyDelay || DEFAULT_DELAY,
    fps: 60,
  }

  const $close = $stories.querySelector('.stories__close');
  $close.addEventListener('click', () => close(object));

  const $openBtns = document.querySelectorAll('.js-open-stories');
  $openBtns.forEach($btn => {
    $btn.addEventListener('click', () => open(object));
  });
}

function open(object) {
  object.$el.classList.toggle('stories--active');
  document.body.classList.toggle('body--lock');
  handler(object);
}

function handler(object) {
  let iterator = 0;
  let progressPersent = 0;
  const tick = 1000 / object.fps;
  const $stories = object.$el;
  const $items = $stories.querySelectorAll('.stories__item');
  const $progressItems = $stories.querySelectorAll('.stories__progress-item');

  $items[iterator].classList.add('stories__item--active');
  object.timer = setInterval(() => {
    const $thisItem = $items[iterator];
    const $nextItem = $items[iterator + 1];
    const $progressItem = $progressItems[iterator];
    const $done = $progressItem?.querySelector('.progress__done');

    progressPersent = Math.min(progressPersent + tick / object.delay * 100, 100);
    $done.style.width = `${progressPersent}%`;

    if (progressPersent >= 100 && $thisItem && $nextItem) {
      $thisItem.classList.remove('stories__item--active');
      $nextItem.classList.add('stories__item--active');
      progressPersent = 0;
      iterator++;
    } else if (progressPersent === 100) {
      close(object);
    }
  }, tick);
}

function close(object) {
  object.$el.classList.remove('stories--active');
  document.body.classList.remove('body--lock');

  object.$el.addEventListener('transitionend', () => {
    const $progressItemsDone = $stories.querySelectorAll('.stories__progress-item .progress__done');
    $progressItemsDone.forEach($done => $done.setAttribute('style', ''));
  }, { once: true });

  clearInterval(object.timer);

  const $activeItem = $stories.querySelector('.stories__item--active');
  $activeItem?.classList.remove('stories__item--active');
}