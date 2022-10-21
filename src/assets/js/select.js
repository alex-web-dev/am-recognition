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
});