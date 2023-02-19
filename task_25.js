/* 
1. Створити клас Людина.
Властивості:
-імʼя;
-стать.
Методи:
-конструктор, який приймає два параметри: імʼя та стать.
2. Створити клас Квартира.
Властивості:
-конструктор не потрібен;
-масив жителів, який при створенні пустий.
Методи:
-додати жителя - метод повинен приймати екземпляр класу Людина, та додавати до масиву жителів.
3. Створити клас Будинок.

Властивості:
-масив квартир, який при створенні пустий;
-максимальна кількість квартир.
Методи:
-конструктор, який приймає один параметр: максимальну кількість квартир;
-додати квартиру - метод повинен приймати екземпляр класу Квартира, перевіряти,
 чи не буде кількість перевищувати максимальну кількість квартир, і якщо це так, додати квартиру,
  в іншому випадку виводить у консоль відповідне повідомлення.

В якості демонстраціїї створити:
-декілька екземплярів класу Людина;
-декілька екземплярів класу Квартира;
-додадити екземпляри класу Людина до екземплярів класу Квартира;
-екземпляр класу Будинок;
-додадити екземпляри класу Квартира до екземплярів класу Будинок. 
*/
class Human {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
}

class Apartment {
  dwellers = [];
  addDweller(...human) {
    this.dwellers.push(...human);
  }
}

class House {
  apartments = [];

  constructor(numbersApart) {
    this.maxNumbersApart = numbersApart;
  }

  addApartment(apart) {
    this.apartments.length < this.maxNumbersApart
      ? this.apartments.push(apart)
      : console.log(
          `Невозможно добавить. Максимальное количество квартир ${this.maxNumbersApart}`
        );
  }
}

const firstHuman = new Human("Bob", "male");
const secondHuman = new Human("Dina", "female");
const thirdHuman = new Human("Mick", "male");

const firstApart = new Apartment();
const secondApart = new Apartment();
const thirdApart = new Apartment();

firstApart.addDweller(firstHuman);
secondApart.addDweller(secondHuman, thirdHuman);
thirdApart.addDweller();

const house = new House(3);

house.addApartment(firstApart);
house.addApartment(secondApart);
house.addApartment(thirdApart);

console.log(house);
