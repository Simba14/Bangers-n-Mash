import React, { Component } from 'react';
import Header from './components/header';
import VideoList from './components/video_list';
import Video from './components/video';
import axios from 'axios';
import API_KEY from './private/api_key'


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videoIds: ['FSBB9uTfqp8'],
      videos: 'p'
    };
  }

  componentWillMount() {
    axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&id=FSBB9uTfqp8&key=${API_KEY}`)
      .then(response => this.setState({ videos: response.data.items }));
  }

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
          {console.log(this.state.videos)}
        </div>
      </div>
    );
  }
}

export default App;
