import React, { Component } from 'react';
import NewSingle from './NewSingle';

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    renderItems = () => {
        this.props.items.map(item => <NewSingle key={this.id} item={item} />);
    }

    render() { 
        return (
            <ul>
                {this.renderItems()}
            </ul>
        );
    }
}
 
export default News;