import React from 'react';
import "./page.css";
import Navbar from "../navbar";
import Footer from "../footer";


export default function About() {
  return (
    <>
    <Navbar />
    <div id="about" className="about">
      <div className="about-wel">
        <h1 className="top-about">About Me</h1>
      </div>
      <div className="about-images">
        <img className="about-pic" alt="mews" src="../luna_images/latios.jpg"></img>
        <img className="about-pic" alt="groudon" src="../luna_images/groudon.jpg"></img>
        <img className="about-pic" alt="latias" src="../luna_images/latias.jpg"></img>
      </div>
      <h1 className='about-header title'>Who Am I?</h1>
      <p>I am a full-time independent illustrator and designer. 
      I also freelance for publishing, animation, and games.</p>
      <div className="about-wel title">
        <h2>Things You May Know Me From...</h2>
      </div>
      <p>I was a background painter at Disney TV Animation from 2015-2018, 
      and I have done illustration and visual development work for clients/projects 
      that include Dreamworks TV, Disney Publishing, Lucasfilm Press, 
      Dark Horse Comics, Marvel Snap, Hasbro, Wizards of the Coast 
      (Magic the Gathering), Harper Collins, Amazon Audible, and many more 
      publishers. I do not sell my work as NFT’s and do not condone any sale 
      of my work as NFT’s. Any NFT you may find online made from my artwork 
      are fraudulent and infringing on my copyright, in violation of the law. I do 
      not sell my work on any other websites besides ones 
      linked under my own name. </p>
      <div className="about-wel title">
        <h2>Let's Connect!</h2>
      </div>
      <p>Feel free to email me for professional freelance inquiries only, 
      at fionahsiehart@gmail.com</p>
      <p>For shop-related inquiries and questions about your order, 
      please email help@whitesquirrel.com</p>
      <p>My only online platforms are the ones 
      linked through my linktree: https://linktr.ee/lunaurum 
      I also have an old Deviantart account (fionahsieh), and am 
      represented by my agent, Shannon Associates, on their website. </p>
      <p>All other accounts claiming to be me are impersonators/fake accounts 
      that are not authorized by me or any agent representing me.</p>
      <div className="about-wel">
        <h2 className="ques">More Questions?</h2>
        <a href="/qa" className="faq">See our FAQs</a>
      </div>

    </div>
    <Footer />
    </>
  )
}
