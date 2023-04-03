const categories = document.querySelectorAll(".online-store__list-item");
const itemsCaterogy = document.querySelectorAll(".online-store__category-box");
const items = document.querySelectorAll(".online-store__item-box");
const detailyItems = document.querySelectorAll(".online-store__detaily-box");
const infoItems = document.querySelectorAll(".online-store__info-box");
const buttons = document.querySelectorAll(".online-store__button");
const itemsTitle = document.querySelectorAll(".online-store__item-title");
categories.forEach((el, index) => {
  el.addEventListener("click", () => {
    delStyle(itemsCaterogy);
    delStyle(detailyItems);

    itemsCaterogy[index].classList.add("js-active");
    items.forEach((item, indexEl) => {
      item.addEventListener("click", () => {
        delStyle(detailyItems);
        detailyItems[indexEl].classList.add("js-active");
      });
    });
  });
});

buttons.forEach((el, index) => {
  el.addEventListener("click", () => {
    const modal = document.querySelector(".modal");
    modal.innerText = "You buy " + itemsTitle[index].innerText;
    modal.classList.add("js-active");
    setTimeout(() => {
      delStyle(itemsCaterogy);
      delStyle(detailyItems);
      modal.classList.remove("js-active");
    }, 1500);
  });
});

function delStyle(item) {
  item.forEach((el) => {
    el.classList.remove("js-active");
  });
}
