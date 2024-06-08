import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CardItem({ src, name, price, rating, sale }) {
  return (
    <Card style={{ width: "14rem" }}>
      <Card.Img variant="top" src={src} className="card-img" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text></Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
  );
}

export default CardItem;
