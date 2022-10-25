const $talents = document.querySelectorAll('.settings-talent');
$talents.forEach($talent => {
  const $deleteBtn = $talent.querySelector('.settings-talent__delete');
  $deleteBtn.addEventListener('click', () => {
    const $popup = document.querySelector('.popup[data-name="delete-talent"]');
    $popup.classList.add('popup--show');
  });
});