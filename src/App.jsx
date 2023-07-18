import { useState } from 'react';

import './App.css';

//components
import Header from './components/Header/Header';

import { CartProvider } from './context/CartContext';


//Pages
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/Home/HomePage';
import AboutPage from './pages/About/AboutPage';
import ContactPage from './pages/Contact/ContactPage';
import CategoriesPage from './pages/Categories/CategoriesPage';
import CartPage from './pages/Cart/CartPage';
import DetailPage from './pages/Detail/DetailPage';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <CartProvider>
        <div className='app'>

          <Header></Header>
          <div className='container-pages'>
            <Routes>
              <Route path='/' element={<HomePage />}></Route>
              <Route path='/about' element={<AboutPage />}></Route>
              <Route path='/contact' element={<ContactPage />}></Route>
              <Route path='/categories/:type' element={<CategoriesPage />}></Route>
              <Route path='/cart' element={<CartPage />}></Route>
              <Route path='/detail/:id' element={<DetailPage />}></Route>
            </Routes>
          </div>
        </div>
        </CartProvider>
      </Router>

    </>
  )
}

export default App
