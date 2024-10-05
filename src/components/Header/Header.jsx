import React from "react";
import image from "../../assets/banner.jpg";

const Header = () => {
  return (
    <div
      className="h-[700px] bg-cover bg-center pt-40 px-10 space-y-5 relative"
      style={{ backgroundImage: `url(${image})` }}
    >
      <h1 className="text-6xl">Discover the Latest <br /> in Tech Innovations</h1>
      <p>
        Shop cutting-edge gadgets, electronics, and accessories at unbeatable
        prices. <br /> Elevate your tech game with our exclusive collections—where
        innovation meets affordability
      </p>
      <div>
        <button className="px-4 py-2 bg-[#dc7516] rounded-lg ">Resister Now</button>
      </div>
    </div>
  );
};

export default Header;
