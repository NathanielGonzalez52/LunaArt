import React from 'react'
import "./shop.css"

export default function shop() {
  return (
    <>
    <div className="shop-greet">
      <h1>Shop Collections</h1>
      <h1>Check out our unique pins and prints!</h1>
    </div>
    <div className="merch-cont">
        <div className="merch-pics">
            <img alt='merch' className="product" src="../luna_images/arceus.jpg"></img>
            <img alt='merch' className="product" src="../luna_images/rayquaza.jpg"></img>
        </div>
        <a href="/sale" className="to-shop">Visit our store</a>
    </div>
    </>
  )
}
