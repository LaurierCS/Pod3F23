import React from "react";
import discord from '../assets/discord.png';
import instagram from '../assets/instagram.png';
import mail from '../assets/mail.png'
import SocialMediaIcons from "./SocialMediaIcons";

const Footer = () => {
  return (
    <div>
      <footer className="footer items-center p-4 bg-neutral text-neutral-content">
        
        <div className="flex text-lg font-semibold">
          <p>About</p>
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
