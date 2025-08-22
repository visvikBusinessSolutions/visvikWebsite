// import React, { useState, useRef } from "react";
// import axios from "axios";

// export default function ApplyForm() {
//   const jobId = localStorage.getItem("selectedJobId") || "";

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     expectedSalary: "",
//     experience: "",
//     noticePeriod: "",
//     jobId,
//     resume: null,
//     additionalDocument: null,
//   });

//   const resumeRef = useRef();
//   const additionalRef = useRef();

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (files) {
//       setFormData({ ...formData, [name]: files[0] });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const form = new FormData();

//       // Append files
//       form.append("resume", formData.resume);
//       if (formData.additionalDocument) {
//         form.append("additionalDocument", formData.additionalDocument);
//       }

//       // Append other fields
//       ["name", "email", "phone", "expectedSalary", "experience", "noticePeriod"].forEach(
//         (key) => form.append(key, formData[key])
//       );

//       // Correct key to match backend
//       form.append("jobId", formData.jobId);

//       // Optional: include token if your backend requires authentication
//       const token = localStorage.getItem("token"); // replace with actual token key
//       const res = await axios.post(
//         "http://localhost:5000/v1/applications",
//         form,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//             ...(token && { Authorization: `Bearer ${token}` }),
//           },
//         }
//       );

//       if (res.status === 201) {
//         alert("Application submitted successfully!");
//         setFormData({
//           name: "",
//           email: "",
//           phone: "",
//           expectedSalary: "",
//           experience: "",
//           noticePeriod: "",
//           jobId,
//           resume: null,
//           additionalDocument: null,
//         });
//         resumeRef.current.value = "";
//         additionalRef.current.value = "";
//       }
//     } catch (error) {
//       console.error(error);
//       alert(error.response?.data?.message || "Failed to submit application.");
//     }
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen flex items-center justify-center">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white shadow-lg rounded-lg p-6 w-full max-w-[60vw]"
//       >
//         <h2 className="text-2xl font-bold mb-6 text-center">Apply for a Job</h2>

//         {["name", "email", "phone", "expectedSalary", "experience", "noticePeriod"].map((field) => (
//           <div className="mb-4" key={field}>
//             <label className="block mb-2">
//               {field.charAt(0).toUpperCase() + field.slice(1)}
//             </label>
//             <input
//               type={
//                 field === "email"
//                   ? "email"
//                   : field.includes("experience") || field.includes("notice")
//                   ? "number"
//                   : "text"
//               }
//               name={field}
//               className="w-full p-2 border rounded-lg"
//               value={formData[field]}
//               onChange={handleChange}
//               required
//             />
//           </div>
//         ))}

//         {/* Job ID (disabled) */}
//         <div className="mb-4">
//           <label className="block mb-2">Job ID</label>
//           <input
//             type="text"
//             name="jobId"
//             className="w-full p-2 border rounded-lg"
//             value={formData.jobId}
//             disabled
//           />
//         </div>

//         {/* Resume */}
//         <div className="mb-4">
//           <label className="block mb-2">Upload Resume (PDF)</label>
//           <input
//             type="file"
//             name="resume"
//             accept=".pdf"
//             className="w-full p-2 border rounded-lg"
//             onChange={handleChange}
//             ref={resumeRef}
//             required
//           />
//         </div>

//         {/* Additional Document */}
//         <div className="mb-4">
//           <label className="block mb-2">Additional Document (Optional)</label>
//           <input
//             type="file"
//             name="additionalDocument"
//             accept=".pdf"
//             className="w-full p-2 border rounded-lg"
//             onChange={handleChange}
//             ref={additionalRef}
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-[40%] bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg font-semibold"
//         >
//           Submit Application
//         </button>
//       </form>
//     </div>
//   );
// }

import React, { useState, useRef } from "react";
// import axios from "axios";
import api from "../api";

export default function ApplyForm() {
  const jobId = localStorage.getItem("selectedJobId") || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    expectedSalary: "",
    experience: "",
    noticePeriod: "",
    jobId,
    resume: null,
    additionalDocument: null,
  });

  const resumeRef = useRef();
  const additionalRef = useRef();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validateForm = () => {
    const { name, email, expectedSalary, experience, noticePeriod, resume } =
      formData;

    if (
      !name ||
      !email ||
      !expectedSalary ||
      !experience ||
      !noticePeriod ||
      !resume
    ) {
      alert("Please fill all required fields and upload your resume.");
      return false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }

    // Validate numeric fields
    if (isNaN(experience) || experience < 0 || experience > 50) {
      alert("Experience must be a number between 0 and 50.");
      return false;
    }

    if (isNaN(noticePeriod) || noticePeriod < 0 || noticePeriod > 30) {
      alert("Notice period must be between 0 and 30 days.");
      return false;
    }

    if (isNaN(expectedSalary) || expectedSalary <= 0) {
      alert("Expected salary must be a positive number.");
      return false;
    }

    // Validate resume file type
    if (resume && resume.type !== "application/pdf") {
      alert("Resume must be a PDF file.");
      return false;
    }

    // Validate additional document type
    if (
      formData.additionalDocument &&
      formData.additionalDocument.type !== "application/pdf"
    ) {
      alert("Additional document must be a PDF file.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const form = new FormData();

      // Append files
      form.append("resume", formData.resume);
      if (formData.additionalDocument) {
        form.append("additionalDocument", formData.additionalDocument);
      }

      // Append other fields
      [
        "name",
        "email",
        "phone",
        "expectedSalary",
        "experience",
        "noticePeriod",
      ].forEach((key) => form.append(key, formData[key]));

      form.append("jobId", formData.jobId);

      const token = localStorage.getItem("token"); // optional auth
      const res = api.post("/v1/applications", form, {
        headers: {
          "Content-Type": "multipart/form-data",
          ...(token && { Authorization: `Bearer ${token}` }),
        },
      });

      if (res.status === 201) {
        alert("Application submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          expectedSalary: "",
          experience: "",
          noticePeriod: "",
          jobId,
          resume: null,
          additionalDocument: null,
        });
        resumeRef.current.value = "";
        additionalRef.current.value = "";
      }
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Failed to submit application.");
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-6 w-full max-w-[60vw]"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Apply for a Job</h2>
        <div className="mb-4">
          <label className="block mb-2">Job ID</label>
          <input
            type="text"
            name="jobId"
            className="w-full p-2  rounded-lg bg-amber-50"
            value={formData.jobId}
            disabled
          />
        </div>

        {[
          "name",
          "email",
          "phone",
          "expectedSalary",
          "experience",
          "noticePeriod",
        ].map((field) => (
          <div className="mb-4" key={field}>
            <label className="block mb-2">
              {field.charAt(0).toUpperCase() + field.slice(1)}
            </label>
            <input
              type={
                field === "email"
                  ? "email"
                  : field.includes("experience") ||
                    field.includes("notice") ||
                    field.includes("salary")
                  ? "number"
                  : "text"
              }
              name={field}
              className="w-full p-2 border rounded-lg"
              value={formData[field]}
              onChange={handleChange}
              required
            />
          </div>
        ))}

        <div className="mb-4">
          <label className="block mb-2">Upload Resume (PDF)</label>
          <input
            type="file"
            name="resume"
            accept=".pdf"
            className="w-full p-2 border rounded-lg"
            onChange={handleChange}
            ref={resumeRef}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Additional Document (Optional)</label>
          <input
            type="file"
            name="additionalDocument"
            accept=".pdf"
            className="w-full p-2 border rounded-lg"
            onChange={handleChange}
            ref={additionalRef}
          />
        </div>

        <button
          type="submit"
          className="w-[40%] bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg font-semibold"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
}
