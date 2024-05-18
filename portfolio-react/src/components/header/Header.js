import React from "react";
import Cta from "./Cta";
import './header.css';
import Me from '../../assests/me.png'
import Socials from "./Socials";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5> Hello Iam </h5>
        <h2 className="h"> Abishek S</h2>
        <h5 className="text-light"> Full Stack Developer</h5>
        <Cta />
       <Socials />

        <div className="me">
          <img src={Me} alt=""></img>
        </div>

        <a href="#contact" className="scroll_down">Scroll down</a>
      </div>
    </header>
  );
};

export default Header;
