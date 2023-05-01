import RenderCategory from "../renderContent/renderCategory";

let indexCategory = 0;
const clickHeaderNav = () => {
  const navItems = document.querySelectorAll(".header-nav__item");
  const mainContainer = document.querySelector(".main__container");

  navItems.forEach((el, index) => {
    el.addEventListener("click", () => {
      indexCategory = index;
      RenderCategory(index);
      mainContainer.innerHTML = "";
    });
  });
};

export { clickHeaderNav, indexCategory };
