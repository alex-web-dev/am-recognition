const $stories = document.querySelector('.stories');
if ($stories) {
  const DEFAULT_DELAY = 4000;
  const object = {
    $el: $stories,
    timer: null,
    activeIndex: 0,
    delay: $stories.dataset.storyDelay || DEFAULT_DELAY,
    fps: 60,
  }

  const $close = $stories.querySelector('.stories__close');
  $close?.addEventListener('click', () => close(object));

  const $openLists = document.querySelectorAll('.js-open-stories-list');
  $openLists.forEach($list => {
    const $openBtns = $list.querySelectorAll('.js-open-stories');
    $openBtns.forEach(($btn, index) => {
      $btn.addEventListener('click', () => {
        object.activeIndex = index;
        open(object);
      });
    });
  });

  const $prev = $stories.querySelector('.stories__prev');
  $prev?.addEventListener('click', () => {
    object.activeIndex = Math.max(object.activeIndex - 1, 0);
    toggle(object);
  });

  const $next = $stories.querySelector('.stories__next');
  $next?.addEventListener('click', () => {
    object.activeIndex++;
    toggle(object);
  });

  window.addEventListener('keyup', (e) => {
    switch(e.key) {
      case 'Escape':
        close(object);
        break;
      case 'ArrowLeft':
        object.activeIndex = Math.max(object.activeIndex - 1, 0);
        toggle(object);
        break;
      case 'ArrowRight':
        object.activeIndex++;
        toggle(object);
        break;
    }
  });
}

function open(object) {
  object.$el.classList.toggle('stories--active');
  document.body.classList.toggle('body--lock');
  handler(object);
}

function handler(object) {
  let progressPersent = 0;
  let index = object.activeIndex;
  const tick = 1000 / object.fps;
  const $stories = object.$el;
  const $items = $stories.querySelectorAll('.stories__item');
  const $progressItems = $stories.querySelectorAll('.stories__progress-item');

  for (let i = 0; i < index; i++) {
    $progressItems[i].querySelector('.progress__done').style.width = '100%';
  }

  $items[index].classList.add('stories__item--active');
  object.timer = setInterval(() => {
    index = object.activeIndex;
    const $thisItem = $items[index];
    const $nextItem = $items[index + 1];
    const $progressItem = $progressItems[index];
    const $done = $progressItem?.querySelector('.progress__done');

    progressPersent = Math.min(progressPersent + tick / object.delay * 100, 100);
    $done.style.width = `${progressPersent}%`;

    if (progressPersent >= 100 && $thisItem && $nextItem) {
      $thisItem.classList.remove('stories__item--active');
      $nextItem.classList.add('stories__item--active');
      progressPersent = 0;
      object.activeIndex++;
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

  const $activeIndex = $stories.querySelector('.stories__item--active');
  $activeIndex?.classList.remove('stories__item--active');
}

function toggle(object) {
  let index = object.activeIndex;
  const $activeIndex = $stories.querySelector('.stories__item--active');
  $activeIndex?.classList.remove('stories__item--active');

  const $progressItemsDone = $stories.querySelectorAll('.stories__progress-item .progress__done');
  $progressItemsDone.forEach($done => $done.setAttribute('style', ''));

  const $newActiveItem = $stories.querySelectorAll('.stories__item')[index];
  if (!$newActiveItem) {
    close(object);
    return;
  }

  $newActiveItem.classList.add('stories__item--active');

  clearInterval(object.timer);

  handler(object);
}