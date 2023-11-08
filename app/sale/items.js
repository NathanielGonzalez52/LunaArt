import React from 'react'

export default function items(props) {
  return (
    <div>
      <img className="display" src={props.img} alt="merch"></img>
      <h2>{props.name}</h2>
      <div className="descriptor">
      <p>{props.price}</p>
      </div>
    </div>
  )
}
