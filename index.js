import{A as a,S as l,N as d,K as u}from"./assets/vendor-BmLtt2yV.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",()=>{new a(".about-me-accordion-wrapper",{elementClass:"acc",triggerClass:"acc-btn",panelClass:"acc-content",duration:300,showMultiple:!0}).open(0)});const p=new l(".about-me-swiper",{modules:[d,u],direction:"horizontal",slidesPerView:2,loop:!0,loopedSlides:9,speed:400,navigation:{nextEl:".swiper-button-next"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{768:{slidesPerView:3},1440:{slidesPerView:6}}});window.addEventListener("resize",()=>{p.update()});new a(".faq-list",{elementClass:"faq-item",triggerClass:"faq-item-toggle",panelClass:"faq-item-description",showMultiple:!0,duration:300});const n={coverList:document.querySelector(".covers-list")};window.addEventListener("scroll",f);function f(){const{top:r,bottom:o}=n.coverList.getBoundingClientRect(),{innerHeight:i}=window;r>0&&(r<i||o<=0)||o>0&&(o<i||r<=0)?n.coverList.classList.add("active"):n.coverList.classList.remove("active")}
//# sourceMappingURL=index.js.map
