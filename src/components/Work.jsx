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
  },
  {
    company: "NORTH-AIMS TECHNOLOGIES GILGIT",
    type: "Frontend Web Developer",
    date: "July-2020 - Oct-2022",
    companyIcon: <FaBuilding />,
    roleIcon: <FaUser />,
    dateIcon: <BsCalendar2DateFill />,
  },
];

const Work = () => {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <p className="font-bold text-4xl text-center text-gray-800 tracking-widest mb-10">
        WORK HISTORY
      </p>

      <div className="mx-5 sm:mx-32">
        {data.map((item) => {
          return (
            <>
              <div className="mt-5">
                <p className="font-bold text-gray-800 text-xl flex items-center gap-4 tracking-widest">
                  <span>{item.companyIcon}</span>
                  {item.company}
                </p>
                <p className="font-bold text-gray-500 flex items-center gap-4 tracking-wide">
                  <span>{item.roleIcon}</span>
                  {item.type}
                </p>
                <p className="font-semibold text-gray-500 flex items-center gap-4">
                  <span>{item.dateIcon}</span>
                  {item.date}
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
