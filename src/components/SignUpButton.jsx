// components/ImageCard.js

import React from "react";
import { useNavigate } from "react-router-dom";

const ImageCard = ({ image, text, link }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(link);
  };

  return (
    <div
      onClick={handleNavigation}
      className="relative flex flex-col items-center justify-center w-[276px] min-h-[257px] rounded-[24px] bg-[#FDE192] border-4 border-[#849C6B] shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      {/* Yellow Overlay on Hover */}
      <div className="absolute inset-0 bg-lime-500 opacity-0 hover:opacity-70 rounded-[24px] transition-opacity duration-300"></div>

      <div className="px-6 py-4">
        <button className="mt-4 min-h-[257px] flex flex-col items-center justify-center">
          <img src={image} alt="Icon" className="w-36 h-36 mb-2" />
          <span
            className="font-[Roboto Flex] text-black font-extrabold text-[35px] pt-2 flex-wrap"
            style={{ fontFamily: "Roboto Flex" }}
          >
            {text}
          </span>
        </button>
      </div>
    </div>
  );
};

export default ImageCard;
