import Choices from "choices.js";

const $selects = document.querySelectorAll('.select');
$selects.forEach($select => {
  const $input = $select.querySelector('.select__field');
  new Choices($input, {
    searchEnabled: false,
    itemSelectText: '',
    placeholder: true,
    allowHTML: true,
    shouldSort: false,
    noResultsText: 'Не найдено',
    paste: true,
    position: 'select-one',
  });

  $input.addEventListener('showDropdown', () => $select.classList.add('select--active'));
  $input.addEventListener('hideDropdown', () => $select.classList.remove('select--active'));

  const text = $select.dataset.selectText;
  if (!text) {
    return;
  }

  let $innerItem = $select.querySelector('.choices__inner .choices__item');
  $innerItem.childNodes[0].textContent += ` ${text}`;

  $input.addEventListener('addItem', (e) => {
    if (e.detail.value) {
      $innerItem = $select.querySelector('.choices__inner .choices__item');
      $innerItem.childNodes[0].textContent = `${e.detail.label} ${text}`;
    }
  }, false);
});