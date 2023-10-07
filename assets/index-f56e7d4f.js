(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&u(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function u(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const g=function(){function c(e,t,o,a=!0){const i=document.querySelectorAll(e),l=document.querySelector(t),s=document.querySelector(o),d=document.querySelectorAll("[data-modal]");i.forEach(p=>{p.addEventListener("click",f=>{f.target&&f.preventDefault(),n(d),l.style.display="block",document.body.style.overflow="hidden"})}),s.addEventListener("click",()=>{n(d),r(l)}),l.addEventListener("click",p=>{p.target===l&&a&&(n(d),r(l))})}function n(e){e.forEach(t=>{t.style.display="none"})}function r(e){e.style.display="none",document.body.style.overflow=""}function u(e,t){setTimeout(()=>{document.querySelector(e).style.display="block",document.body.style.overflow="hidden"},t)}c(".popup_engineer_btn",".popup_engineer",".popup_engineer .popup_close"),c(".phone_link",".popup",".popup .popup_close"),c(".popup_calc_btn",".popup_calc",".popup_calc_close"),c(".popup_calc_button",".popup_calc_profile",".popup_calc_profile_close",!1),c(".popup_calc_profile_button",".popup_calc_end",".popup_calc_end_close",!1),u(".popup_engineer",6e4)},y=function(c,n,r,u,e="block"){const t=document.querySelector(c),o=document.querySelectorAll(n),a=document.querySelectorAll(r);t.addEventListener("click",s=>{const d=s.target.closest(n);d!==null&&t.contains(d)&&o.forEach((p,f)=>{d===p&&(i(),l(f))})});function i(){o.forEach(s=>{s.classList.remove(u)}),a.forEach(s=>{s.style.display="none"})}function l(s=0){o[s].classList.add(u),a[s].style.display=e}i(),l()},h=function(c){document.querySelectorAll(c).forEach(r=>{r.addEventListener("input",()=>{r.value=r.value.replace(/\D/,"")})})},_=function(){const c=document.querySelectorAll("form"),n=document.querySelectorAll("input"),r='input[name = "user_phone"]',u={loading:"Загрузка...",success:"Спасибо! Скоро мы с вами свяжемся",fail:"Что-то пошло не так..."};h(r),c.forEach(o=>{o.addEventListener("submit",function(a){a.preventDefault();let i=document.createElement("div");i.classList.add("status"),o.append(i);const l=new FormData(o);e("http://127.0.0.1:3000/upload",l).then(s=>{console.log(s),i.textContent=u.success}).catch(()=>i.textContent=u.fail).finally(()=>{t(),setTimeout(()=>{i.remove()},5e3)})})});async function e(o,a){return document.querySelector(".status").textContent=u.loading,await(await fetch(o,{method:"POST",body:a})).text()}function t(){n.forEach(o=>{o.value=""})}},b=c=>{const n=document.querySelectorAll(".balcon_icons_img"),r=document.querySelectorAll("#width"),u=document.querySelectorAll("#height"),e=document.querySelectorAll("#view_type"),t=document.querySelectorAll(".checkbox");h("#width"),h("#height");function o(a,i,l){i.forEach((s,d)=>{s.addEventListener(a,()=>{switch(s.nodeName){case"SPAN":c[l]=d;break;case"INPUT":s.getAttribute("type")==="checkbox"?(d===0?c[l]="Холодное":c[l]="Теплое",i.forEach((p,f)=>{p.checked=!1,d===f&&(p.checked=!0)})):c[l]=s.value;break;case"SELECT":c[l]=s.value;break}console.log(c)})})}o("click",n,"form"),o("input",r,"width"),o("input",u,"height"),o("change",e,"type"),o("change",t,"profile")},v=(c,n)=>{const r=t=>t<=9?"0"+t:t,u=t=>{const o=Date.parse(t)-Date.parse(new Date),a=Math.floor(o/(1e3*60*60*24)),i=Math.floor(o/(1e3*60*60)%24),l=Math.floor(o/1e3/60%60),s=Math.floor(o/1e3%60);return{total:o,days:a,hours:i,minutes:l,seconds:s}};((t,o)=>{const a=document.querySelector(t),i=a.querySelector("#days"),l=a.querySelector("#hours"),s=a.querySelector("#minutes"),d=a.querySelector("#seconds"),p=setInterval(f,1e3);function f(){const m=u(o);i.textContent=r(m.days),l.textContent=r(m.hours),s.textContent=r(m.minutes),d.textContent=r(m.seconds),m.total<=0&&(i.textContent="00",l.textContent="00",s.textContent="00",d.textContent="00",clearInterval(p))}})(c,n)},w=()=>{let c=document.querySelector(".works"),n=document.createElement("div"),r=document.createElement("img");n.classList.add("popup"),n.append(r),c.append(n),n.style.justifyContent="center",n.style.alignItems="center",c.addEventListener("click",function(u){u.preventDefault();let e=u.target;if(e&&e.classList.contains("preview")){n.style.display="flex";let t=e.parentNode.getAttribute("href");r.setAttribute("src",t),document.body.style.overflow="hidden"}e&&e.matches("div.popup")&&(n.style.display="none",document.body.style.overflow="")})};document.addEventListener("DOMContentLoaded",function(){let c={},n="2023-10-10";b(c),g(),y(".glazing_slider",".glazing_block",".glazing_content","active"),y(".decoration_slider",".no_click",".decoration_content > div > div","after_click"),y(".balcon_icons",".balcon_icons_img",".big_img > img","do_image_more","inline-block"),_(),v(".container1",n),w()});
