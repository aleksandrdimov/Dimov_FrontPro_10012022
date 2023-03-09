/*
Використовуючи API https://jsonplaceholder.typicode.com/ зробити пошук поста за ід.
Ід має бути введений в інпут (валідація: ід від 1 до 100) Якщо знайдено пост, то вивести на сторінку блок з постом і зробити кнопку для отримання комкоментарів до посту.
Зробити завдання використовуючи проміси, перехопити помилки.
*/

/*
Создать цепочку промисов (длинной минимум в 3) - свой распорядок дня
например
(brushTeeth.then(() => dosmthelse.then(())
*/
const scheduleDay = new Promise((resolve) => {
  resolve("- wake up");
})
  .then((result) => {
    return result + "\n- brush teeth";
  })
  .then((result) => {
    return result + "\n- breakfast";
  })
  .then((result) => {
    return result + "\n- work time";
  })
  .then((result) => {
    return result + "\n- dinner";
  })
  .then((result) => {
    return result + "\n- work time";
  })
  .then((result) => {
    return result + "\n- supper";
  })
  .then((result) => {
    return result + "\n- shower";
  })
  .then((result) => {
    return result + "\n- sleep";
  });

scheduleDay.then((result) => console.log(result));
