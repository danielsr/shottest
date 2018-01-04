import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import './App.css';

import Header from './Header';
import Shots from './Shots';
import Details from './Details';

class App extends Component {
  constructor() {
    super();
    this.state = {
      size: 'S'
    };
  }

  componentDidMount() {
    this.props.fetchShots();
  }

  resize = size => {
    this.setState({ size: size });
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header onResize={this.resize} />
            <Route exact path="/" render={() => <Shots size={this.state.size} />} />
            <Route path="/shots" render={() => <Shots size={this.state.size} />} />
            <Route path="/shots/:id" component={Details} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
