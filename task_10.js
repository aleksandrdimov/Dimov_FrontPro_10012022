//task 10
// part 1
let resultTask1 = "";
for (let i = 10; i <= 20; i++) {
  if (i < 20) {
    resultTask1 += i + ",";
  } else {
    resultTask1 += i;
  }
}
console.log(resultTask1);

// part 2
let resultTask2 = "";
for (let i = 10; i <= 20; i++) {
  if (i < 20) {
    resultTask2 += i ** 2 + ",";
  } else {
    resultTask2 += i ** 2;
  }
}
console.log(resultTask2);

// part 3
let resultTask3 = "";
for (let i = 1; i <= 10; i++) {
  resultTask3 += `7 * ${i} = ${7 * i} \n`;
}
console.log(resultTask3);

// part 4
let resultTask4 = 0;

for (let i = 1; i <= 15; i++) {
  resultTask4 += i;
}
console.log(resultTask4);

// part 5
let resultTask5 = 15;

for (let i = 16; i <= 35; i++) {
  resultTask5 *= i;
}
console.log(resultTask5);

// part 6
let resultTask6 = 0;

for (let i = 1; i <= 500; i++) {
  resultTask6 += i / 500;
}
console.log(resultTask6);

// part 7
let resultTask7 = 0;

for (let i = 30; i <= 80; i++) {
  if (i % 2 === 0) {
    resultTask7 += i;
  }
}
console.log(resultTask7);

// part 8
let resultTask8 = "";

for (let i = 100; i <= 200; i++) {
  if (i % 3 === 0) {
    resultTask8 += i + " ";
  }
}
console.log(resultTask8);

// part 9, 10, 11
const numTask = Number(prompt("введите число", ""));
let resultTaskNum = "",
  resultTask9 = "",
  resultTask10 = 0,
  resultTask11 = 0;

for (let i = 1; i <= numTask; i++) {
  if (numTask % i == 0) {
    resultTaskNum += i + ",";
    resultTask9 = resultTaskNum.substring(0, resultTaskNum.length - 1);
    if (i % 2 === 0) {
      resultTask10++;
      resultTask11 += i;
    } else {
      resultTask10;
    }
  }
}
console.log(resultTask9);
console.log(resultTask10);
console.log(resultTask11);

// part 12
let resultTask12 = "";
for (let i = 1; i < 10; i++) {
  for (let j = 1; j <= 10; j++) {
    resultTask12 += `${i} * ${j} = ${i * j} \n`;
  }
}
console.log(resultTask12);
