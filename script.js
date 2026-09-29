// Optimized JavaScript using event delegation and minification principles
document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".gallery");e&&e.addEventListener("click",e=>{"IMG"===e.target.tagName&&console.log("Image clicked:",e.target.alt)})});
