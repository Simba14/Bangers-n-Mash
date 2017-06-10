import React, { Component } from 'react';
import Loader from 'halogen/ScaleLoader';

const Video = ({video}) => {
  if (!video) {
    return <Loader color='#26A65B' size='16px' />;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className='video'>
      <iframe className='embed-video' src={url}></iframe>
      <div className='video-info'>
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  )
}

export default Video;
