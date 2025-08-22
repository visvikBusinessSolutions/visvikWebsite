import React, { useState, useEffect } from "react";
// import axios from "axios";
import api from "../../api";

export default function ApplicationManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [applications, setApplications] = useState([]);
  const [selectedResume, setSelectedResume] = useState(null);
  const [mailform, setmailform] = useState(false);
  const token = localStorage.getItem("token");

  const [formData, setFormData] = useState({
    userEmail: "",
    subject: "",
    description: "",
    signature: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Fetch applications from backend
  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const res = api.get("/v1/applications/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const mappedApps = (res.data.data || []).map((app) => ({
          id: app._id?.toString() || app.id,
          name: app.name,
          email: app.email,
          experience:
            app.experience !== undefined && app.experience !== null
              ? `${app.experience} yrs`
              : "N/A",
          jobRole: app.job?.title || "N/A",
          jobId: app.jobId || "N/A",
          resume: app.resume || null,
          status: app.status || "Pending",
          appliedAt: app.createdAt
            ? new Date(app.createdAt).toLocaleDateString()
            : "N/A",
        }));

        localStorage.setItem("totalapplication", mappedApps.length);

        setApplications(mappedApps);
      } catch (error) {
        console.error("Failed to fetch applications:", error);
      }
    };

    fetchApplications();
  }, []);
  const handleStatusChange = async (id, newStatus) => {
    try {
      const res = api.patch(
        `/v1/applications/${id}/status`,
        { status: newStatus },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.data.success) {
        setApplications((prev) =>
          prev.map((app) =>
            app.id === id ? { ...app, status: newStatus } : app
          )
        );
      } else {
        alert(res.data.message || "Failed to update status");
      }
    } catch (error) {
      console.error("Error updating status:", error);
      alert("Something went wrong while updating status");
    }
  };
  const handlemail = async () => {
    try {
      api.post(
        "/v1/mail/send",
        formData, // formData object with email, subject, description
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Message Sent Successfully!");
      console.log(formData);
    } catch (error) {
      console.error("Error sending email:", error);
      alert("failed to send a data");
    }
  };
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this application?")) {
      return;
    }

    try {
      api.delete(`/v1/applications/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Remove the deleted app from the state
      setApplications((prev) => prev.filter((app) => app.id !== id));
    } catch (error) {
      console.error("Error deleting application:", error);
      alert("Failed to delete the application. Please try again.");
    }
  };

  const filteredApplications = applications.filter(
    (app) =>
      app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.jobRole.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.jobId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="md:p-4 p-2 min-h-screen">
      <h1 className="text-xl font-bold mb-4">Application Management</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by name, email, role, or job ID..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 w-full mb-4 rounded border-gray-300"
      />

      {/* Table wrapper for responsiveness */}
      <div className="overflow-x-auto">
        <table className=" border-collapse border min-w-[800px] border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2 border-gray-300">No.</th>
              <th className="border p-2 border-gray-300">Name</th>
              <th className="border p-2 border-gray-300">Email</th>
              <th className="border p-2 border-gray-300">Experience</th>
              <th className="border p-2 border-gray-300">Job Role</th>
              <th className="border p-2 border-gray-300">Job ID</th>
              <th className="border p-2 border-gray-300">Resume</th>
              <th className="border p-2 border-gray-300">Status</th>
              {/* <th className="border p-2 border-gray-300">Sending Mail</th> */}
              <th className="border p-2 border-gray-300">Applied At</th>
              <th className="border p-2 border-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredApplications.map((app, index) => (
              <tr key={app.id}>
                <td className="border p-2 border-gray-300">{index + 1}</td>
                <td className="border p-2 border-gray-300">{app.name}</td>
                <td className="border p-2 border-gray-300">{app.email}</td>
                <td className="border p-2 border-gray-300">{app.experience}</td>
                <td className="border p-2 border-gray-300">{app.jobRole}</td>
                <td className="border p-2 border-gray-300">{app.jobId}</td>
                <td className="border p-2 border-gray-300">
                  {app.resume ? (
                    <button
                      onClick={() => setSelectedResume(app.resume)}
                      className="text-blue-500 underline"
                    >
                      View
                    </button>
                  ) : (
                    "N/A"
                  )}
                </td>
                <td className="border p-2 border-gray-300">
                  <select
                    value={app.status}
                    onChange={(e) => {
                      handleStatusChange(app.id, e.target.value);
                    }}
                    className="p-1 rounded"
                  >
                    <option>Pending</option>
                    <option>Interview Scheduled</option>
                    <option>Rejected</option>
                    <option>Hired</option>
                    <option>Reviewed</option>
                  </select>
                </td>
                <td className="border p-2 border-gray-300">{app.appliedAt}</td>
                <td className="p-2 flex gap-2 ">
                  <button
                    onClick={() => setmailform(!mailform)}
                    className="bg-green-500 text-white px-2 py-1 rounded"
                  >
                    Send
                  </button>
                  <button
                    onClick={() => alert(JSON.stringify(app, null, 2))}
                    className="bg-blue-500 text-white px-2 py-1 rounded"
                  >
                    View
                  </button>
                  <button
                    onClick={() => handleDelete(app.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Resume Modal */}
      {selectedResume && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white p-4 rounded shadow-lg w-2/3 h-3/4 relative">
            <button
              onClick={() => setSelectedResume(null)}
              className="absolute top-2 right-2 text-red-500"
            >
              ✖
            </button>
            <iframe
              src={selectedResume}
              title="Resume Viewer"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      )}

      {mailform && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handlemail();
              }}
              className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
            >
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              {/* Email */}
              <input
                type="email"
                name="userEmail"
                placeholder="Your Email"
                value={formData.userEmail}
                onChange={handleChange}
                className="w-full p-2 border rounded mb-3"
                required
              />
              {/* Subject */}
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-2 border rounded mb-3"
                required
              />
              {/* Description */}
              <textarea
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
                className="w-full p-2 border rounded mb-3"
                rows="4"
                required
              ></textarea>
              <input
                type="text"
                name="signature"
                placeholder="signature"
                value={formData.signature}
                onChange={handleChange}
                className="w-full p-2 border rounded mb-3"
                required
              />

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
