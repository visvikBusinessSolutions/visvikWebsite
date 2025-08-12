const Card = ({ data, tittle, paragraph }) => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-blue-800">
          {tittle}
        </h2>
        <p className="mt-2 text-slate-600 text-xl">{paragraph}</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {data.map((service, index) => (
            <div
              key={index}
              className="card-hover bg-white p-6 rounded-lg shadow hover:shadow-lg transition transform hover:scale-105 "
            >
              <h3 className="text-lg font-semibold text-blue-800">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
