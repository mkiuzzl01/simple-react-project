import React from "react";
import image from "../../assets/banner.jpg";

const Header = () => {
  return (
    <div
      className="h-[40rem] bg-cover bg-center pt-24 md:px-10 space-y-5 relative"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-white opacity-50 z-0"></div>
      <div className="relative z-10 space-y-7 p-10">
        <div className="space-y-7">
          <h1 className="text-5xl font-semibold">
            Discover the Latest <br /> in Tech Innovations
          </h1>
          <p>
            Shop cutting-edge gadgets, electronics, and accessories at
            unbeatable prices. <br /> Elevate your tech game with our exclusive
            collections—where innovation meets affordability
          </p>
        </div>
        <div>
          <button className="px-4 py-2 bg-[#ffad60] rounded-full hover:text-white hover:bg-[#dc7516] ">
            Resister Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
