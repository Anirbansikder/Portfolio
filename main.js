const menuBtn = document.querySelector(".menu-btn");
const menuBtn1 = document.querySelector(".top-nav");
const menuBtn2 = document.querySelector(".up");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuBtn1.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuBtn1.classList.remove("open");
    menuOpen = false;
  }
});

menuBtn1.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuBtn1.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuBtn1.classList.remove("open");
    menuOpen = false;
  }
});

menuBtn2.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

// const scroll = new SmoothScroll('a[href*="#"]', {
//   speed: 300,
// });

// $(document).ready(function () {
//   $(".menu-toggler").on("click", function () {
//     $(this).toggleClass("open");
//     $(".top-nav").toggleClass("open");
//   });

//   $(".top-nav .nav-link").on("click", function () {
//     $(".menu-toggler").removeClass("open");
//     $(".top-nav").removeClass("open");
//   });

//   $('nav a[href*="#"]').on("click", function () {
//     $("html, body").animate(
//       {
//         scrollTop: $($(this).attr("href")).offset().top - 100,
//       },
//       2000
//     );
//   });

//   $("#up").on("click", function () {
//     $("html, body").animate(
//       {
//         scrollTop: 0,
//       },
//       2000
//     );
//   });
// });
