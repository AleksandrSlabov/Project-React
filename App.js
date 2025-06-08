import Title from "./components/title/title";
import React, { useState } from "react";
import { Route, Routes} from "react-router-dom";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./store/CartContextProvaider";



const logoApple1 = require("./imgHeaphones/apple1.png");
const logoApple2 = require("./imgHeaphones/apple2.png");
const logoApple3 = require("./imgHeaphones/apple3.png");

const logoWHApple1 = require("./imgHeaphones/wiredHeadphones/wHapple1.png");
const logoWHApple2 = require("./imgHeaphones/wiredHeadphones/wHapple2.png");
const logoWHApple3 = require("./imgHeaphones/wiredHeadphones/wHapple3.png");

const headPhonse = [
  { id: 0, img: logoApple1, title: "Apple BYZ S 8521", price: 2927, rate: 4.7 },
  { id: 1, img: logoApple2, title: "Apple EarPods", price: 2327, rate: 4.5 },
  { id: 2, img: logoApple3, title: "Apple EarPods", price: 2327, rate: 4.5 },
  { id: 3, img: logoApple1, title: "Apple BYZ S 8521", price: 2927, rate: 4.7 },
  { id: 4, img: logoApple2, title: "Apple EarPods", price: 2327, rate: 4.5 },
  { id: 5, img: logoApple3, title: "Apple EarPods", price: 2327, rate: 4.5 },
  { id: 6, img: logoApple2, title: "Apple EarPods", price: 2327, rate: 4.5 },
  { id: 7, img: logoApple3, title: "Apple EarPods", price: 2327, rate: 4.5 },
];
const wiredHeadPhones = [
  { id: 6, img: logoWHApple1, title: "Apple AirPods", price: 9527, rate: 4.7 },
  { id: 7, img: logoWHApple2, title: "Gerlax GH-04", price: 6527, rate: 4.7 },
  { id: 8, img: logoWHApple3, title: "Apple AirPods", price: 7527, rate: 4.7 },
  { id: 9, img: logoWHApple2, title: "Gerlax GH-04", price: 6527, rate: 4.7 },
  { id: 10, img: logoWHApple3, title: "Apple AirPods", price: 7527, rate: 4.7 },
];

function App() {
  const [costs, setCosts] = useState(headPhonse);
  console.log(costs[0]);
  const [wcosts, setwCosts] = useState(wiredHeadPhones);

  return (
    
      

    <CartProvider>
      <Routes>
        <Route path="/" element={<Title costs={costs} wcosts={wcosts} />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </CartProvider>
    
  );
}

export default App;
