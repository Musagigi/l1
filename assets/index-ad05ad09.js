(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function g(){function c(e,t,s,u=!0){const d=document.querySelectorAll(e),i=document.querySelector(t),o=document.querySelector(s),l=document.querySelectorAll("[data-modal]");d.forEach(p=>{p.addEventListener("click",f=>{f.target&&f.preventDefault(),n(l),i.style.display="block",document.body.style.overflow="hidden"})}),o.addEventListener("click",()=>{n(l),r(i)}),i.addEventListener("click",p=>{p.target===i&&u&&(n(l),r(i))})}function n(e){e.forEach(t=>{t.style.display="none"})}function r(e){e.style.display="none",document.body.style.overflow=""}function a(e,t){setTimeout(()=>{document.querySelector(e).style.display="block",document.body.style.overflow="hidden"},t)}c(".popup_engineer_btn",".popup_engineer",".popup_engineer .popup_close"),c(".phone_link",".popup",".popup .popup_close"),c(".popup_calc_btn",".popup_calc",".popup_calc_close"),c(".popup_calc_button",".popup_calc_profile",".popup_calc_profile_close",!1),c(".popup_calc_profile_button",".popup_calc_end",".popup_calc_end_close",!1),a(".popup_engineer",6e4)}function y(c,n,r,a,e="block"){const t=document.querySelector(c),s=document.querySelectorAll(n),u=document.querySelectorAll(r);t.addEventListener("click",o=>{const l=o.target.closest(n);l&&t.contains(l)&&s.forEach((p,f)=>{l===p&&(d(),i(f))})});function d(){s.forEach(o=>{o.classList.remove(a)}),u.forEach(o=>{o.style.display="none"})}function i(o=0){s[o].classList.add(a),u[o].style.display=e}d(),i()}function h(c){document.querySelectorAll(c).forEach(r=>{r.addEventListener("input",()=>{r.value=r.value.replace(/\D/,"")})})}function _(){const c=document.querySelectorAll("form"),n=document.querySelectorAll("input"),r='input[name = "user_phone"]',{loading:a,success:e,fail:t}={loading:"Загрузка...",success:"Спасибо! Скоро мы с вами свяжемся",fail:"Что-то пошло не так..."};h(r),c.forEach(o=>{o.addEventListener("submit",s)});function s(o){o.preventDefault();let l=d();this.append(l);const p=new FormData(this);u("http://127.0.0.1:3000/upload",p).then(f=>{console.log(f),l.textContent=e}).catch(()=>l.textContent=t).finally(()=>{i(),setTimeout(()=>l.remove(),5e3)})}async function u(o,l){let p=document.querySelector(".status");return p.textContent=a,await(await fetch(o,{method:"POST",body:l})).text()}function d(){let o=document.createElement("div");return o.classList.add("status"),o}function i(){n.forEach(o=>{o.value=""})}}function b(c){const n=document.querySelectorAll(".balcon_icons_img"),r=document.querySelectorAll("#width"),a=document.querySelectorAll("#height"),e=document.querySelectorAll("#view_type"),t=document.querySelectorAll(".checkbox");h("#width"),h("#height");function s(u,d,i){d.forEach((o,l)=>{o.addEventListener(u,()=>{switch(o.nodeName){case"SPAN":c[i]=l;break;case"INPUT":o.getAttribute("type")==="checkbox"?(c[i]=l===0?"Холодное":"Теплое",d.forEach((p,f)=>{p.checked=l===f})):c[i]=o.value;break;case"SELECT":c[i]=o.value;break}console.log(c)})})}s("click",n,"form"),s("input",r,"width"),s("input",a,"height"),s("change",e,"type"),s("change",t,"profile")}function v(c,n){const r=t=>t<=9?"0"+t:t,a=t=>{const s=Date.parse(t)-Date.parse(new Date),u=Math.floor(s/(1e3*60*60*24)),d=Math.floor(s/(1e3*60*60)%24),i=Math.floor(s/1e3/60%60),o=Math.floor(s/1e3%60);return{total:s,days:u,hours:d,minutes:i,seconds:o}};((t,s)=>{const u=document.querySelector(t),d=u.querySelector("#days"),i=u.querySelector("#hours"),o=u.querySelector("#minutes"),l=u.querySelector("#seconds"),p=setInterval(f,1e3);function f(){const m=a(s);d.textContent=r(m.days),i.textContent=r(m.hours),o.textContent=r(m.minutes),l.textContent=r(m.seconds),m.total<=0&&(d.textContent="00",i.textContent="00",o.textContent="00",l.textContent="00",clearInterval(p))}})(c,n)}function w(){let c=document.querySelector(".works"),n=document.createElement("div"),r=document.createElement("img");n.classList.add("popup"),n.append(r),c.append(n),n.style.justifyContent="center",n.style.alignItems="center",c.addEventListener("click",function(a){a.preventDefault();let e=a.target;if(e&&e.classList.contains("preview")){n.style.display="flex";let t=e.parentNode.getAttribute("href");r.setAttribute("src",t),document.body.style.overflow="hidden"}e&&e.matches("div.popup")&&(n.style.display="none",document.body.style.overflow="")})}document.addEventListener("DOMContentLoaded",function(){let c={},n="2023-10-10";b(c),g(),y(".glazing_slider",".glazing_block",".glazing_content","active"),y(".decoration_slider",".no_click",".decoration_content > div > div","after_click"),y(".balcon_icons",".balcon_icons_img",".big_img > img","do_image_more","inline-block"),_(),v(".container1",n),w()});