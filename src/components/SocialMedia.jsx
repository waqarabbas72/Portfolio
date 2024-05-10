import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

const data = [
  {
    id: 1,
    href: "https://www.instagram.com/waqarabbas_72/",
    icon: <FaInstagram />,
  },
  {
    id: 2,
    href: "https://www.facebook.com/waqarabas72/",
    icon: <FaFacebook />,
  },
  {
    id: 3,
    href: "https://www.linkedin.com/in/waqar-abbas-5943b4287/",
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    href: "https://github.com/waqarabbas72",
    icon: <FaGithub />,
  },
];

const SocialMedia = ({ className }) => {
  return (
    <>
      <ul className={className}>
        {data.map((item) => {
          return (
            
              <a
                href={item.href}
                className="m-1 text-xl lg:text-3xl cursor-pointer z-10 hover:text-blue-500 duration-300"
                key={item.id}
              >
                {item.icon}
              </a>
            
          );
        })}
      </ul>
    </>
  );
};

export default SocialMedia;
