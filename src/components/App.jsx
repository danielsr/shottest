import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Shots from './Shots';
import Details from './Details';

class App extends Component {
  componentDidMount() {
    this.props.fetchShots();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Shots} />
            <Route path="/shots" component={Shots} />
            <Route path="/shots/:id" component={Details} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
