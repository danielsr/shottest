import React, { Component } from 'react';
import axios from 'axios';
import Modal from './Modal';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      shots: [],
      modal: false,
      shot: undefined
    };
  }

  async componentDidMount() {
    const res = await axios.get('https://api.dribbble.com/v1/shots?access_token=6ed972085fecb7078ef53a3056562c05de38514ebd7d095b6a84f6dba7743031&list=debuts');
    this.setState({
      shots: res.data
    });
  }

  renderShots = () => {
    return this.state.shots.map(shot => {
      return (
        <div className="col-xs-6 col-sm-4 col-md-3" key={shot.id}>
          <button className="thumbnail" onClick={() => this.shotDetails(shot.id)}>
            <img src={shot.images.teaser} alt={shot.title} />
          </button>
        </div>
      );
    });
  };

  shotDetails(id) {
    const shot = this.state.shots.find(shot => {
      return shot.id === id;
    });

    this.setState({
      shot: shot
    });

    this.toggleModal();
  }

  renderDetails = () => {
    if (!this.state.shot) return;
    console.log(this.state.shot);
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <div className="media">
              <div className="media-left media-middle">
                <a href="#">
                  <img className="media-object" src={this.state.shot.user.avatar_url} style={{ maxWidth: 50 }} />
                </a>
              </div>
              <div className="media-body">
                <h4 className="media-heading">{this.state.shot.title}</h4>
                by <a href="#">{this.state.shot.user.name}</a> on {this.state.shot.created_at}
              </div>
            </div>
          </div>
        </div>

        <div className="row" style={{ marginTop: 20 }}>
          <div className="col-md-6">
            <img src={this.state.shot.images.normal} alt="teste" />
            <p dangerouslySetInnerHTML={{ __html: this.state.shot.description }} />
            <h4>
              <span className="label label-default">animation</span>&nbsp;
              <span className="label label-default">blue</span>
            </h4>
          </div>

          <div className="col-md-6">
            <ul className="list-group">
              <li className="list-group-item">
                Views <span className="badge">{this.state.shot.views_count}</span>
              </li>
              <li className="list-group-item">
                Likes<span className="badge">{this.state.shot.likes_count}</span>
              </li>
              <li className="list-group-item">
                Buckets<span className="badge">{this.state.shot.buckets_count}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="row" style={{ marginTop: 20 }}>
          <div className="col-md-12 text-right">
            <button className="btn btn-default" onClick={this.toggleModal}>
              Fechar
            </button>
          </div>
        </div>
      </div>
    );
  };

  toggleModal = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    return (
      <div>
        <div className="container" style={{ marginTop: 70 }}>
          <div className="row">{this.renderShots()}</div>
        </div>
        <Modal show={this.state.modal} onClose={this.toggleModal}>
          {this.renderDetails()}
        </Modal>
      </div>
    );
  }
}

export default Home;
