const products = [
  {
    id: 1,
    name: "React E-Commerce Website",
    href: "https://lighthearted-melba-38fe34.netlify.app",
    price: "$48",
    imageSrc:
      "https://www.upwork.com/att/download/portfolio/persons/uid/1683854300898009088/profile/projects/files/98cc9cfc-e9d4-434f-b3e2-f77c1ae224fc",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Crypto Detail App",
    href: "https://cheerful-dieffenbachia-a9a887.netlify.app",
    price: "$35",
    imageSrc:
      "https://www.upwork.com/att/download/portfolio/persons/uid/1683854300898009088/profile/projects/files/9ca5100a-1640-4326-b169-f684977869b2",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "React Calculator",
    href: "#",
    price: "$89",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Bootstrap Dashboard UI",
    href: "https://waqarabbas72.github.io/dashboard/",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  // More products...
];

export default function Projects() {
  return (
    <div className="bg-white">
      <p className="font-bold text-4xl text-center text-gray-800 tracking-wider">
        MY PROJECTS
      </p>

      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 shadow-xl">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-72 w-72 object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 font-bold text-gray-800">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {product.price}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
