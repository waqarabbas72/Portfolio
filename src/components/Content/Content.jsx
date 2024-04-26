import SocialMedia from "../SocialMedia";
import PdfDownloadButton from "../CvDownloadBtn";
import resume from "../../documents/my-resume.pdf";
import me from '../../images/me.png'

export default function Content() {
  return (
    <div className=" relative">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div className="">
          <p className="text-4xl text-gray-500">
            HI, I am
            <span className="mx-3 text-5xl font-bold tracking-widest text-gray-800">
              WAQAR ABBAS
            </span>
          </p>
          <p className="text-4xl font-bold tracking-widest my-3 text-gray-800">
            FRONTEND WEB DEVELOPER
          </p>
          <p className="text-4xl text-gray-500">
            From
            <span className="mx-3 text-4xl font-bold tracking-widest text-gray-800">
              PAKISTAN
            </span>
          </p>
          <p className="text-gray-600 text-lg tracking-wide mt-3">
            I turn ideas into beautiful and interactive web experiences.
            Passionate about front-end development and bringing user interfaces
            to life with code.
          </p>
          <div className="mt-3">
            <button className="text-white py-2 px-4 mr-3 font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Hire Me
            </button>
            {/* <button className="border border-gray-400 text-gray-800 font-bold py-2 px-4">
              Download CV
            </button> */}
            <PdfDownloadButton
              pdfUrl={resume}
              fileName="my_downloaded_pdf.pdf"
            />
          </div>

          <div className="flex lg:gap-5 items-center mt-3 lg:flex-col lg:absolute lg:top-44 lg:right-3">
            <SocialMedia
              className={`flex items-center mt-3 lg:flex-col gap-4`}
            />
          </div>
        </div>
        <div className="">
          <img
            src={me}
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100 w-96"
          />
        </div>
      </div>
    </div>
  );
}
