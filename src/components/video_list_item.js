import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  const thumbnailURL = video.default.url;

  return (
    <li onClick={() => onVideoSelect(video)} className='list-items'>
      <div className='set-list-details'>
        <div className='details-left'>
          <img className='thumbnail' src={thumbnailURL} />
        </div>
        <div className='details-body'>
          <div className='details-heading'>{ video.title }</div>
        </div>
      </div>
    </li>
  )
}

export default VideoListItem;
