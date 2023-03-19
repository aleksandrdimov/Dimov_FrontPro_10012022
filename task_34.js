const main = document.createElement("main");
const newTag = document.createElement("h4");
newTag.innerText = "Info about smth :)";
newTag.style = `position:relative;z-indez:1;cursor:pointer; width:150px;padding:20px 0;margin:auto;text-align:center;box-shadow:2px 2px 10px grey`;

const newDivFocus = document.createElement("div");
newDivFocus.innerText = "you hover to the info or focus input :)";
newDivFocus.style = `display:none;position:absolute;z-index:2;right:-50px;top:50px;width:90px;padding:10px;background:white;color:blue;box-shadow:2px 4px 5px grey`;

const newInput = document.createElement("input");
const labelInput = document.createElement("label");
labelInput.innerText = "Please, focus input";
labelInput.style = `display:block;width:150px;font-weight:700;color:blue`;

document.body.appendChild(main);
main.appendChild(newTag);
main.appendChild(labelInput);
main.appendChild(newInput);
newTag.appendChild(newDivFocus);

newTag.addEventListener("mouseover", () => {
  newDivFocus.style.display = "block";
});
newTag.addEventListener("mouseout", () => {
  newDivFocus.style.display = "none";
});

newInput.addEventListener("focus", () => {
  newDivFocus.style.display = "block";
  labelInput.style.color = "black";
});
newInput.addEventListener("blur", () => {
  newDivFocus.style.display = "none";
  labelInput.style.color = "blue";
});
