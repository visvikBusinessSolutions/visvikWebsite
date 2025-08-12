export default function TeamPage() {
  const bannerImage = "/Team_photo/team-banner.jpeg"; // rename to simpler name in /public for production

  const founder = [
    {
      name: "Vishal Joshi",
      role: "Founder & CEO",
      image: "/Team_photo/vishal-sir.jpeg",
    },
    {
      name: "Vikash Kumar",
      role: "Designated Partner & COO",
      image: "/Team_photo/vikash.jpeg",
    },
  ];

  const developmentTeam = [
    {
      name: "Yogesh Kumar",
      role: "Technical Lead & DevOps",
      image: "/Team_photo/yogesh-sir.jpeg",
      bio: "",
    },
    {
      name: "Shivam Agrhari",
      role: "Full Stack Developer",
      image: "/Team_photo/shivam.jpeg",
      bio: "",
    },
    {
      name: "Faiz",
      role: "Full Stack Developer",
      image: "/Team_photo/faizy.jpeg",
      bio: "",
    },
    {
      name: "Shahanshah",
      role: "Front End Developer",
      image: "/Team_photo/shahanshah.jpeg",
      bio: "",
    },
    {
      name: "Amit Kumar",
      role: "Backend Developer",
      image: "/Team_photo/amit.jpeg",
      bio: "",
    },
    {
      name: "Renuka",
      role: "UI/UX Designer",
      image: "/Team_photo/renuka.jpeg",
      bio: "",
    },
  ];

  const bdeTeam = [
    {
      name: "Sarita",
      role: "Business Development Executive",
      image: "/Team_photo/bd-2.jpeg",
      bio: "Builds partnerships and brings in new opportunities.",
    },
    {
      name: "Tanya",
      role: "Business Development Executive",
      image: "/Team_photo/bd-1.jpeg",
      bio: "Expands our reach by building strategic partnerships.",
    },
  ];

  const renderTeam = (team, heading, center = false) => (
    <>
      {heading && (
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {heading}
        </h2>
      )}
      {center ? (
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {team.map((member, index) => (
            <div
              key={index}
              className="rounded-2xl p-6 text-center transition duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full mb-4 border-4 border-gray-200"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-500 mb-2">{member.role}</p>
              <p className="text-gray-700 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {team.map((member, index) => (
            <div
              key={index}
              className="rounded-2xl p-6 text-center transition duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full mb-4 border-4 border-gray-200"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-500 mb-2">{member.role}</p>
              <p className="text-gray-700 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Banner */}
      <div className="relative w-full h-[500px] overflow-hidden">
        <img
          src={bannerImage}
          alt="Team Banner"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div className="bg-gradient-to-t from-black/40 to-transparent p-6 rounded-lg">
            <h1 className="text-white text-5xl font-extrabold">
              Welcome to Our Team
            </h1>
            <p className="text-white text-lg mt-4 max-w-2xl">
              Meet the passionate minds driving innovation, creativity, and
              excellence every day.
            </p>
          </div>
        </div>
      </div>

      {/* Title */}
      <div className="p-7">
        <h1 className="text-5xl font-extrabold text-center mb-12 text-indigo-400">
          Meet Our Team
        </h1>

        {/* Sections */}
        {renderTeam(founder, null, true)}
        {renderTeam(developmentTeam, "Development Team")}
        {renderTeam(bdeTeam, "Business Development Executives")}
      </div>
    </div>
  );
}
