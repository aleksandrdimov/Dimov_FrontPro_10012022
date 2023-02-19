/*
1. Створити сутність "Людина".
Властивості:
-імʼя;
-вік.
Методи:
-конструктор, який приймає два параметри: імʼя та вік;
-метод, який виводить у консоль інформацію про людину.

2. Створити сутність "Автомобіль".
Властивості:
-марка, модель, рік виписку, номерний знак (або на Ваш розсуд);
-власник.
Методи:
-конструктор, який приймає чотитри параметри (тобто, всі окрім власника): 
марка, модель, рік виписку, номерний знак 
-присвоїти власника - метод повинен приймати екземпляр класу Людина, 
та зберігати екземпляр класу Людина у відповідному полі, якщо вік більше 18, 
інакше виводити у консоль відповідне повідомлення
-метод, який виводить у консоль інформацію про автомобіль та 
викликає метод виводу інформації класу Людина для виведення інформації про власника


В якості демонстраціїї створити:
-декілька екземплярів класу Людина;
-декілька екземплярів класу Автомобіль;
-присвоїти власників автомобілям.
*/

class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  viewHumanInfo() {
    console.log(`name: ${this.name}, age: ${this.age}`);
  }
}

class Car {
  owner = [];

  constructor(brand, model, yearOfManufacture, mileage) {
    this.brand = brand;
    this.model = model;
    this.yearOfManufacture = yearOfManufacture;
    this.mileage = mileage;
  }

  addOwner(human) {
    human.age > 18
      ? this.owner.push(human)
      : console.log(
          `${human.name} не может купить ${this.brand} ${this.model}. Ему меньше 18 лет`
        );
  }

  viewCarInfo(human) {
    human.viewHumanInfo();
    console.log(
      `brand: ${this.brand}, model: ${this.model}, year of manufacture:${this.yearOfManufacture},mileage: ${this.mileage}`
    );
  }
}

const youngMan = new Human("Nick", "17");
const man = new Human("Din", "30");
const oldMan = new Human("Bob", "65");

const bmw = new Car("BMW", "M3", "2022", "2000 km");
const nissan = new Car("Nissan", "Skyline GTR R34", "2004", "90000 km");
const toyota = new Car("Toyota", "Camry", "2008", "360000 km");

bmw.addOwner(man);
bmw.viewCarInfo(man);
toyota.addOwner(oldMan);
nissan.addOwner(youngMan);

console.log(bmw);
console.log(toyota);
console.log(nissan);
