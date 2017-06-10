import React from 'react';

const VideoListItem = ({video}) => {
  const thumbnailURL = video.snippet.thumbnails.default.url;

  return (
    <li className='list-group-item'>
      <div className='set-list-details'>
        <div className='details-left'>
          <img className='thumbnail' src={thumbnailURL} />
        </div>
        <div className='details-body'>
          <div className='details-heading'>{ video.snippet.title }</div>
        </div>
      </div>
    </li>
  )
}

export default VideoListItem;
