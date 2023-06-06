//import cart from "./assets/cart.svg";

import { useCartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { totalProducts } = useCartContext();

  return <div>{totalProducts() != 0 && totalProducts()} 🛒</div>;
};

export default CartWidget;
