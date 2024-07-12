import Image from "next/image";
import Logo from "./logo";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const footerLinks = [
  {
    name: "About",
  },
  {
    name: "Blog",
  },
  {
    name: "Careers",
  },
  {
    name: "Shopping & Returns",
  },
  {
    name: "Press",
  },
];

export default function Footer() {
  return (
    <footer className="flex flex-col mt-auto bg-[#FAFAFA]">
      <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between md:flex-row md:items-center">
          <div className="flex flex-col">
            <Logo />
            <ul className="mt-6 flex flex-col gap-4 md:flex-row md:gap-5">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    className="text-sm text-[#404040] transition hover:text-gray-600"
                    href="#"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6 flex flex-col gap-2">
            <p className="text-sm">Download the app</p>
            <div className="flex gap-4">
              <Link href="#">
                <Image
                  src="/apple.png"
                  alt="App Store"
                  width={135}
                  height={45}
                  className="h-10 w-32"
                />
              </Link>
              <Link href="#">
                <Image
                  src="/google.png"
                  alt="Google Play"
                  className="h-10 w-32"
                  width={135}
                  height={45}
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm text-gray-500">
              <span className="block sm:inline">All rights reserved.</span>

              <a
                className="inline-block text-teal-600 underline transition hover:text-teal-600/75"
                href="#"
              >
                Terms & Conditions
              </a>

              <span>&middot;</span>

              <a
                className="inline-block text-teal-600 underline transition hover:text-teal-600/75"
                href="#"
              >
                Privacy Policy
              </a>
            </p>

            <p className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500 sm:order-first sm:mt-0">
              <span>
                <FaFacebook className="h-5 w-5" />
              </span>
              <span>
                <FaTwitter className="h-5 w-5" />
              </span>
              <span>
                <AiFillInstagram className="h-5 w-5" />
              </span>
              <span>
                <FaLinkedin className="h-5 w-5" />
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
