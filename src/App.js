import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav.js';

class App extends React.Component {
  render() {
    return(
      <div>
        <Nav/>
        <h2>Las ofertas de la semana</h2>
      </div>
    )
  }
}

export default App;
