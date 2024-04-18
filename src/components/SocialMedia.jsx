import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

const SocialMedia = ({className}) => {
  return (
    <>
      <ul className={className}>
        <a href="#" className="m-1 text-xl lg:text-3xl">
          <FaInstagram />
        </a>
        <a href="#" className="m-1 text-xl lg:text-3xl">
          <FaFacebook />
        </a>
        <a href="#" className="m-1 text-xl lg:text-3xl">
          <FaLinkedin />
        </a>
        <a href="#" className="m-1 text-xl lg:text-3xl">
          <FaGithub />
        </a>
      </ul>
    </>
  );
};

export default SocialMedia;
