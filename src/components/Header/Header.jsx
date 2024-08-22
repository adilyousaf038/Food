import React from "react";
import "./Header.css";
import videoBg from "../../assets/header-video.webm";
const Header = () => {
  return (
    <div className="header">
      <video autoPlay loop muted>
        <source src={videoBg} type="video/webm" />
      </video>
      <div className="header-contents">
        <h2>
          Order your <br /> favourite food here
        </h2>
        <p>
          Choose from a diverse menu featuring a deletable array of dishes
          crafted with the your cravings and elevate your dining experience, one
          delicious meal at a time
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
