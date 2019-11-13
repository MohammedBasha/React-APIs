import React, { Component } from 'react';
import News from './News/News';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news1: {
        type: 'everything',
        query: 'q=apple&from=2019-11-11&to=2019-11-11&sortBy=popularity'
      },
      news2: {
        type: 'top-headlines',
        query: 'country=us&category=business'
      }
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">News Feed</h1>
        </header>
        <h5>News in {this.state.news1.type}</h5>
        <News news={this.state.news1} />
        <h5>News in {this.state.news2.type}</h5>
        <News news={this.state.news2} />
      </div>
    );
  }
}

export default App;
