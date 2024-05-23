import { BsCalendar2DateFill } from "react-icons/bs";
import { FaBuilding, FaUser } from "react-icons/fa6";

const data = [
  {
    company: "CODELANCERS GILGIT",
    type: "Frontend Web Developer",
    date: "Nov-2022 - Present",
    companyIcon: <FaBuilding />,
    roleIcon: <FaUser />,
    dateIcon: <BsCalendar2DateFill />,
    description: "As a Front-End Developer at Codelancer since September 2022, I'm passionate about using my skills to build user-friendly and visually appealing websites. I focus on crafting interfaces that are not only functional but also a joy to navigate."
  },
  {
    company: "NORTH-AIMS TECHNOLOGIES GILGIT",
    type: "Frontend Web Developer",
    date: "July-2020 - Oct-2022",
    companyIcon: <FaBuilding />,
    roleIcon: <FaUser />,
    dateIcon: <BsCalendar2DateFill />,
    description: "During my time at North-Aims Tech, from September 2021 to September 2022, I had the valuable opportunity to immerse myself in the world of front-end development. It was a year of continuous learning, growth, and contributing to a variety of exciting projects."
  },
];

const Work = () => {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <p className="font-bold text-2xl sm:text-4xl text-center text-blue-500 tracking-widest mb-10">
        WORK HISTORY
      </p>

      <div className="mx-5 sm:mx-32">
        {data.map((item) => {
          return (
            <>
              <div className="mt-5">
                <p className="font-bold text-gray-800 text-md sm:text-xl flex items-center gap-4 tracking-widest">
                  <span>{item.companyIcon}</span>
                  {item.company}
                </p>
                <p className="font-bold text-gray-500 flex items-center gap-4 tracking-wide text-sm sm:text-lg">
                  <span>{item.roleIcon}</span>
                  {item.type}
                </p>
                <p className="font-semibold text-gray-500 flex items-center gap-4 text-sm sm:text-lg">
                  <span>{item.dateIcon}</span>
                  {item.date}
                </p>
                <p className="font-semibold text-gray-600 italic my-2 text-sm sm:text-lg">
                  {item.description}
                </p>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Work;
