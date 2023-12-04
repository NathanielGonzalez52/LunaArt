"use client";
import React from 'react';
import Merch from "./merch.js";
import Items from "./items";
import "./page.css";
import Navbar from "../navbar";
import Footer from "../footer";
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';

export default function Sale() {
  return (
    <>
    <Navbar/>

    <Fade bottom cascade duration={2000}>
    <div className="products-page">
    
    <Flip left delay= {2000} duration={2000}>
      <h1 className="products-header">Original Prints</h1>
    </Flip>
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
    </Fade>
    <Fade bottom duration={1500}>
      <Footer />
    </Fade>
  </>
  )
}
