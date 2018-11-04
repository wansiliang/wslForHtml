import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import TopicList from '../views/topic-list/index';
import TopicDetail from '../views/topic-detail/index';
import TestApi from '../views/test/api-test';
import Homew from '../views/home/index';

export default () => [
  <Route path="/" render={() => <Redirect to="/list" />} exact key="home" />,
  <Route path="/list" component={TopicList} exact key="list" />,
  <Route path="/detail" component={TopicDetail} key="detail" />,
  <Route path="/testApi" component={TestApi} key="testApi" />,
  <Route path="/homew" component={Homew} key="homew" />,
]