import { BiLogoWhatsapp } from "react-icons/bi";
import { MdOutlineMail } from "react-icons/md";
import me from '../images/me.png'

const data = [
  {
    name: "WAQAR ABBAS",
    about:
      "I'm a passionate front-end developer with 4+ years of experience building user-friendly and responsive web interfaces. I'm proficient in HTML, CSS, JavaScript, and React.js. Beyond the code, I bring strong problem-solving skills and a collaborative spirit to every project. In my free time, I enjoy tinkering with new web technologies and staying up-to-date on the latest trends.",
    phone: "+923408616414",
    email: "waqarabas72@gmail.com",
    PhoneIcon: <BiLogoWhatsapp />,
    emailIcon: <MdOutlineMail />,
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
              <div className="mt-5 flex flex-col lg:flex-row items-center justify-between gap-5">
               <img src={me} alt="" className="object-contain w-full h-96 rounded-lg" />
                <div>
                  <p className="font-bold text-gray-700 text-2xl tracking-wider">
                    Hi There! MySelf{" "}
                    <span className="text-3xl ml-2 text-gray-800">
                      {item.name}
                    </span>{" "}
                    <br />
                    <span>Nice to Meet You!</span>
                  </p>
                  <p className="font-bold text-gray-600 italic text-lg flex items-center gap-4 tracking-wide my-5">
                    {item.about}
                  </p>
                  <p className="font-bold text-gray-500 flex items-center gap-4">
                    <span>{item.PhoneIcon}</span>
                    {item.phone}
                  </p>
                  <p className="font-semibold text-gray-500 flex items-center gap-4">
                    <span>{item.emailIcon}</span>
                    {item.email}
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
