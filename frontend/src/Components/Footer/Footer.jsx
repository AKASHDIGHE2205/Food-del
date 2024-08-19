import React from 'react'
import "./Footer.css";
import { assets } from '../../assets/assets';
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>© 2024 Tomato. Discover the essence of convenience with Tomato, your premier food delivery service. Indulge in a diverse selection of delicious dishes delivered straight to your door. With our commitment to freshness and quality, every meal is a delight. 🍅🚀</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91- 9370331608</li>
            <li>akashdighe@gmail.com</li>
          </ul>
        </div>
      </div>
      <p className="footer-copyright">
        Copyright 2024 © Tomato.com - All Right Reserved.
      </p>
    </div>
  )
}

export default Footer
