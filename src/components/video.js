import React, { Component } from 'react'

const Video = ({videoId}) => {
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div>
      {url}
    </div>
  )
}

export default Video;
