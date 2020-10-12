import React from 'react';
import Video from './video.jsx';
import { v4 as uuidv4 } from 'uuid';

const Videos = (props) => {
  if (props.videos) {
    return (
      <>
        <ul className="video_items">
          {props.videos.items.map((video) => {
            const id = video.id.videoId ? video.id.videoId : video.id;
            return <Video key={uuidv4()} data={video} id={id} />;
          })}
        </ul>
      </>
    );
  }
  return (
    <div className="loading">
      <i className="fas fa-spinner fa-3x loadingImage"></i>
    </div>
  );
};

export default Videos;
