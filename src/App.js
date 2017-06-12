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
    axios.get(`https://api.myjson.com/bins/dtr0r`)
      .then(response => this.setState({
        videos: response.data,
        selectedVideo: response.data[0]
      }));
  }

  render() {
    return (
      <div className='app'>
        <div className='app-header'>
          <Header className='header'>Boiler Room Picks</Header>
        </div>
        <div className='app-body'>
          <div className='video-display'>
            <VideoItem video={this.state.selectedVideo} />
          </div>
          <div className='video-list'>
            <VideoList
              onVideoSelect={selectedVideo => this.setState({selectedVideo})}
              videos={this.state.videos.slice(0, 3)}>
              I Was In The Crowd
            </VideoList>
          </div>
          <div className='video-list'>
            <VideoList
              onVideoSelect={selectedVideo => this.setState({selectedVideo})}
              videos={this.state.videos.slice(3, 7)}>
              All Time Favourites
            </VideoList>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
