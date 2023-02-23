/*
1.Создать функцию которая будет принимать миллисекунды и вернет true или false 
в зависимости от того сегодня ли то число которое было передано

2.Создать функцию которая вернет дату и время в формате 13.10.2022 13:13 принимая миллисекунды

3.Создать функцию которая принимает миллисекунды и вернет количество
 времени которое прошло или должно пройти с текущего момента.
*/

//part 1
function isDay(time) {
  return new Date().getDate() ===
    new Date(new Date().getTime() + Number(time)).getDate()
    ? true
    : false;
}

console.log(isDay(80000));

// part 2
function createDate(time) {
  const dateFormat = new Date(Number(time)).toLocaleString();
  return dateFormat.slice(0, dateFormat.length - 3).replace(/,/, "");
}

console.log(createDate(500000000));

// part 3
function timeFromFirst(time) {
  const dateNow = new Date().getTime(),
    dateCreate = new Date(time).getTime(),
    differ = new Date(Math.abs(dateNow - dateCreate)),
    years = differ.toISOString().slice(0, 4) - 1970,
    months = differ.getMonth(),
    days = differ.getDate() - 1,
    hours = differ.getHours(),
    minutes = differ.getMinutes();
  let someWords;
  dateNow >= dateCreate
    ? (someWords = "Прошло ")
    : (someWords = "Должно пройти ещё ");

  return (
    someWords +
    years +
    " years, " +
    months +
    " months, " +
    days +
    " days, " +
    hours +
    " hours and " +
    minutes +
    " minutes."
  );
}

console.log(timeFromFirst(2000000000000));
