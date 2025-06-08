import HeaderButton from "../HeaderButton/HeaderButton";
import "./Header.css";
import like from "../../img/Like.png";

const Header = () => {
  return (
    <header className="header">
      <div className="conteinerHeader">
        <h1 className="header_h1">QPICK</h1>

        <div>
          <button className="like">
            <img src={like}></img>
          </button>
          <HeaderButton></HeaderButton>
        </div>
      </div>
    </header>
  );
};
export default Header;
