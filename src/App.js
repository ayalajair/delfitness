import React from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import Nav from './components/Nav/Nav.js';

class App extends React.Component {
  render() {
    return(
      <div>
        <Header/>
        <Nav/>
      </div>
    )
  }
}

export default App;
