import React, { useEffect, useState } from "react";
import menu_icon from "../.././assets/menu-alt-2-svgrepo-com.svg";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [bgNav, setBgNav] = useState(false);

  const handleToggle = (toggle) => {
    setToggle(toggle);
  };

  useEffect(() => {
    //Scrolling Manage
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // console.log("Scroll");
        setBgNav(true);
      } else {
        setBgNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    //Menu Reset function
    const handleResetSmallMenu = () => {
      if (window.innerWidth >= 1024) {
        // console.log("ok");
        setToggle(false);
      }
    };
    window.addEventListener("resize", handleResetSmallMenu);
  }, []);
//   console.log(bgNav);

  return (
    <div className="fixed top-0 left-0 right-0 z-20 max-w-7xl m-auto ">
      <div
        className={`flex items-center justify-between p-4 bg-green-200 ${
          bgNav ? "bg-opacity-100" : "bg-opacity-20"
        }`}
      >
        <div className="inline-flex items-center space-x-1 ">
          <div onClick={() => handleToggle(!toggle)}>
            <img src={menu_icon} alt="icon" className="w-7 lg:hidden" />
          </div>
          <h1 className="lg:text-3xl text-xl font-bold">E-Buy</h1>
        </div>

        {/* for large device */}
        <div className="hidden lg:block">
          <ul className="flex space-x-4 cursor-pointer">
            <li className="hover:text-green-500">
              <a href="#Home">Home</a>
            </li>
            <li className="hover:text-green-500">
              <a href="#About">About</a>
            </li>
            <li className="hover:text-green-500">
              <a href="#Products">Products</a>
            </li>
            <li className="hover:text-green-500">
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <button className="px-4 py-2 rounded-full bg-[#ffeead] hover:text-white hover:bg-[#ecd05d]">
            Login
          </button>
        </div>
      </div>
      {/* for sm device */}
      <div
        className={`${
          toggle ? "duration-300" : "-translate-x-36 duration-300"
        } bg-[#fff7d1]  w-32 rounded-md ps-3 py-2 ms-2 mt-2 lg:hidden`}
      >
        <ul onClick={() => handleToggle(!toggle)} className="cursor-pointer">
          <li className="hover:text-green-500">
            <a href="#Home">Home</a>
          </li>
          <li className="hover:text-green-500">
            <a href="#About">About</a>
          </li>
          <li className="hover:text-green-500">
            <a href="#Products">Products</a>
          </li>
          <li className="hover:text-green-500">
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
