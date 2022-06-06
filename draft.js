const btnF = document.querySelector("#btn-next");
const btnB = document.querySelector("#btn-prev");

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let index = 0;

const activateSlideAndDots = (index) => {
  activateSlide(index);
  activateDot(index);
};

const forward = () => {
  if (index == slides.length - 1) {
    index = 0;
    activateSlideAndDots(index);
  } else {
    index++;
    activateSlideAndDots(index);
  }
};

const back = () => {
  if (index == 0) {
    index = slides.length - 1;
    activateSlideAndDots(index);
  } else {
    index--;
    activateSlideAndDots(index);
  }
};

const activateSlide = (index) => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slides[index].classList.add("active");
};

const activateDot = (index) => {
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });
  dots[index].classList.add("active");
};

btnF.addEventListener("click", forward);
btnB.addEventListener("click", back);
dots.forEach((dot, dotIndex) => {
  dot.addEventListener("click", () => {
    index = dotIndex;
    activateSlideAndDots(index);
  });
});

setInterval(forward, 2000);

// const previousButton = document.querySelector("#btn-prev"),
//   nextButton = document.querySelector("#btn-next");

// const slides = document.querySelectorAll(".slide"),
//   dots = document.querySelectorAll(".dot");

// let index = 0;

// const activateSlidesAndDots = (index) => {
//   activateSlide(index);
//   activateDot(index);
// };

// const nextSlide = () => {
//   if (index == slides.length - 1) {
//     index = 0;
//     activateSlidesAndDots(index);
//   } else {
//     index++;
//     activateSlidesAndDots(index);
//   }
// };

// nextButton.addEventListener("click", nextSlide);

// const activateSlide = (index) => {
//   slides.forEach((slide) => {
//     slide.classList.remove("active");
//   });
//   slides[index].classList.add("active");
// };

// const prevSlide = () => {
//   if (index == 0) {
//     index = slides.length - 1;
//     activateSlidesAndDots(index);
//   } else {
//     index--;
//     activateSlidesAndDots(index);
//   }
// };

// previousButton.addEventListener("click", prevSlide);

// dots.forEach((dot, dotIndex) => {
//   dot.addEventListener("click", () => {
//     index = dotIndex;
//     activateSlidesAndDots(index);
//   });
// });

// const activateDot = (index) => {
//   for (let dot of dots) {
//     dot.classList.remove("active");
//   }
//   dots[index].classList.add("active");
// };
