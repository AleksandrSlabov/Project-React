import "./Card.css";
import { useCart } from "../../store/CartContextProvaider";
import rate from "../../img/rate.png";
import like from "../../img/Like.png";

import React, { useState } from "react";

const Card = (props) => {
  const { addToCart } = useCart();

  const addCart = (e) => {
    e.preventDefault();
    console.log("goooood");
    addToCart(props.costsbutton);
  };

  return (
    <div>
      <div className="ProductCard">
        <div className="image">
          <img className="img" src={props.src}></img>
        </div>

        <div className="group">
          <div className="firstNameAndPrice">
            <p className="firstName">{props.cardTitle}</p>
            <p className="price">{props.cardPrice} &#8381;</p>
          </div>
          <div className="rateAndButton ">
            <span className="star">
              <span className="rate">
                <img src={rate}></img>
              </span>
              {props.cardRate}
            </span>

            <div className="btnLikeAndBtnBuy">
              <button
                id={props.costsbutton.id}
                className="buyButton btn"
                onClick={addCart}
              >
                <p>Купить</p>
              </button>
              <button className="CardBtnLike">
                <img src={like}></img>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
