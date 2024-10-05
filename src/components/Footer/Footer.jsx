import React from "react";

const Footer = () => {
  return (
    <div className="text-center bg-blue-950 text-white p-5 mt-10">
      <h1 className="text-3xl font-bold pb-5">E-buy</h1>
      <div className="py-2">
        <ul className="flex justify-center space-x-4">
          <li>
            <a href="/Home">Home</a>
          </li>
          <li>
            <a href="/About"></a>About
          </li>
          <li>
            <a href="/Products">Products</a>
          </li>
          <li>
            <a href="/Contact">Contact</a>
          </li>
        </ul>
      </div>
      <hr className="w-[60%] m-auto" />
      <p className="pt-3">© Copyright 2024. All Rights Reserved E-Buy.</p>
    </div>
  );
};

export default Footer;
