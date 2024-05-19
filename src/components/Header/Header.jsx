// import { react } from '@vitejs/plugin-react';
import React, { useState } from "react";
import { Link, scroller } from "react-scroll";
import { CiMenuFries } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

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
    <header className="bg-gray-100 py-4 fixed w-full z-20 flex justify-between px-3">
      <h1 className="text-xl font-bold">WaqarAbbas.Dev</h1>
      <div className="">
        <div className="md:hidden flex justify-end items-end">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none font-bold"
          >
            {showMenu ? (
              <RxCross1 className="h-6 w-6" />
            ) : (
              <CiMenuFries className="h-6 w-6" />
            )}
          </button>
        </div>
        <nav
          className={
            showMenu
              ? "md:flex flex-col items-center md:flex-row md:items-start w-full md:w-auto"
              : "hidden md:block"
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
