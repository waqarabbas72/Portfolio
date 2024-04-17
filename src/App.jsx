import "./App.css";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Qualification from "./components/Qualification";

function App() {
  return (
    <>
      <Header />
      <Content />
      <Skills />
      <Projects />
      <Qualification />
      <Contact />
    </>
  );
}

export default App;
