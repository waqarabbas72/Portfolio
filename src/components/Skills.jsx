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
  {
    skill: "WEB DESIGN",
    experience: "4+ Years Of Experience",
    src: webDesign,
  },
];

const Skills = () => {
  return (
    <div id="skills">
      <p className="font-bold text-4xl text-center text-gray-800 tracking-widest">
        SKILLS & EXPERIENCE
      </p>
      <div className="mx-auto grid max-w-2xl grid-cols-1 md:grid-cols-2 text-center md:text-start items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-3 lg:px-8">
        {data.map((item) => {
          return (
            <>
              <div className="flex flex-col items-center hover:shadow-2xl rounded-xl duration-500">
                <img
                  src={item.src}
                  alt=""
                  className="w-auto h-40 rounded-lg my-3 object-center"
                />
                <p className="font-bold text-gray-800 text-xl">{item.skill}</p>
                <p className="text-gray-600 font-bold">{item.experience}</p>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
