import { React, useContext } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
  const { cartItems } = useContext(CartContext);
  const totalQuantity = cartItems.reduce(
    (accumulator, item) => accumulator + item.quantity,
    0
  );
  return (
    <div><ShoppingCartIcon />{totalQuantity} </div>
  
  )
}

export default CartWidget