import React from 'react';

const NewSingle = ({item}) => {
    return (
        <div className="col s4">
            <div className="card">
            <div className="card-image">
                <a href={item.url} title={item.title} target="_blank" rel="noopener noreferrer">
                    <img src={item.urlToImage} alt={item.title}/>
                    <span className="card-title">{item.source.name}</span>
                </a>
            </div>
            <div className="card-content">
                <p>{item.content}</p>
            </div>
            <div className="card-action">
                <a href={item.url} title={item.title} target="_blank" rel="noopener noreferrer">{item.title}</a>
            </div>
            </div>
        </div>
    );
}
 
export default NewSingle;