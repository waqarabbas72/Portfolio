import "./App.css";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Qualification from "./components/Qualification";
import Work from "./components/Work";
import SocialMedia from "./components/SocialMedia";

function App() {
  return (
    <>
      <Header />
      <Content />
      <Skills />
      <Projects />
      <Qualification />
      <Work />
      <Contact />
      <SocialMedia className={`flex items-center my-4 gap-4 justify-center`} />
    </>
  );
}

export default App;
