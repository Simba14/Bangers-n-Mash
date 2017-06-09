import React, { Component } from 'react'

const Video = ({videoId}) => {
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className='video'>
      <iframe className='embed-video' src={url}></iframe>
    </div>
  )
}

export default Video;
