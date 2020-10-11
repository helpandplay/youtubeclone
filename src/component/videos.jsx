import React from 'react';

const Videos = (props) => {
  if (props.videos) {
    return <p>{JSON.stringify(props.videos)}</p>;
  } else {
    return <h1>Videos</h1>;
  }
};

export default Videos;
