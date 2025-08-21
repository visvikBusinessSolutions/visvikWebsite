import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/v1/team"; // replace with your API

export default function TeamPage() {
  const bannerImage = "/team-banner.jpeg";
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch team members from API
  const fetchMembers = async () => {
    try {
      const res = await axios.get(API_URL, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setTeamMembers(res.data.data || []);
      setLoading(false);
    } catch (err) {
      console.error("Failed to fetch team members:", err);
      setError("Failed to fetch team members");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  // Group team members by roleType
  const groupByRole = (members) => {
    const groups = {};
    members.forEach((member) => {
      const role = member.department || "others";
      if (!groups[role]) groups[role] = [];
      groups[role].push(member);
    });
    return groups;
  };

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
                src={member.image || "/Team_photo/placeholder.png"}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full mb-4 border-4 border-gray-200"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-500 mb-2">{member.designation}</p>
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
                src={member.image || "/Team_photo/placeholder.png"}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full mb-4 border-4 border-gray-200"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-500 mb-2">{member.designation}</p>
              <p className="text-gray-700 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );

  // if (loading)
  //   return <p className="text-center mt-12 text-lg">Loading team members...</p>;

  // if (error) return <p className="text-center mt-12 text-red-500">{error}</p>;

  const groupedMembers = groupByRole(teamMembers);

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
        {loading && (
          <p className="text-center mt-12 text-lg text-gray-500">
            Loading team members...
          </p>
        )}

        {/* ✅ Error message */}
        {error && <p className="text-center mt-12 text-red-500">{error}</p>}

        {/* Render team sections dynamically */}
        {groupedMembers["founder"] &&
          renderTeam(groupedMembers["founder"], "VisVik Founder", true)}
        {groupedMembers["development"] &&
          renderTeam(groupedMembers["development"], "Development Team", true)}
        {groupedMembers["bde"] &&
          renderTeam(groupedMembers["bde"], "Business Development Executives")}
        {/* Render any other roles */}
        {Object.keys(groupedMembers).map(
          (role) =>
            !["founder", "development", "bde"].includes(role) &&
            renderTeam(
              groupedMembers[role],
              role.charAt(0).toUpperCase() + role.slice(1)
            )
        )}
      </div>
    </div>
  );
}
