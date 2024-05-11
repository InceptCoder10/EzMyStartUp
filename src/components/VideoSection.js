import React from 'react';
import './VideoSection.css'; // Import CSS file for component styling

const VideoSection = () => {
    return (
        <section className="video-container">
            <div className="left-vid">
                <h1>Service Always</h1>
            </div>
            <div className="video-sec">
                <video autoPlay loop muted>
                    <source src="main-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>
    );
};

export default VideoSection;
