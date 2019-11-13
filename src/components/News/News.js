import React, { Component } from 'react';
import NewSingle from './NewSingle';

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: []
        }
    }

    componentDidMount() {
        const URL = `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=461d034d65f947bc8ba452f68fbde05d`;

        fetch(URL)
        .then(response => response.json())
        .then(data => {
            this.setState({
                news: data.articles
            })
        })
        .catch(error => console.log(error));
    }

    renderItems = () => {
        return this.state.news.map(item => <NewSingle key={item.url} item={item} />);
    }

    render() { 
        return (
            <div className="row">
                {this.renderItems()}
            </div>
        );
    }
}
 
export default News;