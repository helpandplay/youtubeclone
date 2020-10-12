import React from 'react';
import { Link } from 'react-router-dom';

const Video = (props) => {
  return (
    <li className="video_item">
      <Link to={`/${props.id}`}>
        <div className="thumbnail">
          <div className="thumbnail-cover">
            <i className="fas fa-play"></i>
            <span>Play Now</span>
          </div>
          <figure>
            <img
              src={props.data.snippet.thumbnails.default.url}
              alt="thumbnail"
            />
          </figure>
        </div>
        <div className="info">
          <h4 className="title">{props.data.snippet.title}</h4>
          <span className="channelTitle">
            {props.data.snippet.channelTitle}
          </span>
        </div>
      </Link>
    </li>
  );
};

export default Video;
