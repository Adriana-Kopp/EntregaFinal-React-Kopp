import Button from "react-bootstrap/esm/Button";
import { useCartContext } from "../../context/CartContext";

export const CartContainer = () => {
  const { cartList, emptyCart } = useCartContext;

  return (
    <div>
      {cartList.map((prod) => (
        <div>
          <img src={prod.img} alt="" />
          <label>
            Precio: ${prod.price}
            Cantidad: {prod.cantidad}
          </label>
        </div>
      ))}
      <Button onClick={emptyCart} className="btn btn-outline-dangers">
        Limpiar carrito
      </Button>
    </div>
  );
};
