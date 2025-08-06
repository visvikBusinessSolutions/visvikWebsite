const Application_card = ({ icon, title, description, animate }) => {
  return (
    <div
      className={`card-hover bg-white/90 rounded-lg shadow-lg p-6 text-center transition-shadow duration-300 cursor-pointer ${animate}`}
    >
      <div className="text-blue-500 mb-3">
        <div className="text-4xl mb-2">{icon}</div>
        <h3 className="font-semibold text-lg text-blue-900">{title}</h3>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default Application_card;
