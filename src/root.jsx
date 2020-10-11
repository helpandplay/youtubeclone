import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import VideoDetail from './component/videoDetail.jsx';
import App from './component/app.jsx';

const Root = (props) => {
  return (
    <>
      <BrowserRouter>
        <Route exact path="/" component={App} />
        <Switch>
          <Route path="/:id" children={<VideoDetail />} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Root;
