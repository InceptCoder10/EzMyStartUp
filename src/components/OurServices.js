import React from 'react';
import './OurServices.css'; 
import { Link } from 'react-router-dom';

const HeroSection = ({ title1, title2, subtitle, buttonColor, gradientColors, alignItems, backgroundImage,alignment }) => {
    return (
        <section id="hero" className="Services" style={{ backgroundImage: `url(${backgroundImage})`,backgroundSize: 'cover',
        backgroundPosition: 'center', alignItems }}>
            <div className="gradient-freelancer" style={{ background: gradientColors }}></div>
            <h1 style={{textAlign:alignment}}>{title1}</h1>
            <h1 style={{textAlign:alignment}}>{title2}</h1>
            <p>{subtitle}</p>
           <a href='Freelancer'>
           <button className="" style={{ backgroundColor: buttonColor }}>Hire Now!</button>
            </a> 
            {/* <Link to="{Page}"><button className="freelancer" style={{ backgroundColor: buttonColor }}>Hire Now!</button></Link> */}
            
        </section>
    );
};

export default HeroSection;

{/* <Link to="{Page}"><button className="freelancer" style={{ backgroundColor: buttonColor }}>Hire Now!</button></Link> */}