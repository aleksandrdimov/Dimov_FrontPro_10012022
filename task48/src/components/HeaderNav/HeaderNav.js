import "./HeaderNav.css";
import { clickHeaderNav } from "./clickHeaderNav";

const HeaderNav = () => {
  return (
    <nav className="header-nav">
      <ul className="header-nav__list " onClick={clickHeaderNav}>
        <li className="header-nav__item">Phone</li>
        <li className="header-nav__item">MacBook</li>
        <li className="header-nav__item">PC</li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
