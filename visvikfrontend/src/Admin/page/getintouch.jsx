// import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import api from "../../api";

export default function Getintouch() {
  const [data, setdata] = useState([]);
  const [selected, setSelected] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem("token");
    //change huee
    api
      .get("/v1/get-in-touch", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log("API Response =>", res.data);
        setdata(res.data.data);
      })
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await api.delete(`/v1/get-in-touch/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setdata(data.filter((u) => u._id !== id));
    } catch (err) {
      console.log("Error deleting user:", err);
    }
  };

  const handleView = (data) => {
    setSelected(data);
    console.log(selected);
  };

  return (
    <div className="md:p-6 p-2 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Admin Panel - Enquiries</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2">First Name</th>
              <th className="border border-gray-300 p-2">Last Name</th>
              <th className="border border-gray-300 p-2">Email</th>
              <th className="border border-gray-300 p-2">Mobile</th>
              <th className="border border-gray-300 p-2">Company</th>
              <th className="border border-gray-300 p-2">Country</th>
              <th className="border border-gray-300 p-2">Category</th>
              <th className="border border-gray-300 p-2">Budget</th>
              <th className="border border-gray-300 p-2">Tell Us</th>
              <th className="border border-gray-300 p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan="10" className="text-center p-4">
                  No Data Found
                </td>
              </tr>
            ) : (
              data.map((item) => (
                <tr key={item.id}>
                  <td className="border border-gray-300 p-2">
                    {item.firstName}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {item.lastName}
                  </td>
                  <td className="border border-gray-300 p-2">{item.email}</td>
                  <td className="border border-gray-300 p-2">
                    {item.mobileNumber}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {item.companyName}
                  </td>
                  <td className="border border-gray-300 p-2">{item.country}</td>
                  <td className="border border-gray-300 p-2">
                    {item.category}
                  </td>
                  <td className="border border-gray-300 p-2">{item.budget}</td>
                  <td className="border border-gray-300 p-2">{item.message}</td>
                  <td className="p-2 flex justify-center gap-2 text-center">
                    <button
                      onClick={() => handleView(item)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <FaEye className="w-5 h-5" />
                    </button>
                    {/* <button className="text-green-600">
                      <FaEdit />
                    </button> */}
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* View Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg font-bold mb-2">User Details</h3>
            <p>
              <b>First Name:</b> {selected.firstName}
            </p>
            <p>
              <b>Last Name:</b> {selected.lastName}
            </p>
            <p>
              <b>Email:</b> {selected.email}
            </p>
            <p>
              <b>Mobile:</b> {selected.mobileNumber}
            </p>
            <p>
              <b>CompanyName:</b> {selected.companyName}
            </p>
            <p>
              <b>Country:</b> {selected.country}
            </p>
            <p>
              <b>category:</b> {selected.category}
            </p>
            <p>
              <b>Budget:</b> {selected.budget}
            </p>
            <p>
              <b>Message:</b> {selected.message}
            </p>
            <button
              onClick={() => setSelected(null)}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
