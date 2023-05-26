import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addCart = (newProduct) => {
    setCartList([...cartList, newProduct]);
  };

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
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
