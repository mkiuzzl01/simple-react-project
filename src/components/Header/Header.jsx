import React from "react";
import image from "../../assets/banner.jpg";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const Header = () => {
  return (
    <div className="h-[45rem]">
      <Parallax
        pages={1.2}
        style={{
          maxWidth: "1280px",
          scrollBehavior: "smooth",
          scrollbarWidth: "none",
          maxHeight: "45rem",
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="absolute inset-0 bg-[#D9D9C4] opacity-60"></div>

        <ParallaxLayer offset={0} speed={0.5}  className="pt-[19rem] px-5 md:px-24">
          <div className="relative z-10 space-y-7">
            <div className="space-y-7">
              <h1 className="text-4xl md:text-5xl font-semibold">
                Discover the Latest <br /> in Tech Innovations
              </h1>
              <p>
                Shop cutting-edge gadgets, electronics, and accessories at
                unbeatable prices. <br /> Elevate your tech game with our
                exclusive collections—where innovation meets affordability
              </p>
            </div>
            <div>
              <button className="px-4 py-2 bg-[#ffad60] rounded-full hover:text-white hover:bg-[#dc7516] ">
                Resister Now
              </button>
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Header;
