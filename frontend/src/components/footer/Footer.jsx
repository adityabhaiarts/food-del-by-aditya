import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className='footer-content-left'>
            <img src={assets.logo} alt="" />
            <p> Start your food journey now! Choose from a diverse menu featuring a delectable array of dishes that cater to every craving. From savory starters and wholesome mains to indulgent desserts and refreshing beverages, our app offers something for every mood and moment. </p>
            <div className='footer-icons'>
                 <img src={assets.twitter_icon} alt="" />
                 <img src={assets.facebook_icon} alt="" />
                 <img src={assets.linkedin_icon} alt="" />
            </div>
             </div>
            <div className='footer-content-center'>
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className='footer-content-right'>
                <h2>Get In Touch</h2>
                <ul>
                    <li>+1 123-456-7890</li>
                    <li>tomato@company.com</li>
                </ul>
            </div>
       
      </div>
      <hr/>
      <p className='footer-copyright'>Copyright 2025 Tomato.com - All Right Reserved</p>
    </div>
  )
}

export default Footer
