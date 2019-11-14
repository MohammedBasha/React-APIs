import React, {Component} from 'react';
import SingleSide from './SingleSide';
import axios from 'axios';

class SideNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidenews: [],
    };
  }

  componentDidMount() {
    const URL = `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=461d034d65f947bc8ba452f68fbde05d`;

    axios.get(URL)
    .then(response => {
      this.setState({
        sidenews: response.data.articles
      });
    })
    .catch(error => console.log(error));
  }

  renderItems() {
    return this.state.sidenews.map(item => <SingleSide key={item.url} item={item} />);
  }

  render() {
    return (
      <div>
        {this.renderItems()}
      </div>
    );
  }
}

export default SideNews;
