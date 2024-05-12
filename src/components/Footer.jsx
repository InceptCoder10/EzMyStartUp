import React from 'react'
import './Footer.css'; 
import twitterLogo from '../SocialMediaLogo/twitter.svg';
import telegramLogo from '../SocialMediaLogo/telegram.svg';
import linkedinLogo from '../SocialMediaLogo/linkedin-with-circle.svg';
import youtubeLogo from '../SocialMediaLogo/youtube.svg';
import instagramLogo from '../SocialMediaLogo/instagram.svg';
import facebookLogo from '../SocialMediaLogo/facebook-color.svg';
import google from '../SocialMediaLogo/google-icon1.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo">
        <img src="logofinal.png" alt="Logo" />
        <p>EzMyStartup</p>
      </div>
      <div className="social-media">
        <h3>Follow Us On</h3>
        <div className="logos">
          <img src={twitterLogo} alt="Twitter" />
          <img src={telegramLogo} alt="Telegram" />
          <img src={linkedinLogo} alt="LinkedIn" />
          <img src={youtubeLogo} alt="YouTube" />
          <img src={instagramLogo} alt="Instagram" />
          <img src={facebookLogo} alt="Facebook" />
        </div>
      </div>
      <div className="footer-section">
        <h3>Join us on our Community!</h3>
      </div>
    </footer>
  )
}

export default Footer