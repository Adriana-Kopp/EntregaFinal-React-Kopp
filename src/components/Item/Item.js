import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Item = ({ id, name, img, price, stock }) => {
  return (
    <div className="container col-md-4 p-5 justify-contend-center d-flex card-product">
      <div className="row">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={img} className="img-fluid" />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              <p>Precio: ${price}</p>
              <p>Stock disponible: {stock}</p>
            </Card.Text>
            <Button variant="danger">Ver detalle</Button>
            <Link to={`/item/${id}`}></Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Item;
