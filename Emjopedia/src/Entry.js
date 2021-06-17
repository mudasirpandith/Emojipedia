import React from 'react';
import './App.css';
function Entry  (props){
  
  return (<div className="entry">
  <h1 className="emoji">{props.emoji} </h1>
  <h2 >{props.name}</h2>
  <p>{props.detail}</p>
  </div>)
}
export default Entry;