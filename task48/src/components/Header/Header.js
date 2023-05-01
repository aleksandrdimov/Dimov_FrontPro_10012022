import Logo from "../common/Logo/Logo";
import HeaderNav from "../HeaderNav/HeaderNav";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <Logo />
        <HeaderNav />
      </div>
    </header>
  );
};

export default Header;
