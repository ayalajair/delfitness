import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartProvider from './components/CartContext/CartContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  
    return(
      <Router>
        <CartProvider>
          <div className='app'>
            <Nav/>
            <Routes>
              <Route path='/' element={<ItemListContainer/>}/>
              <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
              <Route path='/detail/:id' element={<ItemDetailContainer/>}/>
            </Routes>
          </div>
        </CartProvider>
      </Router>

)
}

export default App;
