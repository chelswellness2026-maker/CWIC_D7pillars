// =============================
// CHELS WELLNESS INTERNATIONAL
// Main JavaScript
// =============================

// Sticky Navigation Shadow
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.15)";
    } else {
        header.style.boxShadow = "0 2px 15px rgba(0,0,0,.08)";
    }
});

// Smooth Fade Animation
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

});

document.querySelectorAll(".card,.box,.about,.cta").forEach((el) => {

    observer.observe(el);

});

// Scroll to Top Button
const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.cssText = `
position:fixed;
right:25px;
bottom:25px;
width:55px;
height:55px;
border:none;
border-radius:50%;
background:#1f8a70;
color:#fff;
font-size:24px;
cursor:pointer;
display:none;
box-shadow:0 10px 25px rgba(0,0,0,.2);
z-index:999;
`;

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};