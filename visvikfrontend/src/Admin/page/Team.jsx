import React, { useState } from "react";
import api from "../../api"; // ✅ use your api.js instance

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
      reader.onloadend = () => setPreviewImage(reader.result);
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

    try {
      if (formData.id) {
        // ✅ Update team member
        await api.put(`/v1/team/${formData.id}`, fd, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        });
      } else {
        // ✅ Create team member
        await api.post("/v1/team", fd, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        });
        alert("✅ Team member added successfully!");
      }

      onSubmit();
      onClose();
    } catch (err) {
      console.error("❌ Failed to save team member:", err);
      alert("Failed to save team member. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {formData.id ? "Edit Team Member" : "Add Team Member"}
        </h2>
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            placeholder="Name"
            className="w-full border p-2 rounded"
          />
          <input
            type="text"
            name="designation"
            value={formData.designation}
            onChange={handleInputChange}
            required
            placeholder="Designation"
            className="w-full border p-2 rounded"
          />
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
          <input type="file" accept="image/*" onChange={handleImageChange} />
          {previewImage && (
            <img
              src={previewImage}
              alt="Preview"
              className="mt-2 w-32 h-32 object-cover rounded-full mx-auto"
            />
          )}

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

export default TeamMemberForm;
