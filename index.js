(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();function i(){const n=document.querySelector(".App");n?n.classList.add("animate_content"):console.error(".App section not found");const r=document.querySelector("#switch").checked?"dark":"light";document.documentElement.setAttribute("data-theme",r),setTimeout(()=>{const o=document.querySelector(".App");o?o.style.display="none":console.error(".App section not found")},1e3),["header-container","hero-container","about-container","tech-container","projects-container","benefits-container","questions-container","reviews-container","collaboration-container","footer-container","to-top-container"].forEach(o=>{const e=document.getElementById(o);e?e.style.display="block":console.error(`Element with ID ${o} not found`)})}document.querySelector(".start-btn").addEventListener("click",i);const l=document.querySelector(".scroll-to-top");l.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});window.onscroll=()=>a();function a(){const n=document.querySelector(".scroll-to-top");window.scrollY>60?n.classList.remove("js-transparent"):n.classList.add("js-transparent")}
//# sourceMappingURL=index.js.map
