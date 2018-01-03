import React from 'react';

class Modal extends React.Component {
  render() {
    if (!this.props.show) {
      return null;
    }

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
        <div style={modalStyle}>{this.props.children}</div>
      </div>
    );
  }
}

export default Modal;
