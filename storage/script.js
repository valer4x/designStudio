let images = [
  { url: "./storage/img/projectsImg/projectsImage1.jpg" },
  { url: "./storage/img/projectsImg/projectsImage2.jpg" },
  { url: "./storage/img/projectsImg/projectsImage3.jpg" }
];

let projectTitle = [
  { city: "Rostov-on-Don, Admiral" },
  { city: "Sochi Thieves" },
  { city: "Rostov-on-Don Patriotic" },
];

let projectInfo = [
  {
    projectCity: "Rostov-on-Don",
    projectName: "LCD admiral",
    projectArea: "81",
    projectRepairTime: "3.5 months",
    projectRepairCost: "Upon request"
  },
  {
    projectCity: "Sochi",
    projectName: "Thieves",
    projectArea: "105",
    projectRepairTime: "4 months",
    projectRepairCost: "Upon request"
  },
  {
    projectCity: "Rostov-on-Don",
    projectName: "Patriotic",
    projectArea: "93",
    projectRepairTime: "3 months",
    projectRepairCost: "Upon request"
  },
];

function initSlider(options) {
  if (!images || !images.length) return;

  let sliderImages = document.querySelector(".projects__image");
  let sliderArrows = document.querySelector(".projects__slider");
  let sliderDots = document.querySelector(".slider__dots");
  let sliderHeaders = document.querySelector(".projects__city");
  let sliderInfo = document.querySelector(".projects__data");
  
  initImages();
  initArrows();
  initDots();
  initHeader();
  initInfo();

  function initImages() {
    images.forEach((image, index) => {
      let imageDiv = `<div class="image__unit image_n${index} ${index === 0? "image__unit_active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
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
      });
    });
  }

  function initHeader() {
    images.forEach((image, index) => {
      let headerSpan = `<span class="city__unit n${index} ${index === 0? "city__unit_active" : ""}" data-index="${index}">${projectTitle[index].city}</span>`;
      sliderHeaders.innerHTML += headerSpan;
    });
    sliderHeaders.querySelectorAll(".city__unit").forEach(unit => {
      unit.addEventListener("click", function() {
        moveSlider(this.dataset.index);
      });
    });
  }

  function initInfo() {
    projectInfo.forEach((unit, index) => {
      let citySpan = `<span class="citySpan__unit city_n${index} ${index === 0? "citySpan__unit_active" : ""}" data-index="${index}">${projectInfo[index].projectCity}<br>${projectInfo[index].projectName}</span>`;
      let areaSpan = `<span class="areaSpan__unit area_n${index} ${index === 0? "areaSpan__unit_active" : ""}" data-index="${index}">${projectInfo[index].projectArea} m<sup>2</sup></span>`;
      let timeSpan = `<span class="timeSpan__unit time_n${index} ${index === 0? "timeSpan__unit_active" : ""}" data-index="${index}">${projectInfo[index].projectRepairTime}</span>`;
      let costSpan = `<span class="costSpan__unit cost_n${index} ${index === 0? "costSpan__unit_active" : ""}" data-index="${index}">${projectInfo[index].projectRepairCost}</span>`;

      sliderInfo.querySelector(".data__city").innerHTML += citySpan;
      sliderInfo.querySelector(".data__area").innerHTML += areaSpan;
      sliderInfo.querySelector(".data__time").innerHTML += timeSpan;
      sliderInfo.querySelector(".data__cost").innerHTML += costSpan;
    });
  }
  
  function moveSlider(num) {
    sliderImages.querySelector(".image__unit_active").classList.remove("image__unit_active");
    sliderImages.querySelector(".image_n" + num).classList.add("image__unit_active");

    sliderDots.querySelector(".slider__dot_active").classList.remove("slider__dot_active");
    sliderDots.querySelector(".n" + num).classList.add("slider__dot_active");

    sliderHeaders.querySelector(".city__unit_active").classList.remove("city__unit_active");
    sliderHeaders.querySelector(".n" + num).classList.add("city__unit_active");

    sliderInfo.querySelector(".citySpan__unit_active").classList.remove("citySpan__unit_active");
    sliderInfo.querySelector(".city_n" + num).classList.add("citySpan__unit_active");

    sliderInfo.querySelector(".areaSpan__unit_active").classList.remove("areaSpan__unit_active");
    sliderInfo.querySelector(".area_n" + num).classList.add("areaSpan__unit_active");

    sliderInfo.querySelector(".timeSpan__unit_active").classList.remove("timeSpan__unit_active");
    sliderInfo.querySelector(".time_n" + num).classList.add("timeSpan__unit_active");

    sliderInfo.querySelector(".costSpan__unit_active").classList.remove("costSpan__unit_active");
    sliderInfo.querySelector(".cost_n" + num).classList.add("costSpan__unit_active");
  }
}

document.addEventListener("DOMContentLoaded", function() {
  initSlider();
});