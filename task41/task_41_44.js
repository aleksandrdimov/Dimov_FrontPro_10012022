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
const category = document.querySelector(".online-store__category");

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

let resultPrice = 1;
let count = 1;

function viewData() {
  const formContainer = document.querySelector(".modal__container");
  const countNumder = document.querySelector(".count");
  const textOnView = document.querySelector(".user-data");
  formContainer.classList.add("js-active");

  let resultTitle = "";

  detailyItems.forEach((el) => {
    if (el.classList.contains("js-active")) {
      const title = el.getElementsByClassName("online-store__item-title");
      const price = el.getElementsByClassName("online-store__item-price");

      resultTitle = title[0].innerText;
      resultPrice = price[0].innerText * countNumder.innerText;
    }
  });
  const purchase = {
    title: resultTitle,
    price: resultPrice,
    quantity: countNumder.innerText,
    customer: form.userName.value,
    city: form.city.value,
    delivery: form.delivery.value,
    payment: form.payment.value,
    comment: form.comment.value,
  };
  const jsonPurchase = JSON.stringify(purchase);
  const date = new Date().toLocaleString().replace(",", "");
  window.localStorage.setItem(date, resultPrice + "$ " + jsonPurchase);
  textOnView.innerText =
    "Order is processed\n Product: " +
    resultTitle +
    "\nPrice: " +
    resultPrice +
    " $" +
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
    location.reload();
  }, 2000);
}

function clickButtonHistory() {
  const buttonHistory = document.querySelector(".button__history");
  const localStorageObj = window.localStorage;

  buttonHistory.addEventListener("click", () => {
    delStyle(itemsCaterogy);
    delStyle(detailyItems);

    for (let prop in localStorageObj) {
      const history = document.querySelector(".online-store__history-box");
      const historyItem = document.createElement("p");
      const historyItemExit = document.createElement("span");
      historyItem.style = `cursor:pointer;position:relative;margin-bottom:15px`;
      historyItemExit.style = `cursor:pointer;position:absolute;z-index:5;top:0;right:0;padding:3px 5px;color:red;font-size:10px;background-color:grey;`;

      if (localStorageObj.getItem(prop) !== null) {
        const objValue = localStorageObj.getItem(prop);
        const indexSymbol = objValue.indexOf(" ");
        historyItem.innerText =
          "Date create: " +
          prop +
          "\nTotal price: " +
          objValue.slice(0, indexSymbol);
        historyItemExit.innerText = "X";
        historyItemExit.classList.add("exit");
        history.appendChild(historyItem);
        historyItem.appendChild(historyItemExit);
      }
    }
    category.classList.add("js-active");
    hoverHistoryItem();
    hoverHistoryExit();
    removeLocalStorageValues();
    clickLocalStorageItem();
  });
}

clickButtonHistory();

function hoverHistoryItem() {
  const historyItems = document.querySelectorAll(
    ".online-store__history-box p"
  );

  historyItems.forEach((el) => {
    el.addEventListener("mouseover", () => {
      el.style = `cursor:pointer;position:relative;margin-bottom:15px;box-shadow:1px 1px 8px grey`;
    });

    el.addEventListener("mouseout", () => {
      el.style = `cursor:pointer;position:relative;margin-bottom:15px;box-shadow:none`;
    });
  });
}

function hoverHistoryExit() {
  const historyItemsExit = document.querySelectorAll(".exit");

  historyItemsExit.forEach((el) => {
    el.addEventListener("mouseover", () => {
      el.style = `cursor:pointer;position:absolute;z-index:5;top:0;right:0;padding:3px 5px;color:white;font-size:10px;background-color:black;`;
    });

    el.addEventListener("mouseout", () => {
      el.style = `cursor:pointer;position:absolute;z-index:5;top:0;right:0;padding:3px 5px;color:red;font-size:10px;background-color:grey;`;
    });
  });
}

function removeLocalStorageValues() {
  const historyItemsExit = document.querySelectorAll(".exit");
  const historyItems = document.querySelectorAll(
    ".online-store__history-box p"
  );
  const history = document.querySelector(".online-store__history-box");

  if (historyItems.length === 0) {
    location.reload();
  }
  historyItemsExit.forEach((el, index) => {
    el.addEventListener("click", (item) => {
      const historyItems = document.querySelectorAll(
        ".online-store__history-box p"
      );

      if (historyItems.length === 1) {
        location.reload();
      }
      localStorage.removeItem(localStorage.key(index));
      history.removeChild(historyItems[index]);
    });
  });
}

function clickLocalStorageItem() {
  const historyItems = document.querySelectorAll(
    ".online-store__history-box p"
  );

  historyItems.forEach((el, index) => {
    el.addEventListener("click", () => {
      const valueLocalItem = localStorage.getItem(localStorage.key(index));
      const findIndexSlice = valueLocalItem.indexOf(" ");
      const objValueLocal = valueLocalItem.slice(
        findIndexSlice,
        valueLocalItem.length
      );
      showModalArterClickLocal();

      const parseJson = JSON.parse(objValueLocal);
      const textOnView = document.querySelector(".user-data");

      textOnView.innerText =
        "Order is processed\n Product: " +
        parseJson.title +
        "\nPrice: " +
        parseJson.price +
        " $" +
        "\nQuantity: " +
        parseJson.quantity +
        " pcs" +
        "\nCustomer: " +
        parseJson.customer +
        "\nDelivery: " +
        parseJson.city +
        ", " +
        parseJson.delivery +
        "\nPayment: " +
        parseJson.payment +
        "\nComment: " +
        parseJson.comment;
    });
  });
}

function showModalArterClickLocal() {
  modal.classList.add("js-active");
  const formContainer = document.querySelector(".modal__container");
  formContainer.classList.add("js-active");
  setTimeout(() => {
    modal.classList.remove("js-active");
    formContainer.classList.remove("js-active");
  }, 2000);
}
