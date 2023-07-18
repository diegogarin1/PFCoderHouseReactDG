import { React, useContext } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div><ShoppingCartIcon />{cartItems.length} </div>
  
  )
}

export default CartWidget