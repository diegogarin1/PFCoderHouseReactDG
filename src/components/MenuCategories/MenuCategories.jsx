import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from "react-router-dom";


const MenuCategories = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const styles = {
      lowerText: {
        textTransform: "lowercase",
        color: "grey",
        fontWeight: 550,
        fontSize: 15

    },
    upperText: {
      textTransform: "uppercase",
      color: "grey",
      fontWeight: 550,
      fontSize: 15

  },
  }
  

  
    return (
      <div>
        <Button
        disableGutters
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
       <span style={styles.upperText}>C</span><span style={styles.lowerText}>ategories</span>
        </Button>
        <Menu
        disableGutters
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem>
            <Link to="/categories/yerbas">
              Yerbas Mate
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/categories/alfajores" >
              Alfajores
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/categories/galletitas" >
              Galletitas
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/categories/postres">
              Postres
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/categories/ddl">
              Dulce de leche
            </Link>
          </MenuItem>
        </Menu>
      </div>
    );
  };
  
  export default MenuCategories



