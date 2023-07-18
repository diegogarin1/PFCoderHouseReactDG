import React from 'react'
import ItemList from '../../components/ItemList/ItemList';
import '../../App.css'

const HomePage = () => {
  return (
    <div>
    <h1 className='title'>Welcome to Alimentos Argentinos</h1>
    <p className='text'>Choose the products you would like to buy and add them to your cart!</p>
      <ItemList />
    </div>
    
  )
}

export default HomePage