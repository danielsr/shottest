import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Details extends Component {
  render() {
    if (!this.props.shots) return <div />;

    const shot = this.props.shots.find(shot => {
      return shot.id === parseInt(this.props.match.params.id, 10);
    });

    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50
    };

    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      maxWidth: 900,
      minHeight: 300,
      margin: '0 auto',
      padding: 30
    };

    return (
      <div style={backdropStyle}>
        <div style={modalStyle}>
          <div className="row">
            <div className="col-md-10">
              <div className="media">
                <div className="media-left media-middle">
                  <img className="media-object" src={shot.user.avatar_url} style={{ maxWidth: 50 }} alt={shot.title} />
                </div>
                <div className="media-body">
                  <h4 className="media-heading">{shot.title}</h4>
                  by <a href={shot.user.name}>{shot.user.name}</a> on {shot.created_at}
                </div>
              </div>
            </div>
            <div className="col-md-2 text-right">
              <Link to="/shots" className="btn btn-default">
                Fechar
              </Link>
            </div>
          </div>

          <div className="row" style={{ marginTop: 20 }}>
            <div className="col-md-6">
              <img src={shot.images.normal} alt="teste" />
              <p dangerouslySetInnerHTML={{ __html: shot.description }} />
              <h4 style={{ display: 'flex', flexWrap: 'wrap' }}>
                {shot.tags.map(tag => {
                  return (
                    <span className="label label-default" style={{ margin: 2 }}>
                      {tag}
                    </span>
                  );
                })}
              </h4>
            </div>

            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item">
                  Views <span className="badge">{shot.views_count}</span>
                </li>
                <li className="list-group-item">
                  Likes<span className="badge">{shot.likes_count}</span>
                </li>
                <li className="list-group-item">
                  Buckets<span className="badge">{shot.buckets_count}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ shots }) {
  return { shots };
}

export default connect(mapStateToProps)(Details);
