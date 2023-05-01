import renderContentItems from "../renderContent/renderContentItems";

let indexAside = 0;
const clickAsideNavItem = () => {
  const AsideNavItems = document.querySelectorAll(".aside-nav__item");

  AsideNavItems.forEach((el, index) => {
    el.addEventListener("click", () => {
      indexAside = index;
      renderContentItems(index);
    });
  });
  return indexAside;
};

export { clickAsideNavItem, indexAside };
