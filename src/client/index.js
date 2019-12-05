import React from 'react';
import { hydrate } from 'react-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { App } from './App';
import { createPreloadedStore } from './store';

if (typeof window !== 'undefined') {
  const preloadedState = window.__PRELOADED_STATE__;
  const store = createPreloadedStore(preloadedState);
  const history = createBrowserHistory();
  hydrate(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>,
    document.getElementById('app'),
  );
}
