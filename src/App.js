import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Carousel from "./components/Carousel";
import Content from "./components/Content";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [cartItems, setCartItems] = useState(0); // number of items in the cart

  const toggleCart = (isAdding) => {
    setCartItems((prevCount) => (isAdding ? prevCount + 1 : prevCount - 1)); //to add or remove items from cart
  };

  /* webpage divided into 3 components - nav, hero-carousel, content-items */

  return (
    <div className="App">
      {/* sending cartItems to update */}
      <Nav cartItems={cartItems} />
      <Carousel />
      {/* to see whether we are removing or adding items to the cart */}
      <Content toggleCart={toggleCart} />
    </div>
  );
}

export default App;
