import React from 'react';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import OurService from './components/OurServices';
import HomeSection from './components/HomeSection';
import VideoSection from './components/VideoSection';

const App = () => {
  return (
    <div className="App">
       <NavBar />

       <HomeSection />
       <VideoSection />

       {/* Freelancers */}
       <OurService
                title1="Freelancers for your work."
                title2="For your work."
                subtitle="Get most of the work done by Professionals."
                buttonColor="#ff5876"
                gradientColors="linear-gradient(90deg, #fbb9c5 49.37%, rgba(255, 255, 255, 0) 122.14%)"
                alignItems="flex-start"
                backgroundImage="../OurServices/freelancer.png"
            />
        {/* Advertisement*/}
        <OurService
                title1="Advertise"
                title2="And get recognized."
                subtitle="Grow more in market with better recognition."
                buttonColor="#fc8130"
                gradientColors="linear-gradient(
                  -90deg,
                  #FDD0B1 49.37%,
                  rgba(255, 255, 255, 0) 122.14%)"
                alignItems="flex-end"
                backgroundImage="freelancer.png"
            />
        {/* Brokers*/}
        <OurService
                title1="Brokers"
                title2="For Influencer Marketing"
                subtitle="Enchance your buisness with top notch professionals."
                buttonColor="#ff5876"
                gradientColors="linear-gradient(90deg, #fbb9c5 49.37%, rgba(255, 255, 255, 0) 122.14%)"
                alignItems="flex-start"
                backgroundImage="freelancer.png"
            />
        {/* CA Service */}
        <OurService
                title1="Chartered Accountant"
                title2="Services of your Billing."
                subtitle="Let your finances be leveraged with the experts."
                buttonColor="#ff5876"
                gradientColors="linear-gradient(90deg, #fbb9c5 49.37%, rgba(255, 255, 255, 0) 122.14%)"
                alignItems="flex-end"
                backgroundImage="freelancer.png"
            />
        {/* Legal Support */}
        <OurService
                title1="Legal Support"
                title2="Confidence of your rights."
                subtitle="Now have no more compliant issues for your growth."
                buttonColor="#ff5876"
                gradientColors="linear-gradient(90deg, #fbb9c5 49.37%, rgba(255, 255, 255, 0) 122.14%)"
                alignItems="flex-start"
                backgroundImage="freelancer.png"
            />

        {/* Portfolio */}
        <OurService
                title1="Get your Portfolio"
                title2="Boost your profile"
                subtitle="Enhance your buissness with your portfolio."
                buttonColor="#ff5876"
                gradientColors="linear-gradient(90deg, #fbb9c5 49.37%, rgba(255, 255, 255, 0) 122.14%)"
                alignItems="flex-end"
                backgroundImage="freelancer.png"
            />
      <Footer />
    </div>
  );
};

export default App;

