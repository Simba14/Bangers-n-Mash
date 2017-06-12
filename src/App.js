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
      .then(response => this.setState({
        videos: response.data,
        selectedVideo: response.data[0]
      }));
  }

  render() {
    return (
      <div className='app'>
        <div className='app-header'>
          <a href='https://boilerroom.tv/'>
          <img src={require('./assets/br_logo.png')} className='app-logo' />
          </a>
          <Header className='header'>Boiler Room Picks</Header>
        </div>
        <div className='app-body'>
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
