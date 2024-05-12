import React from 'react';
import Card from '../components/card';
import NavigationBar from '../components/NavBar';
import OurService from '../components/OurServices';
import Footer from '../components/Footer';
import './GraphicDesigners.css';

const  DigitalMarketer= () => {
    return (
        <div className='Fl'>
            <NavigationBar />
            <OurService
                title1="
                Digital Marketing  GuyDriving digital growth, one click at a time."
                title2="Transforming clicks into conversions."
                subtitle="Your brand, amplified in the digital sphere."
                buttonColor="#87CEEB"
                gradientColors="linear-gradient(
                    0deg,
                    #ffffff 1%,
                    rgba(255, 255, 255, 0) 50%
                  )"
                alignItems="center"
                backgroundImage="./freelancerImg/Digital Marketing.png"
                Page="Freelancer"
                textAlign="right"
            />
            <section className="wrapper">
            <Card
                    imgSrc="./freelancerImg/blank_profile.png" 
                    title="Digital Marketers"
                    description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid porro ut quia commodi error ipsum delectus quam, perspiciatis blanditiis et."
                />

                <Card
                    imgSrc="./freelancerImg/blank_profile.png" 
                    title="Digital Marketers"
                    description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid porro ut quia commodi error ipsum delectus quam, perspiciatis blanditiis et."
                />

                <Card
                    imgSrc="./freelancerImg/blank_profile.png" 
                    title="Digital Marketers"
                    description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid porro ut quia commodi error ipsum delectus quam, perspiciatis blanditiis et."
                />
                <Card
                    imgSrc="./freelancerImg/blank_profile.png" 
                    title="Digital Marketers"
                    description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid porro ut quia commodi error ipsum delectus quam, perspiciatis blanditiis et."
                />
                <Card
                    imgSrc="./freelancerImg/blank_profile.png" 
                    title="Digital Marketers"
                    description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid porro ut quia commodi error ipsum delectus quam, perspiciatis blanditiis et."
                />
                <Card
                    imgSrc="./freelancerImg/blank_profile.png" 
                    title="Digital Marketers"
                    description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid porro ut quia commodi error ipsum delectus quam, perspiciatis blanditiis et."
                />
                <Card
                    imgSrc="./freelancerImg/blank_profile.png" 
                    title="Digital Marketers"
                    description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid porro ut quia commodi error ipsum delectus quam, perspiciatis blanditiis et."
                />
                <Card
                    imgSrc="./freelancerImg/blank_profile.png" 
                    title="Digital Marketers"
                    description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid porro ut quia commodi error ipsum delectus quam, perspiciatis blanditiis et."
                />
                <Card
                    imgSrc="./freelancerImg/blank_profile.png" 
                    title="Digital Marketers"
                    description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid porro ut quia commodi error ipsum delectus quam, perspiciatis blanditiis et."
                />
                <Card
                    imgSrc="./freelancerImg/blank_profile.png" 
                    title="Digital Marketers"
                    description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid porro ut quia commodi error ipsum delectus quam, perspiciatis blanditiis et."
                />
                <Card
                    imgSrc="./freelancerImg/blank_profile.png" 
                    title="Digital Marketers"
                    description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid porro ut quia commodi error ipsum delectus quam, perspiciatis blanditiis et."
                />
                <Card
                    imgSrc="./freelancerImg/blank_profile.png" 
                    title="Digital Marketers"
                    description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid porro ut quia commodi error ipsum delectus quam, perspiciatis blanditiis et."
                />

                {/* Web Developer */}
                
                
                
            </section>
            <Footer />
        </div>
    );
};

export default DigitalMarketer;