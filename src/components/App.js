import React, { Component } from 'react';
import News from './News/News';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">News Feed</h1>
        </header>
        <News />
      </div>
    );
  }
}

export default App;