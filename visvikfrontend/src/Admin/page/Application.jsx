import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ApplicationManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [applications, setApplications] = useState([]);
  const [selectedResume, setSelectedResume] = useState(null);
  const token = localStorage.getItem("token");

  // Fetch applications from backend
  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const res = await axios.get("http://localhost:5000/v1/applications/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // ✅ Access applications from res.data.data
        const mappedApps = (res.data.data || []).map((app) => ({
          id: app._id,
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

  const handleStatusChange = (id, newStatus) => {
    setApplications((prev) =>
      prev.map((app) => (app.id === id ? { ...app, status: newStatus } : app))
    );
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this application?")) {
      return;
    }

    try {
      await axios.delete(`http://localhost:5000/v1/applications/${id}`, {
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
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Application Management</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by name, email, role, or job ID..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 w-full mb-4 rounded"
      />

      {/* Table */}
      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">#</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Experience</th>
            <th className="border p-2">Job Role</th>
            <th className="border p-2">Job ID</th>
            <th className="border p-2">Resume</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Applied At</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredApplications.map((app, index) => (
            <tr key={app.id}>
              <td className="border p-2">{index + 1}</td>
              <td className="border p-2">{app.name}</td>
              <td className="border p-2">{app.email}</td>
              <td className="border p-2">{app.experience}</td>
              <td className="border p-2">{app.jobRole}</td>
              <td className="border p-2">{app.jobId}</td>
              <td className="border p-2">
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
              <td className="border p-2">
                <select
                  value={app.status}
                  onChange={(e) => handleStatusChange(app.id, e.target.value)}
                  className="p-1 rounded"
                >
                  <option>Pending</option>
                  <option>Accepted</option>
                  <option>Rejected</option>
                </select>
              </td>
              <td className="border p-2">{app.appliedAt}</td>
              <td className="p-2 flex gap-2">
                <button
                  onClick={() => alert(JSON.stringify(app, null, 2))}
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                >
                  View
                </button>
                <button
                  onClick={() => handleDelete(app._id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

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
    </div>
  );
}
