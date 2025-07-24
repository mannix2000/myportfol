
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
 let currentSlide = 0;

  function moveSlide(direction) {
    const track = document.querySelector('.testimonial-track');
    const slides = document.querySelectorAll('.testimonial-slide');
    const totalSlides = slides.length;

    currentSlide += direction;

    if (currentSlide >= totalSlides) currentSlide = 0;
    if (currentSlide < 0) currentSlide = totalSlides - 1;

    track.style.transform = `translateX(-${currentSlide * 100}%)`;
  }

  // Auto-rotate every 5s
  setInterval(() => moveSlide(1), 5000);
   let slideIndex = 0;

  function moveSlide(direction) {
    const track = document.querySelector('.testimonial-track');
    const slides = document.querySelectorAll('.testimonial-track > div');
    slideIndex = (slideIndex + direction + slides.length) % slides.length;
    track.style.transform = `translateX(-${slideIndex * 100}%)`;
  }

  setInterval(() => moveSlide(1), 6000);