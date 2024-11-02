// components/Header.js

import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
      className="flex justify-between items-center p-4"
      style={{
        backgroundColor: "#633492",
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000
      }}
    >
      <h1 className="text-white text-3xl"><Link to="/">407 Stays</Link></h1>
      <div className="flex items-center">
        <Link to="/hostsignup">
          <button className="text-white text-[20px] mr-[28px] bg-transparent border border-white rounded py-2 px-4 hover:bg-white hover:text-blue-500 transition duration-300">
            Host
          </button>
        </Link>
        <Link to="/tenantsignup">
          <button className="text-white text-[20px] mr-[28px] bg-transparent border border-white rounded py-2 px-4 hover:bg-white hover:text-blue-500 transition duration-300">
            Stay
          </button>
        </Link>
        <Link to="/communitysignup">
          <button className="text-white text-[20px] mr-[28px] bg-transparent border border-white rounded py-2 px-4 hover:bg-white hover:text-blue-500 transition duration-300">
            Facilitate
          </button>
        </Link>
        <Link to="/Explore">
          <button className="text-white text-[20px] mr-[28px] bg-transparent border border-white rounded py-2 px-4 hover:bg-white hover:text-blue-500 transition duration-300">
            Explore
          </button>
        </Link>
      </div>
    </header>
  );
};
export default Header;
