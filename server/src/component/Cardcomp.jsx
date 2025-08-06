import { Link } from "react-router-dom";

const ServiceCard = ({ icon, title, description, link, className }) => {
  return (
    <Link to={link}>
      <div
        className={`card-hover bg-white rounded-xl shadow-md p-6  transition duration-300 text-center cursor-pointer h-full ${className}`}
      >
        <div className="text-4xl mb-4 text-blue-900">{icon}</div>
        <h3 className="text-blue-900 font-semibold text-xl mb-2">{title}</h3>
        <p className="text-gray-700 text-sm mb-4">{description}</p>
        <div className="text-orange-500 text-xl font-bold cursor-pointer">
          +
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
