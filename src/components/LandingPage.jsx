// The landing page component where users can navigate to login or signup.

import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <h1 className="text-4xl font-bold text-white mb-6">
        Orlando Couch Surfers, unite!
      </h1>
      <p className="text-white text-lg mb-10">Find or offer a couch today!</p>
      <div className="flex gap-4">
        <Link
          to="/signup"
          className="bg-white text-blue-500 py-2 px-6 rounded shadow-md"
        >
          Sign Up
        </Link>
        <Link
          to="/login"
          className="bg-white text-blue-500 py-2 px-6 rounded shadow-md"
        >
          Log In
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
