import dataContent from "./dataContent";
import pic from "../../images/samsungs23ultra.jpg";
import { indexCategory } from "../HeaderNav/clickHeaderNav";

const RenderContentItems = (props) => {
  const valueCategories = Object.values(dataContent[indexCategory]);
  const parent = document.querySelector(".main__container");
  parent.innerHTML = "";
  const contentItems = valueCategories[props].items;

  contentItems.forEach((el) => {
    const itemContainer = document.createElement("div");
    itemContainer.classList.add("item__container");
    itemContainer.innerHTML = `<img class="item__picture" src=${pic} />
    <h4 class="item__title">${el.title}</h4>
    <p class="item__text">${el.text}</p>`;
    parent.appendChild(itemContainer);
  });
};

export default RenderContentItems;
