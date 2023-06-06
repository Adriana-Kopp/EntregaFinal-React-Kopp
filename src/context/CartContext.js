import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addCart = (newProduct) => {
    //logica de los productos repetidos agregados
    const noRepeat = cartList.findIndex((prod) => newProduct.id == prod.id);

    if (noRepeat == -1) {
      setCartList([...cartList, newProduct]);
    } else {
      cartList[noRepeat].quantity += newProduct.quantity;
      setCartList([...cartList]);
    }
  };

  //Cantidad total de productos
  const totalProducts = () =>
    cartList.reduce((total, objProd) => (total += objProd.quantity), 0);

  //Precio total
  const totalPrice = () =>
    cartList.reduce(
      (total, objProduct) => (total += objProduct.quantity * objProduct.price),
      0
    );

  //Eliminar productos
  const deletProducts = (itemId) =>
    cartList.filter((prod) => prod.id != itemId);

  //Vaciar carrito
  const emptyCart = () => {
    setCartList([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addCart,
        emptyCart,
        totalPrice,
        totalProducts,
        deletProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
