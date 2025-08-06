import { Link } from "react-router-dom";

const Sidebar = () => (
  <div className="w-64 h-screen bg-gray-800 text-white fixed">
    <div className="p-4 font-bold text-xl">Admin</div>
    <ul className="space-y-2 p-4">
      <li>
        <Link to="/" className="block py-2 hover:bg-gray-700 px-2 rounded">
          Dashboard
        </Link>
      </li>
      <li>
        <Link to="/users" className="block py-2 hover:bg-gray-700 px-2 rounded">
          Users
        </Link>
      </li>
      <li>
        <Link
          to="/products"
          className="block py-2 hover:bg-gray-700 px-2 rounded"
        >
          Products
        </Link>
      </li>
      <li>
        <Link
          to="/settings"
          className="block py-2 hover:bg-gray-700 px-2 rounded"
        >
          Settings
        </Link>
      </li>
    </ul>
  </div>
);

export default Sidebar;
