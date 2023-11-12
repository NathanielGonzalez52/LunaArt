import React from 'react';
import Merch from "./merch.js";
import Items from "./items";
import "./page.css";

export default function Sale() {
  return (
    <div>
      <h1>Not Sure What to Get?</h1>
      <div className="product-display">
        {Merch.map((product, index) => {
          return (
            <Items
              key={index}
              id={index}
              name={product.name}
              img={product.imgURL}
              price={product.price}
          />
        )
      })
      }
      </div>
    </div>
  )
};
