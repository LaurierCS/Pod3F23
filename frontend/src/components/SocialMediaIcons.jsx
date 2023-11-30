import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center space-x-4">
      <a href="https://github.com/UsamaMo" className=" hover:text-black">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a href="https://www.linkedin.com/in/usamamohiuddin/" className=" hover:text-black">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href="mailto:usamamohiudin@gmail.com" className=" hover:text-black">
        <FontAwesomeIcon icon={faEnvelope} size="2x" />
      </a>
      {/* Add more icons as needed */}
    </div>
  );
};

export default SocialMediaIcons;
