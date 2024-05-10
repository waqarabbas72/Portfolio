import html from "../images/html.png";
import react from "../images/react.png";
import next from "../images/nextjs.png";
import tailwind from "../images/tailwind.png";
import bootstrap from "../images/bootstrap.png";
import css from "../images/css.png";
import responsive from "../images/responsive.png";
import js from "../images/js.png";
import webDesign from "../images/web design.png";
import redux from "../images/redux.png";

const data = [
  {
    skill: "HTML",
    experience: "4+ Years Of Experience",
    src: html,
  },
  {
    skill: "CSS",
    experience: "4+ Years Of Experience",
    src: css,
  },
  {
    skill: "JAVASCRIPT",
    experience: "4+ Years Of Experience",
    src: js,
  },
  {
    skill: "BOOTSTRAP",
    experience: "4+ Years Of Experience",
    src: bootstrap,
  },
  {
    skill: "TAILWIND CSS",
    experience: "4+ Years Of Experience",
    src: tailwind,
  },
  {
    skill: "RESPONSIVE DESIGN",
    experience: "4+ Years Of Experience",
    src: responsive,
  },
  {
    skill: "REACT",
    experience: "3+ Years Of Experience",
    src: react,
  },
  {
    skill: "NEXT.JS",
    experience: "2+ Year Of Experience",
    src: next,
  },
  {
    skill: "Redux",
    experience: "3+ Year Of Experience",
    src: redux,
  },
  // {
  //   skill: "WEB DESIGN",
  //   experience: "4+ Years Of Experience",
  //   src: webDesign,
  // },
];

const Skills = () => {
  return (
    <div
      id="skills"
      className="mx-auto  items-center px-4 py-24 sm:px-6 sm:py-32 max-w-2xl lg:max-w-7xl lg:px-8"
    >
      <p className="font-bold text-2xl sm:text-4xl text-center text-gray-800 tracking-widest mb-16">
        TECH STACK
      </p>
      <div className="flex gap-8 flex-wrap justify-center">
        {data.map((item) => {
          return (
            <>
              <img src={item.src} alt="" className="w-30 h-20" />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
