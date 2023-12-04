import React from 'react';
import Merch from "./merch.js";
import Items from "./items";
import "./page.css";
import Navbar from "../navbar";
import Footer from "../footer";

export default function Sale() {
  return (
    <>
    <Navbar/>
    <div className="products-page">
      <h1 className="products-header">Original Prints</h1>
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
    <Footer />
  </>
  )
}
