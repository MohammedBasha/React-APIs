import React, {Component} from 'react';
import SingleSide from './SingleSide';

class SideNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidenews: [],
    };
  }

  componentDidMount() {

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