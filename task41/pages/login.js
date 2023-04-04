const button = document.querySelector(".form__button");
const section = document.querySelector("#section");
const form = document.querySelector(".form");

button.onclick = () => {
  tableCreate();
  form.style.display = "none";
  button.style.display = "none";
};

function tableCreate() {
  const table = document.createElement("table");
  section.appendChild(table);

  table.style = `width:500px;height:400px;padding:5px;margin-bottom:10px;`;
  // let count = 0;
  for (let i = 0; i < form.length; i++) {
    const tr = table.insertRow();

    for (let j = 0; j <= 1; j++) {
      const td = tr.insertCell();
      td.style = `border:1px solid black;color:grey;text-align:center`;

      // count++;
      if (j === 1) {
        if (form[i].getAttribute("type") === "radio") {
          if (form[i].checked) {
            td.appendChild(document.createTextNode(`${form[i].value}`));
          } else {
            tr.parentNode.removeChild(tr);
          }
        } else if (form[i].getAttribute("type") === "checkbox") {
          if (form[i].checked) {
            td.appendChild(document.createTextNode(`${form[i].checked}`));
          } else {
            tr.parentNode.removeChild(tr);
          }
        } else {
          td.appendChild(document.createTextNode(`${form[i].value}`));
        }
      } else {
        td.appendChild(document.createTextNode(`${form[i].name}`));
      }
    }
  }
}
