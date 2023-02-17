/* 1.Создать функцию которая будет принимать имя пользователя и 
время через которое он хочет чтоб его поприветствовали. 
Время пользователь хочет вводить строкой в разном формате например
 '10 minutes' , '20 seconds', '1 hour', '2 hours'

2.Создать функцию которая будет или сериализировать или десериализировать 
объект в зависимости от того в какой форме он был передан

3.Создать функцию которая вернет true или false в зависимости от того что
 в нее передать JSON строку или обычную строку 
*/

//part 1
function sayHi(name, delay) {
  let calcSeconds;
  if (typeof delay === "string") {
    delay.split(" ").reduce((a, b) => {
      switch (b) {
        case "seconds":
        case "second":
          calcSeconds = a * 1000;
          break;
        case "minutes":
        case "minute":
          calcSeconds = a * 1000 * 60;
          break;
        case "hour":
        case "hours":
          calcSeconds = a * 1000 * 60 * 60;
          break;
      }
    });
  } else calcSeconds = delay;

  setTimeout(() => {
    console.log(`Hello ${name}`);
  }, calcSeconds);
}
sayHi("Aleks", "2 seconds");

// part 2
const obj = { name: "Bob" };

function jsonTransform(el) {
  try {
    JSON.parse(el);
  } catch (e) {
    return JSON.stringify(el);
  }
  return JSON.parse(el);
}
console.log(jsonTransform(obj));

// part 3
function isJsonString(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}
console.log(isJsonString(JSON.stringify(obj)));
