import React from 'react';
import { useParams } from 'react-router-dom';

const VideoDetail = (props) => {
  const { id } = useParams();
  return <h1>Video Detail {id}</h1>;
};

export default VideoDetail;
