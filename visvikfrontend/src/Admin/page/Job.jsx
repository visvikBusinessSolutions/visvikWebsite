import React, { useEffect, useState } from "react";
import axios from "axios";

export function JobPostForm({ onAdd, onEdit, initialData = {}, onClose }) {
  const [formData, setFormData] = useState({
    id: initialData.jobId|| null,
    title: initialData.title || "",
    description: initialData.description || "",
    salaryRange: initialData.salaryRange || "",
    requirements: initialData.requirements || [],
  });

  const [requirementInput, setRequirementInput] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddRequirement = () => {
    if (requirementInput.trim()) {
      setFormData((prev) => ({
        ...prev,
        requirements: [...prev.requirements, requirementInput.trim()],
      }));
      setRequirementInput("");
    }
  };

  const handleRemoveRequirement = (index) => {
    setFormData((prev) => ({
      ...prev,
      requirements: prev.requirements.filter((_, i) => i !== index),
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (formData.id) {
      await onEdit(formData.id, formData);
    } else {
      await onAdd(formData);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {formData.id ? "Edit Job Post" : "Add Job Post"}
        </h2>
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            placeholder="Job Title"
            value={formData.title}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
          <textarea
            name="description"
            placeholder="Job Description"
            value={formData.description}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="number"
            name="salaryRange"
            placeholder="Salary Range"
            value={formData.salaryRange}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
          <div>
            <input
              type="text"
              placeholder="Add requirement"
              value={requirementInput}
              onChange={(e) => setRequirementInput(e.target.value)}
              className="w-3/4 p-2 border rounded"
            />
            <button
              type="button"
              onClick={handleAddRequirement}
              className="ml-2 bg-green-500 text-white px-3 py-1 rounded"
            >
              Add
            </button>
            <ul className="mt-2">
              {formData.requirements.map((req, i) => (
                <li
                  key={i}
                  className="flex justify-between bg-gray-100 p-1 rounded mt-1"
                >
                  {req}
                  <button
                    type="button"
                    onClick={() => handleRemoveRequirement(i)}
                    className="text-red-500"
                  >
                    ✕
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-indigo-600 text-white px-4 py-2 rounded"
            >
              {formData.id ? "Update" : "Add"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function JobPostPage() {
  const [jobPosts, setJobPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isViewOpen, setIsViewOpen] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [viewingPost, setViewingPost] = useState(null);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const res = await axios.get("http://localhost:5000/v1/jobs");
      setJobPosts(res.data.data || []);
    } catch (err) {
      console.error("Error fetching jobs", err);
    }
  };

  const handleAddJob = async (data) => {
    const token = localStorage.getItem("token");
    try {
      await axios.post("http://localhost:5000/v1/jobs", data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchJobs();
    } catch (err) {
      console.error("Error adding job", err.response?.data || err.message);
    }
  };

  const handleEditJob = async (id, data) => {
    const token = localStorage.getItem("token");
    try {
      await axios.put(`http://localhost:5000/v1/jobs/${id}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchJobs();
    } catch (err) {
      console.error("Error editing job", err.response?.data || err.message);
    }
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");
    if (!window.confirm("Delete this job post?")) return;
    try {
      await axios.delete(`http://localhost:5000/v1/jobs/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchJobs();
    } catch (err) {
      console.error("Error deleting job", err);
    }
  };

  const filteredPosts = jobPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto mt-10 p-6">
      <h1 className="text-3xl font-bold mb-6">Job Post Management</h1>
      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-1/3 border p-2 rounded"
        />
        <button
          onClick={() => setIsFormOpen(true)}
          className="bg-indigo-600 text-white px-4 py-2 rounded"
        >
          Add Job Post
        </button>
      </div>

      <table className="min-w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">Title</th>
            <th className="p-2 border">Description</th>
            <th className="p-2 border">Salary</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredPosts.map((post) => (
            <tr key={post._id}>
              <td className="p-2 border">{post.title}</td>
              <td className="p-2 border">{post.description}</td>
              <td className="p-2 border">{post.salaryRange}</td>
              <td className="p-2 border space-x-2">
                <button
                  onClick={() => {
                    setViewingPost(post);
                    setIsViewOpen(true);
                  }}
                  className="text-blue-600"
                >
                  View
                </button>
                <button
                  onClick={() => {
                    setEditingPost(post);
                    setIsFormOpen(true);
                  }}
                  className="text-green-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(post.jobId)}
                  className="text-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isFormOpen && (
        <JobPostForm
          onAdd={handleAddJob}
          onEdit={handleEditJob}
          initialData={editingPost || {}}
          onClose={() => {
            setIsFormOpen(false);
            setEditingPost(null);
          }}
        />
      )}

      {isViewOpen && viewingPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded">
            <h2 className="text-2xl">{viewingPost.title}</h2>
            <p>{viewingPost.description}</p>
            <p className="mt-2 font-bold">Salary: {viewingPost.salaryRange}</p>
            <button
              onClick={() => setIsViewOpen(false)}
              className="mt-4 bg-gray-300 px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default JobPostPage;
