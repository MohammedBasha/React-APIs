import React from 'react';

const SingleSide = ({item}) => (
  <div>
    <a href={item.url} target="_blank" rel="noopener noreferrer">
      <div className="section">
        <h5>{item.source.name}</h5>
        <p>{item.title}</p>
      </div>
    </a>
    <div className="divider"></div>
  </div>
);

export default SingleSide;
