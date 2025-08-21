import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaBars,
  FaTachometerAlt,
  FaBriefcase,
  FaUsers,
  FaFileAlt,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const menuItems = [
  { name: "Dashboard", icon: <FaTachometerAlt />, path: "/admin" },
  { name: "Job Management", icon: <FaBriefcase />, path: "/admin/jobs" },
  { name: "Team Management", icon: <FaUsers />, path: "/admin/team" },
  {
    name: "Application Management",
    icon: <FaFileAlt />,
    path: "/admin/applications",
  },
  { name: "Quary", icon: <FaUsers />, path: "/admin/quary" },
  { name: "Getintouch", icon: <FaUsers />, path: "/admin/getintouch" },
  { name: "Settings", icon: <FaCog />, path: "/admin/settings" },
];

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(true);
  const [width, setwidth] = useState(true);
  const [mobilesidebar, setmobilesidebar] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsOpen(false); // mobile default collapsed
    } else {
      setIsOpen(true); // desktop expanded
    }
  }, []);

  return (
    <>
      {isOpen ? (
        <div
          className={`${
            width ? "w-64" : "w-16"
          } bg-blue-500 text-white transition-all duration-300 flex flex-col h-auto`}
        >
          {/* Sidebar header */}
          <div className="flex items-center justify-between p-4 border-b border-blue-700">
            {width && <h1 className="text-lg font-bold">Admin Panel</h1>}
            <FaBars
              className="cursor-pointer"
              onClick={() => setwidth(!width)}
            />
          </div>

          {/* Menu items */}
          <div className="flex-1">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`flex items-center gap-4 p-4 transition-colors ${
                  location.pathname === item.path
                    ? "bg-blue-700 border-l-4 border-white"
                    : "hover:bg-blue-600"
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                {width && <span>{item.name}</span>}
              </Link>
            ))}
          </div>

          {/* Logout button */}
          <div className="border-t border-blue-700">
            <button
              onClick={handleLogout}
              className="flex items-center gap-4 p-4 w-full text-left hover:bg-red-600 transition-colors"
            >
              <span className="text-lg">
                <FaSignOutAlt />
              </span>
              {width && <span>Logout</span>}
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-blue-600 text-white">
          <div className="flex items-center justify-between p-4">
            <h1 className="text-xl sm:text-2xl font-bold">ADMIN PANEL</h1>
            <FaBars
              className="cursor-pointer"
              onClick={() => setmobilesidebar(!mobilesidebar)}
            />
          </div>
        </div>
      )}
      {mobilesidebar && (
        <div
          className={`fixed top-0 left-0 h-full w-[75vw] max-w-xs bg-white text-black z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${
            mobilesidebar ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Sidebar Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-300">
            <h2 className="text-xl font-semibold">Menu</h2>
            <button
              onClick={() => setmobilesidebar(false)}
              className="text-gray-600 text-2xl focus:outline-none cursor-pointer"
            >
              ✕
            </button>
          </div>

          {/* Menu Items */}
          <nav className="flex flex-col px-2 py-4 space-y-2">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                onClick={() => setmobilesidebar(false)} // close on navigation
                className={`flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? "bg-blue-600 text-white"
                    : "hover:bg-blue-100"
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Logout Button */}
          <div className="mt-auto border-t border-gray-200 px-4 py-4">
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 w-full text-left px-4 py-3 rounded-md text-red-600 hover:bg-red-100 transition-colors"
            >
              <span className="text-lg">
                <FaSignOutAlt />
              </span>
              <span>Logout</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
