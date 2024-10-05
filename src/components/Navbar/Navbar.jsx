import React from "react";

const Navbar = () => {
  return (
    <div>
      <div>
        <h1>E-Buy</h1>
      </div>
      <div>
        <ul>
          <li>
            <a href="#Home"></a>Home
          </li>
          <li>
            <a href="#About"></a>About
          </li>
          <li>
            <a href="#Products"></a>Products
          </li>
          <li>
            <a href="#Contact"></a>Contact
          </li>
        </ul>
      </div>
      <div>
        <button>Login</button>
      </div>
    </div>
  );
};

export default Navbar;
