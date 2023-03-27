const buttons = document.querySelectorAll("button");
const links = document.querySelectorAll("a");
const firstLink = document.querySelector(".first__link");
firstLink.innerText = "go to site\n " + firstLink.getAttribute("href");
const secondLink = document.querySelector(".second__link");
secondLink.innerText = "go to site\n " + secondLink.getAttribute("href");

buttons.forEach((button, index) => {
  button.addEventListener("click", (e) => {
    window.location = links[index].getAttribute("href");
  });
});

function visitPage() {
  links.forEach((el) => {
    if (!el.getAttribute("href").includes("http")) {
      el.href = "http://" + el.pathname;
    }
  });
}
visitPage();
