import { useState } from "react";
import Button from "react-bootstrap/Button";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div>
      <div>
        <Button variant="danger" onClick={decrement}>
          -
        </Button>
        {}
        <h4>{quantity}</h4>
        <Button variant="danger" onClick={increment}>
          +
        </Button>
        {}
      </div>
      <div>
        <Button
          variant="danger"
          onClick={() => onAdd(quantity)}
          disabled={!stock}
        >
          Agregar al carrito
        </Button>
        {}
      </div>
    </div>
  );
};

export default ItemCount;
