import React, { Component } from 'react';
import Header from './components/header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src="BR_Logo.jpg" className="App-logo" alt="logo" />
          <Header>Boiler Room Picks</Header>
        </div>
      </div>
    );
  }
}

export default App;
