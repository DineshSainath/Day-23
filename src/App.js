import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Carousel from "./components/Carousel";
import Content from "./components/Content";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [cartItems, setCartItems] = useState(0);

  const toggleCart = (isAdding) => {
    setCartItems((prevCount) => (isAdding ? prevCount + 1 : prevCount - 1));
  };

  return (
    <div className="App">
      <Nav cartItems={cartItems} />
      <Carousel />
      <Content toggleCart={toggleCart} />
    </div>
  );
}

export default App;
