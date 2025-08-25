import React, { useEffect, useState } from "react";
import Banner from "./commonbanner";
import { useNavigate } from "react-router-dom";
import api from "../../api";
// import axios from "axios";

const Careers = () => {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await api.get("/v1/jobs");
        setJobs(res.data.data || []);
      } catch (error) {
        console.error("Failed to fetch jobs:", error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div>
      <Banner
        title="Accelerate Your Career with Visvik"
        details="Boost Your Skill"
      />

      <div className="text-center my-5">
        <h2 className="md:text-4xl text-xl font-extrabold text-blue-500">
          We are hiring!
        </h2>

        <div className="container mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {jobs.map((job) => (
            <div
              key={job._id}
              className="bg-white rounded-2xl shadow-xl p-6 flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300"
            >
              <h4 className="text-xl font-semibold text-gray-800 mb-1">
                {job.title}
              </h4>
              <p className="text-sm text-gray-600 mb-1">{job.experience}</p>
              <p className="text-sm text-gray-500 mb-4">{job.location}</p>

              <button
                className="btn bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg font-semibold"
                onClick={() => {
                  localStorage.setItem("selectedJobId", job.jobId); // store jobId
                  navigate(`/jobDetail/${job.jobId}`, { state: job }); // navigate with state
                }}
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Careers;
