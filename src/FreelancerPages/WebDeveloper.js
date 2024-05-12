import React from 'react';
import Card from '../components/card';
import NavigationBar from '../components/NavBar';
import OurService from '../components/OurServices';
import Footer from '../components/Footer';
import './GraphicDesigners.css';

const  WebDeveloper= () => {
    return (
        <div className='Fl'>
            <NavigationBar />
            <OurService
                title1="
                Develop Your Website"
                title2="Bring your brand online"
                subtitle="Build Your organization on the web"
                buttonColor="#87CEEB"
                gradientColors="linear-gradient(
                    0deg,
                    #ffffff 1%,
                    rgba(255, 255, 255, 0) 50%
                  )"
                alignItems="center"
                backgroundImage="./freelancerImg/Web Development.png"
                Page="Freelancer"
                textAlign="right"
            />
            <section className="wrapper">

                {/* DigitalMarketer */}
                <Card
                    imgSrc="./freelancerImg/blank_profile.png" 
                    title="Web Developer Profile"
                    description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid porro ut quia commodi error ipsum delectus quam, perspiciatis blanditiis et."
                />
                <Card
                    imgSrc="./freelancerImg/blank_profile.png" 
                    title="Web Developer Profile"
                    description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid porro ut quia commodi error ipsum delectus quam, perspiciatis blanditiis et."
                />
                <Card
                    imgSrc="./freelancerImg/blank_profile.png" 
                    title="Web Developer Profile"
                    description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid porro ut quia commodi error ipsum delectus quam, perspiciatis blanditiis et."
                />
                <Card
                    imgSrc="./freelancerImg/blank_profile.png" 
                    title="Web Developer Profile"
                    description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid porro ut quia commodi error ipsum delectus quam, perspiciatis blanditiis et."
                />
                <Card
                    imgSrc="./freelancerImg/blank_profile.png" 
                    title="Web Developer Profile"
                    description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid porro ut quia commodi error ipsum delectus quam, perspiciatis blanditiis et."
                />
                <Card
                    imgSrc="./freelancerImg/blank_profile.png" 
                    title="Web Developer Profile"
                    description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid porro ut quia commodi error ipsum delectus quam, perspiciatis blanditiis et."
                />
                <Card
                    imgSrc="./freelancerImg/blank_profile.png" 
                    title="Web Developer Profile"
                    description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid porro ut quia commodi error ipsum delectus quam, perspiciatis blanditiis et."
                />
                <Card
                    imgSrc="./freelancerImg/blank_profile.png" 
                    title="Web Developer Profile"
                    description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid porro ut quia commodi error ipsum delectus quam, perspiciatis blanditiis et."
                />
                <Card
                    imgSrc="./freelancerImg/blank_profile.png" 
                    title="Web Developer Profile"
                    description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid porro ut quia commodi error ipsum delectus quam, perspiciatis blanditiis et."
                />
                <Card
                    imgSrc="./freelancerImg/blank_profile.png" 
                    title="Web Developer Profile"
                    description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid porro ut quia commodi error ipsum delectus quam, perspiciatis blanditiis et."
                />

                <Card
                    imgSrc="./freelancerImg/blank_profile.png" 
                    title="Web Developer Profile"
                    description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid porro ut quia commodi error ipsum delectus quam, perspiciatis blanditiis et."
                />
                <Card
                    imgSrc="./freelancerImg/blank_profile.png" 
                    title="Web Developer Profile"
                    description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid porro ut quia commodi error ipsum delectus quam, perspiciatis blanditiis et."
                />
                  
            </section>
            <Footer />
        </div>
    );
};

export default WebDeveloper;