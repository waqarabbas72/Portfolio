import SocialMedia from "../SocialMedia";
import PdfDownloadButton from "../CvDownloadBtn";
import resume from "../../documents/my-resume.pdf";
import me from "../../images/me.png";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import Blob from "../Blob";

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

        </motion.div>
          <Blob />
      </div>
    </div>
  );
}
