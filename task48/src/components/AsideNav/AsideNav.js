import "./AsideNav.css";
import { clickAsideNavItem } from "./clickAsideNavItem";

const AsideNav = () => {
  return (
    <nav className="aside-nav">
      <ul className="aside-nav__list" onClick={clickAsideNavItem}>
        <li className="aside-nav__item">iPhone</li>
        <li className="aside-nav__item">Samsung</li>
        <li className="aside-nav__item">Xiaomi</li>
      </ul>
    </nav>
  );
};
export default AsideNav;
