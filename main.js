// const div = document.querySelector("#elem");
// let distance = 10

// ---------------- -------------------------- ---------------- ------------------
// const div = document.querySelector("#square");
// let move = false;
// let offsetX;
// let offsetY;

// div.addEventListener("mousedown", (e) => {
//   move = true;
//   offsetX = e.offsetX;
//   offsetY = e.offsetY;
// });

// document.addEventListener("mousemove", (e) => {
//   if (move) {
//     div.style.top = e.clientY - offsetY + "px";
//     div.style.left = e.clientX - offsetX + "px";
//   }
// });

// document.addEventListener("mouseup", (e) => {
//   move = false;
// });
// --------------------- ----------------- ---------------- -------------------
// const btn = document.querySelector("#btn"),
//   inputData = document.querySelector("#inp"),
//   taskWrapper = document.querySelector(".task-wrapper");

// const addTask = () => {
//   let newTask = createNewTask(inputData.value);
//   taskWrapper.append(newTask);
// };

// const createNewTask = (text) => {
//   let div = document.createElement("div");
//   div.classList.add("task");
//   let inp = document.createElement("input");
//   inp.type = "checkbox";
//   let p = document.createElement("p");
//   p.innerText = text;
//   div.append(inp);
//   div.append(p);
//   inputData.value = "";
//   inputData.focus()
//   return div;
// };

// btn.addEventListener("click", addTask);

// --------------- -------------------- --------------------------- ----------
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

// const activateDot = (ind) => {
//   for (let dot of dots) {
//     dot.classList.remove("active");
//   }
//   dots[ind].classList.add("active");
// };

// setInterval(nextSlide, 1500);

// ----------------- - ------------- ------------ ------------- ------------------

// nextButton.addEventListener("click", nextSlide);

// const nextSlide = () => {
//   if (index == slides.length - 1) {
//     index = 0;
//     pointActiveSlide(index);
//   } else {
//     index++;
//     pointActiveSlide(index);
//   }
// };

// const pointActiveSlide = (index) => {
//   activeDot(index);
//   activeSlide(index);
// };

// const activeSlide = (index) => {
//   for (image of slides) {
//     image.classList.remove("active");
//   }
//   slides[index].classList.add("active");
// };

// previousButton.addEventListener("click", previousSlide);

// const previousSlide = () => {
//   if (index == 0) {
//     index = slides.length - 1;
//     pointActiveSlide(index);
//   } else {
//     index--;
//     pointActiveSlide(index);
//   }
// };

// const activeDot = (i) => {
//   for (dot of dots) {
//     dot.classList.remove("active");
//   }
//   dots[i].classList.add("active");
// };

// dots.forEach((dot, indexDot) => {
//   dot.addEventListener("click", () => {
//     index = indexDot;
//     pointActiveSlide(index);
//   });
// });

// setInterval(nextSlide, 2000);
// ----------------- - ------------- ------------ ------------- ------------------
