const htmlHead = document.querySelector(".html-head");
const cssHead = document.querySelector(".css-head");
const jsHead = document.querySelector(".js-head");
const htmlBody = document.querySelector(".html-body");
const cssBody = document.querySelector(".css-body");
const jsBody = document.querySelector(".js-body");

htmlHead.addEventListener("click", ()=> {
    htmlHead.classList.add("active");
    cssHead.classList.remove("active");
    jsHead.classList.remove("active");
    
    htmlBody.classList.add("active");
    cssBody.classList.remove("active");
    jsBody.classList.remove("active");
    
})

cssHead.addEventListener("click", ()=> {
    cssHead.classList.add("active");
    htmlHead.classList.remove("active");
    jsHead.classList.remove("active");
    
    cssBody.classList.add("active");
    htmlBody.classList.remove("active");
    jsBody.classList.remove("active");
})
jsHead.addEventListener("click", ()=> {
    jsHead.classList.add("active");
    htmlHead.classList.remove("active");
    cssHead.classList.remove("active");

    jsBody.classList.add("active");
    htmlBody.classList.remove("active");
    cssBody.classList.remove("active");
})