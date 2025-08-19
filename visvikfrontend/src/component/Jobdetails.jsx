// import React from "react";
// import { useParams, useNavigate } from "react-router-dom";

// export default function JobDetail() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   // Fake job data (replace with API call)
//   const jobData = {
//     id,
//     title: "Software Engineer",
//     company: "TechCorp Pvt. Ltd.",
//     location: "Bangalore, India",
//     salary: "₹10,00,000 / year",
//     description:
//       "We are looking for a passionate Software Engineer to design, develop, and maintain our applications. Proficiency in JavaScript, React, and Node.js is required.",
//     requirements: [
//       "Bachelor's degree in Computer Science or related field",
//       "2+ years of experience in software development",
//       "Strong problem-solving skills",
//     ],
//     postedAt: "2025-08-01",
//   };

//   return (
//     <div className="min-w-full mx-8 mt-5  bg-white p-6 rounded-lg shadow-md">
//       <div className="flex justify-end m-3">
//         <button
//         onClick={() => navigate(-1)}
//         className= " mb-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
//       >
//         ← Back to Jobs
//       </button>
//       </div>
      

//       <h1 className="text-3xl font-bold mb-2">{jobData.title}</h1>
//       <p className="text-gray-500">{jobData.company}</p>
//       <p className="text-gray-600">📍 {jobData.location}</p>
//       <p className="text-green-600 font-semibold">💰 {jobData.salary}</p>
//       <p className="text-gray-500">Posted on: {jobData.postedAt}</p>

//       <div className="mt-4">
//         <h2 className="font-semibold text-lg">Job Description</h2>
//         <p className="text-gray-700">{jobData.description}</p>
//       </div>

//       <div className="mt-4">
//         <h2 className="font-semibold text-lg">Requirements</h2>
//         <ul className="list-disc list-inside text-gray-700">
//           {jobData.requirements.map((req, index) => (
//             <li key={index}>{req}</li>
//           ))}
//         </ul>
//       </div>

//       <button
//         onClick={() => navigate("/apply")}
//         className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
//       >
//         Apply Now
//       </button>
//     </div>
//   );
// }



import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function JobDetail() {
  const location = useLocation();
  const navigate = useNavigate();

  // Get job object from state (passed from Careers page)
  const jobData = location.state || {
    // fallback if someone opens the URL directly
    title: "Job Not Found",
    company: "",
    location: "",
    salary: "",
    description: "No job details available.",
    requirements: [],
    postedAt: "",
    _id: "",
  };

  const handleApply = () => {
 

    // Navigate to Apply page and pass selected job
    navigate("/apply", { state: { jobId: jobData._id, jobTitle: jobData.title } });
  };

  return (
    <div className="min-w-full mx-8 mt-5 bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-end m-3">
        <button
          onClick={() => navigate(-1)}
          className="mb-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
        >
          ← Back to Jobs
        </button>
      </div>

      <h1 className="text-3xl font-bold mb-2">{jobData.title}</h1>
      <p className="text-gray-500">{jobData.company}</p>
      <p className="text-gray-600">📍 {jobData.location}</p>
      {jobData.salary && <p className="text-green-600 font-semibold">💰 {jobData.salary}</p>}
      {jobData.postedAt && <p className="text-gray-500">Posted on: {jobData.postedAt}</p>}

      <div className="mt-4">
        <h2 className="font-semibold text-lg">Job Description</h2>
        <p className="text-gray-700">{jobData.description}</p>
      </div>

      {jobData.requirements?.length > 0 && (
        <div className="mt-4">
          <h2 className="font-semibold text-lg">Requirements</h2>
          <ul className="list-disc list-inside text-gray-700">
            {jobData.requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>
      )}

      <button
        onClick={handleApply}
        className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
      >
        Apply Now
      </button>
    </div>
  );
}
