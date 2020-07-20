import React from 'react';
import Header from '../../layouts/Header';
import SectionInterests from './sections/sectionInterests';
import SectionSkills from './sections/sectionSkills';
import SectionWebsites from './sections/sectionWebsites';
import Footer from '../../layouts/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <SectionInterests />
      <SectionWebsites />
      <SectionSkills />
      <Footer />
    </>
  );
};

export default Home;
