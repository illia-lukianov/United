import{A as b,S as f,N as g,K as L,a as h,i as E}from"./assets/vendor-BAf7YG4r.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const m of i.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&c(m)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function c(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();const k=document.querySelector(".menu"),l=document.querySelector(".nav");k.addEventListener("click",e=>{e.preventDefault(),l.classList.toggle("is-open")});document.addEventListener("click",e=>{!l.contains(e.target)&&!k.contains(e.target)&&l.classList.remove("is-open")});l.addEventListener("click",()=>{l.classList.remove("is-open")});const a={modalBurger:document.querySelector(".burger-btn"),modalMenu:document.querySelector(".modal-menu"),modalClose:document.querySelector(".modal-close-btn"),closeElements:document.querySelectorAll(".nav-item, .order-project-btn-modal")};a.modalBurger.addEventListener("click",e=>{e.preventDefault(),a.modalMenu.classList.add("is-open"),document.body.classList.add("no-scroll")});a.modalClose.addEventListener("click",()=>{a.modalMenu.classList.remove("is-open"),document.body.classList.remove("no-scroll")});a.closeElements.forEach(e=>{e.addEventListener("click",()=>{a.modalMenu.classList.remove("is-open"),document.body.classList.remove("no-scroll")})});const I=document.querySelector(".themes-toggle"),M=document.querySelector(".overlay-themes-menu"),v=document.querySelectorAll(".themes-option"),C="theme-color";document.addEventListener("DOMContentLoaded",B);I.addEventListener("click",()=>{M.classList.toggle("is-active")});M.addEventListener("click",e=>{v.forEach(t=>{t.classList.remove("is-active")}),localStorage.setItem(C,e.target.dataset.theme),e.target.classList.add("is-active"),document.documentElement.dataset.theme=e.target.dataset.theme});function B(){const e=localStorage.getItem(C)??v[1].dataset.theme;document.documentElement.dataset.theme=e,v.find(t=>t.dataset.theme===e).classList.add("is-active")}document.addEventListener("DOMContentLoaded",()=>{new b(".about-me-accordion-wrapper",{elementClass:"acc",triggerClass:"acc-btn",panelClass:"acc-content",duration:300,showMultiple:!0}).open(0)});const x=new f(".about-me-swiper",{modules:[g,L],direction:"horizontal",slidesPerView:2,loop:!0,loopedSlides:9,speed:400,navigation:{nextEl:".swiper-button-next"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{768:{slidesPerView:3},1440:{slidesPerView:6}}});window.addEventListener("resize",()=>{x.update()});const p=new f(".projects-swiper-container",{modules:[g,L],speed:400,slidesPerView:1,spaceBetween:0,navigation:{nextEl:".projects-next-btn",prevEl:".projects-prev-btn"},keyboard:{enabled:!0,onlyInViewport:!0}});function S(){const e=document.querySelector(".projects-prev-btn"),t=document.querySelector(".projects-next-btn");p.isBeginning?(e.disabled=!0,e.classList.add("disabled")):(e.disabled=!1,e.classList.remove("disabled")),p.isEnd?(t.disabled=!0,t.classList.add("disabled")):(t.disabled=!1,t.classList.remove("disabled"))}p.on("slideChange",S);S();new b(".faq-list",{elementClass:"faq-item",triggerClass:"faq-item-toggle",panelClass:"faq-item-description",showMultiple:!0,duration:300});const u={coverList:document.querySelector(".covers-list")};window.addEventListener("scroll",V);function V(){const{top:e,bottom:t}=u.coverList.getBoundingClientRect(),{innerHeight:r}=window;e>0&&(e<r||t<=0)||t>0&&(t<r||e<=0)?u.coverList.classList.add("active"):u.coverList.classList.remove("active")}async function O(){try{return(await h.get("https://portfolio-js.b.goit.study/api/reviews")).data}catch(e){return e}}const d={list:document.querySelector(".reviews-list"),swiperContainer:document.querySelector(".reviews-swiper")};let w=!0,y=!1;window.addEventListener("scroll",D);function P({avatar_url:e,author:t,review:r}){return`<li class="reviews-item swiper-slide">
              <div class="swiper-slide-transform">
                <img class="reviews-item-img" src="${e}" alt="${t} photo" width="48" height="48" loading="lazy" />
                <h3 class="reviews-item-title">${t}</h3>
                <p class="reviews-item-text">
                  ${r}
                </p>
              </div>
          </li>`}function j(e){return e.map(P).join("")}function R(){const e=document.createElement("li"),t=document.createElement("span");e.classList.add("reviews-item-error"),t.textContent="Not found",t.classList.add("reviews-text-error"),e.appendChild(t),d.list.appendChild(e)}document.addEventListener("DOMContentLoaded",A);async function A(){try{const e=await O(),t=j(e);d.list.insertAdjacentHTML("beforeend",t),w=!0}catch{R(),w=!1}}function D(){if(!w&&!y){const{top:e,bottom:t}=d.swiperContainer.getBoundingClientRect(),{innerHeight:r}=window;(e>0&&(e<r||t<=0)||t>0&&(t<r||e<=0))&&(y=!0,E.error({class:"work-message error",title:"Error",theme:"dark",message:"Failed to load images.",position:"topCenter",timeout:6e3}))}}new f(d.swiperContainer,{modules:[g,L],direction:"horizontal",slidesPerView:1,speed:400,spaceBetween:16,navigation:{nextEl:".reviews-next-btn",prevEl:".reviews-prev-btn"},keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:4}}});const s={form:document.getElementById("cooperationForm"),modal:document.getElementById("work-modalBackdrop"),closeBtn:document.querySelector(".work-modal-close-btn"),successMsg:document.querySelector(".success-msg"),errorMsg:document.querySelector(".error-msg"),emailInput:document.querySelector('[name="emailInput"]')};function q(){const t=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(s.emailInput.value);return s.emailInput.classList.remove("valid","invalid"),t?s.emailInput.classList.add("valid"):s.emailInput.value!==""&&s.emailInput.classList.add("invalid"),s.successMsg.classList.toggle("visible",t),s.errorMsg.classList.toggle("visible",!t),t}document.addEventListener("DOMContentLoaded",()=>{s.emailInput.value="",s.emailInput.classList.remove("valid","invalid"),s.successMsg.classList.remove("visible"),s.errorMsg.classList.remove("visible")});s.emailInput.addEventListener("input",()=>{s.emailInput.value===""?(s.emailInput.classList.remove("valid","invalid"),s.successMsg.classList.remove("visible"),s.errorMsg.classList.remove("visible")):q()});function z(){s.modal.classList.remove("hidden"),document.body.style.overflow="hidden",s.closeBtn.addEventListener("click",n),s.modal.addEventListener("click",n),window.addEventListener("keydown",n)}function n(e){(e.key==="Escape"||e.target===s.modal||e.currentTarget==s.closeBtn)&&(s.modal.classList.add("hidden"),document.body.style.overflow="",s.closeBtn.removeEventListener("click",n),s.modal.removeEventListener("click",n),window.removeEventListener("keydown",n))}function N(e){E.error({class:"work-message error",title:"Error",theme:"dark",message:e,position:"topCenter",timeout:6e3})}s.form.addEventListener("submit",async e=>{e.preventDefault();const t=q();if(!s.form.checkValidity()||!t){s.errorMsg.classList.add("visible");return}const r=new FormData(s.form),c=Object.fromEntries(r.entries());try{await h.post("https://jsonplaceholder.typicode.com/posts",c),s.emailInput.classList.remove("valid","invalid"),s.successMsg.classList.remove("visible"),s.errorMsg.classList.remove("visible"),s.form.reset(),z()}catch{N("Failed to send the form. Please check your input.")}});
//# sourceMappingURL=index.js.map
