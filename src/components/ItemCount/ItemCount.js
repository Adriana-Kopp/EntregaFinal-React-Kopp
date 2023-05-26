import Button from "react-bootstrap/Button";

import { useCounter } from "../../hook/useCounter";

const ItemCount = ({ initial = 1, stock = 10, onAdd }) => {
  const { counter, handleAdd, handleRest } = useCounter(initial, 1, stock);

  return (
    <center>
      <Button onClick={handleAdd}> + 1 </Button>
      <label>{counter}</label>
      <Button onClick={handleRest}> - 1 </Button>
      <Button
        onClick={() => {
          onAdd(counter);
        }}
      >
        {" "}
        Agregar al carrito{" "}
      </Button>
    </center>
  );
};

export default ItemCount;
