import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store, { history } from '../imports/client/store';
import TodoApp from '../imports/client/components/TodoApp';
import Layout from '../imports/client/components/layouts/mainLayout';

import { Router, Route, IndexRoute, browserHistory} from 'react-router';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Layout}>
        <IndexRoute component={ TodoApp} />
        <Route path="/about" component={ TodoApp } />
      </Route>
    </Router>
  </Provider>
);

Meteor.startup(() => {
  render(router, document.getElementById('root'));
})
