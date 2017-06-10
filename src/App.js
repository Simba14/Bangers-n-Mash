import React, { Component } from 'react';
import Header from './components/header';
import VideoList from './components/video_list';
import Video from './components/video';
import axios from 'axios';
import API_KEY from './private/api_key'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = { videos: [] };
    this.videoIDS = ['FSBB9uTfqp8', 'p6ozF0Y-PzU', '2OPdiH6OYag']
  }

  componentWillMount() {
    this.videosData = ['a'];
    axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&id=FSBB9uTfqp8&key=${API_KEY}`)
      .then(response => {
        // let tempObj = response.data.items;
        // this.videosData.push( tempObj );
        this.setState({ videos: response.data.items });
      });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src="BR_Logo.jpg" className="App-logo" alt="logo" />
          <Header>Boiler Room Picks</Header>
        </div>
        <div className='App-body'>
          <Video videoId='FSBB9uTfqp8' />
          <VideoList videos={this.state.videos}/>
        </div>
      </div>
    );
  }
}

export default App;
