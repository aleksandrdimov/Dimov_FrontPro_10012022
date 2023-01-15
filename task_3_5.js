// task 3
let firstNumber = prompt("first number", ""),
  secondNumber = prompt("second number", ""),
  sumNubers = +firstNumber + +secondNumber,
  subtractionNumbers = firstNumber - secondNumber,
  multiNumber = firstNumber * secondNumber,
  divisionNumber = firstNumber / secondNumber;

alert(
  `${firstNumber} + ${secondNumber} = ${sumNubers}
${firstNumber} - ${secondNumber} = ${subtractionNumbers}
${firstNumber} * ${secondNumber} =  ${multiNumber}
${firstNumber} / ${secondNumber} =  ${divisionNumber}`
);

// task 4
let hours = prompt("Number of hours", ""),
  seconds = hours * 3600;
alert(seconds + "s");

// task 5
let first = prompt("Please, add a number", ""),
  second = prompt("Please, add a number", ""),
  third = prompt("Please, add a number", ""),
  math = (+first + +second + +third) / 3;
alert("среднее арифметическое " + math);
