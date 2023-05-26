import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = () => {
  const [isCant, setIsCant] = useState(false);

  const onAdd = (quantity) => {
    console.log("cantidad agregada: ", quantity);
    setIsCant(true);
  };

  return (
    <>
      <div>ItemDetail</div>
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
    </>
  );
};

export default ItemDetail;
