import SocialMedia from "../SocialMedia";
import PdfDownloadButton from "../CvDownloadBtn";
import resume from "../../documents/my-resume.pdf";
import me from "../../images/me.png";
import { motion } from "framer-motion";

export default function Content() {
  return (
    <div className=" relative">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 15 }}
        >
          <p className="text-2xl sm:text-4xl text-gray-500 text-center sm:text-start">
            HI, I am
            <span className="mx-3 text-2xl sm:text-5xl font-bold tracking-widest text-gray-800">
              WAQAR ABBAS
            </span>
          </p>
          <p className="text-2xl sm:text-4xl font-bold tracking-widest my-3 text-gray-800 text-center sm:text-start">
            FRONTEND WEB DEVELOPER
          </p>
          <p className="text-xl sm:text-4xl text-gray-500 text-center sm:text-start">
            From
            <span className="mx-3 text-2xl sm:text-4xl font-bold tracking-widest text-gray-800">
              PAKISTAN
            </span>
          </p>
          <p className="text-gray-600 text-lg tracking-wide mt-3 text-center sm:text-start">
            I turn ideas into beautiful and interactive web experiences.
            Passionate about front-end development and bringing user interfaces
            to life with code.
          </p>
          <div className="mt-3 text-center sm:text-start">
            <button className="text-white py-2 px-4 mr-3 font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Hire Me
            </button>
            <PdfDownloadButton
              pdfUrl={resume}
              fileName="my_downloaded_pdf.pdf"
            />
          </div>

        </motion.div>
          <div className="flex lg:gap-5 items-center lg:flex-col lg:absolute lg:top-44 lg:right-3 justify-center sm:justify-start">
            <SocialMedia
              className={`flex items-center lg:flex-col gap-4`}
            />
          </div>
        <motion.div
          className="flex justify-center"
          initial={{ y: "100vw" }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 15 }}
        >
          <img
            src={me}
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100 w-96"
          />
        </motion.div>
      </div>
    </div>
  );
}
