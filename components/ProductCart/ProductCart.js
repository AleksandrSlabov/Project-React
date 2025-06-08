import { useCart } from "../../store/CartContextProvaider";
import "./ProductCart.css";
import minus from "../../img/btnMinus.png";
import plus from "../../img/btnPlus.png";
import IconDeleted from "../../img/Vector.png";

const ProductCart = () => {
  const { cartItems, addToCart, removeFromCart, removeCart } = useCart();

  return (
    <div className="productInCart">
      {cartItems.map((item) => (
        <div className="productCards" key={item.id}>
          <div className="nameProductCardAndBtnDeleted">
            <div className="nameProductCards" >
              <div className="quantityGoods">
                <img className="imgProductCart" src={item.img}></img>
                <div className="btnquantityGoods">
                  <button
                    onClick={() => removeCart(item.id)}
                    className="imgBtnPlusAndMinus"
                  >
                    <img className="btnImg" src={minus}></img>
                  </button>
                  <span className="spanPlusMinus">{item.quantity}</span>
                  <button
                    onClick={() => addToCart(item)}
                    className="imgBtnPlusAndMinus"
                  >
                    <img className="btnImg" src={plus}></img>
                  </button>
                </div>
              </div>
              <div className="productName">
                <p className="Title_P">{item.title}</p>
                <p className="Price_P">{item.price} &#8381;</p>
              </div>
            </div>
            <div className="btnDeltedAndSumProduct">
              <button
                className="btnDeleted"
                onClick={() => removeFromCart(item.id)}
              >
                <img className="IconBtnDeleted" src={IconDeleted}></img>
              </button>
              <span className="sumProduct">
                {item.price * item.quantity} &#8381;
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCart;
