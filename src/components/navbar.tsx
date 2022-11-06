import Image from "next/image";
import Link from "next/link";

const navbar: React.FC = () => {
  return (
    <nav className="bg-white border-gray-200">
      <div className="container flex flex-wrap justify-between items-center mx-auto px-2">
        <div className="cursor-pointer lg:ml-7">
          <Link href="/">
            <Image
              src="/assets/logo-orange.png"
              width={80}
              height={80}
              alt="Pathway Plus Logo"
            />
          </Link>
        </div>

        <button
          data-collapse-toggle="mobile-menu"
          type="button"
          className="inline-flex justify-center items-center ml-3 text-gray-400 rounded-lg md:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
          aria-controls="mobile-menu-2"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>

        <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
          <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
            <li className="nav-items">
              <Link href="/">Home</Link>
            </li>
            <li>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                className="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-black rounded hover:text-orange-500 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 md:w-auto"
              >
                Services
                <svg
                  className="ml-1 w-5 h-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              {/* <!-- Dropdown menu --> */}
              <div
                id="dropdownNavbar"
                className="hidden z-10 w-44 font-normal bg-white rounded divide-y divide-gray-100 shadow"
                style={{
                  position: "absolute",
                  inset: "0px auto auto 0px",
                  margin: "0px",
                  transform: "translate3d(0px, 10.2px, 0px)",
                }}
                data-popper-reference-hidden=""
                data-popper-escaped=""
                data-popper-placement="bottom"
              >
                <ul
                  className="py-1 text-sm text-black"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li className="dropdown-items">
                    <Link href="/consulting">Consultation</Link>
                  </li>
                  <li className="dropdown-items">
                    <Link href="#">Proofreading</Link>
                  </li>
                  <li className="dropdown-items">
                    <Link href="#">Events</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-items">
              <Link href="/aboutUs">About Us</Link>
            </li>
            <li className="nav-items">
              <Link href="#">Blog</Link>
            </li>
            <li className="nav-items">
              <Link href="#">Careers</Link>
            </li>
            <li className="nav-items">
              <Link href="#">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default navbar;
