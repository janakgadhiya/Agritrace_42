import React, { useState } from "react";
import "./header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && "-100%" };
    }
  };

  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <div className="logo-section flexCenter">
          <img className="imglogo" src="/logo.png" alt="logo" />
          <span className="company-name">AgriTrace</span>
        </div>

        <OutsideClickHandler onOutsideClick={() => setMenuOpened(false)}>
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
            <Link to="/home">Home</Link>
            <Link to="/aboutus">About Us</Link>
            <Link to="/contactus">Contact Us</Link>
            <button className="button sign-in-btn">
              <Link to="/signup">Sign Up</Link>
            </button>
            <button className="button sign-in-btn">
            <Link to="/signup">Profile</Link>
            </button>
          </div>
        </OutsideClickHandler>

        <div
          className="menuicon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} color="white" />
        </div>
      </div>
    </section>
  );
};

export default Header;
