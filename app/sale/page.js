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

    <Fade top duration={1200}>
    <div className="products-page">
    
    <Fade left delay={0} duration={1200}>
      <h1 className="products-header">Original Prints</h1>
    </Fade>
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
    {/* <Fade bottom duration={1500}> */}
      <Footer />
    {/* </Fade> */}
  </>
  )
}
