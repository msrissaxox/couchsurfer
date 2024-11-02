// The landing page component where users can navigate to login or signup.

import React from "react";
import Hero from "./Hero";
import Header from "./header"
import Testimonial from "./testimonial";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Testimonial /> 
    </div>
  );
};

export default LandingPage;
