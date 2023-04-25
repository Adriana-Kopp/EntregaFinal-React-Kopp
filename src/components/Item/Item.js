import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Item = ({ id, name, img, price, stock }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <p>Precio: ${price}</p>
          <p>Stock disponible: {stock}</p>
        </Card.Text>
        <Button variant="primary">Ver detalle</Button>
        <Link to={`/item/${id}`}></Link>
      </Card.Body>
    </Card>
  );
};

export default Item;
