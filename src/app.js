// @flow

import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, Route, Redirect, browserHistory } from 'react-router'

// Store
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'

// App components
import { NotFound } from './components/not-found'
import { ShowsContainer } from './components/shows'
import { MoviesContainer } from './components/movies'
import { headerReducers } from './components/header'

const store = createStore(combineReducers(headerReducers))

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <Router history={browserHistory}>
            {/* shows */}
            <Route path="/shows" component={ShowsContainer} />

            {/* movies */}
            <Route path="/movies" component={MoviesContainer} />

            <Redirect from="/" to="/shows" />
            <Route path="*" component={NotFound} />
          </Router>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
