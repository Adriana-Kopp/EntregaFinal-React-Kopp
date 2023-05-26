import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

const ItemDetail = ({ name, price, category, img, stock, description }) => {
  const [isCant, setIsCant] = useState(false);

  const { addCart } = useCartContext();

  const onAdd = (quantity) => {
    addCart({ name, price, category, img, stock, description, quantity });
    setIsCant(true);
  };

  return (
    <>
      <div className="row text-center">
        <div className="col">
          <picture>
            <img src={img} alt={name} />
          </picture>
          <section>
            <p>Nombre: {name} </p>
            <p>Descripción: {description} </p>
            <p>Categoria: {category} </p>
            <p>Precio: ${price} </p>
            <p>Stock: {stock} </p>
          </section>
        </div>
        <div>
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
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
