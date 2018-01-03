import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Shots extends Component {
  renderShots = () => {
    if (!this.props.shots) return;

    return this.props.shots.map(shot => {
      return (
        <div className="col-xs-6 col-sm-4 col-md-3" key={shot.id}>
          <Link to={'/shots/' + shot.id} className="thumbnail">
            <img src={shot.images.teaser} alt={shot.title} />
          </Link>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <div className="container" style={{ marginTop: 70 }}>
          <div className="row">{this.renderShots()}</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ shots }) {
  return { shots };
}

export default connect(mapStateToProps)(Shots);
