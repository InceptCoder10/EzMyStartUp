import React from 'react';
import Card from '../components/card';
import NavigationBar from '../components/NavBar';
import OurService from '../components/OurServices';
import Footer from '../components/Footer';
import './Freelancer.css';

const  Freelancer= () => {
    return (
        <div className='Fl'>
            <NavigationBar />
            <OurService
                title1="Freelancers for your work."
                title2="For your work."
                subtitle="Get most of the work done by Professionals."
                buttonColor="#87CEEB"
                gradientColors="linear-gradient(
                    0deg,
                    #ffffff 1%,
                    rgba(255, 255, 255, 0) 50%
                  )"
                alignItems="center"
                backgroundImage="./freelancerImg/freelancer-main.jpg"
                Page="graphicdesigner"
                textAlign="right"
            />
            <section className="wrapper">
                <Card
                    imgSrc="./freelancerImg/Graphic Design.png" 
                    title="Graphic Designers"
                    description="Startups often need logos, branding materials, and promotional graphics to establish their identity and attract customers."
                    page="/graphicdesigner"
                />
                <Card
                    imgSrc="./freelancerImg/Web Development.png" 
                    title="Web Developer"
                    description="Building a professional website or web application is essential for startups to showcase their products or services and reach potential customers online."
                    page="/WebDeveloper"
                />
                 <Card
                    imgSrc="./freelancerImg/Digital Marketing.png" 
                    title="Digital Marketers"
                    description="Quality content is crucial for startups to communicate their value proposition, educate their audience, and improve their search engine rankings."
                    page="/DigitalMarketer"
                />
                 <Card
                    imgSrc="./freelancerImg/Content-Writing.png"  
                    title="Content Writer"
                    description="Startups need to create awareness and acquire customers quickly, making digital marketing services like SEO, social media marketing, and PPC advertising highly valuable."
                    page="/ContentWriter"
                />
                 <Card
                    imgSrc="./freelancerImg/Social Media Management.png" 
                    title="Social Media Managements"
                    description=" Managing social media accounts effectively helps startups engage with their audience, build a community around their brand, and drive traffic to their website.."
                    page="/SocialMedia"
                />
                 <Card
                    imgSrc="./freelancerImg/Video Editing.png" 
                    title="Video Editor"
                    description=" Video content can be a powerful tool for startups to tell their story, showcase their products or services, and connect with their audience on a deeper level."
                    page="/VideoEditor"
                />
                 <Card 
                    imgSrc="./freelancerImg/Buissness Consultant.jpg" 
                    title="Buissness Consultance"
                    description="Freelancers with expertise in areas like business development, marketing strategy, or financial planning can provide valuable insights and guidance to help startups grow and succeed."
                    page="/BuissnessConsultance"
                />
                 <Card
                    imgSrc="./freelancerImg/Software Development.png" 
                    title="Software Development"
                    description=" If a startup is building a tech product, they may need freelance developers to help with tasks like coding, testing, and debugging."
                    page="/SoftwareDevelopment"
                />
                 <Card
                    imgSrc="./freelancerImg/Public-Realtion-manager.jpg" 
                    title="Public Realtions"
                    description=" Freelancers with PR experience can help startups generate media coverage, manage their reputation, and establish credibility in their industry."
                    page="/PublicRelations"
                />
                
            </section>
            <Footer />
        </div>
    );
};

export default Freelancer;
