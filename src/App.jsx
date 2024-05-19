import "./App.css";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Qualification from "./components/Qualification";
import Work from "./components/Work";
import SocialMedia from "./components/SocialMedia";
import styled from "styled-components";
import { useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import About from "./components/About";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Clock from "./components/Clock";

// const StyledBody = styled.body`
//   background-color: ${({ theme }) => theme.backgroundColor};
//   color: ${({ theme }) => theme.textColor};
// `;

// const lightTheme = {
//   backgroundColor: "#fff",
//   textColor: "#000",
// };

// const darkTheme = {
//   backgroundColor: "#000",
//   textColor: "#fff",
// };
function App() {
  // const [isDarkMode, setIsDarkMode] = useState(false);

  // const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  // const theme = isDarkMode ? darkTheme : lightTheme;
  return (
    <>
      <div className="App">
        {/* <StyledBody theme={theme} className="duration-500"> */}
        {/* <button
            onClick={toggleDarkMode}
            className="absolute right-4 top-11 cursor-pointer mx-2 text-2xl duration-500"
            >
            {isDarkMode ? <MdLightMode /> : <MdDarkMode />}
          </button> */}
        <Header />
        <Content />
        {/* <Clock /> */}
        <Skills />
        <About />
        <Projects />
        <Qualification />
        <Work />
        <Contact />
        <Footer />
        <ScrollToTop />
        {/* </StyledBody> */}
      </div>
    </>
  );
}

export default App;
