import React from 'react';
import Card from '../components/card';
import NavigationBar from '../components/NavBar';
import OurService from '../components/OurServices';
import Footer from '../components/Footer';
import './GraphicDesigners.css';

const  BuissnessConsultance= () => {
    return (
        <div className='Fl'>
            <NavigationBar />
            <OurService
                title1="
                Insightful strategies for sustainable growth."
                title2="Expert guidance for a thriving enterprise."
                subtitle="Your partner in strategic business transformation."
                buttonColor="#87CEEB"
                gradientColors="linear-gradient(
                    0deg,
                    #ffffff 1%,
                    rgba(255, 255, 255, 0) 50%
                  )"
                alignItems="center"
                backgroundImage="../freelancerImg/Buissness Consulting.png"
                Page="Freelancer"
                textAlign="right"
            />
            <section className="wrapper">
                <Card
                    imgSrc="./freelancerImg/blank_profile.png" 
                    title="Buissness Consultant"
                    description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid porro ut quia commodi error ipsum delectus quam, perspiciatis blanditiis et."
                />

                <Card
                    imgSrc="./freelancerImg/blank_profile.png" 
                    title="Buissness Consultant"
                    description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid porro ut quia commodi error ipsum delectus quam, perspiciatis blanditiis et."
                />
                <Card
                    imgSrc="./freelancerImg/blank_profile.png" 
                    title="Buissness Consultant"
                    description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid porro ut quia commodi error ipsum delectus quam, perspiciatis blanditiis et."
                />
                <Card
                    imgSrc="./freelancerImg/blank_profile.png" 
                    title="Buissness Consultant"
                    description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid porro ut quia commodi error ipsum delectus quam, perspiciatis blanditiis et."
                />

                <Card
                    imgSrc="./freelancerImg/blank_profile.png" 
                    title="Buissness Consultant"
                    description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid porro ut quia commodi error ipsum delectus quam, perspiciatis blanditiis et."
                />
                <Card
                    imgSrc="./freelancerImg/blank_profile.png" 
                    title="Buissness Consultant"
                    description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid porro ut quia commodi error ipsum delectus quam, perspiciatis blanditiis et."
                />
                <Card
                    imgSrc="./freelancerImg/blank_profile.png" 
                    title="Buissness Consultant"
                    description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid porro ut quia commodi error ipsum delectus quam, perspiciatis blanditiis et."
                />
                <Card
                    imgSrc="./freelancerImg/blank_profile.png" 
                    title="Buissness Consultant"
                    description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid porro ut quia commodi error ipsum delectus quam, perspiciatis blanditiis et."
                />
                <Card
                    imgSrc="./freelancerImg/blank_profile.png" 
                    title="Buissness Consultant"
                    description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid porro ut quia commodi error ipsum delectus quam, perspiciatis blanditiis et."
                />
                <Card
                    imgSrc="./freelancerImg/blank_profile.png" 
                    title="Buissness Consultant"
                    description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid porro ut quia commodi error ipsum delectus quam, perspiciatis blanditiis et."
                />
                <Card
                    imgSrc="./freelancerImg/blank_profile.png" 
                    title="Buissness Consultant"
                    description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid porro ut quia commodi error ipsum delectus quam, perspiciatis blanditiis et."
                />
                <Card
                    imgSrc="./freelancerImg/blank_profile.png" 
                    title="Buissness Consultant"
                    description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid porro ut quia commodi error ipsum delectus quam, perspiciatis blanditiis et."
                />
                
                
                
                
            </section>
            <Footer />
        </div>
    );
};

export default BuissnessConsultance;