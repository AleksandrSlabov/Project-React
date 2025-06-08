import "./HeaderButton.css";
import CartIcon from "./CartIcon";
import { useCart } from "../../store/CartContextProvaider";
import {useNavigate, useLocation} from 'react-router-dom'

const HeaderButton = () => {
  const { cartItems } = useCart();

  const navigate = useNavigate()
  const location = useLocation()

  const cartClickHandle = () => {
    if(location.pathname === '/cart'){
      navigate('/')
      console.log('good cart')
    } 
    else{
      navigate('/cart')
      console.log('BadCart')
    }
  }

  return (
    <button onClick={cartClickHandle} className="buttonClasses">
        <span className="icon">
          <CartIcon />
          <span className="badge">{cartItems.length}</span>
        </span>
      </button>
    
  );
};

export default HeaderButton;
