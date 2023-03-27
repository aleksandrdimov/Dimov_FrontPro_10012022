document.addEventListener("DOMContentLoaded", () => {
  const slides = [...document.querySelectorAll("img")];
  const buttons = document.querySelectorAll("button");
  const buttonPrev = document.querySelector(".button__prev");
  const buttonNext = document.querySelector(".button__next");

  const linesContainer = document.querySelector(".slider-line");

  function getNextAndPrev() {
    const activeSlide = document.querySelector(".js-active-slide");
    const activeIndex = slides.indexOf(activeSlide);
    let next, prev;

    activeIndex === slides.length - 1
      ? (next = slides[0])
      : (next = slides[activeIndex + 1]);

    activeIndex === 0
      ? (prev = slides[slides.length - 1])
      : (prev = slides[activeIndex - 1]);

    return [next, prev];
  }

  function getPosition() {
    const activeSlide = document.querySelector(".js-active-slide");
    const activeIndex = slides.indexOf(activeSlide);
    const [next, prev] = getNextAndPrev();

    slides.forEach((slide, index) => {
      if (index === activeIndex) {
        slide.style.transform = "translateX(0%)";
      } else if (slide === prev) {
        slide.style.transform = "translateX(-100%)";
      } else if (slide === next) {
        slide.style.transform = "translateX(100%)";
      } else {
        slide.style.transform = "translateX(100%)";
      }

      slide.addEventListener("transitionend", () => {
        slide.classList.remove("js-anim");
      });
    });

    activeIndex === 0
      ? (buttonPrev.style.display = "none")
      : (buttonPrev.style.display = "block");

    activeIndex === slides.length - 1
      ? (buttonNext.style.display = "none")
      : (buttonNext.style.display = "block");
  }
  getPosition();

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.contains("button__next")
        ? getNextSlide()
        : getPrevSlide();
    });
  });

  function getNextSlide() {
    const current = document.querySelector(".js-active-slide");
    const [next, prev] = getNextAndPrev();

    current.classList.add("js-anim");
    current.classList.remove("js-active-slide");
    current.style.transform = "translateX(-100%)";
    next.classList.add("js-anim");
    next.classList.add("js-active-slide");
    next.style.transform = "translateX(0%)";

    getPosition();
    getActiveLine();
  }

  function getPrevSlide() {
    const current = document.querySelector(".js-active-slide");
    const [next, prev] = getNextAndPrev();

    current.classList.add("js-anim");
    current.classList.remove("js-active-slide");
    current.style.transform = "translateX(100%)";
    prev.classList.add("js-anim");
    prev.classList.add("js-active-slide");
    prev.style.transform = "translateX(0%)";

    getPosition();
    getActiveLine();
  }

  slides.forEach((slide) => {
    const line = document.createElement("div");
    const span = document.createElement("span");
    line.classList.add("slider-line__item");
    linesContainer.appendChild(line);
    line.appendChild(span);
  });

  function getActiveLine() {
    const allLines = document.querySelectorAll(".slider-line__item");
    const activeSlide = document.querySelector(".js-active-slide");
    const activeIndex = slides.indexOf(activeSlide);

    allLines.forEach((line) => line.classList.remove("js-active-line"));

    allLines[activeIndex].classList.add("js-active-line");
  }

  function clickLines() {
    const allLines = document.querySelectorAll(".slider-line__item");
    allLines.forEach((line, index) => {
      line.addEventListener("click", () => {
        getLineSlide(index);
        const [next, prev] = getNextAndPrev();
      });
    });
  }

  function getLineSlide(index) {
    slides.forEach((slide) => slide.classList.remove("js-active-slide"));

    slides[index].classList.add("js-active-slide", "js-anim");

    getPosition();
    getActiveLine();
  }

  getActiveLine();
  clickLines();
});
