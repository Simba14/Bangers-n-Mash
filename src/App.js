import React, { Component } from 'react';
import Header from './components/header';
import VideoList from './components/video_list';
import VideoItem from './components/video_item';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVIdeo: null
    };
  }

  componentWillMount() {
    axios.get(`https://api.myjson.com/bins/110zoz`)
      .then(response => this.setState({ videos: response.data }));
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src="BR_Logo.jpg" className="App-logo" alt="logo" />
          <Header>Boiler Room Picks</Header>
        </div>
        <div className='App-body'>
          <VideoItem video={this.state.selectedVideo} />
          <VideoList
            onVideoSelect={selectedVideo => this.setState({selectedVideo})}
            videos={this.state.videos}/>
        </div>
      </div>
    );
  }
}

export default App;
