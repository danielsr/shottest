import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Details extends Component {
  render() {
    if (!this.props.shots) return <div />;

    const shot = this.props.shots.find(shot => {
      return shot.id === parseInt(this.props.match.params.id, 10);
    });

    return (
      <div className="details-back">
        <div className="details-modal">
          <div className="row">
            <div className="col-md-10">
              <div className="media">
                <div className="media-left media-middle">
                  <img className="media-object details-avatar" src={shot.user.avatar_url} alt={shot.title} />
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
              <h4 className="details-tags">
                {shot.tags.map(tag => {
                  return (
                    <span key={tag} className="label label-default">
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
