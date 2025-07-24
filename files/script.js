
var typed = new Typed(".text", {
    strings: ["Building Scalable E-commerce Platforms" , "Custom Web Applications" , "Payment Gateway Integration", "Responsive & Mobile-Friendly Design", "Content Management (WordPress & Custom CMS)", "API Integration & Automation", "Digital Branding & Marketing Materials"],
    typeSpeed:100,
    backSpeed:200,
    backDelay:1000,
    loop:true
});


const toTop = document.querySelector(".top");
window.addEventListener("scroll",() =>{
    if (window.pageYOffset > 100){
        toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
    }
})