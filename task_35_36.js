// task 35
const main = document.createElement("main");

function tableCreate() {
  const table = document.createElement("table");
  table.style = `width:300px;height:300px;padding:5px;margin-bottom:10px;border:1px solid black`;

  let count = 1;

  for (let i = 1; i <= 10; i++) {
    const tr = table.insertRow();
    for (let j = 1; j <= 10; j++) {
      const td = tr.insertCell();
      td.appendChild(document.createTextNode(`${count++}`));
      td.style = `border:1px solid black;color:grey;text-align:center;text-shadow:1px 1px 2px grey`;
    }
  }
  document.body.appendChild(main);
  main.appendChild(table);
}

tableCreate();

// task 36
const img = document.createElement("img");

function randomImg() {
  const randomNumber = Math.round(Math.random() * 8.5 + 1);
  img.src = "./images/" + randomNumber + ".jpg";
}

function viewRandomImg() {
  const container = document.createElement("div");
  container.style.position = "relative";
  main.appendChild(container);

  const button = document.createElement("button");
  button.innerText = "Random change img";
  button.style = `cursor:pointer;position:absolute;z-index:5;top:0;padding:15px 30px;background-color:grey;color:white;border:none;border-bottom-right-radius:25px;box-shadow:2px 2px 5px white`;
  container.appendChild(button);

  button.addEventListener("click", randomImg);

  img.style = `width:500px;height:300px`;
  img.alt = "picture";
  randomImg();
  container.appendChild(img);
}

viewRandomImg();
