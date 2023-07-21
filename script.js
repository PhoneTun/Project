
let navbar=document.querySelector('.header .navbar');




document.querySelector('#menu-btn').onclick=() =>{
    navbar.classList.add('active');
}
document.querySelector('#nav-close').onclick=() =>{
    navbar.classList.remove('active');
}


let seachForm=document.querySelector('.search-form');

document.querySelector('#search-btn').onclick=() =>{
    seachForm.classList.add('active');
}
document.querySelector('#close-search').onclick=() =>{
    seachForm.classList.remove('active');
}



window.onscroll=() =>{
    navbar.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slvarideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });




console.log("helo")