import React from "react";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional smooth scrolling behavior
    });
  };
  return (
    <>
      <MdOutlineKeyboardDoubleArrowUp
        className="h-8 w-8 fixed bottom-8 right-2 cursor-pointer z-10 hidden md:block"
        onClick={scrollToTop}
      />
    </>
  );
};

export default ScrollToTop;
