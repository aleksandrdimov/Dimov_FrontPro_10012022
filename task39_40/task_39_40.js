// task 39
const createCounter = () => {
  const ratingItems = document.querySelectorAll(".rating__item-picture");
  const ratingCounters = document.querySelectorAll(".rating__item-counter");
  ratingCounters.forEach((el) => {
    el.innerText = "0";
  });
  ratingItems.forEach((item, index) => {
    let count = 1;
    item.addEventListener("click", () => {
      ratingCounters[index].innerText = count++;
    });
  });
};

createCounter();

// task 40
const generateList = (array) => {
  const section = document.querySelector("#generate-list");
  const newUl = document.createElement("ul");
  section.appendChild(newUl);
  array.forEach((el) => {
    const newLi = document.createElement("li");
    newUl.appendChild(newLi);
    if (typeof el === "object") {
      const newList = document.createElement("ul");
      el.forEach((item) => {
        const newListItem = document.createElement("li");
        newListItem.innerText = item;
        newLi.appendChild(newList);
        newList.appendChild(newListItem);
      });
    } else {
      newLi.innerText = el;
    }
  });
};

generateList([1, 2, [1.1, 1.2, 1.3], 3, [1, 2, 3]]);
