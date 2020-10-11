import React, { useState, useEffect, useCallback } from 'react';
import { Route } from 'react-router-dom';
import Navigator from './navigator.jsx';
import Videos from './videos.jsx';
import './app.css';

import dotenv from 'dotenv';
dotenv.config();

const App = (props) => {
  const [searchingBy, setSearchingBy] = useState(undefined);
  const [videos, setVideos] = useState(undefined);

  const getVideos = useCallback(async (searchingBy = undefined) => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const maxResults = 10;
    let url = undefined;
    if (searchingBy === undefined) {
      url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=${maxResults}&key=${API_KEY}`;
    } else {
      url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResults}&q=${searchingBy}&key=${API_KEY}`;
    }
    const videos = await callAPI(url);
    setVideos(videos);
  });
  const callAPI = useCallback((url) => {
    return fetch(url, { method: 'GET', mode: 'cors' })
      .then((response) => response.json())
      .catch((error) => console.log(error));
  });
  const onSearch = (searchingBy) => {
    setSearchingBy(searchingBy);
  };
  useEffect(() => {
    setSearchingBy(searchingBy);
    getVideos(searchingBy);
  }, [searchingBy]);

  return (
    <>
      <Navigator onSearch={onSearch} />
      <Route>
        <Videos videos={videos} />
      </Route>
    </>
  );
};

export default App;
