import React from 'react'
import './Header.css'
import NavBar from '../../components/NavBar/NavBar'
import logo from '../../assets/logo.png'
const Header = () => {
  return (
    <div>
        <header>
            <img className='logo' src={logo} alt="Logo" />
            <NavBar></NavBar>

        
        
        </header></div>
  )
}

export default Header