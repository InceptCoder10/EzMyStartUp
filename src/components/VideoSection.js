import React from 'react';
import './VideoSection.css';
import video from '../SocialMediaLogo/main-video.mp4';

const VideoSection = () => {
    return (
        <section className="video-container">
            <div className="left-vid">
                <h1>Service Always</h1>
            </div>
            <div className="video-sec">
                {/* Use curly braces to reference the video variable */}
                <video autoPlay loop muted>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>
    );
};

export default VideoSection;
