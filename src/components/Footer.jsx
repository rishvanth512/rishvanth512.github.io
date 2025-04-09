import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className=" text-white mt-4 py-6">
      <div className="flex justify-center space-x-6 text-2xl">

         {/* Phone (updated icon) */}
         <a
          href="tel:+1234567890"
          aria-label="Phone"
          className="hover:text-gray-400 transition-colors"
        >
          <FiPhone />
        </a>

        {/* Email */}
        <a
          href="mailto:rishvanthsabbani111@gmail.com"
          aria-label="Email"
          className="hover:text-gray-400 transition-colors"
        >
          <FaEnvelope />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/rishvanth512"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-gray-400 transition-colors"
        >
          <FaGithub />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/rishvanthsabbani/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-gray-400 transition-colors"
        >
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
