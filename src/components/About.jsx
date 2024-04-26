import { BiPhone } from "react-icons/bi";
import { BsMailbox, BsWhatsapp } from "react-icons/bs";

const data = [
  {
    name: "WAQAR ABBAS",
    passion: "FRONTEND DEVELOPER",
    phone: "+923408616414",
    email: "waqarabas72@gmail.com",
    PhoneIcon: <BiPhone />,
    whatsapp: <BsWhatsapp />,
    emailIcon: <BsMailbox />,
  },
];

const About = () => {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <p className="font-bold text-4xl text-center text-gray-800 tracking-widest mb-16">
        ABOUT ME
      </p>

      <div className="mx-5 sm:mx-32">
        {data.map((item) => {
          return (
            <>
              <div className="mt-5 flex items-center justify-between">
                <div>image</div>
                <div>
                  <p className="font-bold text-gray-800 text-lg tracking-widest">
                    My name is <span className="text-2xl">{item.name}</span> <br />
                    <span>Nice to Meet You!</span>
                  </p>
                  <p className="font-bold text-gray-800 text-lg flex items-center gap-4 tracking-widest">
                    <span>{item.degreeIcon}</span>
                    {item.degree}
                  </p>
                  <p className="font-bold text-gray-500 flex items-center gap-4">
                    <span>{item.instituteIcon}</span>
                    {item.institute}
                  </p>
                  <p className="font-semibold text-gray-500 flex items-center gap-4">
                    <span>{item.dateIcon}</span>
                    {item.date}
                  </p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default About;
