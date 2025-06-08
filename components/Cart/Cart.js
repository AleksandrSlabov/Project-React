import { useCart } from "../../store/CartContextProvaider";
import TotalAmount from "../TotalAmount/TotalAmount";
import Header from "../title/Header";
import "./Cart.css";
import LinksCard from "../Links/LinksCard";
import ProductCart from "../ProductCart/ProductCart";

const Cart = () => {
  const { cartItems } = useCart();
  console.log(cartItems);
  return (
    <div>
      <div className="containerProductsCart">
        <section className="sectionOneProductsCards ">
          <Header></Header>
          <div className="cart">
            <div>
              <p className="textCart">Корзина</p>
            </div>

            <div className="productsCardsAndTotalAmount">
              {cartItems.length === 0 ? (
                <div className="emptyCart">
                  <p className="emptyCartP"> Ваша корзина пуста !</p>
                </div>
              ) : (
                <div>
                  <ProductCart />
                </div>
              )}
              <TotalAmount />
            </div>
          </div>

          <footer className="footerProductCards">
            <LinksCard></LinksCard>
          </footer>
        </section>
      </div>
    </div>
  );
};
export default Cart;
