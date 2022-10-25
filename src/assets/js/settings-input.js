const $textareas = document.querySelectorAll('.settings-input--area');
$textareas.forEach($textarea => {
  textareaSizeHandler($textarea);
  $textarea.addEventListener('input', () => textareaSizeHandler($textarea));
  window.addEventListener('resize', () => textareaSizeHandler($textarea));
});

function textareaSizeHandler($textarea) {
  $textarea.style.height = '0px';
  
  const minHeight = getTextareaMinHeight();
  const height = Math.max(minHeight, $textarea.scrollHeight);
  $textarea.style.height = `${height}px`;
}

function getTextareaMinHeight() {
  return window.innerWidth < 680 ? 55 : 90;
}