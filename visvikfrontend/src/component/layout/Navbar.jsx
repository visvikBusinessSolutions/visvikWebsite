import { useState } from "react";
import { Link } from "react-router-dom";

import Sidebar from "../sidebar";
import ServicesGrid from "../submanu/services/services";
import CompanyInfoMenu from "../submanu/company/company";

const menuItems = [
  { label: "COMPANY", dropdown: true, component: <CompanyInfoMenu /> },
  { label: "SERVICES", dropdown: true, component: <ServicesGrid /> },
  { label: "INVERSTER", dropdown: true, component: "" },
];

const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [toggle, settoggle] = useState(false);
  const handlemenubar = () => {
    settoggle((prev) => !prev);
  };
  return (
    <nav className="fixed w-full px-6 md:py-6 py-4 bg-white shadow-sm flex items-center justify-between z-50">
      <Link to="/">
        <div className="flex items-center md:space-x-2 md:ml-8 ">
          <img src="./visvik_contant.jpeg" alt="Logo" className="h-10 w-10" />
        </div>
      </Link>
      <ul className="hidden md:flex space-x-6 items-center">
        {menuItems.map((item, idx) => (
          <li
            key={idx}
            className="group"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="text-sm text-gray-700 font-medium hover:text-blue-600 cursor-pointer flex items-center space-x-1">
              <span>{item.label}</span>
              {item.dropdown && <span className="text-xs">▼</span>}
            </div>
            {hoveredIndex === idx && item.dropdown && item.component}
          </li>
        ))}
        <div className="text-sm text-gray-700 font-2xl hover:text-blue-600 cursor-pointer flex items-center space-x-1">
          <li>Blog</li>
        </div>
        <li>
          <Link to="/contact">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition text-sm font-semibold cursor-pointer">
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
        <Sidebar mainMenu={toggle} setMainMenu={settoggle} />
      </div>
    </nav>
  );
};

export default Navbar;
