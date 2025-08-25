// import React, { useState } from "react";
// import api from "../../api"; // ✅ using axios instance

// function TeamMemberForm({ onSubmit, initialData = {}, onClose }) {
//   const [formData, setFormData] = useState({
//     id: initialData._id || null,
//     name: initialData.name || "",
//     designation: initialData.designation || "",
//     department: initialData.department || "",
//     image: null,
//   });

//   const [previewImage, setPreviewImage] = useState(initialData.image || null);

//   // Handle input text/select fields
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   // Handle image upload
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setFormData((prev) => ({ ...prev, image: file }));
//       const reader = new FileReader();
//       reader.onloadend = () => setPreviewImage(reader.result);
//       reader.readAsDataURL(file);
//     }
//   };

//   // Submit form
//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     const token = localStorage.getItem("token");

//     const fd = new FormData();
//     fd.append("name", formData.name);
//     fd.append("designation", formData.designation);
//     fd.append("department", formData.department);
//     if (formData.image) fd.append("image", formData.image);

//     // 🔍 Debugging - log FormData contents
//     for (let [key, value] of fd.entries()) {
//       console.log(`${key}:`, value);
//     }

//     try {
//       if (formData.id) {
//         // ✅ Update team member
//         await api.put(`/v1/team/${formData.id}`, fd, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         alert("✅ Team member updated successfully!");
//       } else {
//         // ✅ Create team member
//         await api.post("/v1/team", fd, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         alert("✅ Team member added successfully!");
//       }

//       onSubmit();
//       onClose();
//     } catch (err) {
//       console.error("❌ Failed to save team member:", err.response || err);
//       alert(err.response?.data?.message || "Failed to save team member. Please try again.");
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full">
//         <h2 className="text-2xl font-bold mb-6 text-center">
//           {formData.id ? "Edit Team Member" : "Add Team Member"}
//         </h2>

//         <form onSubmit={handleFormSubmit} className="space-y-4">
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleInputChange}
//             required
//             placeholder="Name"
//             className="w-full border p-2 rounded"
//           />

//           <input
//             type="text"
//             name="designation"
//             value={formData.designation}
//             onChange={handleInputChange}
//             required
//             placeholder="Designation"
//             className="w-full border p-2 rounded"
//           />

//           <select
//             name="department"
//             value={formData.department}
//             onChange={handleInputChange}
//             required
//             className="w-full border p-2 rounded"
//           >
//             <option value="">Select Department</option>
//             <option value="founder">Founder</option>
//             <option value="development">Development</option>
//             <option value="bde">Business Development</option>
//           </select>

//           <input type="file" accept="image/*" onChange={handleImageChange} />

//           {previewImage && (
//             <img
//               src={previewImage}
//               alt="Preview"
//               className="mt-2 w-32 h-32 object-cover rounded-full mx-auto"
//             />
//           )}

//           <div className="flex justify-end space-x-2">
//             <button
//               type="button"
//               onClick={onClose}
//               className="py-2 px-4 bg-gray-300 rounded"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="py-2 px-4 bg-indigo-600 text-white rounded"
//             >
//               {formData.id ? "Update" : "Add"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default TeamMemberForm;

//new one that

import React, { useEffect, useState } from "react";
// import axios from "axios";
import api from "../../api";

const API_URL = "/v1/team";

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
      await api.put(`${API_URL}/${formData.id}`, fd, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
    } else {
      await api.post(API_URL, fd, {
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
    const res = await api.get(API_URL, {
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
      await api.delete(`${API_URL}/${id}`, {
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
    <div className="max-w-6xl mx-auto mt-10 p-6">
      <h1 className="text-3xl font-bold mb-6">Team Management</h1>
      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 rounded w-1/3"
        />
        <button
          onClick={() => {
            setEditingMember(null);
            setIsFormOpen(true);
          }}
          className="bg-indigo-600 text-white px-4 py-2 rounded"
        >
          Add Member
        </button>
      </div>

      <table className="min-w-full bg-white border">
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
            <tr key={m._id} className="border-t">
              <td className="p-2">
                {m.image && (
                  <img
                    src={m.image}
                    alt={m.name}
                    className="w-10 h-10 object-cover rounded-full"
                  />
                )}
              </td>
              <td className="p-2">{m.name}</td>
              <td className="p-2">{m.designation}</td>
              <td className="p-2 capitalize">{m.department}</td>
              <td className="p-2 flex space-x-2">
                <button
                  onClick={() => {
                    setViewingMember(m);
                    setIsViewOpen(true);
                  }}
                  className="text-blue-600"
                >
                  View
                </button>
                <button
                  onClick={() => {
                    setEditingMember(m);
                    setIsFormOpen(true);
                  }}
                  className="text-green-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(m._id)}
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
