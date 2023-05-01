import dataContent from "./dataContent";

const RenderCategory = (index) => {
  const valueCategories = Object.values(dataContent[index]);
  const parent = document.querySelector(".aside-nav__list");
  parent.innerHTML = "";

  valueCategories.forEach((el) => {
    const navItemAside = document.createElement("li");
    navItemAside.classList.add("aside-nav__item");
    navItemAside.innerText = el.categoryItem;
    parent.appendChild(navItemAside);
  });
};

export default RenderCategory;
