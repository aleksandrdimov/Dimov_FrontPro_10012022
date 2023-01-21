// task 11
// part 1
let resultPart1 = "";

for (let i = 20; i <= 30; i = i + 0.5) {
  resultPart1 += i + " ";
}
console.log(resultPart1);

// part 2
let resultPart2 = "";

for (let i = 10; i <= 100; i = i + 10) {
  resultPart2 += i * 27 + "грн ";
}
console.log(resultPart2);

// part 3
const randomNubmer = Number(prompt("введите целое число", ""));
let resultPart3 = "";

for (let i = 1; i <= 100; i++) {
  if (randomNubmer >= Math.pow(i, 2)) {
    resultPart3 += i + " ";
  }
}

console.log(resultPart3);

// part 4
let resultIncr = 0,
  resultPart4 = "";

for (let i = 1; i <= randomNubmer; i++) {
  if (randomNubmer % i == 0) {
    resultIncr++;
    if (resultIncr <= 2 && resultIncr > 1) {
      resultPart4 = "простое число";
    } else if (resultIncr > 2) {
      resultPart4 = "сложное число";
    } else {
      resultPart4 = "единица";
    }
  }
}
console.log(resultPart4);

// part 5
let resultPart5 = "";

for (let i = 1; i < randomNubmer; i++) {
  if (randomNubmer == Math.pow(3, i)) {
    resultPart5 = "можно получить целое число";
    break;
  } else if (randomNubmer < Math.pow(3, i)) {
    resultPart5 = "нельзя получить целое число";
    break;
  }
}
console.log(resultPart5);
