import React from 'react';
import Hero from '../components/Hero';
import LatestCollection from '../components/LatestCollection';
import OurPolicy from '../components/OurPolicy';
import NewsletterBox from '../components/NewsletterBox';
// import Footer from "../components/footer";

const Home = () => {
  return (
    <div className="px-10">
      <Hero />
      <LatestCollection />
      <OurPolicy />
      <NewsletterBox />
      {/* <Footer/> */}
    </div>
  );
};
export default Home;
