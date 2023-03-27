const buttons = document.querySelectorAll("button");
const links = document.querySelectorAll("a");
const firstLink = document.querySelector(".first__link");
firstLink.innerText = "go to site\n " + firstLink.getAttribute("href");
const secondLink = document.querySelector(".second__link");
secondLink.innerText = "go to site\n " + secondLink.getAttribute("href");

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    changeToValidLink();
    window.location = links[index].getAttribute("href");
  });
});

function changeToValidLink() {
  links.forEach((el) => {
    if (!el.getAttribute("href").includes("http")) {
      el.href = "http://" + el.pathname.substring(1);
    }
  });
}

console.log(links);
