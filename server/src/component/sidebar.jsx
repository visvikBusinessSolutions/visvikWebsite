import React from "react";
import { FaTimes } from "react-icons/fa"; // Font Awesome X icon (you can install with npm install react-icons)
import { Link } from "react-router-dom";

const Sidebar = ({ mainMenu, setMainMenu }) => {
  const menuItems = [
    { name: "HOME", href: "/" },
    { name: "SERVICES", href: "#services" },
    // { name: "PRODUCTS", href: "#products" },
    // { name: "INDUSTRY", href: "#industry" },
    { name: "ABOUT US", href: "/aboutus" },
    { name: "CONTACT US", href: "/contact" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 h-full w-[60vw] bg-white text-black p-4 z-40 transform transition-transform duration-300 ease-in-out ${
        mainMenu ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex justify-end">
        <button
          onClick={() => setMainMenu(false)}
          className="text-2xl text-black focus:outline-none"
        >
          <FaTimes />
        </button>
      </div>
      <ul className="space-y-4 mt-12 px-4">
        {menuItems.map((item) => (
          <li key={item.name}>
            <Link to={item.href} className="hover:underline">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
