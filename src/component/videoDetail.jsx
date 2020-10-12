import React from 'react';
import { useParams } from 'react-router-dom';

import Videos from './videos.jsx';
import dotenv from 'dotenv';
dotenv.config();

const VideoDetail = (props) => {
  const { id } = useParams();
  const videos = props.videos;
  const video = videos
    ? videos.items.find((item) => item.id === id)
    : undefined;
  const title = video ? video.snippet.localized.title : undefined;
  const description = video ? video.snippet.localized.description : undefined;

  const newVideos = videos
    ? videos.items.filter((video) => video.id !== id)
    : undefined;
  if (newVideos) videos.items = newVideos;
  return (
    <>
      <main className="video_detail">
        <section>
          <iframe
            id="player"
            src={`https://www.youtube.com/embed/${id}?autoplay=1`}
            width="640"
            height="360"
            frameBorder="0"
          />
          <div className="info">
            {title && <h4>{title}</h4>}
            {description && <p>{description}</p>}
          </div>
        </section>
        <aside>
          <Videos videos={videos} />
        </aside>
      </main>
    </>
  );
};

export default VideoDetail;
