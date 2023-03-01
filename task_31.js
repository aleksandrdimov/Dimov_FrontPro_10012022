/*
1) Избавится от неуникальных элементов массива
const numbersArray = [1,1,2,3,4,5,5,5,6];

2) Создать Map который будет по переданному объекту возвращать строку привествия

greetUser(userBob) // Hello Bob nice to see you
greetUser(userJane) // How your kids doing Jane?

Иными словами создать Map где ключ это будет объект а значение строка

3) Создать функцию по превращению Map в object или object в Map в зависимости от того 
что было передано в функцию.
*/

//part 1
const numbersArray = [1, 1, 2, 3, 4, 5, 5, 5, 6];
const set = new Set(numbersArray);
const uniqueNumbersArray = new Array(...set);
console.log(uniqueNumbersArray);

//part 2
const userBob = {
  name: "Bob",
};
const userJane = {
  name: "Jane",
};
const userMap = new Map();

userMap.set(userBob, "Hello Bob nice to see you");
userMap.set(userJane, "How your kids doing Jane?");

const greetUser = (el) => userMap.get(el);

console.log(greetUser(userBob));
console.log(greetUser(userJane));

// part 3
const randomObj = {
  brand1: "BMW",
  brand2: "Toyoto",
};
const mapRandomObj = new Map(Object.entries(randomObj));

function changeObjOrMap(el) {
  return el.size ? Object.fromEntries(el) : new Map(Object.entries(el));
}

console.log(changeObjOrMap(mapRandomObj));
