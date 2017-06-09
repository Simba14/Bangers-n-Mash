import React, { Component } from 'react';
import Header from './components/header';
import VideoList from './components/video_list';
import Video from './components/video';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src="BR_Logo.jpg" className="App-logo" alt="logo" />
          <Header>Boiler Room Picks</Header>
        </div>
        <div className='main-body'>
          <Video videoId='FSBB9uTfqp8' />
          <VideoList />
        </div>
      </div>
    );
  }
}

export default App;
