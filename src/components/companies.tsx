import Image from "next/image";

const companies = [
  {
    name: "channel",
    logo: "/channel.png",
  },
  {
    name: "adidas",
    logo: "/adidas.png",
  },
  {
    name: "hermes",
    logo: "/hermes.png",
  },
  {
    name: "gucci",
    logo: "/gucci.png",
  },
  {
    name: "vans",
    logo: "/vans.png",
  },
  {
    name: "prada",
    logo: "/prada.png",
  },
  {
    name: "tnf",
    logo: "/tnf.png",
  },
  {
    name: "versace",
    logo: "/versace.png",
  },
];

export default function Companies() {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-800 lg:text-3xl">
          Trusted by over 100+ companies
        </h2>
        <ul className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
          {companies.map((company) => (
            <li key={company.name} className="flex items-center justify-center">
              <div className="w-[301px]">
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={132}
                  height={99}
                  layout="responsive"
                  className="object-contain"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
