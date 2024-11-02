// The landing page component where users can navigate to login or signup.

import React from "react";
import Hero from "./Hero";
import Header from "./header"

const LandingPage = () => {
  return (
    <div>
      <Header />
      <Hero />
    </div>
  );
};

export default LandingPage;
