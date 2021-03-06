import React, { Component } from 'react';
import Loader from 'halogen/ScaleLoader';

const VideoItem = ({video}) => {
  if (!video) {
    return <Loader className='col-md-6 loading-image' color='#26A65B' size='16px' />;
  }

  const videoId = video.id;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className='col-md-6 video'>
      <div className='embed-responsive embed-responsive-16by9'>
        <iframe className='embed-responsive' src={url}></iframe>
      </div>
      <div className='video-info'>
        <div className='video-title'>{video.title}</div>
        <div>{video.publishedAt}</div>
        <div className='video-description'>{video.description}</div>
        <strong className='tracklist-heading'>Tracklist:</strong>
        <div className='video-tracklist'>{video.tracklist}</div>
      </div>
    </div>
  )
}

export default VideoItem;
