import React from 'react';
import Card from '../components/card';
import NavigationBar from '../components/NavBar';
import OurService from '../components/OurServices';
import Footer from '../components/Footer';
import './GraphicDesigners.css';

const  SocialMedia= () => {
    return (
        <div className='Fl'>
            <NavigationBar />
            <OurService
                title1="
                Have your social media"
                title2="Have your targetted audience."
                subtitle="Enlight the path of your audience via widely used network."
                buttonColor="#87CEEB"
                gradientColors="linear-gradient(
                    0deg,
                    #ffffff 1%,
                    rgba(255, 255, 255, 0) 50%
                  )"
                alignItems="center"
                backgroundImage="./freelancerImg/Social Media Management.png"
                Page="Freelancer"
                textAlign="right"
            />
            <section className="wrapper">
                <Card
                    imgSrc="./freelancerImg/blank_profile.png" 
                    title="Content Writer"
                    description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid porro ut quia commodi error ipsum delectus quam, perspiciatis blanditiis et."
                />

                <Card
                    imgSrc="./freelancerImg/blank_profile.png" 
                    title="Content Writer"
                    description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid porro ut quia commodi error ipsum delectus quam, perspiciatis blanditiis et."
                />
                 <Card
                    imgSrc="./freelancerImg/blank_profile.png" 
                    title="Content Writer"
                    description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid porro ut quia commodi error ipsum delectus quam, perspiciatis blanditiis et."
                />
                 <Card
                    imgSrc="./freelancerImg/blank_profile.png" 
                    title="Content Writer"
                    description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid porro ut quia commodi error ipsum delectus quam, perspiciatis blanditiis et."
                />
                 <Card
                    imgSrc="./freelancerImg/blank_profile.png" 
                    title="Content Writer"
                    description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid porro ut quia commodi error ipsum delectus quam, perspiciatis blanditiis et."
                />
                 <Card
                    imgSrc="./freelancerImg/blank_profile.png" 
                    title="Content Writer"
                    description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid porro ut quia commodi error ipsum delectus quam, perspiciatis blanditiis et."
                />
                 <Card
                    imgSrc="./freelancerImg/blank_profile.png" 
                    title="Content Writer"
                    description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid porro ut quia commodi error ipsum delectus quam, perspiciatis blanditiis et."
                />
                 <Card
                    imgSrc="./freelancerImg/blank_profile.png" 
                    title="Content Writer"
                    description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid porro ut quia commodi error ipsum delectus quam, perspiciatis blanditiis et."
                />
                 <Card
                    imgSrc="./freelancerImg/blank_profile.png" 
                    title="Content Writer"
                    description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid porro ut quia commodi error ipsum delectus quam, perspiciatis blanditiis et."
                />
                 <Card
                    imgSrc="./freelancerImg/blank_profile.png" 
                    title="Content Writer"
                    description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid porro ut quia commodi error ipsum delectus quam, perspiciatis blanditiis et."
                />
                 <Card
                    imgSrc="./freelancerImg/blank_profile.png" 
                    title="Content Writer"
                    description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid porro ut quia commodi error ipsum delectus quam, perspiciatis blanditiis et."
                />
                 <Card
                    imgSrc="./freelancerImg/blank_profile.png" 
                    title="Content Writer"
                    description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid porro ut quia commodi error ipsum delectus quam, perspiciatis blanditiis et."
                />

                
                
                
            </section>
            <Footer />
        </div>
    );
};

export default SocialMedia;