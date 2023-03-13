/*
1) Реализовать функцию-генератор которая отдаст 10 рандомных 
чисел в диапазоне переданном в аргументах в ней.
2) Создать свой распорядок дня с помощью async await 
( тоесть мы должны "подождать" выполнение асинхронной функции brushTeeth перед тем
как приступать к выполнению следующей асинхронной функции)
*/

// part 1
function* generateSequence(start, end) {
  for (let i = 1; i <= 10; i++) {
    const random = start + Math.random() * (end + 1 - start);
    yield Math.floor(random);
  }
}

function* generateRandomNumber() {
  yield* generateSequence(10, 25);
}

let finalStr = "";

for (let number of generateRandomNumber()) {
  finalStr += number + " ";
}

console.log(finalStr);

// part 2
const wakeUp = () => {
  return new Promise((resolve) => {
    return setTimeout(() => resolve("- wake up"), 500);
  });
};

const brushTeeth = () => {
  return new Promise((resolve) => {
    return setTimeout(() => resolve("- brush teeth"), 500);
  });
};

const breakfast = () => {
  return new Promise((resolve) => {
    return setTimeout(() => resolve("- breakfast"), 500);
  });
};

const workTime = () => {
  return new Promise((resolve) => {
    return setTimeout(() => resolve("- work time"), 500);
  });
};

const dinner = () => {
  return new Promise((resolve) => {
    return setTimeout(() => resolve("- dinner"), 500);
  });
};

const supper = () => {
  return new Promise((resolve) => {
    return setTimeout(() => resolve("- supper"), 500);
  });
};

const sleep = () => {
  return new Promise((resolve) => {
    return setTimeout(() => resolve("- sleep"), 500);
  });
};

async function schedule() {
  return Promise.all([
    await wakeUp(),
    await brushTeeth(),
    await breakfast(),
    await workTime(),
    await dinner(),
    await workTime(),
    await supper(),
    await sleep(),
  ]);
}

schedule().then((result) => console.log(result.join("\n")));
