/*
Мережа фастфудів пропонує кілька видів гамбургерів:
-маленький (50 тугриків, 20 калорій);
-великий (100 тугриків, 40 калорій).

Гамбургер може бути з одним із декількох видів начинок:
-сиром (+ 10 тугриків, + 20 калорій);
-салатом (+ 20 тугриків, + 5 калорій);
-картоплею (+ 15 тугриків, + 10 калорій).

Можна додати добавки:
-посипати приправою (+15 тугриків, 0 калорій) - полити майонезом (+ 20 тугриків, +5 калорій).


Напишіть програму, яка розраховує вартість та калорійність гамбургера.
Використовуйте ООП підхід.

(підказка: потрібен клас Гамбургер, константи, методи для вибору
опцій та розрахунку потрібних величин)
*/

class Hamburger {
  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.topping = [];
  }

  addTopping(topping) {
    let isPresent = 0;
    for (let i = 0; i < this.topping.length; i++) {
      if (this.topping[i] === topping) {
        isPresent++;
      }
    }
    if (!isPresent) {
      this.topping.push(topping);
    } else {
      console.log("Такая добавка уже есть");
    }
  }

  removeTopping(topping) {
    for (let i = 0; i < this.topping.length; i++) {
      if (this.topping[i] === topping) {
        delete this.topping[i];
      }
    }
  }

  calcPrice() {
    let totalPrice;
    let toppingPrice = 0;
    for (let i = 0; i < this.topping.length; i++) {
      toppingPrice += this.topping[i].price;
    }
    totalPrice = this.size.price + this.stuffing.price + toppingPrice;
    return totalPrice;
  }

  calcCalories() {
    let totalCalories;
    let toppingPrice = 0;
    for (let i = 0; i < this.topping.length; i++) {
      toppingPrice += this.topping[i].calories;
    }
    totalCalories = this.size.calories + this.stuffing.calories + toppingPrice;
    return totalCalories;
  }
}

Hamburger.sizeSmall = { name: "Small size", price: 50, calories: 20 };
Hamburger.sizeBig = { name: "Big size", price: 100, calories: 40 };

Hamburger.stuffingCheese = {
  name: "stuffing Cheese",
  price: 10,
  calories: 20,
};
Hamburger.stuffingSalad = { stuff: "stuffing Salad", price: 20, calories: 5 };
Hamburger.stuffingPotato = {
  name: "stuffing Potato",
  price: 15,
  calories: 10,
};

Hamburger.toppingMayo = {
  name: "topping Mayo",
  price: 20,
  calories: 5,
};
Hamburger.toppingSpice = {
  name: "topping Spice",
  price: 15,
  calories: 0,
};

const hamburger = new Hamburger(Hamburger.sizeBig, Hamburger.stuffingCheese);

hamburger.addTopping(Hamburger.toppingMayo);
console.log("Calories: " + hamburger.calcCalories());

console.log("Price: " + hamburger.calcPrice() + " тугриків");
hamburger.addTopping(Hamburger.toppingSpice);
console.log("Price with spice: " + hamburger.calcPrice() + " тугриків");

console.log(hamburger);
