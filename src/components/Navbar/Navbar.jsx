import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-10 max-w-7xl m-auto ">
      <div className="flex items-center justify-between p-5 bg-green-300 bg-opacity-50">
        <div>
          <h1 className="text-3xl font-bold">E-Buy</h1>
        </div>
        <div>
          <ul className="flex space-x-4 cursor-pointer">
            <li>
              <a href="/Home"></a>Home
            </li>
            <li>
              <a href="/About"></a>About
            </li>
            <li>
              <a href="/Products"></a>Products
            </li>
            <li>
              <a href="/Contact"></a>Contact
            </li>
          </ul>
        </div>
        <div>
          <button className="px-4 py-2 rounded-lg bg-[#e3c33f]">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
