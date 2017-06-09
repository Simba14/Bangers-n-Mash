import React, { Component } from 'react';
import Header from './components/header';
import VideoList from './components/video_list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src="BR_Logo.jpg" className="App-logo" alt="logo" />
          <Header>Boiler Room Picks</Header>
        </div>
        <div className='main-body'>
          <VideoList />
        </div>
      </div>
    );
  }
}

export default App;
