import { BiLogoWhatsapp } from "react-icons/bi";
import { MdOutlineMail } from "react-icons/md";
import me from '../images/me.png'

const data = [
  {
    name: "WAQAR ABBAS",
    about:
      "As a Front-end Developer, I possess an impressive arsenal of skills in HTML, CSS, Javascript, Bootstrap , Tailwind , React , Redux & Next.js. I excel in designing and maintaining responsive websites that offers a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.",
    phone: "+923408616414",
    email: "waqarabas72@gmail.com",
    PhoneIcon: <BiLogoWhatsapp />,
    emailIcon: <MdOutlineMail />,
  },
];

const About = () => {
  return (
    <div id="about" className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <p className="font-bold text-2xl sm:text-4xl text-center text-blue-500 tracking-widest mb-16">
        ABOUT ME
      </p>

      <div className="mx-5 sm:mx-32">
        {data.map((item) => {
          return (
            <>
              <div className="mt-5 flex flex-col lg:flex-row items-center justify-between gap-5">
               <img src={me} alt="" className="object-contain w-full h-96 rounded-lg" />
                <div>
                  <p className="font-bold text-lg sm:text-2xl tracking-wider">
                  A dedicated Front-end Developer based in Gilgit,Pakistan 📍
                  </p>
                  <p className="font-medium text-gray-600  text-lg flex items-center gap-4 tracking-wide my-5">
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
