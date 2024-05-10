import ecommerce from "../images/ecommerce.png";
import crypto from "../images/crypto.png";
import realestate from "../images/realestate.png";
import dashboard from "../images/dashboard.png";
import calculator from "../images/calculator.png";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { FaGithub } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";

const products = [
  {
    id: 1,
    name: "E-Commerce Website",
    href: "https://lighthearted-melba-38fe34.netlify.app",
    price: "$48",
    imageSrc: ecommerce,
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Crypto Detail App",
    href: "https://cheerful-dieffenbachia-a9a887.netlify.app",
    detail:
      "This is a Crypto App that allows users to search for information about various cryptocurrencies in real-time",
    imageSrc: crypto,
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Real Estate Website UI",
    href: "https://zesty-melba-402efd.netlify.app",
    price: "$89",
    imageSrc: realestate,
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Bootstrap Dashboard UI",
    href: "https://waqarabbas72.github.io/dashboard/",
    price: "$35",
    imageSrc: dashboard,
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 5,
    name: "ReactJS Calculator",
    href: "https://illustrious-palmier-539d84.netlify.app/",
    price: "$35",
    imageSrc: calculator,
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
];

export default function Projects() {
  return (
    <div id="projects">
      <p className="font-bold text-2xl sm:text-4xl text-center text-gray-800 tracking-wider">
        MY PROJECTS
      </p>

      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        {/* <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"> */}
        {products.map((product) => (
          <div key={product.id} className="group mb-12 grid grid-cols-2 gap-6">
            <div className="">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="h-fit w-auto object-cover object-center group-hover:opacity-75"
              />
            </div>
            <div className="flex flex-col items-center">
              <h3 className="mt-4 font-bold text-gray-800 text-2xl">
                {product.name}
              </h3>
              <p className="px-8 py-4 text-lg font-mono">{product.detail}</p>
              <div className="flex items-center justify-between gap-6">
                <a
                  href={product.href}
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
