import Search from "./search";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="mx-auto flex max-w-screen-xl flex-col px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 md:py-1">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Logo />
          </div>

          <div className="md:flex md:items-center">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#"
                  >
                    Help
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#"
                  >
                    Join
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#"
                  >
                    Sign In
                  </a>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-3">
              <span className="flex gap-3 md:hidden">
                <CiHeart />

                <IoCartOutline />
              </span>
              <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="my-2 hidden border-t border-gray-200 md:flex" />

        <div className="pb-3 md:flex md:items-center md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="#"
                >
                  Help
                </a>
              </li>

              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="#"
                >
                  Join
                </a>
              </li>

              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="#"
                >
                  Sign In
                </a>
              </li>
            </ul>
          </nav>
          <div className="items-center justify-center gap-3 md:flex">
            <Search />
            <span className="hidden gap-3 sm:flex">
              <CiHeart />

              <IoCartOutline />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
