"use client";
import React, { Component } from 'react'; 
import "./page.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./navbar";
import Shop from "./shop";
import Update from "./update";
import Footer from "./footer";
import Fade from 'react-reveal/Fade';

export default function page() {

    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 6000,
        fade: true,
        adaptiveHeight: false
      };
  return (
    <>
    <Navbar/>
    <Fade left duration={2000}>
      <div className="slider-cont">
        <div className ="slider">
          <Slider {...settings}>
              <div className ="pic-container">
                <img className = "pic" alt="art" src="../luna_images/blaziken.jpg"></img>
              </div>
              <div className ="pic-container">
                <img className = "pic" alt="art" src="../luna_images/arcanine.jpg"></img>
              </div>
              <div className ="pic-container">
                <img className = "pic" alt="art" src="../luna_images/man_tiger.jpg"></img>
              </div>
              <div className ="pic-container">
                <img className = "pic" alt="art" src="../luna_images/mythical_forest.jpg"></img>
              </div>
              <div className ="pic-container">
                <img className = "pic" alt="art" src="../luna_images/techno_girl.jpeg"></img>
              </div>
              <div className ="pic-container">
                <img className = "pic" alt="art" src="../luna_images/white_dragon.jpg"></img>
              </div>
          </Slider>
        </div>
      </div>
      </Fade>
    <Fade right duration={2000}>
      <Update/>
    </Fade>
    <Fade left duration={2000}>
      <Shop/>
    </Fade>
    <Fade top duration={2000}>
      <Footer />
    </Fade>
    </>
  )
}


// <Carousel> 
//         <div className = "pic-holder"> 
//             <img className = "pic" src="../luna_images/aang.jpg" alt="image1"/> 
//             <p className="legend">Image 1</p> 

//         </div> 
//         <div className ="pic-container"> 
//             <img src="../luna_images/animal_cross.jpg" alt="image2" /> 
//             <p className="legend">Image 2</p> 

//         </div> 
//         <div className ="pic-container"> 
//             <img src="../luna_images/groudon.jpg" alt="image3"/> 
//             <p className="legend">Image 3</p> 

//         </div> 
//         <div className ="pic-container"> 
//             <img src="../luna_images/charizard.jpg" alt="image4"/> 
//             <p className="legend">Image 4</p> 

//         </div> 
//         <div className ="pic-container"> 
//             <img src="../luna_images/rayquaza.jpg" alt="image5"/> 
//             <p className="legend">Image 5</p> 

//         </div> 
//               </Carousel> 