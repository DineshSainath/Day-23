import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

function CardItem({ src, name, price, rating, sale, toggleCart }) {
  const [inCart, setInCart] = useState(false); //if the cart is empty or not for the button toggle

  const renderStars = (rating) => {
    //displaying rating stars out of 5
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<StarIcon key={i} style={{ color: "#FFD700" }} />);
      } else {
        stars.push(<StarBorderIcon key={i} style={{ color: "#FFD700" }} />);
      }
    }
    return stars;
  };

  const handleToggleCart = () => {
    if (inCart) {
      toggleCart(false); // Remove from cart
    } else {
      toggleCart(true); // Add to cart
    }
    setInCart(!inCart);
  };

  const buttonText = inCart ? "Remove from Cart" : "Add to Cart"; //to display button text on toggle

  return (
    <Card style={{ width: "14rem" }}>
      <Card.Img variant="top" src={src} className="card-img" />
      <Card.Body className="card-body">
        <Card.Title>
          <strong>{name}</strong>
        </Card.Title>
        <Card.Text>{renderStars(rating)}</Card.Text>
        <Card.Text>{price}</Card.Text>
        <Button variant="outline-dark" onClick={handleToggleCart}>
          {buttonText}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CardItem;
