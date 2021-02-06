$(document).ready(function () {
  $(".first-slider").owlCarousel({
    loop: true,
    margin: 30,
    navText: [
      "<img src='assets/icons/slide-prev.svg'>",
      "<img src='assets/icons/slide-next.svg'>",
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
        dots: true,
      },
      1000: {
        items: 3,
        nav: true,
        dots: true,
      },
    },
  });

  $(".second-slider").owlCarousel({
    loop: true,
    margin: 30,
    items: 1,
    // itemElement: '<div class="parent-item"></div>',
    navText: [
      "<img src='assets/icons/slide-prev.svg'>",
      "<img src='assets/icons/slide-next.svg'>",
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
        dots: true,
      },
      1000: {
        items: 1,
        nav: true,
        dots: true,
      },
    },
  });
});
