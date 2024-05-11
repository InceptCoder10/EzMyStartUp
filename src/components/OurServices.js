import React from 'react';
import './OurServices.css'; 

const HeroSection = ({ title1, title2, subtitle, buttonColor, gradientColors, alignItems, backgroundImage }) => {
    return (
        <section id="hero" className="Services" style={{ background: `url(${backgroundImage})`, alignItems }}>
            <div className="gradient-freelancer" style={{ background: gradientColors }}></div>
            <h1>{title1}<br />{title2}</h1>
            <p>{subtitle}</p>
            <button className="freelancer" style={{ backgroundColor: buttonColor }}>Hire Now!</button>
        </section>
    );
};

export default HeroSection;

