import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

class App extends React.Component {
  render() {
    return(
      <div>
        <Nav/>
        <ItemListContainer greeting={"Bienvenidos a la Tienda Delfitness"}/>
        <h3>Las ofertas de la semana</h3>
      </div>
    )
  }
}

export default App;
