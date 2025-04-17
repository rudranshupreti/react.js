import React from 'react';
import Event from './event.jsx'
const Lprops = (props) => {
  return (
    <li className="card">
      <h2>Na me: {props.name}</h2>
      <h3>ID: {props.id}</h3>

      <img src={props.img_url} alt={props.name} width={200} />

      <p>Description: {props.description}</p>

      <h3>Genre:</h3>
      <ul>
        {props.genre?.map((g, index) => (
          <li key={index}>{g}</li>
        ))}
      </ul>

      <button
        onClick={() => window.open(props.watch_url, '_blank')}
      >
        Watch
      </button>
<Event/>
    </li>
  );
};

export default Lprops;
