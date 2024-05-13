// import { react } from '@vitejs/plugin-react';
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, scroller } from "react-scroll";

const Header = () => {
  //React-Scroller for smooth scrolling

  const scrollToSkills = () => {
    scroller.scrollTo("skills", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuint",
      containerId: "skills",
    });
  };
  const scrollToAbout = () => {
    scroller.scrollTo("about", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuint",
      containerId: "about",
    });
  };
  const scrollToProjects = () => {
    scroller.scrollTo("projects", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuint",
      containerId: "projects",
    });
  };

  const scrollToContact = () => {
    scroller.scrollTo("contact", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuint",
      containerId: "contact",
    });
  };
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="bg-gray-100 py-4 fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">WaqarAbbas.Dev</h1>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none focus:text-white"
          >
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              className="menu w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M2 4.75C2 4.33579 2.33579 4 2.75 4H17.25C17.6642 4 18 4.33579 18 4.75C18 5.16421 17.6642 5.5 17.25 5.5H2.75C2.33579 5.5 2 5.16421 2 4.75ZM2.75 9C2.33579 9 2 9.33579 2 9.75C2 10.1642 2.33579 10.5 2.75 10.5H17.25C17.6642 10.5 18 10.1642 18 9.75C18 9.33579 17.6642 9 17.25 9H2.75ZM2 14.25C2 13.8358 2.33579 13.5 2.75 13.5H17.25C17.6642 13.5 18 13.8358 18 14.25C18 14.6642 17.6642 15 17.25 15H2.75C2.33579 15 2 14.6642 2 14.25Z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <nav
          className={
            showMenu
              ? "md:flex flex-col md:flex-row md:items-center w-full md:w-auto"
              : "hidden md:flex flex-col md:flex-row md:items-center w-full md:w-auto"
          }
        >
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <Link
              to="skills"
              spy={true}
              smooth={true}
              onClick={scrollToSkills}
              className="text-sm font-semibold leading-6 text-gray-900 cursor-pointer"
            >
              SKILLS
            </Link>

            <Link
              to="about"
              spy={true}
              smooth={true}
              onClick={scrollToAbout}
              className="text-sm font-semibold leading-6 text-gray-900 cursor-pointer"
            >
              ABOUT
            </Link>

            <Link
              to="projects"
              spy={true}
              smooth={true}
              onClick={scrollToProjects}
              className="text-sm font-semibold leading-6 text-gray-900 cursor-pointer"
            >
              PROJECTS
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              onClick={scrollToContact}
              className="text-sm font-semibold leading-6 text-gray-900 cursor-pointer"
            >
              CONTACT
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
