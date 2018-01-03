import React, { Component } from 'react';

class Header extends Component {
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
            <a className="navbar-brand" href="#">
              ShotTest
            </a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className="active">
                <a href="#">Popular</a>
              </li>
              <li>
                <a href="#">Recent</a>
              </li>
              <li>
                <a href="#">Debuts</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
