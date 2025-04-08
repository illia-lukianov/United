import{A as L,S as w,N as f,K as g,a as h,i as b}from"./assets/vendor-BAf7YG4r.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const m of n.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&l(m)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}})();const E=document.querySelector(".menu"),a=document.querySelector(".nav");E.addEventListener("click",e=>{e.preventDefault(),a.classList.toggle("is-open")});document.addEventListener("click",e=>{!a.contains(e.target)&&!E.contains(e.target)&&a.classList.remove("is-open")});a.addEventListener("click",()=>{a.classList.remove("is-open")});const c={modalBurger:document.querySelector(".burger-btn"),modalMenu:document.querySelector(".modal-menu"),modalClose:document.querySelector(".modal-close-btn"),closeElements:document.querySelectorAll(".nav-item, .order-project-btn-modal")};c.modalBurger.addEventListener("click",e=>{e.preventDefault(),c.modalMenu.classList.add("is-open"),document.body.classList.add("no-scroll")});c.modalClose.addEventListener("click",()=>{c.modalMenu.classList.remove("is-open"),document.body.classList.remove("no-scroll")});c.closeElements.forEach(e=>{e.addEventListener("click",()=>{c.modalMenu.classList.remove("is-open"),document.body.classList.remove("no-scroll")})});const q=document.querySelector(".themes-toggle"),k=document.querySelector(".overlay-themes-menu"),S=document.querySelectorAll(".themes-option");q.addEventListener("click",()=>{k.classList.toggle("is-active")});k.addEventListener("click",e=>{S.forEach(t=>{t.classList.remove("is-active")}),e.target.classList.add("is-active"),document.documentElement.dataset.theme=e.target.dataset.theme});document.addEventListener("DOMContentLoaded",()=>{new L(".about-me-accordion-wrapper",{elementClass:"acc",triggerClass:"acc-btn",panelClass:"acc-content",duration:300,showMultiple:!0}).open(0)});const B=new w(".about-me-swiper",{modules:[f,g],direction:"horizontal",slidesPerView:2,loop:!0,loopedSlides:9,speed:400,navigation:{nextEl:".swiper-button-next"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{768:{slidesPerView:3},1440:{slidesPerView:6}}});window.addEventListener("resize",()=>{B.update()});const p=new w(".projects-swiper-container",{modules:[f,g],speed:400,slidesPerView:1,spaceBetween:0,navigation:{nextEl:".projects-next-btn",prevEl:".projects-prev-btn"},keyboard:{enabled:!0,onlyInViewport:!0}});function C(){const e=document.querySelector(".projects-prev-btn"),t=document.querySelector(".projects-next-btn");p.isBeginning?(e.disabled=!0,e.classList.add("disabled")):(e.disabled=!1,e.classList.remove("disabled")),p.isEnd?(t.disabled=!0,t.classList.add("disabled")):(t.disabled=!1,t.classList.remove("disabled"))}p.on("slideChange",C);C();new L(".faq-list",{elementClass:"faq-item",triggerClass:"faq-item-toggle",panelClass:"faq-item-description",showMultiple:!0,duration:300});const u={coverList:document.querySelector(".covers-list")};window.addEventListener("scroll",x);function x(){const{top:e,bottom:t}=u.coverList.getBoundingClientRect(),{innerHeight:r}=window;e>0&&(e<r||t<=0)||t>0&&(t<r||e<=0)?u.coverList.classList.add("active"):u.coverList.classList.remove("active")}async function M(){try{return(await h.get("https://portfolio-js.b.goit.study/api/reviews")).data}catch(e){return e}}const d={list:document.querySelector(".reviews-list"),swiperContainer:document.querySelector(".reviews-swiper")};let v=!0,y=!1;window.addEventListener("scroll",I);function P({avatar_url:e,author:t,review:r}){return`<li class="reviews-item swiper-slide">
              <div class="swiper-slide-transform">
                <img class="reviews-item-img" src="${e}" alt="Ihor Trachuk" width="48" height="48" />
                <h3 class="reviews-item-title">${t}</h3>
                <p class="reviews-item-text">
                  ${r}
                </p>
              </div>
          </li>`}function V(e){return e.map(P).join("")}function j(){const e=document.createElement("li"),t=document.createElement("span");e.classList.add("reviews-item-error"),t.textContent="Not found",t.classList.add("reviews-text-error"),e.appendChild(t),d.list.appendChild(e)}document.addEventListener("DOMContentLoaded",O);async function O(){try{const e=await M(),t=V(e);d.list.insertAdjacentHTML("beforeend",t),v=!0}catch{j(),v=!1}}function I(){if(!v&&!y){const{top:e,bottom:t}=d.swiperContainer.getBoundingClientRect(),{innerHeight:r}=window;(e>0&&(e<r||t<=0)||t>0&&(t<r||e<=0))&&(y=!0,b.error({class:"work-message error",title:"Error",theme:"dark",message:"Failed to load images.",position:"topCenter",timeout:6e3}))}}new w(d.swiperContainer,{modules:[f,g],direction:"horizontal",slidesPerView:1,speed:400,spaceBetween:16,navigation:{nextEl:".reviews-next-btn",prevEl:".reviews-prev-btn"},keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:4}}});const s={form:document.getElementById("cooperationForm"),modal:document.getElementById("work-modalBackdrop"),closeBtn:document.querySelector(".work-modal-close-btn")};function R(){s.modal.classList.remove("hidden"),document.body.style.overflow="hidden",s.closeBtn.addEventListener("click",i),s.modal.addEventListener("click",i),window.addEventListener("keydown",i)}function i(e){(e.key==="Escape"||e.target===s.modal||e.currentTarget==s.closeBtn)&&(s.modal.classList.add("hidden"),document.body.style.overflow="",s.closeBtn.removeEventListener("click",i),s.modal.removeEventListener("click",i),window.removeEventListener("keydown",i))}function A(e){b.error({class:"work-message error",title:"Error",theme:"dark",message:e,position:"topCenter",timeout:6e3})}s.form.addEventListener("submit",async e=>{if(e.preventDefault(),!s.form.checkValidity()){s.form.reportValidity();return}const t=new FormData(s.form),r=Object.fromEntries(t.entries());try{await h.post("https://jsonplaceholder.typicode.com/posts",r),s.form.reset(),R()}catch{A("Failed to send the form. Please check your input.")}});
//# sourceMappingURL=index.js.map
