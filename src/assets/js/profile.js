import { moveElement } from "./helpers";

const $profile = document.querySelector('.profile');
if ($profile) {
  moveAwards();
  window.addEventListener('resize', moveAwards);

  const $awardsMore = document.querySelector('.profile__awards-more');
  $awardsMore?.addEventListener('click', () => {
    const $awards = $awardsMore.closest('.profile__awards');
    $awards.classList.add('profile__awards--full');
  });
}

function moveAwards() {
  moveElement({
    element: '.profile__awards',
    from: '.profile__awards-desktop',
    to: '.profile__awards-mobile',
    width: 680,
  });
}