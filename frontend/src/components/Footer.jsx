import React from "react";
import { Link } from "react-router-dom";
import SocialMediaIcons from "./SocialMediaIcons";

const Footer = () => {
  return (
    <div>
      <footer className="footer items-center p-4">
        
        <div className="flex text-lg font-semibold">
          <Link to="/about"><p>About</p></Link>
          <p>Privacy</p>
        </div>

        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <SocialMediaIcons/>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
