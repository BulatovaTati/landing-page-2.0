(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function i(){const o=document.querySelector(".App");o?o.classList.add("animate_content"):console.error(".App section not found");const n=document.querySelector("#switch").checked?"dark":"light";document.documentElement.setAttribute("data-theme",n);const r=document.querySelector("#toggle-main");r?r.checked=n==="dark":console.error("#toggle-main not found"),setTimeout(()=>{o?o.style.display="none":console.error(".App section not found")},1e3),["header-container","hero-container","about-container","tech-container","projects-container","benefits-container","questions-container","reviews-container","collaboration-container","footer-container","to-top-container"].forEach(e=>{const t=document.getElementById(e);t?t.style.display="block":console.error(`Element with ID ${e} not found`)})}document.querySelector(".start-btn").addEventListener("click",i);document.querySelector("#toggle-main").addEventListener("change",()=>{const n=document.querySelector("#toggle-main").checked?"dark":"light";document.documentElement.setAttribute("data-theme",n)});const l=document.querySelector(".scroll-to-top");l.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});window.onscroll=()=>a();function a(){const o=document.querySelector(".scroll-to-top");window.scrollY>60?o.classList.remove("js-transparent"):o.classList.add("js-transparent")}
//# sourceMappingURL=index.js.map
