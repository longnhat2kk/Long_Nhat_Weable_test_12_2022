function getVals() {
  // Get slider values
  let parent = this.parentNode;
  let slides = parent.getElementsByTagName("input");
  let slide1 = parseFloat(slides[0].value);
  let slide2 = parseFloat(slides[1].value);
  // Neither slider will clip the other, so make sure we determine which is larger
  if (slide1 > slide2) {
    let tmp = slide2;
    slide2 = slide1;
    slide1 = tmp;
  }

  let displayElement = parent.getElementsByClassName("rangeValues")[0];
  displayElement.innerHTML = "$" + slide1 + " - $" + slide2;
}

window.onload = function () {
  // Initialize Sliders
  let sliderSections = document.getElementsByClassName("range-slider");
  for (let x = 0; x < sliderSections.length; x++) {
    let sliders = sliderSections[x].getElementsByTagName("input");
    for (let y = 0; y < sliders.length; y++) {
      if (sliders[y].type === "range") {
        sliders[y].oninput = getVals;
        // Manually trigger event first time to display values
        sliders[y].oninput();
      }
    }
  }
};

// w - content - web tabs
// Show the first tab and hide the rest
$(".content-left-list li:first-child").addClass("active");
$(".content-left-forms").hide();
$(".content-left-forms:first").show();

// Click function
$(".content-left-list li").click(function () {
  $(".content-left-list li").removeClass("active");
  $(this).addClass("active");
  $(".content-left-forms").hide();

  var activeTab = $(this).find("a").attr("href");
  $(activeTab).fadeIn();
  return false;
});

// Slick slider
$(document).ready(function () {
  $(".content-slick-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    speed: 300,
    infinite: true,
    autoplaySpeed: 5000,
    autoplay: true,
    prevArrow:
      '<button class="slide-arrow prev-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/></svg></button>',
    nextArrow:
      '<button class="slide-arrow next-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/></svg></button>',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

/*--------------*/

// Main/Product image slider for product page
$(".main-img-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  arrows: true,
  fade: true,
  //   autoplay: true,
  autoplaySpeed: 4000,
  speed: 300,
  lazyLoad: "ondemand",
  arrows: false,
  asNavFor: ".thumb-nav",
});
// Thumbnail/alternates slider for product page
$(".thumb-nav").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  centerPadding: "0rem",
  asNavFor: ".main-img-slider",
  dots: false,
  centerMode: false,
  draggable: true,
  speed: 200,
  focusOnSelect: true,
  arrows: true,
  prevArrow:
    '<button class="slide-arrow prev-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/></svg></button>',
  nextArrow:
    '<button class="slide-arrow next-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg></button>',
});

//keeps thumbnails active when changing main image, via mouse/touch drag/swipe
$(".main-img-slider").on(
  "afterChange",
  function (event, slick, currentSlide, nextSlide) {
    //remove all active class
    $(".thumb-nav .slick-slide").removeClass("slick-current");
    //set active class for current slide
    $(".thumb-nav .slick-slide:not(.slick-cloned)")
      .eq(currentSlide)
      .addClass("slick-current");
  }
);

// ******************
$(".w-product-content .content-items .heading").click(function () {
  $(this).next().slideToggle();
});
