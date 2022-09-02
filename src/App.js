import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


class App extends React.Component {
  render() {
    return(
        <div className='App'>
          <Nav/>
          <ItemListContainer/>
          <ItemDetailContainer/>
        </div>
    )
  }
}

export default App;
