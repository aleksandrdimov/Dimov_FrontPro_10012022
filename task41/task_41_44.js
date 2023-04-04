const categories = document.querySelectorAll(".online-store__list-item");
const itemsCaterogy = document.querySelectorAll(".online-store__category-box");
const items = document.querySelectorAll(".online-store__item-box");
const detailyItems = document.querySelectorAll(".online-store__detaily-box");
const infoItems = document.querySelectorAll(".online-store__info-box");
const buttonsBuy = document.querySelectorAll(".online-store__button");
const itemsTitle = document.querySelectorAll(".online-store__item-title");
const modal = document.querySelector(".modal__buy");
const form = document.querySelector(".modal__form");
const buttonSubmit = document.querySelector(".modal__button");

function openCatalogItem() {
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
}
openCatalogItem();

function clickButtonBuy() {
  buttonsBuy.forEach((el) => {
    el.addEventListener("click", () => {
      modal.classList.add("js-active");
    });
  });
}

clickButtonBuy();

function clickButtonModalExit() {
  const buttonExit = document.querySelector(".modal__exit");
  buttonExit.addEventListener("click", () => {
    modal.classList.remove("js-active");
  });
}

clickButtonModalExit();

function delStyle(item) {
  item.forEach((el) => {
    el.classList.remove("js-active");
  });
}

function counter() {
  const incrButton = document.querySelector(".increment");
  const decrButton = document.querySelector(".decrement");
  const numberCounter = document.querySelector(".count");

  incrButton.addEventListener("click", () => {
    const result = Number(numberCounter.innerText) + 1;
    numberCounter.innerText = result;
  });
  decrButton.addEventListener("click", () => {
    if (numberCounter.innerText > 1) {
      const result = Number(numberCounter.innerText) - 1;
      numberCounter.innerText = result;
    }
  });
}
counter();

function validation() {
  const userName = document.querySelector(".modal__user-name");

  buttonSubmit.addEventListener("click", () => {
    if (form.userName.value !== "") {
      viewData();
    } else {
      userName.placeholder = "Error.Please, input your name!";
      userName.classList.add("js-error");
    }
  });
}

validation();

function viewData() {
  const formContainer = document.querySelector(".modal__container");
  const countNumder = document.querySelector(".count");
  const textOnView = document.querySelector(".user-data");
  formContainer.classList.add("js-active");

  let resultTitle = "";

  detailyItems.forEach((el) => {
    if (el.classList.contains("js-active")) {
      const title = el.getElementsByClassName("online-store__item-title");
      resultTitle = title[0].innerText;
    }
  });

  textOnView.innerText =
    "Order is processed\n Product: " +
    resultTitle +
    "\nQuantity: " +
    countNumder.innerText +
    " pcs" +
    "\nCustomer: " +
    form.userName.value +
    "\nDelivery: " +
    form.city.value +
    ", " +
    form.delivery.value +
    "\nPayment: " +
    form.payment.value +
    "\nComment: " +
    form.comment.value;

  setTimeout(() => {
    delStyle(itemsCaterogy);
    delStyle(detailyItems);
    textOnView.innerText = "";
    formContainer.classList.remove("js-active");
    modal.classList.remove("js-active");
    form.userName.value = "";
    countNumder.innerText = 1;
  }, 2000);
}
