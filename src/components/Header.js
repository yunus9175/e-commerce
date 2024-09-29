import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navRef = useRef();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const btn = document.querySelector("#hamburger-btn");

      if (navRef.current && !navRef.current.contains(event.target)) {
        if (!btn.contains(event.target)) {
          closeMenu();
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="bg-gray-800 p-4 fixed top-0 w-full z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className="text-white font-bold text-xl flex items-center gap-2"
          >
            <img
              src={
                "https://cdn.iconscout.com/icon/free/png-512/free-burger-emoji-icon-download-in-svg-png-gif-file-formats--food-cheese-fastfood-100-pack-miscellaneous-icons-450387.png?f=webp&w=256"
              }
              alt="logo"
              className="h-11 rounded-3xl object-fit"
            />
            <h2 className="text-2xl sm:text-3xl text-orange-400">Swiggy</h2>
          </Link>

          {/* Hamburger Icon for Mobile */}
          <button
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
            id="hamburger-btn"
            className="block lg:hidden text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>

          {/* Links */}
          <ul
            ref={navRef} // Attach ref to the nav list
            className={`text-center lg:flex lg:space-x-4 text-white lg:static absolute bg-gray-800 w-full left-0 lg:w-auto lg:bg-transparent transition-all duration-500 ${
              isOpen ? "top-16" : "top-[-300px]"
            }`}
          >
            <li className="px-4 py-2">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block hover:text-yellow-400 ${
                    isActive ? "text-yellow-500" : "text-white"
                  }`
                }
                onClick={() => setIsOpen(false)} // Close menu on link click
              >
                Home
              </NavLink>
            </li>
            <li className="px-4 py-2">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block hover:text-yellow-400 ${
                    isActive ? "text-yellow-500" : "text-white"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                About Us
              </NavLink>
            </li>
            <li className="px-4 py-2">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `block hover:text-yellow-400 ${
                    isActive ? "text-yellow-500" : "text-white"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </NavLink>
            </li>

            <li className="px-4 py-2">
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  `block hover:text-yellow-400 ${
                    isActive ? "text-yellow-500" : "text-white"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                Cart
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
