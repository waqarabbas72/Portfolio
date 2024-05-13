import ecommerce from "../images/ecommerce.png";
import crypto from "../images/crypto.png";
import realestate from "../images/realestate.png";
import dashboard from "../images/dashboard.png";
import calculator from "../images/calculator.png";

import { FaGithub } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";

const products = [
  {
    id: 1,
    name: "E-Commerce Website",
    href: "https://lighthearted-melba-38fe34.netlify.app",
    detail:
      "A captivating Frontend E-Commerce Website crafted with meticulous attention to detail. Immerse yourself in its sleek and modern design, where every pixel is purposefully placed to enhance user experience.",
    imageSrc: ecommerce,
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    tech1: "React",
    tech2: "Tailwind CSS",
    github: "https://github.com/waqarabbas72/React-Ecommerce.git",
  },
  {
    id: 2,
    name: "Crypto App",
    href: "https://cheerful-dieffenbachia-a9a887.netlify.app",
    detail:
      "Experience the future of finance with our Crypto Currency App, meticulously crafted with ReactJS and Tailwind CSS.This app offers an immersive journey into the world of digital assets. Track real-time prices and analyze market trends.",
    imageSrc: crypto,
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
    tech1: "React",
    tech2: "Tailwind CSS",
    github: "https://github.com/waqarabbas72/CryptoCurrency-React.git",
  },
  {
    id: 3,
    name: "Bootstrap Dashboard UI",
    href: "https://waqarabbas72.github.io/dashboard/",
    detail:
      "Introducing our Bootstrap Dashboard UI—an elegant and efficient solution for managing your data and visualizing insights. Immerse yourself in a sleek and intuitive interface, meticulously crafted to streamline your workflow and enhance productivity.",
    imageSrc: dashboard,
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
    tech1: "Javascript",
    tech2: "Bootstrap",
    github: "https://github.com/waqarabbas72/dashboard.git",
  },
  {
    id: 4,
    name: "Real Estate Website UI",
    href: "https://zesty-melba-402efd.netlify.app",
    detail:
      "Step into the world of real estate with our captivating Real Estate Website UI. Designed to seamlessly blend style with functionality, our interface offers a visually stunning gateway to your dream property. ",
    imageSrc: realestate,
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
    tech1: "React",
    tech2: "Tailwind CSS",
    github: "https://github.com/waqarabbas72/Real-Estate-Website-ReactJS.git",
  },
  {
    id: 5,
    name: "ReactJS Calculator",
    href: "https://illustrious-palmier-539d84.netlify.app/",
    detail:
      "Discover the simplicity and sophistication of our ReactJS Calculator—an essential tool for every digital workspace. With a clean and minimalist design, this calculator offers a seamless user experience, making number crunching a breeze",
    imageSrc: calculator,
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
    tech1: "Redux",
    tech2: "Tailwind CSS",
    github: "https://github.com/waqarabbas72/reactJS-calculator.git",
  },
];

export default function Projects() {
  return (
    <div id="projects">
      <p className="font-bold text-2xl sm:text-4xl text-center text-blue-500 tracking-wider">
        MY PROJECTS
      </p>

      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        {/* <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"> */}
        {products.map((product) => (
          <div
            key={product.id}
            className="group mb-12 items-center grid grid-cols-1 lg:grid-cols-2 gap-6 hover:shadow-2xl hover:scale-110 transition-all ease-in-out duration-300"
          >
            <div className="">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="h-fit w-auto object-center group-hover:opacity-75"
              />
            </div>
            <div className="flex flex-col items-center justify-evenly">
              <h3 className="mt-4 font-bold text-gray-800 text-2xl">
                {product.name}
              </h3>
              <p className="px-8 py-4 text-lg font-mono">{product.detail}</p>
              <div className="flex items-center justify-between gap-6 font-bold text-blue-500">
                <span>{product.tech1}</span>
                <span>{product.tech2}</span>
              </div>
              <div className="flex items-center justify-between gap-6">
                <a
                  href={product.github}
                  className="cursor-pointer font-bold my-5 hover:text-blue-500 rounded-md flex gap-2 items-center"
                >
                  Code
                  <FaGithub className="h-6 w-6" />
                </a>
                <a
                  href={product.href}
                  className="cursor-pointer font-bold my-5 hover:text-blue-500 rounded-md flex gap-2 items-center"
                >
                  Live Demo
                  <FiExternalLink className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        ))}
        {/* </div> */}
      </div>
    </div>
  );
}
