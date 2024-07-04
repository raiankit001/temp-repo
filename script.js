var barIcon = document.querySelector('#bar');
var menu = document.querySelector('#menu');
var closeIcon = document.querySelector('#close-icon');

barIcon.addEventListener('click',()=>{
  menu.classList.add('bar-menu');
  barIcon.style.display = "none";
})

closeIcon.addEventListener('click',()=>{
  menu.classList.remove('bar-menu');
  barIcon.style.display = "block";
})


   //event for the logo scrolling
window.addEventListener("scroll", function () {
  // console.log("scrolling");
  // console.log(this.window.scrollY);
  if (window.scrollY > 0) {
    document.querySelector("#header").style.height = "5rem";
    document.querySelector(".circle-logo").style.display = "block";
    document.querySelector(".full-logo").style.display = "none";
  } else {
    document.querySelector(".full-logo").style.display = "block";
    document.querySelector("#header").style.height = "6rem";
    document.querySelector(".circle-logo").style.display = "none";
  }
});

function highlightActiveMenu() {
  // Get the current URL path
  const path = window.location.pathname;
  console.log('Load');

  // Extract the page name from the URL path
  const page = path.split("/").pop().split(".")[0];
  console.log(page);

  // Select the corresponding menu item based on the page name
  const menuItem = document.getElementById(page);

  // Add the 'active' class to the selected menu item
  if (menuItem) {
      menuItem.classList.add("activeli");
  }
}
window.onload = highlightActiveMenu;


//for services swiper
var swiper = new Swiper(".slide-content-1", {
  slidesPerView: 2,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2000,
  },
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  navigation: {
    nextEl: ".button-next-1",
    prevEl: ".button-prev-1",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
  },
});

//for client swiper
var swiper = new Swiper(".slide-content-2", {
  slidesPerView: 2,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2000,
  },
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  navigation: {
    nextEl: ".button-next-2",
    prevEl: ".button-prev-2",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
  },
});


