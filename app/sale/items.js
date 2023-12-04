import React from 'react';

export default function items(props) {
  return (
      <div className="for-sale">
        <img className="display" src={props.img} alt="merch"></img>
          <p className="item-name">{props.name}</p>
          <div className="descriptor">
            <p className="item-price">{props.price}</p>
          </div>
          <button type="submit" className="to-cart">ADD TO CART</button>
      </div>
  )
}
