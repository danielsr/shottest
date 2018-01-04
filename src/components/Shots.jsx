import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Shots extends Component {
  renderShots = () => {
    if (!this.props.shots) return;

    return this.props.shots.map(shot => {
      return (
        <div key={shot.id}>
          <Link to={'/shots/' + shot.id} className="thumbnail">
            <img
              src={this.props.size === 'S' ? shot.images.teaser : shot.images.normal}
              style={this.props.size === 'S' ? { maxWidth: 140 } : { maxWidth: 320 }}
              className="img-responsive"
              alt={shot.title}
            />
          </Link>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <div className="container shots">{this.renderShots()}</div>
      </div>
    );
  }
}

function mapStateToProps({ shots }) {
  return { shots };
}

export default connect(mapStateToProps)(Shots);
