import React, { Component } from 'react'
import VideoListItem from './video_list_item';

const VideoList = ({videos, onVideoSelect, children}) => {
  const videoItems = videos.map((video) => {
    return (
      <VideoListItem
        key={video.etag}
        onVideoSelect={onVideoSelect}
        video={video} />
    );
  });

  return (
    <ul className='col-md-3 video-list'>
      <h4 className='list-heading'>{children}</h4>
      {videoItems}
    </ul>
  )
}

export default VideoList;
