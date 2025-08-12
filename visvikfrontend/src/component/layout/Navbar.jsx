import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Sidebar from "../sidebar";
import ServicesGrid from "../submanu/services/services";
import CompanyInfoMenu from "../submanu/company/company";

const menuItems = [
  { label: "COMPANY", dropdown: true, component: <CompanyInfoMenu /> },
  { label: "SERVICES", dropdown: true, component: <ServicesGrid /> },
  { label: "INVESTOR", component: "" },
];

const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [toggle, settoggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handlemenubar = () => {
    settoggle((prev) => !prev);
  };
  return (
    <nav
      className={`w-full px-6 bg-white shadow-sm flex items-center justify-between z-50 ${
        scrolled ? "fixed" : "bg-transparent"
      }`}
    >
      <Link to="/">
        <div className="flex items-center md:space-x-2 md:ml-8 justify-center align-center">
          <img
            src="./logo-without-bg.png"
            alt="Logo"
            className="h-20 w-20 object-cover object-center"
          />
        </div>
      </Link>
      <ul className="hidden md:flex space-x-6 items-center">
        <div className="text-sm text-gray-700 font-medium cursor-pointer flex items-center space-x-1">
          <Link to="/">
            <li>HOME</li>
          </Link>
        </div>

        {menuItems.map((item, idx) => (
          <li
            key={idx}
            className="group"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="text-sm text-gray-700 font-medium cursor-pointer flex items-center space-x-1">
              <span>{item.label}</span>
              {item.dropdown && <span className="text-xs">▼</span>}
            </div>
            {hoveredIndex === idx && item.dropdown && item.component}
          </li>
        ))}
        <div className="text-sm text-gray-700 font-2xl cursor-pointer flex items-center space-x-1">
          <li>BLOG</li>
        </div>
        <li>
          <Link to="/contact">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md  transition text-sm font-semibold cursor-pointer">
              CONTACT US
            </button>
          </Link>
        </li>
      </ul>
      <div className="md:hidden">
        <button
          className="text-blue-600 text-2xl cursor-pointer"
          onClick={() => {
            handlemenubar();
          }}
        >
          &#9776;
        </button>
        <Sidebar
          mainMenu={toggle}
          setMainMenu={settoggle}
          // menuItems={menuItems}
        />
      </div>
    </nav>
  );
};

export default Navbar;
