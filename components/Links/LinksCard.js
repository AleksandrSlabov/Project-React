import "./links.css";
import React from "react";
import TG from "../../img/Telegram.png";
import VK from "../../img/VK.png";
import Whatsapp from "../../img/WH.png";

const LinksCard = () => {

  const socialTGButton =() => {
    window.open('https://t.me/sancheszzzzz', '_blank')
  }
  return (
    <div className="footer">
      <div className="storeName">
        <p className="storeNameH1">QPICK</p>
      </div>
      <div className="links">
        <div className="linksButton">
          <button className="btn"><p className="social_P">Избранное</p></button>
          <button className="btn"><p className="social_P">Корзина</p></button>
          <button className="btn"><p className="social_P">Контакты</p></button>
        </div>
        <div className="linksLang">
          <button className="btn"><p className="social_P">Условия Сервиса</p></button>
          <div className="langButton">
            <span>&#127760;</span>
            <button className="btn">Рус</button>
            <button className="btn">Eng</button>
          </div>
        </div>
      </div>
      <div className=" social">
        <button onClick={socialTGButton} className="btn">
          
          <img src={TG}></img>
        </button>
        <button className="btn">
          <img src={VK}></img>
        </button>
        <button className="btn">
          <img src={Whatsapp}></img>
        </button>
      </div>
    </div>
  );
};

export default LinksCard;
