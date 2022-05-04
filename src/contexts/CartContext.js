import React, { useState, useMemo, useContext, useCallback } from "react";

const CART = "cart";

const CartContext = React.createContext();
export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem(CART)) || []);
  const [buy, setBuy] = useState(true);

  const cartLocalStorage = localStorage.setItem(CART, JSON.stringify(cartItems));

  const addCart = useCallback(
    (product) => {
      setCartItems([product, ...cartItems]);
    },[cartItems]);

  const deleteProduct = (id) => setCartItems(cartItems.filter((product) => product.id !== id));

  const value = useMemo(
    () => ({
      cartItems,
      addCart,
      deleteProduct,
      setCartItems
    }),
    [cartItems, addCart, deleteProduct]
  );

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
    );
};