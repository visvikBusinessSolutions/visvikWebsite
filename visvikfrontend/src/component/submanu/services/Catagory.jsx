import { Link } from "react-router-dom";
const Category = ({ title, items }) => {
  return (
    <div className="flex-1 space-y-3">
      <h3 className="text-lg font-semibold border-b-2 pb-1 border-blue-500 text-blue-500">
        {title}
      </h3>
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li key={idx}>
            <Link
              to={item.href || "#"}
              className="flex items-center space-x-3 hover:text-blue-600 transition"
            >
              <span className="text-orange-600">{item.icon}</span>
              <span className="text-sm text-gray-700">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
