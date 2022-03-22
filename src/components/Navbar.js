import React from "react";
import Logo from "../images/MyTestApp.png";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <img src={Logo} alt="My Test App" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
