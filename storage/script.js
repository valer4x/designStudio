let images = [
  { url: "./storage/img/projectsImg/projectsImage1.jpg" },
  { url: "./storage/img/projectsImg/projectsImage2.jpg" },
  { url: "./storage/img/projectsImg/projectsImage3.jpg" }
];

function initSlider(options) {
  if (!images || !images.length) return;

  let sliderImages = document.querySelector(".projects__image");
  let sliderArrows = document.querySelector(".projects__slider");
  let sliderDots = document.querySelector(".slider__dots");
  
  initImages();
  initArrows();
  initDots();

  function initImages() {
    images.forEach((image, index) => {
      let imageDiv = `<div class="image__unit n${index} ${index === 0? "image__unit_active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
      sliderImages.innerHTML += imageDiv;
    });
  }
  
  function initArrows() {
    sliderArrows.querySelectorAll(".slider__arrow").forEach(arrow => {
      arrow.addEventListener("click", function() {
        let curNumber = +sliderImages.querySelector(".image__unit_active").dataset.index;
        let nextNumber;
        if (arrow.classList.contains("arrow_left")) {
          nextNumber = curNumber === 0? images.length - 1 : curNumber - 1;
        } else {
          nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
        }
        moveSlider(nextNumber);
      });
    });
  }
  
  function initDots() {
    images.forEach((image, index) => {
      let dot = `<div class="slider__dot n${index} ${index === 0? "slider__dot_active" : ""}" data-index="${index}"></div>`;
      sliderDots.innerHTML += dot;
    });
    sliderDots.querySelectorAll(".slider__dot").forEach(dot => {
      dot.addEventListener("click", function() {
        moveSlider(this.dataset.index);
      })
    })
  }
  
  function moveSlider(num) {
    sliderImages.querySelector(".image__unit_active").classList.remove("image__unit_active");
    sliderImages.querySelector(".n" + num).classList.add("image__unit_active");
    sliderDots.querySelector(".slider__dot_active").classList.remove("slider__dot_active");
    sliderDots.querySelector(".n" + num).classList.add("slider__dot_active");
  }
}

document.addEventListener("DOMContentLoaded", function() {
  initSlider();
});