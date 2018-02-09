import React, { Component } from 'react';
import ScrollProgress from 'scrollprogress';

export default class ScrollProgress extends Component {
  constructor() {
    this.state = {
      progress: 0
    };
  }

  componentDidMount() {
    this.progressObserver = new ScrollProgress((x, y) => {
      this.setState({ progress: y * 100 });
    });
  }

  componentWillUnmount() {
    this.progressObserver.destroy();
  }

  render() {
    const style = {
      backgroundColor: 'rebeccapurple',
      height: '5px',
      position: 'fixed',
      top: 0,
      bottom: 0,
      width: `${this.state.progress}%`
    };

    return (
      <div
        className="progress-bar"
        style={ style }
      />
    );
  }
}