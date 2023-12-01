import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center space-x-4">
      <a href="" className=" hover:text-black">
        <FontAwesomeIcon icon={faDiscord} size="2x" />
      </a>
      <a href="" className=" hover:text-black">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a href="" className=" hover:text-black">
        <FontAwesomeIcon icon={faEnvelope} size="2x" />
      </a>
      {/* Add more icons as needed */}
    </div>
  );
};

export default SocialMediaIcons;
