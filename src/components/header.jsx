// components/Header.js

import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
      className="flex justify-between items-center p-4 "
      style={{ backgroundColor: "#633492" }}
    >
      <h1 className="text-white text-3xl">407 Stays</h1>
      <div className="flex items-center">
        <Link to="/login">
          <button className="text-white text-[20px] mr-[28px] bg-transparent border border-white rounded py-2 px-4 hover:bg-white hover:text-blue-500 transition duration-300">
            Log In
          </button>
        </Link>
        <Link to="/">
          <button className="text-white text-[20px] bg-transparent border border-white rounded py-2 px-4 hover:bg-white hover:text-blue-500 transition duration-300">
            Sign Up
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
