import "./App.css";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Qualification from "./components/Qualification";
import Work from "./components/Work";

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
    </>
  );
}

export default App;
