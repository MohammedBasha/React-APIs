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
        const URL = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=461d034d65f947bc8ba452f68fbde05d';

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
        return this.state.news.map(item => <NewSingle key={this.id} item={item} />);
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