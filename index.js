import{A as y,S as f,N as w,K as L,a as b,i as h}from"./assets/vendor-CRcA_Kyr.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))d(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&d(l)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();const E=document.querySelector(".menu"),a=document.querySelector(".nav");E.addEventListener("click",e=>{e.preventDefault(),a.classList.toggle("is-open")});document.addEventListener("click",e=>{!a.contains(e.target)&&!E.contains(e.target)&&a.classList.remove("is-open")});a.addEventListener("click",()=>{a.classList.remove("is-open")});const i={modalBurger:document.querySelector(".burger-lnk"),modalMenu:document.querySelector(".modal-menu"),modalClose:document.querySelector(".modal-close-lnk"),closeElements:document.querySelectorAll(".nav-item, .order-project-btn-modal")};i.modalBurger.addEventListener("click",e=>{e.preventDefault(),i.modalMenu.classList.add("is-open"),document.body.classList.add("no-scroll")});i.modalClose.addEventListener("click",()=>{i.modalMenu.classList.remove("is-open"),document.body.classList.remove("no-scroll")});i.closeElements.forEach(e=>{e.addEventListener("click",()=>{i.modalMenu.classList.remove("is-open"),document.body.classList.remove("no-scroll")})});document.addEventListener("DOMContentLoaded",()=>{new y(".about-me-accordion-wrapper",{elementClass:"acc",triggerClass:"acc-btn",panelClass:"acc-content",duration:300,showMultiple:!0}).open(0)});const C=new f(".about-me-swiper",{modules:[w,L],direction:"horizontal",slidesPerView:2,loop:!0,loopedSlides:9,speed:400,navigation:{nextEl:".swiper-button-next"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{768:{slidesPerView:3},1440:{slidesPerView:6}}});window.addEventListener("resize",()=>{C.update()});const m=new f(".projects-swiper-container",{modules:[w,L],loop:!0,loopedSlides:3,speed:400,slidesPerView:1,spaceBetween:0,navigation:{nextEl:".projects-next-btn",prevEl:".projects-prev-btn"}});function k(){const e=document.querySelector(".projects-prev-btn"),t=document.querySelector(".projects-next-btn");m.isBeginning?(e.disabled=!0,e.classList.add("disabled")):(e.disabled=!1,e.classList.remove("disabled")),m.isEnd?(t.disabled=!0,t.classList.add("disabled")):(t.disabled=!1,t.classList.remove("disabled"))}m.on("slideChange",k);k();new y(".faq-list",{elementClass:"faq-item",triggerClass:"faq-item-toggle",panelClass:"faq-item-description",showMultiple:!0,duration:300});const u={coverList:document.querySelector(".covers-list")};window.addEventListener("scroll",S);function S(){const{top:e,bottom:t}=u.coverList.getBoundingClientRect(),{innerHeight:s}=window;e>0&&(e<s||t<=0)||t>0&&(t<s||e<=0)?u.coverList.classList.add("active"):u.coverList.classList.remove("active")}async function q(){try{return(await b.get("https://portfolio-js.b.goit.study/api/reviews")).data}catch(e){return e}}const c={list:document.querySelector(".reviews-list"),swiperContainer:document.querySelector(".reviews-swiper")};let p=!1,g=!1;window.addEventListener("scroll",j);function B({avatar_url:e,author:t,review:s}){return`<li class="reviews-item swiper-slide">
              <div class="swiper-slide-transform">
                <img class="reviews-item-img" src="${e}" alt="Ihor Trachuk" width="48" height="48" />
                <h3 class="reviews-item-title">${t}</h3>
                <p class="reviews-item-text">
                  ${s}
                </p>
              </div>
          </li>`}function x(e){return e.map(B).join("")}function M(){const e=document.createElement("li"),t=document.createElement("span");e.classList.add("reviews-item-error"),t.textContent="Not found",t.classList.add("reviews-text-error"),e.appendChild(t),c.list.appendChild(e)}document.addEventListener("DOMContentLoaded",P);async function P(){try{const e=await q(),t=x(e);c.list.insertAdjacentHTML("beforeend",t),p=!0}catch{M(),p=!1}}function j(){if(!p&&!g){const{top:e,bottom:t}=c.swiperContainer.getBoundingClientRect(),{innerHeight:s}=window;(e>0&&(e<s||t<=0)||t>0&&(t<s||e<=0))&&(g=!0,h.error({class:"work-message error",title:"Error",theme:"dark",message:"Failed to load images.",position:"topCenter",timeout:6e3}))}}new f(c.swiperContainer,{modules:[w],slidesPerView:1,speed:400,spaceBetween:16,keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:4}},direction:"horizontal",navigation:{nextEl:".reviews-next-btn",prevEl:".reviews-prev-btn"}});const n={form:document.getElementById("cooperationForm"),modal:document.getElementById("work-modalBackdrop"),closeBtn:document.querySelector(".work-modal-close-btn")};function V(){n.modal.classList.remove("hidden"),document.body.style.overflow="hidden"}function v(){n.modal.classList.add("hidden"),document.body.style.overflow=""}function O(e){h.error({class:"work-message error",title:"Error",theme:"dark",message:e,position:"topCenter",timeout:6e3})}n.form.addEventListener("submit",async e=>{if(e.preventDefault(),!n.form.checkValidity()){n.form.reportValidity();return}const t=new FormData(n.form),s=Object.fromEntries(t.entries());try{await b.post("https://jsonplaceholder.typicode.com/posts",s),n.form.reset(),V()}catch{O("Failed to send the form. Please check your input.")}});n.closeBtn.addEventListener("click",v);n.modal.addEventListener("click",e=>{e.target===n.modal&&v()});window.addEventListener("keydown",e=>{e.key==="Escape"&&v()});
//# sourceMappingURL=index.js.map
