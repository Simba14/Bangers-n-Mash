import React, { Component } from 'react'

const Video = ({video}) => {
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
