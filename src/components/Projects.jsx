import ecommerce from "../images/ecommerce.png";
import crypto from "../images/crypto.png";
import realestate from "../images/realestate.png";
import dashboard from "../images/dashboard.png";
import calculator from "../images/calculator.png";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const products = [
  {
    id: 1,
    name: "React E-Commerce Website",
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
    price: "$35",
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
    id: 4,
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
    <div className="">
      <p className="font-bold text-4xl text-center text-gray-800 tracking-wider">
        MY PROJECTS
      </p>

      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <Carousel autoPlay infiniteLoop className=" border-gray-100 border-4 p-2 rounded-2xl">
          {/* <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"> */}
          {products.map((product) => (
            <div key={product.id} className="group mb-7">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-7 shadow-xl">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-auto sm:w-72 object-cover object-center group-hover:opacity-75"
                />
              </div>
              <div className="flex flex-col items-center">
                <h3 className="mt-4 font-bold text-gray-800">{product.name}</h3>
                <a
                  href={product.href}
                  className="cursor-pointer font-bold text-blue-700 border px-3 py-1 my-5 hover:text-gray-700 rounded-md"
                >
                  Live Preview
                </a>
              </div>
            </div>
          ))}
          {/* </div> */}
        </Carousel>
      </div>
    </div>
  );
}
