import { BiSolidInstitution } from "react-icons/bi";
import { BsCalendar2DateFill } from "react-icons/bs";
import { RiGraduationCapFill } from "react-icons/ri";

const data = [
  {
    degree: "BS-COMPUTER SCIENCE",
    institute: "Karakoram International University Gilgit",
    date: "Sep-2023 - Sep2027 (Expected)",
    degreeIcon: <RiGraduationCapFill />,
    instituteIcon: <BiSolidInstitution />,
    dateIcon: <BsCalendar2DateFill />,
  },
  {
    degree: "FSC-COMPUTER SCIENCE",
    institute: "Bright Future Academy Gilgit",
    date: "July-2021 - July-2023",
    degreeIcon: <RiGraduationCapFill />,
    instituteIcon: <BiSolidInstitution />,
    dateIcon: <BsCalendar2DateFill />,
  },
  {
    degree: "MATRICULATION-COMPUTER SCIENCE",
    institute: "The Legends School Danyore Gilgit",
    date: "2020",
    degreeIcon: <RiGraduationCapFill />,
    instituteIcon: <BiSolidInstitution />,
    dateIcon: <BsCalendar2DateFill />,
  },
];

const Qualification = () => {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <p className="font-bold text-2xl sm:text-4xl text-center text-gray-800 tracking-widest mb-16">
        QUALIFICATION
      </p>

      <div className="mx-5 sm:mx-32">
        {data.map((item) => {
          return (
            <>
              <div className="mt-5">
                <p className="font-bold text-gray-800 text-md sm:text-xl flex items-center gap-4 tracking-widest">
                  <span>{item.degreeIcon}</span>
                  {item.degree}
                </p>
                <p className="font-bold text-gray-500 flex items-center gap-4 text-sm sm:text-lg">
                  <span>{item.instituteIcon}</span>
                  {item.institute}
                </p>
                <p className="font-semibold text-gray-500 flex items-center gap-4 text-sm sm:text-lg">
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

export default Qualification;
