import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/v1/team";

function TeamMemberForm({ onSubmit, initialData = {}, onClose }) {
  const [formData, setFormData] = useState({
    id: initialData._id || null,
    name: initialData.name || "",
    designation: initialData.designation || "",
    department: initialData.department || "",
    image: null,
  });
  const [previewImage, setPreviewImage] = useState(initialData.image || null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, image: file }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    const fd = new FormData();
    fd.append("name", formData.name);
    fd.append("designation", formData.designation);
    fd.append("department", formData.department);
    if (formData.image) fd.append("image", formData.image);

    if (formData.id) {
      await axios.put(`${API_URL}/${formData.id}`, fd, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
    } else {
      await axios.post(API_URL, fd, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      alert("✅ Team member added successfully!");
    }

    onSubmit();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {formData.id ? "Edit Team Member" : "Add Team Member"}
        </h2>
        <form onSubmit={handleFormSubmit} className="space-y-4">
          {/* Name */}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            placeholder="Name"
            className="w-full border p-2 rounded"
          />

          {/* Designation */}
          <input
            type="text"
            name="designation"
            value={formData.designation}
            onChange={handleInputChange}
            required
            placeholder="Designation"
            className="w-full border p-2 rounded"
          />

          {/* Department */}
          <select
            name="department"
            value={formData.department}
            onChange={handleInputChange}
            required
            className="w-full border p-2 rounded"
          >
            <option value="">Select Department</option>
            <option value="founder">Founder</option>
            <option value="developer">Developer</option>
            <option value="business">Business</option>
          </select>

          {/* Image */}
          <input type="file" accept="image/*" onChange={handleImageChange} />
          {previewImage && (
            <img
              src={previewImage}
              alt="Preview"
              className="mt-2 w-32 h-32 object-cover rounded-full mx-auto"
            />
          )}

          {/* Buttons */}
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="py-2 px-4 bg-gray-300 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="py-2 px-4 bg-indigo-600 text-white rounded"
            >
              {formData.id ? "Update" : "Add"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function ViewModal({ member, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">{member.name}</h2>
        <p>
          <strong>Designation:</strong> {member.designation}
        </p>
        <p>
          <strong>Department:</strong> {member.department}
        </p>
        {member.image && (
          <img
            src={member.image}
            alt={member.name}
            className="w-32 h-32 object-cover rounded-full mx-auto mt-4"
          />
        )}
        <div className="flex justify-end mt-4">
          <button onClick={onClose} className="py-2 px-4 bg-gray-300 rounded">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default function TeamPage() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isViewOpen, setIsViewOpen] = useState(false);
  const [editingMember, setEditingMember] = useState(null);
  const [viewingMember, setViewingMember] = useState(null);

  const fetchMembers = async () => {
    // const token = localStorage.getItem("token");
    const res = await axios.get(API_URL, {
      // headers: {
      //   Authorization: `Bearer ${token}`,
      // },
    });
    setTeamMembers(res.data.data);
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");
    if (window.confirm("Delete this member?")) {
      await axios.delete(`${API_URL}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchMembers();
    }
  };

  const filteredMembers = teamMembers.filter(
    (m) =>
      m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto md:mt-10 mt-4 md:p-6 p-3">
      <h1 className="md:text-3xl text-2xl font-bold md:mb-6 mb-2">
        Team Management
      </h1>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 p-2 w-full md:w-1/2 rounded"
        />
        <button
          onClick={() => {
            setEditingMember(null);
            setIsFormOpen(true);
          }}
          className="bg-indigo-600 text-white px-4 py-2 rounded w-full md:w-auto"
        >
          Add Member
        </button>
      </div>

      {/* ✅ Table Wrapper for Responsiveness */}
      <div className="overflow-x-auto">
        <table className="min-w-[700px] w-full bg-white border  border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2">Image</th>
              <th className="p-2">Name</th>
              <th className="p-2">Designation</th>
              <th className="p-2">Department</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredMembers.map((m) => (
              <tr key={m._id} className="border  border-gray-300 text-center">
                <td className="p-2">
                  {m.image && (
                    <img
                      src={m.image}
                      alt={m.name}
                      className="w-10 h-10 object-cover rounded-full"
                    />
                  )}
                </td>
                <td className="p-2 border border-gray-300">{m.name}</td>
                <td className="p-2 border border-gray-300">{m.designation}</td>
                <td className="p-2 capitalize border border-gray-300">
                  {m.department}
                </td>
                <td className="px-4 py-2 flex justify-center gap-2">
                  <button
                    onClick={() => {
                      setViewingMember(m);
                      setIsViewOpen(true);
                    }}
                    className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
                  >
                    View
                  </button>
                  <button
                    onClick={() => {
                      setEditingMember(m);
                      setIsFormOpen(true);
                    }}
                    className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(m._id)}
                    className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isFormOpen && (
        <TeamMemberForm
          onSubmit={fetchMembers}
          initialData={editingMember || {}}
          onClose={() => setIsFormOpen(false)}
        />
      )}
      {isViewOpen && (
        <ViewModal
          member={viewingMember}
          onClose={() => setIsViewOpen(false)}
        />
      )}
    </div>
  );
}
