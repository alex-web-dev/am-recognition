(()=>{var e={15:()=>{document.querySelectorAll(".accordion").forEach((e=>{const t=e.querySelector(".accordion-btn"),s=e.querySelector(".accordion-content");t.addEventListener("click",(()=>{e.classList.contains("accordion--active")?(t.classList.remove("accordion-btn--active"),s.style.height=`${s.scrollHeight}px`,e.classList.add("accordion--activating"),setTimeout((()=>s.style.height="0px"))):(t.classList.add("accordion-btn--active"),e.classList.add("accordion--activating"),s.style.height=`${s.scrollHeight}px`)})),s.addEventListener("transitionend",(()=>{e.classList.remove("accordion--activating"),e.classList.contains("accordion--active")?e.classList.remove("accordion--active"):(s.setAttribute("style",""),e.classList.add("accordion--active"))}))}))},874:()=>{const e=document.querySelector(".admin-menu");if(e){e.querySelectorAll(".admin-menu__item--has-children").forEach((t=>{t.querySelector(".admin-menu__link:not(.admin-menu__link--sub)").addEventListener("click",(()=>{const s=e.querySelector(".admin-menu__item--active");s&&s.classList.remove("admin-menu__item--active"),s!==t&&t.classList.add("admin-menu__item--active")}))}))}},303:()=>{const e=document.body;(e.classList.contains("body--desktop")||e.classList.contains("body--admin"))&&window.addEventListener("scroll",(()=>{const e=-window.scrollX;document.querySelectorAll("\n      .header,\n      .admin-navbar,\n      .popup,\n      .menu,\n      .stories,\n      .wallet__btns-box\n    ").forEach((t=>{t.style.transform=`translateX(${e}px)`}))}))},65:()=>{document.querySelectorAll(".js-file-input").forEach((e=>{e.addEventListener("change",(()=>{const t=e.dataset.fileOutput;if(!t)return;document.querySelector(`.js-file-value[data-file-output="${t}"]`).innerText=e.files[0].name}))}))},380:(e,t,s)=>{"use strict";s(303),s(936);function o(e){if(document.body.classList.contains("body--desktop"))return;const{element:t,from:s,to:o,width:r,fromInsertType:n="append",toInsertType:i="append"}=e,a=document.querySelectorAll(t),c=document.querySelector(s),l=document.querySelector(o);c&&l&&a.forEach((e=>{setTimeout((()=>{window.innerWidth<=r&&e.parentNode===c?l[i](e):window.innerWidth>=r&&e.parentNode!==c&&c[n](e)}))}))}function r({text:e,className:t="",delay:s=3e3}){const o=document.createElement("div");o.className=`message ${t}`,o.innerHTML=e,document.body.appendChild(o),setTimeout((()=>o.classList.add("message--show")),10),setTimeout((()=>{o.classList.remove("message--show"),o.addEventListener("transitionend",(()=>o.remove()),{once:!0})}),s)}if(document.querySelector(".profile")){n(),window.addEventListener("resize",n),i(),window.addEventListener("resize",i),a(),window.addEventListener("resize",a);const e=document.querySelector(".profile__awards-more");e?.addEventListener("click",(()=>{e.closest(".profile__awards").classList.toggle("profile__awards--full");const t=e.dataset.toggleText;t&&(e.dataset.toggleText=e.innerHTML,e.innerHTML=t)}))}function n(){o({element:".profile__awards--own",from:".profile__awards-desktop",to:".profile__awards-mobile",width:680})}function i(){o({element:".profile__awards--other",from:".profile__awards-desktop",to:".profile__awards-mobile",width:680})}function a(){o({element:".profile__banner--movement",from:".profile__banners-desktop",to:".profile__banners-mobile",width:680})}s(485),s(465),s(378),s(119);var c=s(436);document.querySelector(".pay-lines")&&new c.ZP(".pay-lines__slider",{modules:[c.tl],slidesPerView:1,spaceBetween:20,breakpoints:{680:{slidesPerView:1,enabled:!1}},pagination:{el:".pay-lines__slider-pagination",clickable:!0}});s(50),s(65);const l=document.querySelector(".login-form");if(l){const e=l.querySelectorAll(".login-form__input");l.addEventListener("submit",(t=>{t.preventDefault();let s=!1;e.forEach((e=>{(function(e){if(0===e.value.length)return!1;return!0})(e)||(s=!0,e.classList.add("input--error"))})),s&&!document.querySelector(".message")?r({text:"Сообщение об ошибке. Заполните все обязательные поля",className:"message--error",delay:4e3}):s||(location.href="profile.html")})),e.forEach((e=>{e.addEventListener("focus",(()=>e.classList.remove("input--error")))}))}c.ZP.use([c.tl,c.W_,c.o3]);const d=new c.ZP(".single-product__nav-slider",{direction:"vertical",slidesPerView:"auto",spaceBetween:10});new c.ZP(".single-product__big-slider",{slidesPerView:"auto",spaceBetween:0,loop:!0,thumbs:{swiper:d},mousewheel:{sensitivity:1.4},navigation:{prevEl:".single-product__slider-prev",nextEl:".single-product__slider-next",clickable:!0}});s(15);c.ZP.use([c.W_]),new c.ZP(".news-about__slider",{slidesPerView:"auto",spaceBetween:0,navigation:{nextEl:".news-about__slider-next",prevEl:".news-about__slider-prev",clickable:!0}});s(874)},936:()=>{const e=document.querySelector(".menu");if(e){const t=e.querySelector(".menu__close");t.addEventListener("click",(()=>function(e){e?.classList.remove("menu--active"),document.body.classList.remove("body--lock")}(e)));document.querySelectorAll(".js-open-menu").forEach((s=>{s.addEventListener("click",(()=>{s.dataset.menuCloseClass?t.classList.add(s.dataset.menuCloseClass):t.className="menu__close",function(e){e?.classList.toggle("menu--active"),document.body.classList.toggle("body--lock")}(e)}))}))}},119:()=>{let e;document.querySelectorAll(".popup").forEach((e=>{e.addEventListener("click",(s=>{s.target===e&&t(e),s.target.classList.contains("popup__btn")&&t(e),s.target.classList.contains("js-close-popup")&&t(e)}))}));function t(t){t?.classList.remove("popup--show"),document.body.classList.remove("body--lock"),clearInterval(e)}document.querySelectorAll(".js-open-popup").forEach((s=>{const o=s.dataset.popupName;s.addEventListener("click",(()=>{!function(s){s?.classList.add("popup--show"),document.body.classList.add("body--lock");const o=+s.dataset.closeDelay,r=s.querySelector(".popup__progress .progress__done");if(o&&r){let n=0;const i=1e3/60;e=setInterval((()=>{n=Math.min(n+i/o*100,100),r.style.width=`${n}%`,100===n&&(t(s),s.addEventListener("transitionend",(()=>{r.setAttribute("style","")}),{once:!0}))}),i)}else o&&setTimeout((()=>t(s)),o)}(document.querySelector(`.popup[data-popup-name="${o}"]`))}))}))},465:()=>{document.querySelectorAll(".search").forEach((e=>{const t=e.querySelector(".search__input");t.addEventListener("input",(()=>{""===t.value||e.classList.contains("search--fill")?""===t.value&&e.classList.contains("search--fill")&&e.classList.remove("search--fill"):e.classList.add("search--fill")}));e.querySelector(".search__btn--clear")?.addEventListener("click",(()=>{t.value="",t.focus(),e.classList.remove("search--fill")}));e.querySelector(".search__open")?.addEventListener("click",(()=>e.classList.toggle("search--active")));e.querySelector(".search__btn--close")?.addEventListener("click",(()=>e.classList.remove("search--active")))}))},378:()=>{const e=document.querySelectorAll(".settings-input--area");e.forEach((e=>{t(e),e.addEventListener("input",(()=>t(e))),window.addEventListener("resize",(()=>t(e)))}));function t(e){const t=function(e){return e.dataset.minHeight?+e.dataset.minHeight:window.innerWidth<680?55:90}(e);e.style.height=`${t}px`;const s=Math.max(t,e.scrollHeight);e.style.height=`${s}px`}document.querySelectorAll(".tabs-btn").forEach((s=>{s.addEventListener("click",(()=>{setTimeout((()=>{e.forEach((e=>t(e)))}),50)}))}))},485:()=>{const e=document.querySelector(".stories");if(e){const r=4e3,n={$el:e,timer:null,activeIndex:0,delay:e.dataset.storyDelay||r,fps:60};e.querySelector(".stories__close")?.addEventListener("click",(()=>s(n)));document.querySelectorAll(".js-open-stories-list").forEach((e=>{e.querySelectorAll(".js-open-stories").forEach(((e,s)=>{e.addEventListener("click",(()=>{n.activeIndex=s,function(e){e.$el.classList.toggle("stories--active"),document.body.classList.toggle("body--lock"),t(e)}(n)}))}))}));e.querySelector(".stories__prev")?.addEventListener("click",(()=>{n.activeIndex=Math.max(n.activeIndex-1,0),o(n)}));e.querySelector(".stories__next")?.addEventListener("click",(()=>{n.activeIndex++,o(n)})),window.addEventListener("keyup",(e=>{switch(e.key){case"Escape":s(n);break;case"ArrowLeft":n.activeIndex=Math.max(n.activeIndex-1,0),o(n);break;case"ArrowRight":n.activeIndex++,o(n)}}))}function t(e){let t=0,o=e.activeIndex;const r=1e3/e.fps,n=e.$el,i=n.querySelectorAll(".stories__item"),a=n.querySelectorAll(".stories__progress-item");for(let e=0;e<o;e++)a[e].querySelector(".progress__done").style.width="100%";i[o].classList.add("stories__item--active"),e.timer=setInterval((()=>{o=e.activeIndex;const n=i[o],c=i[o+1],l=a[o]?.querySelector(".progress__done");t=Math.min(t+r/e.delay*100,100),l.style.width=`${t}%`,t>=100&&n&&c?(n.classList.remove("stories__item--active"),c.classList.add("stories__item--active"),t=0,e.activeIndex++):100===t&&s(e)}),r)}function s(t){t.$el.classList.remove("stories--active"),document.body.classList.remove("body--lock"),t.$el.addEventListener("transitionend",(()=>{e.querySelectorAll(".stories__progress-item .progress__done").forEach((e=>e.setAttribute("style","")))}),{once:!0}),clearInterval(t.timer);e.querySelector(".stories__item--active")?.classList.remove("stories__item--active")}function o(o){let r=o.activeIndex;e.querySelector(".stories__item--active")?.classList.remove("stories__item--active");e.querySelectorAll(".stories__progress-item .progress__done").forEach((e=>e.setAttribute("style","")));const n=e.querySelectorAll(".stories__item")[r];n?(n.classList.add("stories__item--active"),clearInterval(o.timer),t(o)):s(o)}},50:()=>{document.querySelectorAll(".tabs-btns").forEach((e=>{e.querySelectorAll(".tabs-btn").forEach(((t,s)=>{t.addEventListener("click",(()=>{const t=e.dataset.tabsName,o=document.querySelector(`.tabs-list[data-tabs-name="${t}"]`);if(!o)return;document.querySelectorAll(`.tabs-btns[data-tabs-name="${t}`).forEach((e=>{const t=e.querySelector(".tabs-btn--active"),o=e.querySelectorAll(".tabs-btn")[s];t.classList.remove("tabs-btn--active"),o.classList.add("tabs-btn--active")}));const r=o.querySelector(".tabs-item--active"),n=o.querySelectorAll(".tabs-item")[s];r?.classList.remove("tabs-item--active"),n.classList.add("tabs-item--active")}))}))}))}},t={};function s(o){if(t[o])return t[o].exports;var r=t[o]={exports:{}};return e[o](r,r.exports,s),r.exports}s.m=e,s.x=e=>{},s.d=(e,t)=>{for(var o in t)s.o(t,o)&&!s.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0},t=[[380,436]],o=e=>{},r=(r,n)=>{for(var i,a,[c,l,d,u]=n,m=0,p=[];m<c.length;m++)a=c[m],s.o(e,a)&&e[a]&&p.push(e[a][0]),e[a]=0;for(i in l)s.o(l,i)&&(s.m[i]=l[i]);for(d&&d(s),r&&r(n);p.length;)p.shift()();return u&&t.push.apply(t,u),o()},n=globalThis.webpackChunkam_recognition=globalThis.webpackChunkam_recognition||[];function i(){for(var o,r=0;r<t.length;r++){for(var n=t[r],i=!0,a=1;a<n.length;a++){var c=n[a];0!==e[c]&&(i=!1)}i&&(t.splice(r--,1),o=s(s.s=n[0]))}return 0===t.length&&(s.x(),s.x=e=>{}),o}n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n));var a=s.x;s.x=()=>(s.x=a||(e=>{}),(o=i)())})();s.x()})();