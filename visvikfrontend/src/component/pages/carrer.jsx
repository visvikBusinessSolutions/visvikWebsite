import Banner from "./commonbanner";
const job = [
  {
    position: "full stack developer",
    description: "2 years experiences",
    location: "noida",
  },
  {
    position: "full stack developer",
    description: "2 years experiences",
    location: "noida",
  },
  {
    position: "full stack developer",
    description: "2 years experiences",
    location: "noida",
  },
  {
    position: "full stack developer",
    description: "2 years experiences",
    location: "noida",
  },
];
const Careers = () => {
  return (
    <div>
      <div>
        <Banner
          title="Accelerate Your Career with visvik"
          details="Boost Your Skill"
        />
      </div>
      <div className="text-center my-5">
        <h2 className="md:text-4xl text-xl font-extrabold text-blue-500">
          We are hiring!
        </h2>
        <div className="container mx-auto grid md:grid-cols-9 grid-cols-1 gap-4">
          {job.map((jobs, i) => (
            <div
              key={i}
              className="md:col-span-3 col-span-1 bg-white rounded-2xl shadow-xl p-6 flex flex-col justify-between"
            >
              <h4 className="text-xl font-semibold text-gray-800 mb-1">
                {jobs.position}
              </h4>
              <p className="text-sm text-gray-600 mb-1">{jobs.description}</p>
              <p className="text-sm text-gray-500 mb-4">{jobs.location}</p>
              <button className="btn">Apply Now</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Careers;
