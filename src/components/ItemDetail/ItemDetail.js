import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import Card from "react-bootstrap/Card";

const ItemDetail = ({ name, price, category, img, stock, description }) => {
  const [isCant, setIsCant] = useState(false);

  const { addCart } = useCartContext();

  const onAdd = (quantity) => {
    addCart({ name, price, category, img, stock, description, quantity });
    setIsCant(true);
  };

  return (
    <>
      <div className="container col-md-4 p-5 justify-contend-center d-flex card-product">
        <div className="row">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Precio: ${price}
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">
                Stock: {stock}
              </Card.Subtitle>
              <Card.Text as="div"> {description}</Card.Text>

              {!isCant ? (
                <ItemCount onAdd={onAdd} />
              ) : (
                <>
                  <Link to={`/cart`} className="btn btn-outline-danger">
                    Terminar compra
                  </Link>
                  <Link to={`/`} className="btn btn-outline-success">
                    Seguir comprando
                  </Link>
                </>
              )}
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
