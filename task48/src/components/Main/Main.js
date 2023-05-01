import AsideNav from "../AsideNav/AsideNav";
import "./Main.css";
import "../renderContent/contentItems.css";

const Main = () => {
  return (
    <main className="main">
      <aside className="aside">
        <AsideNav />
      </aside>
      <div className="main__container"></div>;
    </main>
  );
};

export default Main;
