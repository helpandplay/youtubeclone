import React, { useState, useEffect, useCallback } from 'react';

import Navigator from './component/navigator.jsx';
import Videos from './component/videos.jsx';
import './app.css';

import dotenv from 'dotenv';
dotenv.config();

const App = (props) => {
  const [queue, setQueue] = useState(undefined);
  const [videos, setVideos] = useState(undefined);

  const getVideos = useCallback(async (queue = undefined) => {
    const q = queue === undefined ? '' : `&q=${queue}`;
    const API_KEY = process.env.REACT_APP_API_KEY;
    const maxResults = 1;
    let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResults}${q}&key=${API_KEY}`;
    const videos = await callAPI(url);
    setVideos(videos);
  });
  const callAPI = useCallback((url) => {
    return fetch(url, { method: 'GET', mode: 'cors' })
      .then((response) => response.json())
      .catch((error) => console.log(error));
  });
  const onSearch = (searchingBy) => {
    setQueue(searchingBy);
  };
  useEffect(() => {
    setQueue(queue);
    getVideos(queue);
  }, [queue]);

  return (
    <>
      <Navigator onSearch={onSearch} />
      <Videos videos={videos} />
    </>
  );
};

export default App;
