import React, { Component } from 'react';
import News from './News/News';
import SideNews from './News/SideNews';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news1: {
        type: 'everything',
        query: 'q=apple&from=2020-01-17&to=2020-01-17&sortBy=popularity'
      },
      news2: {
        type: 'top-headlines',
        query: 'sources=bbc-news'
      },
      news3: {
        type: 'everything',
        query: 'q=bitcoin'
      }
    };
  }

  render() {
    return (
      <div className="App container-fluid">
        <div className="navbar-fixed">
          <nav className="indigo lighten-4">
            <div className="nav-wrapper indigo lighten-4">
              <h5>News Feed</h5>
            </div>
          </nav>
        </div>
        <div className="row">
          <div className="col s8">
            <h5>News in {this.state.news1.type}</h5>
            <News news={this.state.news1} />
            <h5>News in {this.state.news2.type}</h5>
            <News news={this.state.news2} />
          </div>
          <div className="col s4">
            <SideNews news={this.state.news3} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
