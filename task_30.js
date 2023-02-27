/*
Створити клас SuperMath.

Додати до екземпляра метод - check(obj), параметр obj якого має властивості X, Y, znak.
Метод повинен підтвердити у користувача, чи хоче він зробити дію znak c Х і У.
Якщо хоче, зробити математичну дію znak (яка описана в прототипі), 
інакше - запитати введення нових даних через метод input() класу SuperMath.

Приклад об'єкта: `obj = {X:12, Y:3, znak: “/”}`, можливі варіанти znak => `+ - / * %`.

При введенні znak потрібно перевірити коректність введення на можливі математичні дії.
p = new SuperMath();
p.check(obj); // --> no p.input() -> 3 prompt -> рахує
*/

class SuperMath {
  check(obj) {
    if (
      confirm(
        `Вы действительно хотите произвести  " ${obj.znak} " с числами ${obj.X} и ${obj.Y} ?`
      )
    ) {
      return this.calc();
    } else {
      this.input();
      return this.calc();
    }
  }

  input() {
    obj.X = Number(prompt("Введите первое число"));
    obj.znak = prompt(" Введите знак вычисления: +-/*% ");
    obj.Y = Number(prompt("Введите второе число"));
  }

  calc() {
    let result;
    switch (obj.znak) {
      case "+":
        result = obj.X + obj.Y;
        break;
      case "-":
        result = obj.X - obj.Y;
        break;
      case "*":
        result = obj.X * obj.Y;
        break;
      case "/":
        result = obj.X / obj.Y;
        break;
      case "%":
        result = obj.X % obj.Y;
        break;
      default:
        result = "Неправильный знак";
    }
    return result;
  }
}
const obj = { X: 12, Y: 3, znak: "+" };
const mathSmth = new SuperMath();

console.log(mathSmth.check(obj));
