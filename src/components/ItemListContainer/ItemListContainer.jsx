
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';
import { CardActionArea } from '@mui/material';
import "./ItemListContainer.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { React, useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const ItemListContainer = ({ data }) => {
  const { addToCart, removeFromCart } = useContext(CartContext);
  const handleAddToCart = () => {
    const product = data
    addToCart(product);
    console.log(`Added ${product.name}`);
  };
  const handleRemoveFromCart = () => {
    const product = data
    removeFromCart(product);
    console.log(`Removed ${product.name}`);
  };
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
          
          
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
}

export default ItemListContainer;