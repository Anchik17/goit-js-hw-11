import{S as h,i as p}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const y=o=>{const s=new URLSearchParams({key:"44080035-ad15b59279a4b32b32cca2a53",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${s}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})},g=new h(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}),b=(o,s)=>{const r=o.hits.map(({largeImageURL:a,webformatURL:e,tags:t,likes:n,views:d,comments:f,downloads:m})=>`<li class="gallery-item">
            <a class="gallery-link" href="${a}">
              <img src="${e}" alt="${t}" />
            </a>
            <div class="description">
              <p>Likes <span class="desc-span">${n}</span></p>
              <p>Views <span class="desc-span">${d}</span></p>
              <p>Comments <span class="desc-span">${f}</span></p>
              <p>Downloads <span class="desc-span">${m}</span></p>
            </div>
          </li>`).join("");s.insertAdjacentHTML("beforeend",r),g.refresh()},i=document.querySelector("section").children,u=i[0],c=i[1],l=i[2];p.settings({progressBar:!1,timeout:4e3,resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight"});const L=o=>{o.preventDefault(),l.innerHTML="",c.style.display="block";const s=o.target.searchTerm.value.trim().toLowerCase();y(s).then(r=>{r.hits.length===0&&p.warning({message:"Sorry, there are no images matching your search query. Please try again!"}),b(r,l)}).catch(r=>console.error("Error",r)).finally(()=>{u.reset(),c.style.display="none"})};u.addEventListener("submit",L);
//# sourceMappingURL=commonHelpers.js.map
