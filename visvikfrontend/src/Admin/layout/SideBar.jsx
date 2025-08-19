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
    <div
      className={`${
        isOpen ? "w-64" : "w-16"
      } bg-blue-500 text-white transition-all duration-300 flex flex-col h-screen`}
    >
      {/* Sidebar header */}
      <div className="flex items-center justify-between p-4 border-b border-blue-700">
        {isOpen && <h1 className="text-lg font-bold">Admin Panel</h1>}
        <FaBars className="cursor-pointer" onClick={() => setIsOpen(!isOpen)} />
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
            {isOpen && <span>{item.name}</span>}
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
          {isOpen && <span>Logout</span>}
        </button>
      </div>
    </div>
  );
}
