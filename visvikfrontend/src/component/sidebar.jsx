// import React from "react";
// import { FaTimes } from "react-icons/fa"; // Font Awesome X icon (you can install with npm install react-icons)
// import { Link } from "react-router-dom";

// const Sidebar = ({ mainMenu, setMainMenu }) => {
//   const menuItems = [
//     { name: "HOME", href: "/" },
//     { name: "ABOUT US", href: "/aboutus" },
//     { name: "SERVICES", href: "#services" },
//     { name: "CONTACT US", href: "/contact" },
//   ];

//   return (
//     <div
//       className={`fixed top-0 left-0 h-full w-[60vw] bg-white text-black p-4 z-40 transform transition-transform duration-300 ease-in-out ${
//         mainMenu ? "translate-x-0" : "-translate-x-full"
//       }`}
//     >
//       <div className="flex justify-end">
//         <button
//           onClick={() => setMainMenu(false)}
//           className="text-2xl text-black focus:outline-none"
//         >
//           <FaTimes />
//         </button>
//       </div>
//       <ul className="space-y-4 mt-12 px-4 border-2">
//         {menuItems.map((item) => (
//           <li key={item.name}>
//             <Link to={item.href} className="hover:underline">
//               {item.name}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;

// that try it
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Sidebar = ({ mainMenu, setMainMenu }) => {
  const [openSection, setOpenSection] = useState(null);
  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const menu = [
    {
      title: "Company",
      items: [
        { name: "About Us", link: "/about" },
        {
          name: "Work Culture",
          link: "/work-culture",
        },
        { name: "Our Partners", link: "/teams" },
        { name: "Careers", link: "/careers" },
        {
          name: "Event/Webinar",
          link: "/press",
        },
      ],
    },
    {
      title: "Services",
      items: [
        // Add more
        { name: "AWS", link: "/aws" },
        { name: "Cybersecurity", link: "/cybersercurity" },
        { name: "DevOps", link: "/devops" },
        { name: "Mobile App Development", link: "/mobile" },
        { name: "Native App Development", link: "/app" },
        { name: "Software Development", link: "/software" },
        {
          name: "Cross Platform Development",
          href: "/cross_platform_development",
        },
        { name: "IOT Development", link: "/iot_development" },
        { name: "UI & UX Designing", link: "/ui&ux" },
        { name: "Website Development", link: "/website" },
      ],
    },
    {
      title: "Invester",
      items: [{ name: "BobyMart", link: "/contact" }],
    },
  ];

  return (
    <div
      className={`fixed top-0 left-0 h-full w-[60vw] bg-white text-black p-4 z-40 transform transition-transform duration-300 ease-in-out ${
        mainMenu ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Menu</h2>
          <button
            onClick={() => setMainMenu(false)}
            className="text-gray-600 text-xl"
          >
            ✕
          </button>
        </div>

        {menu.map((section, index) => (
          <div key={index} className="mb-3">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection(index)}
            >
              <h3 className="font-semibold text-md">{section.title}</h3>
              {openSection === index ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {openSection === index && (
              <ul className="mt-2 pl-2 space-y-2">
                {section.items.map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <Link
                      to={item.link}
                      onClick={() => setMainMenu(false)}
                      className="text-sm text-gray-700"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
        <div>
          <h3 className="font-semibold text-md">BLOG</h3>
        </div>
        <Link to="/contact" onClick={() => setMainMenu(false)}>
          <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-md font-semibold text-sm">
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
