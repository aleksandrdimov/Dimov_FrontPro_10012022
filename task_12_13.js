// task 12
const randomArray = [1, 3, 4, 9, 6, -5, -8, 10];

function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

randomArray.sort(compareNumeric);
console.log(randomArray);
randomArray.splice(1, 3);
console.log(randomArray);

// task 13
// part 1
const numbersArray = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];

let posNumber = 0,
  sumNumber = 0;

numbersArray.forEach((el) => {
  if (el > 0) {
    posNumber++;
    sumNumber += el;
  }
});
console.log(posNumber);
console.log(sumNumber);

// part 2, 3
const minNumberCulc = (a, b) => {
    return a < b ? a : b;
  },
  maxNumberCulc = (a, b) => {
    return a > b ? a : b;
  };

const minNumber = numbersArray.reduce(minNumberCulc),
  maxNumber = numbersArray.reduce(maxNumberCulc);

console.log(minNumber);
console.log(numbersArray.indexOf(minNumber));
console.log(maxNumber);
console.log(numbersArray.indexOf(maxNumber));

// part 4
let resultTask4 = 0;

numbersArray.forEach((el) => {
  if (el < 0) {
    resultTask4++;
  }
});
console.log(resultTask4);

// part 5, 6, 7, 8, 9
let resultTask5 = 0,
  resultTask6 = 0,
  resultTask7 = 0,
  resultTask8 = 0,
  resultTask9 = 1;

numbersArray.forEach((el) => {
  if (el > 0) {
    if (el % 2 === 0) {
      resultTask6++;
      resultTask7 += el;
    } else {
      resultTask5++;
      resultTask8 += el;
    }
    resultTask9 *= el;
  }
});
console.log(resultTask5);
console.log(resultTask6);
console.log(resultTask7);
console.log(resultTask8);
console.log(resultTask9);

// part 10
let resultTask10 = numbersArray.map((el) => {
  el !== maxNumber ? (el = 0) : el;
  return el;
});
console.log(resultTask10);
