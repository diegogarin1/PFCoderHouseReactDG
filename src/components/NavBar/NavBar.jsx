
import { AppBar, Container, Toolbar } from "@mui/material";

import { Link } from "react-router-dom";
import "./NavBar.css";
import CartWidget from '../CartWidget/CartWidget'
import MenuCategories from "../MenuCategories/MenuCategories";




const NavBar = () => {


  return (
    
    <AppBar style={{ backgroundColor: 'white'}}  position="static" className="navbar">
      <Container maxWidth="xl">
        <Toolbar  disableGutters color="inherit" className="navbarContainer">
          <Link to="/" >
            Home
          </Link>
          <MenuCategories />
          <Link to="/about" >
            About
          </Link>
          <Link to="/contact" >
            Contact
          </Link>
          <Link to="/cart" >
            <div>
              <CartWidget></CartWidget>
            </div>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
