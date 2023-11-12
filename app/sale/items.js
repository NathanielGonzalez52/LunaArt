import React from 'react';

export default function items(props) {
  return (
      <div className="for-sale">
        <img className="display" src={props.img} alt="merch"></img>
        <p>{props.name}</p>
        <div className="descriptor">
          <p>{props.price}</p>
        </div>
      </div>
  )
}
