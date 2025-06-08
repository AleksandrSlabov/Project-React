import "./TotalAmount.css"
import { useCart } from "../../store/CartContextProvaider";

const TotalAmount = () => {
    const { cartItems } = useCart();
    const result = cartItems.filter(item => item && !isNaN(item.price) && !isNaN(item.quantity)
&& item.price > 0 && item.quantity >0)
    .reduce((total, item) => 
    total + (item.price * item.quantity), 0)

    return(
        <div className="TotalAmount">
                <div className="result">
                  <p className="result_P">ИТОГО</p>
                  <span className="result_Span">  {result} &#8381;</span>
                </div>
                <button className="btnDesign">
                  <p className="btnDesign_P">Перейти к оформлению </p>
                </button>
              </div>
    )
}
export default TotalAmount