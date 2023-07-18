import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';
import { CardActionArea } from '@mui/material';
import "./ItemDetailContainer.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { React, useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemDetailContainer = ({ data }) => {
  const { addToCart, removeFromCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const handleAddToCart = () => {
    const product = data
    addToCart(product, quantity);
    console.log(`Added ${product.name}`);
  };
  const handleRemoveFromCart = () => {
    const product = data
    removeFromCart(product, quantity);
    console.log(`Removed ${data.name}`);
  };

  const notifyRemove = () => toast("Product removed!");
  const notifyAdd = () => toast("Product added!");
  return (
    <div className='card shadow-lg p-3 mb-5  rounded'>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="360"

            image={data.img}
            alt={data.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data.description} | ${data.price}
            </Typography>
            <div className='d-flex between'>
            <div onClick={() => { notifyRemove(); handleRemoveFromCart(); }}><DeleteIcon />
        <ToastContainer />
      </div>
      <div onClick={() => { notifyAdd(); handleAddToCart(); }}> <AddShoppingCartIcon />
        <ToastContainer />
      </div>
            </div>
            
            
            

        </CardContent>
      </CardActionArea>
    </Card>
    </div >
  );
}

export default ItemDetailContainer;