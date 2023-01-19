// task 6 part 1
const stringFirst = prompt("add words", ""),
  stringSecond = prompt("add words", ""),
  stringThird = prompt("add words", ""),
  sentence = stringFirst + " " + stringSecond + " " + stringThird;
alert(sentence);

// task 6 part 2
const taskNumber = prompt("add five-digit number", ""),
  taskNumberOne = taskNumber[0],
  taskNumberTwo = taskNumber[1],
  taskNumberThree = taskNumber[2],
  taskNumberFour = taskNumber[3],
  taskNumberFive = taskNumber[4],
  taskNumberEachAlone =
    taskNumberOne +
    " " +
    taskNumberTwo +
    " " +
    taskNumberThree +
    " " +
    taskNumberFour +
    " " +
    taskNumberFive;
alert(taskNumberEachAlone);

// task 7
const firstCalcNumber = prompt("add first number", ""),
  calculator = prompt("choose action: + - * /", ""),
  secondCalcNumber = prompt("add second number", ""),
  calcSum = Number(firstCalcNumber) + Number(secondCalcNumber),
  calcSub = firstCalcNumber - secondCalcNumber,
  calcMult = firstCalcNumber * secondCalcNumber,
  calcDiv = firstCalcNumber / secondCalcNumber;

switch (calculator) {
  case "+":
    alert(`calculation result :
    ${firstCalcNumber} + ${secondCalcNumber} = ${calcSum}`);
    break;
  case "-":
    alert(`calculation result :
    ${firstCalcNumber} - ${secondCalcNumber} = ${calcSub}`);
    break;
  case "*":
    alert(`calculation result :
    ${firstCalcNumber} * ${secondCalcNumber} = ${calcMult}`);
    break;
  case "/":
    alert(`calculation result :
    ${firstCalcNumber} / ${secondCalcNumber} = ${calcDiv}`);
    break;
  default:
    alert("Error. Incorrect transaction entry");
}

// task 8
const userAge = prompt("Year of birth", ""),
  userCity = prompt("City where you live", ""),
  userHobby = prompt("Favorite kind of sport", "");

let resultUserAge, resultUserCity, resultUserHobby;

switch (userAge) {
  case null:
  case "":
    resultUserAge = `Шкода, що Ви не захотіли ввести свій рік народження`;
    break;
  default:
    resultUserAge = 2023 - userAge.substring(0, 4) + " - твій вік";
}

switch (userCity) {
  case "Kyiv":
  case "Київ":
  case "Киев":
    resultUserCity = `Ти живеш у столиці України`;
    break;
  case "Washington":
  case "Вашингтон":
    resultUserCity = `Ти живеш у столиці США`;
    break;
  case "London":
  case "Лондон":
    resultUserCity = `Ти живеш у столиці Англії`;
    break;
  case null:
  case "":
    resultUserCity = `Шкода, що Ви не захотіли ввести свіє місто`;
    break;
  default:
    resultUserCity = `Ти живеш у місті ${userCity}`;
}

switch (userHobby) {
  case "formula-1":
  case "формула-1":
    resultUserHobby = `Круто! Хочешь стати Міхаелем Шумахером?`;
    break;
  case "football":
  case "футбол":
    resultUserHobby = `Круто! Хочешь стати Ліонелем Мессі?`;
    break;
  case "boxing":
  case "бокс":
    resultUserHobby = `Круто! Хочешь стати Мухаммедом Алі?`;
    break;
  case null:
  case "":
    resultUserHobby = `Шкода, що Ви не захотіли ввести свій улюблений вид спорту`;
    break;
  default:
    resultUserHobby = `Улюблений вид спорту ${userHobby}`;
}

alert(`${resultUserAge} 
${resultUserCity} 
${resultUserHobby}`);

// // task 9
// let numOrStr = prompt("input number or string", "");

// switch (numOrStr) {
//   case numOrStr.trim() === "":
//     console.log("Empty String");
//     break;
//   case !isNaN(+numOrStr) || numOrStr:
//     console.log("number is Ba_NaN");
//     break;
//   // case null:
//   //   console.log("ви скасували");
//   //   break;
//   default:
//     console.log("OK!");
//     console.log(numOrStr.trim());
// }
