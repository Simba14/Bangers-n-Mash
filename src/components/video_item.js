import React, { Component } from 'react';
import Loader from 'halogen/ScaleLoader';

const VideoItem = ({video}) => {
  if (!video) {
    return <Loader color='#26A65B' size='16px' />;
  }

  console.log(video);
  const videoId = video.id;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className='video'>
      <iframe className='embed-video' src={url}></iframe>
      <div className='video-info'>
        <div>{video.title}</div>
        <div>{video.publishedAt}</div>
        <div>{video.description}</div>
      </div>
    </div>
  )
}

export default VideoItem;
