import { React, createContext, useState } from 'react'



export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);


  const addToCart = (product, quantity) => {
    const addedItem = { ...product, quantity };

    const newCart = [...cartItems];
    const isInCart = newCart.find((prod) => prod.id === addedItem.id);

    if (isInCart) {
      isInCart.quantity += quantity;
    } else {
      newCart.push(addedItem);
    }
    setCartItems(newCart);
  }

  const removeFromCart = (product, quantity) => {
    const removedItem = { ...product, quantity };
    const newCart = [...cartItems];
    const isInCart = newCart.find((prod) => prod.id === removedItem.id);

    if (isInCart && isInCart.quantity > 1) {
      isInCart.quantity -= quantity;
    } else {
      newCart.splice(removedItem);
    }
    setCartItems(newCart);

  };




  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};