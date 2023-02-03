// task 16
const array = [1, 2, 3, 4, 5, 6, 7];

function removeElement(array, item) {
  if (array.find((el) => el === item)) {
    array.forEach((el) => {
      if (el === item) {
        const indexEl = array.indexOf(el);
        array.splice(indexEl, 1);
      }
    });
  } else {
    console.log(`Error. Item ${item} undefind`);
  }
}

removeElement(array, 5);
console.log(array);

// task 17
const characters = "abcdefghijklmnopqrstuvwxyz0123456789";

function generateKey(length, characters) {
  let generateValueStr = "";
  for (let i = 0; i < length; i++) {
    const symbolPos = Math.floor(Math.random() * characters.length);
    generateValueStr += characters.substring(symbolPos, symbolPos + 1);
  }
  return generateValueStr;
}

const key = generateKey(16, characters);
console.log(key);

// task 18
// part 1
/*Дано масив з елементами різних типів.
Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.*/
const randomArray = [4, -6, "hello", 10, -265, "Alex", undefined, "30"];

function calcMathNumbers() {
  let countNumbers = 0,
    numbersSum = 0;

  randomArray.forEach((el) => {
    if (el >= 0 || el <= 0) {
      countNumbers++;
      numbersSum += Number(el);
    }
  });
  return numbersSum / countNumbers;
}

console.log(calcMathNumbers());

// part 2
/* Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak.
У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії,
вказаної в змінній znak.Обидва числа і знак виходять від користувача.*/

function doMath(x, znak, y) {
  if (~znak.search(/[^+\-*/%^]/) || znak.length !== 1) {
    return `Error. Znak undefind`;
  }
  return eval(x + znak.replace("^", "**") + y);
}

const x = 7,
  y = 8,
  znak = "+";

console.log(doMath(x, znak, y));

// part 3
/* Написати функцію заповнення даними користувача двомірного масиву.
Довжину основного масиву і внутрішніх масивів задає користувач.
Значення всіх елементів всіх масивів задає користувач.*/

function matrix(a, b) {
  const doubleArray = [];
  let counter = 0;
  for (let i = 0; i < a; i++) {
    doubleArray[i] = [];
    for (let j = 0; j < b; j++) {
      doubleArray[i][j] = counter;
      counter++;
    }
  }

  return doubleArray;
}
console.log(matrix(4, 5));

// part 4
/* Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 
'func(" hello world", ['l', 'd'])' поверне нам "heo wor". 
Вихідний рядок та символи для видалення задає користувач. */

function delElement(string, array) {
  const strSplit = string.split("");
  const newArr = new Set(array);

  return strSplit.filter((e) => !newArr.has(e)).join("");
}
console.log(delElement("hello world", ["l", "d"]));
