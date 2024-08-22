import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { FaShoppingBag } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [navbar,setNavbar] = useState(false);
  const [open, setOpen] = useState(false);

  const handleopen = () => {
    setOpen(!open);
  };

  const { getTotalCartAmount } = useContext(StoreContext);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <div className={navbar ? "navbar activee" : "navbar"}>
      <Link to="/">
        <img src={assets.logo} className="logo" alt="" />
      </Link>
      <ul className={open ? "navbar-menu " : "navbar-menu open"}>
        <Link
          to="/"
          onClick={() => setMenu("home") }
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explor-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          mobile-app
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          contact us
        </a>
      </ul>
      <div className="navbar-right">
        <div className="navbar-searvh-icon">
          <Link to="/cart">
            <FaShoppingBag style={{ color: "tomato", fontSize: "1.6rem" }} />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>sign in</button>
        <div id="menu" onClick={handleopen}>
          {
            open ? <IoMdClose  style={{ color: "tomato", fontSize: "1.7rem", cursor: "pointer" }} /> : <AiOutlineMenu  style={{ color: "tomato", fontSize: "1.6rem", cursor: "pointer" }}/>
          }
            
      </div> 
                    
      </div>

     


    </div>
  );
};

export default Navbar;
