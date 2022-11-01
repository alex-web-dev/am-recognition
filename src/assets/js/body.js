const $bodyDesktop = document.querySelector('.body--desktop');
if ($bodyDesktop) {
  window.addEventListener('scroll', () => {
    const x = -window.scrollX;
    const fixedSelectors = `
      .header,
      .admin-navbar,
      .popup,
      .menu,
      .stories,
      .wallet__btns-box
    `;
    
    document.querySelectorAll(fixedSelectors).forEach(($elem) => {
      $elem.style.transform = `translateX(${x}px)`;
    });
  });
}
