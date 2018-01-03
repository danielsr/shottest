import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      active: 'debuts',
      links: [{ name: 'debuts', title: 'Debuts' }, { name: 'animated', title: 'Animated' }, { name: 'playoffs', title: 'Playoffs' }]
    };
  }

  renderLinks = () => {
    console.log(this.state);
    return this.state.links.map(({ name, title }) => {
      return (
        <li className={name === this.state.active ? 'active' : ''} key={name}>
          <Link
            to={'/shots?list=' + name}
            onClick={() => {
              this.setState({ active: name });
              this.props.fetchShots(name);
            }}
          >
            {title}
          </Link>
        </li>
      );
    });
  };

  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <Link
              to="/shots"
              className="navbar-brand"
              onClick={() => {
                this.setState({ active: 'debut' });
              }}
            >
              ShotTest
            </Link>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">{this.renderLinks()}</ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default connect(null, actions)(Header);
