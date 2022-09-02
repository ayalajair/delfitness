import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

class App extends React.Component {
  render() {
    return(
      <Router>
        <div className='App'>
          <Nav/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category' element={<ItemListContainer/>}/>
            <Route path='/detail' element={<ItemDetailContainer/>}/>
          </Routes>
        </div>
      </Router>
    )
  }
}

export default App;
