import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ScrollProgress from 'scrollprogress';

class App extends Component {
  constructor() {
    super();
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
      backgroundColor: '#ef0',
      transition: 'transform .4s cubic-bezier(.32,.9,.68,.98),background-color 5s cubic-bezier(.32,.9,.68,.98)',
      height: '6px',
      position: 'fixed',
      bottom: 0,
      borderRight: 'solid 2px #323232',
      width: `${this.state.progress}%`
    };
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div className="test"> 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu scelerisque felis imperdiet proin fermentum leo vel. Neque vitae tempus quam pellentesque nec nam. Id aliquet lectus proin nibh nisl condimentum id. Diam donec adipiscing tristique risus nec. Convallis tellus id interdum velit laoreet id donec. Vehicula ipsum a arcu cursus vitae congue. Erat nam at lectus urna duis convallis. Morbi blandit cursus risus at ultrices mi. Sed adipiscing diam donec adipiscing tristique. Tristique senectus et netus et malesuada fames ac turpis egestas. Ultricies mi eget mauris pharetra et ultrices neque ornare. Neque gravida in fermentum et sollicitudin ac orci phasellus. Dolor sit amet consectetur adipiscing elit duis tristique.

Nunc sed blandit libero volutpat sed cras ornare. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Vulputate ut pharetra sit amet aliquam id diam maecenas ultricies. Arcu dictum varius duis at consectetur lorem donec massa. Ultrices dui sapien eget mi proin. Nec feugiat in fermentum posuere urna. Nunc sed id semper risus. Aliquam eleifend mi in nulla posuere sollicitudin aliquam. Molestie nunc non blandit massa enim nec dui nunc. Egestas sed tempus urna et pharetra pharetra massa massa. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Fermentum dui faucibus in ornare quam viverra orci. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue. Feugiat nisl pretium fusce id velit. Placerat vestibulum lectus mauris ultrices eros in cursus turpis. Convallis a cras semper auctor neque. Arcu dui vivamus arcu felis.

Est ultricies integer quis auctor elit sed vulputate. Non pulvinar neque laoreet suspendisse interdum. Diam sit amet nisl suscipit adipiscing bibendum. Eget nunc scelerisque viverra mauris in aliquam. Nullam non nisi est sit amet facilisis magna etiam tempor. Viverra justo nec ultrices dui sapien eget. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Elementum tempus egestas sed sed risus. Elementum eu facilisis sed odio morbi. Ipsum faucibus vitae aliquet nec ullamcorper sit. Morbi non arcu risus quis varius quam quisque. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est. Ut sem nulla pharetra diam sit. At erat pellentesque adipiscing commodo. Mauris nunc congue nisi vitae suscipit tellus. Nec ullamcorper sit amet risus nullam eget. Risus pretium quam vulputate dignissim suspendisse.

Lectus quam id leo in vitae turpis massa sed elementum. Consectetur a erat nam at lectus urna duis convallis convallis. Et tortor at risus viverra adipiscing at in tellus integer. Morbi tristique senectus et netus et malesuada fames ac turpis. Vitae congue mauris rhoncus aenean vel elit scelerisque mauris. Lectus proin nibh nisl condimentum id venenatis a. Praesent tristique magna sit amet purus gravida quis. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Pretium vulputate sapien nec sagittis aliquam malesuada. Non consectetur a erat nam. Id leo in vitae turpis massa. Netus et malesuada fames ac turpis egestas sed tempus urna. Quam quisque id diam vel quam elementum pulvinar etiam non. Fermentum posuere urna nec tincidunt praesent semper feugiat nibh sed.

Iaculis at erat pellentesque adipiscing commodo elit at imperdiet. Est ullamcorper eget nulla facilisi etiam dignissim. Volutpat commodo sed egestas egestas fringilla phasellus faucibus. Tristique senectus et netus et malesuada. Risus feugiat in ante metus dictum at. Id leo in vitae turpis massa sed. Commodo elit at imperdiet dui accumsan sit amet nulla. Nulla pellentesque dignissim enim sit. Auctor neque vitae tempus quam pellentesque nec. Eu nisl nunc mi ipsum faucibus. Donec massa sapien faucibus et molestie ac feugiat. Phasellus vestibulum lorem sed risus.
        </div>
        <div
        className="progress-bar"
        style={ style }
      />
      </div>
    );
  }
}

export default App;
