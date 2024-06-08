import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

function CardItem({ src, name, price, rating, sale }) {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<StarIcon key={i} style={{ color: "#FFD700" }} />); // filled star
      } else {
        stars.push(<StarBorderIcon key={i} style={{ color: "#FFD700" }} />); // outlined star
      }
    }
    return stars;
  };

  return (
    <Card style={{ width: "14rem" }}>
      <Card.Img variant="top" src={src} className="card-img" />
      <Card.Body className="card-body">
        <Card.Title>{name}</Card.Title>
        <Card.Text>{renderStars(rating)}</Card.Text>
        <Card.Text>{price}</Card.Text>
        <Button variant="outline-dark">Add to cart</Button>
      </Card.Body>
    </Card>
  );
}

export default CardItem;
