import React from 'react';
import './card.css'; 
import { Link } from 'react-router-dom';

const Card = ({ imgSrc, title, description, page }) => { 
    // const imagePath = require(`../freelancer/${imgSrc}`).default;

    return (
        <div className="card">
            <img src={imgSrc} alt={title} /> {/* Corrected src attribute to use imagePath */}
            <div className="info">
                <h1>{title}</h1>
                <p>{description}</p>
                
                <Link to={page}><button className="freelancer">Hire Now!</button></Link> {/* Corrected 'to' prop */}
            </div>
        </div>
    );
};

export default Card;