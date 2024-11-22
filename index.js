import{a as S,S as q,N as L,K as _}from"./assets/vendor-BKXvhpJ4.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();function D(){const e=document.querySelector(".App");e?e.classList.add("animate_content"):console.error(".App section not found");const t=document.querySelector("#switch").checked?"dark":"light";document.documentElement.setAttribute("data-theme",t);const r=document.querySelector("#toggle-main");r?r.checked=t==="dark":console.error("#toggle-main not found"),setTimeout(()=>{e?e.style.display="none":console.error(".App section not found")},1e3),[".hdr",".ftr",".tch",".hr",".prj",".bnf",".abt",".qtn",".rws",".clb",".top"].forEach(s=>{const o=document.querySelector(s);o?o.style.display="block":console.error(`Element with class ${s} not found`)})}document.querySelector(".start-btn").addEventListener("click",D);document.querySelector("#toggle-main").addEventListener("change",()=>{const t=document.querySelector("#toggle-main").checked?"dark":"light";document.documentElement.setAttribute("data-theme",t)});const p=document.getElementById("modal"),M=document.querySelector(".close-btn");function d(){p.style.display="none",document.removeEventListener("keydown",E)}function E(e){e.key==="Escape"&&d()}M.addEventListener("click",d);p.addEventListener("click",e=>{e.target===p&&d()});const T=document.querySelector(".scroll-to-top");T.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});window.onscroll=()=>B();function B(){const e=document.querySelector(".scroll-to-top");window.scrollY>60?e.classList.remove("js-transparent"):e.classList.add("js-transparent")}const P="/landing-page-2.0/assets/icons-6LXarLes.svg",m="/landing-page-2.0/assets/projects-desk-03-min-bAztutHK.png",A="/landing-page-2.0/assets/projects-desk-03@2x-min-D7O6BJsL.png",C="/landing-page-2.0/assets/projects-mob-03-min-BsXsyoM6.png",$="/landing-page-2.0/assets/projects-mob-03@2x-min-tmcSzpo2.png",N="/landing-page-2.0/assets/projects-tabl-03-min-ZgDTbOh9.png",O="/landing-page-2.0/assets/projects-tabl-03@2x-min-Dqd8dn0C.png",u="/landing-page-2.0/assets/projects-desk-04-min-yxZx66BP.png",X="/landing-page-2.0/assets/projects-desk-04@2x-min-DHJNdR6B.png",I="/landing-page-2.0/assets/projects-mob-04-min-5yr3aGDi.png",z="/landing-page-2.0/assets/projects-mob-04@2x-min-BeXemoj4.png",F="/landing-page-2.0/assets/projects-tabl-04-min-Dt9XScdK.png",K="/landing-page-2.0/assets/projects-tabl-04@2x-min-B8Ml2TOY.png",b="/landing-page-2.0/assets/projects-desk-05-min-CfD1cLSZ.png",H="/landing-page-2.0/assets/projects-desk-05@2x-min-BRPn2X1J.png",R="/landing-page-2.0/assets/projects-mob-05-min-Db3py1Xm.png",W="/landing-page-2.0/assets/projects-mob-05@2x-min-B8zvmCB6.png",Z="/landing-page-2.0/assets/projects-tabl-05-min-F3tbbktz.png",J="/landing-page-2.0/assets/projects-tabl-05@2x-min-BRqBFzgK.png",x="/landing-page-2.0/assets/projects-desk-06-min-X_gqtJm5.png",Q="/landing-page-2.0/assets/projects-desk-06@2x-min-Dj8eCfdF.png",V="/landing-page-2.0/assets/projects-mob-06-min-C9QNW9Tj.png",U="/landing-page-2.0/assets/projects-mob-06@2x-min-DEtw7lg5.png",Y="/landing-page-2.0/assets/projects-tabl-06-min-ugbcXMlD.png",G="/landing-page-2.0/assets/projects-tabl-06@2x-min-CmmfjQzn.png",j="/landing-page-2.0/assets/projects-desk-07-min--lZv1p8n.png",ee="/landing-page-2.0/assets/projects-desk-07@2x-min-DmSkXiQs.png",te="/landing-page-2.0/assets/projects-mob-07-min-BSVWNsA-.png",se="/landing-page-2.0/assets/projects-mob-07@2x-min-Dd3dUvIN.png",oe="/landing-page-2.0/assets/projects-tabl-07-min-CPlUFmPk.png",ne="/landing-page-2.0/assets/projects-tabl-07@2x-min-BDIDMcu4.png",f="/landing-page-2.0/assets/projects-desk-08-min-xocuOah2.png",re="/landing-page-2.0/assets/projects-desk-08@2x-min-BIWP6k6v.png",ce="/landing-page-2.0/assets/projects-mob-08-min-DBYeKoNQ.png",ae="/landing-page-2.0/assets/projects-mob-08@2x-min-Ws78KLoX.png",ie="/landing-page-2.0/assets/projects-tabl-08-min-C_fZqAdW.png",le="/landing-page-2.0/assets/projects-tabl-08@2x-min-DRzjhCHA.png",v="/landing-page-2.0/assets/projects-desk-09-min-DsvIyQeP.png",pe="/landing-page-2.0/assets/projects-desk-09@2x-min-BvUdwZmo.png",de="/landing-page-2.0/assets/projects-mob-09-min-DX2Z5Nr9.png",ge="/landing-page-2.0/assets/projects-mob-09@2x-min-Cc_85EFK.png",me="/landing-page-2.0/assets/projects-tabl-09-min-DT00A0X5.png",ue="/landing-page-2.0/assets/projects-tabl-09@2x-min-BOveHSsW.png",w=[{alt:"Mimino website",img:m,sources:{mobile:{"1x":C,"2x":$},tablet:{"1x":N,"2x":O},desktop:{"1x":m,"2x":A}}},{alt:"Vyshyvanka vibes Landing Page",img:u,sources:{mobile:{"1x":I,"2x":z},tablet:{"1x":F,"2x":K},desktop:{"1x":u,"2x":X}}},{alt:"Power pulse webservice",img:b,sources:{mobile:{"1x":R,"2x":W},tablet:{"1x":Z,"2x":J},desktop:{"1x":b,"2x":H}}},{alt:"Chego jewelry website",img:x,sources:{mobile:{"1x":V,"2x":U},tablet:{"1x":Y,"2x":G},desktop:{"1x":x,"2x":Q}}},{alt:"Energy flow webservice ",img:j,sources:{mobile:{"1x":te,"2x":se},tablet:{"1x":oe,"2x":ne},desktop:{"1x":j,"2x":ee}}},{alt:"Starlight studio landing page",img:f,sources:{mobile:{"1x":ce,"2x":ae},tablet:{"1x":ie,"2x":le},desktop:{"1x":f,"2x":re}}},{alt:"Fruitbox online store",img:v,sources:{mobile:{"1x":de,"2x":ge},tablet:{"1x":me,"2x":ue},desktop:{"1x":v,"2x":pe}}}],be=document.querySelector(".projects-list_img"),h=document.querySelector(".projects-button_loading");h.addEventListener("click",xe);let i=0;function xe(){const t=w.slice(i,i+3);be.insertAdjacentHTML("beforeend",je(t)),i+=t.length,i>=w.length&&h.classList.add("hidden")}function je(e){return e.map(({alt:t,img:r,sources:{mobile:n,tablet:s,desktop:o}})=>`
      <li>
        <picture>
          <source
            media="(max-width: 767px)"
            srcset="${n["1x"]} 1x, ${n["2x"]} 2x"
          />
          <source
            media="(max-width: 1279px)"
            srcset="${s["1x"]} 1x, ${s["2x"]} 2x"
          />
          <source
            media="(min-width: 1280px)"
            srcset="${o["1x"]} 1x, ${o["2x"]} 2x"
          />
          <img
            class="projects-img"
            src="${r}"
            alt="${t}"
          />
        </picture>  
        <div class="projects-blok_descr">
          <p class="projects-img_descr">React, JavaScript, Node JS, Git</p>
          <div class="projects-box_descr">
            <h3 class="projects-img_title">${t}</h3>
            <a
              href="https://bulatovatati.github.io/landing-page-2.0/"
              class="projects-button_link"
              target="_blank"
            >
              <span class="projects-button_text">VISIT</span>
              <svg class="projects-button_icon" width="24" height="24">
                <use href="${P}#icon-arrow-projects"></use>
              </svg>
            </a>
          </div>
        </div> 
      </li>`).join("")}document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelectorAll(".faq-item"),t=e[0],r=e[0].querySelector(".faq-answer"),n=e[0].querySelector(".faq-arrow"),s=t.querySelector(".faq-question");t.classList.add("open"),r.classList.add("show"),n.classList.add("open"),s.classList.add("active"),e.forEach(o=>{const c=o.querySelector(".faq-question"),g=o.querySelector(".faq-answer"),y=o.querySelector(".faq-arrow");c.addEventListener("click",()=>{const k=g.classList.contains("open");e.forEach(a=>{a.classList.remove("open"),a.querySelector(".faq-answer").classList.remove("show"),a.querySelector(".faq-arrow").classList.remove("open"),a.querySelector(".faq-question").classList.remove("active")}),k||(o.classList.add("open"),g.classList.add("show"),y.classList.add("open"),c.classList.add("active"))})})});const l=document.querySelector(".reviews-swiper-wrapper");document.querySelector(".reviews-prev-btn");document.querySelector(".reviews-next-btn");const fe=document.querySelector(".reviews-container"),ve="https://portfolio-js.b.goit.study/api/reviews";async function we(){try{const e=await S.get(ve),t=e.data;if(console.log("response",e),!t||t.length===0){l.innerHTML='<li class="list_reviews">Not Found</li>';return}const r=t.map(n=>`
          <li class="swiper-slide reviews-swiper-slide">
            
            <div class="reviews-desc">
             
              <div class="reviews-text">${n.review}</div>
            </div>
            <div class="reviews-info-author">
                <img 
                  src="${n.avatar_url}" 
                  loading="lazy" 
                  alt="${n.author}" 
                  class="reviews-img" 
                  width="48" 
                  height="48">
                   <h3 class="reviews-item-subtitle">${n.author}</h3>
            </div>
          </li>
        `).join("");l.innerHTML=r,ye()}catch(e){console.error("Error fetching reviews:",e),he("Failed to load reviews. Please try again later."),l.innerHTML="<li>Not Found</li>"}}function he(e){const t=document.createElement("div");t.classList.add("error-message"),t.textContent=e,fe.appendChild(t)}function ye(){new q(".swiper-reviews",{modules:[L,_],slidesPerView:1,spaceBetween:20,navigation:{nextEl:".reviews-next-btn",prevEl:".reviews-prev-btn"},keyboard:{enabled:!0,onlyInViewport:!0},a11y:{prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide"},allowTouchMove:!0})}we();
//# sourceMappingURL=index.js.map
