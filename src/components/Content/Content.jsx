import SocialMedia from "../SocialMedia";
import PdfDownloadButton from "../CvDownloadBtn";
import resume from "../../documents/my-resume.pdf";
import me from "../../images/me.png";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Content() {
  const data = [
    {
      href: "https://www.linkedin.com/in/waqar-abbas-5943b4287/",
      icon: <FaLinkedin />,
    },
    {
      href: "https://github.com/waqarabbas72",
      icon: <FaGithub />,
    },
  ];

  return (
    <div className=" relative">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center  gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 15 }}
        >
          <p className="text-2xl sm:text-4xl font-bold sm:pr-4 tracking-widest my-3 text-gray-800 text-center sm:text-start">
            FRONT-END WEB DEVELOPER 👋
          </p>
          <p className="text-gray-600 text-lg tracking-wide mt-3 text-center sm:text-start">
            Hi, I'm Waqar Abbas .A passionate front-end web developer based in
            Gilgit,Pakistan 📍
          </p>

          <div className="mt-3 flex gap-3 justify-center items-center sm:justify-start">
            <PdfDownloadButton
              pdfUrl={resume}
              fileName="my_downloaded_pdf.pdf"
            />
            {data.map((item) => {
              return (
                <>
                  <a
                    href={item.href}
                    className="m-1 text-3xl lg:text-3xl cursor-pointer z-10 hover:text-blue-500 duration-300"
                  >
                    {item.icon}
                  </a>
                </>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center"
          initial={{ y: "100vw" }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 15 }}
        >
          <img
            src={me}
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-full bg-gray-100 w-96 z-10"
          />
          {/* <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#FF0066"
              d="M38.8,-65.4C52.5,-59.2,67.5,-53.4,76.3,-42.6C85.1,-31.7,87.7,-15.9,87.7,0C87.8,15.9,85.3,31.9,77.5,44.5C69.8,57.2,56.9,66.7,43.1,73.4C29.3,80.2,14.6,84.3,0.4,83.7C-13.9,83,-27.8,77.7,-41,70.5C-54.2,63.4,-66.8,54.6,-75.8,42.6C-84.9,30.5,-90.5,15.3,-89.3,0.7C-88,-13.9,-80,-27.7,-71.8,-41.2C-63.6,-54.7,-55.2,-67.9,-43.2,-75.1C-31.2,-82.4,-15.6,-83.6,-1.5,-80.9C12.5,-78.2,25,-71.6,38.8,-65.4Z"
              transform="translate(100 100)"
            />
          </svg> */}
         
        </motion.div>
      </div>
    </div>
  );
}
