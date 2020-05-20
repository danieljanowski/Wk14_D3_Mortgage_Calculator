import React, { Component } from 'react';
import MortgageContainer from './containers/MortgageContainer';
import './App.css';

class App extends Component {
  render() {
    return(
      <>
        <h1>Mortgage Calculator </h1>
        <MortgageContainer />
      </>
    )
  }
}

export default App;
