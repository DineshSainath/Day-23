import React from "react";
import CardItem from "./CardItem";
import data from "./Data";

function Content({ toggleCart }) {
  return (
    <div className="container">
      {data.map((item, index) => (
        <CardItem
          key={index}
          src={item.src}
          name={item.name}
          price={item.price}
          rating={item.rating}
          sale={item.sale}
          toggleCart={toggleCart}
        />
      ))}
    </div>
  );
}
export default Content;
