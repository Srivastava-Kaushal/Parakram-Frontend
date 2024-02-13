import { Fragment } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// import Footer from "../footer/Footer";
// import { AnimatePresence } from "framer-motion";
import logo from "../../assets/logo-svg.svg";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const NavBar = () => {
  const currentPath = useLocation().pathname;

  const navigation = [
    { name: "Home", href: "/home" },
    { name: "Events", href: "/events" },
    { name: "Merchandise", href: "/merchandise" },
    { name: "Accomodation", href: "/accomodation" },
    { name: "About Us", href: "/about" },
    { name: "Sponsors", href: "/sponsors" },
  ];

  return (
    <Fragment>
      <Disclosure as="nav" className="sticky top-0 z-30 w-full">
        {({ open }) => (
          <div className="bg-[#0f0d09] ">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-[#f2f1ef] hover:bg-[#584212] hover:text-[#f2f1ef] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#f2f1ef]">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start text-2xl font-bold">
                  <Link to="/" className="flex flex-shrink-0 items-center">
                    <img src={logo} height={50} width={120} />
                  </Link>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item, ind) => (
                        <span key={ind} className={item.name}>
                          <Link
                            to={item.href}
                            className={classNames(
                              item.href === currentPath
                                ? "bg-[#584212] text-[#f2f1ef]"
                                : "text-[#f2f1ef] hover:underline hover:decoration-[#ffc946] hover:backdrop-opacity-10",
                              "rounded-md px-3 py-2 text-base font-medium"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </Link>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item, ind) => (
                  <Link
                    key={ind}
                    to={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-[#f2f1ef]"
                        : "text-[#f2f1ef] hover:bg-[#584212] hover:text-[#f2f1ef]/90",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </Disclosure.Panel>
          </div>
        )}
      </Disclosure>

      <main className="flex-grow flex flex-col">
        <Outlet />
      </main>
    </Fragment>
  );
};

export default NavBar;
