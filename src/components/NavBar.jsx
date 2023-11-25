import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { BsFillSunFill } from "react-icons/bs";
const navItems = [
  {
    id: 0,
    name: "home",
  },
  {
    id: 1,
    name: "skills",
  },
  {
    id: 2,
    name: "experience",
  },
  {
    id: 3,
    name: "projects",
  },
  {
    id: 4,
    name: "contact",
  },
];
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const toggleNavHandler = (name) => {
    setIsOpen((prevState) => !prevState);
    setActiveIndex(name === activeIndex ? null : name);
  };
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    //cleanup function to remove event listener to free memory
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`w-full mx-auto  fixed top-0 py-5 sm:py-4 z-30 ${
        scrollPosition > 0 ? `bg-white shadow-md` : "bg-transparent"
      } `}
    >
      <nav className="container m-auto flex items-center justify-between">
        <div onClick={() => setActiveIndex(null)} data-aos="fade-down">
          <Link
            className="text-3xl font-bold sm:text-3xl"
            to="/"
            onClick={() => window.scrollTo(0, 0)}
          >
            Dikshant Luthra
          </Link>
        </div>

        <div data-aos="fade-down" className="flex items-center space-x-11">
          {/* hamburger */}
          <button
            onClick={toggleNavHandler}
            className="cursor-pointer text-2xl hidden md:block"
          >
            <HiMenu size={25} />
          </button>
          <ul
            className={`flex items-center space-x-11 ${
              !isOpen ? "md:flex" : "md:right-[0%]"
            } md:flex-col md:absolute m-auto md:top-0 md:right-[-100%] md:w-[78%] md:h-screen md:bg-white `}
          >
            <button
              onClick={toggleNavHandler}
              className={`text-3xl hidden md:block relative right-0 top-4 container mx-auto`}
            >
              <RxCross2 size={25} />
            </button>
            {navItems.map((item) => (
              <li
                key={item.id}
                className="md:m-6 md:flex md:gap-6 md:items-center md:justify-center"
              >
                <a
                  onClick={() => toggleNavHandler(item.name)}
                  href={`#${item.name}`}
                  className={`uppercase cursor-pointer text-black hover:text-sky-600 font-bold ${
                    item.name === activeIndex ? "text-sky-600" : ""
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
            
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
