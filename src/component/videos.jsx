import React from 'react';
import Video from './video.jsx';

const Videos = (props) => {
  if (props.videos) {
    console.log(props.videos);
    return (
      <>
        <ul className="video_items">
          {props.videos.items.map((video) => (
            <Video key={video.id} data={video} />
          ))}
        </ul>
      </>
    );
  }
  //아무런 props(searchingBy)가 없을 때
  return (
    <div className="loading">
      <i className="fas fa-spinner fa-3x loadingImage"></i>
    </div>
  );
};

export default Videos;
