import React from 'react';
import './Footer.css'; // Import the CSS file

// Replace with your actual image paths
import discordLogo from '../../assets/discord.png';
import instagramLogo from '../../assets/instagram.png';
import emailLogo from '../../assets/mail.png';

const Footnote = () => {
  return (
    <footer>
      <div className="footer-left">
        <p className='pods'>PODS 2023</p>
        <p className='About'>About</p>
        <p className='Privacy'>Privacy</p>
      </div>
      <div className="footer-right">
        <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
            <img src={discordLogo} alt="Discord" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagramLogo} alt="Instagram" />
        </a>
        <a href="mailto:your-email@example.com">
            <img src={emailLogo} alt="Email" />
        </a>
      </div>
    </footer>
  );
};

export default Footnote;
