import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale
);

export default function Dashboard() {
  const token = localStorage.getItem("token");

  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    accepted: 0,
    rejected: 0,
  });
  //fetch application from backend
  const fetchApplicationStats = async () => {
    try {
      const res = await axios.get("http://localhost:5000/v1/applications/", {
        headers: { Authorization: `Bearer ${token}` },
      });

      const applications = res.data.data || [];

      // Count by status
      const pendingCount = applications.filter(
        (app) => app.status === "Pending"
      ).length;
      const acceptedCount = applications.filter(
        (app) => app.status === "Hired"
      ).length;
      const rejectedCount = applications.filter(
        (app) => app.status === "Rejected"
      ).length;

      setStats({
        total: applications.length,
        pending: pendingCount,
        accepted: acceptedCount,
        rejected: rejectedCount,
      });

      localStorage.setItem("totalapplication", applications.length);
    } catch (error) {
      console.error("Error fetching stats:", error);
    }
  };

  useEffect(() => {
    fetchApplicationStats();
  }, []);

  // Chart Data
  const barData = {
    labels: ["Pending", "Accepted", "Rejected"],
    datasets: [
      {
        label: "Applications",
        data: [stats.pending, stats.accepted, stats.rejected],
        backgroundColor: ["#facc15", "#22c55e", "#ef4444"],
      },
    ],
  };

  const pieData = {
    labels: ["Pending", "Accepted", "Rejected"],
    datasets: [
      {
        data: [stats.pending, stats.accepted, stats.rejected],
        backgroundColor: ["#facc15", "#22c55e", "#ef4444"],
      },
    ],
  };

  return (
    <>
      <div className="md:p-6 p-3">
        <h1 className="text-2xl font-semibold md:mb-6 mb-3">Dashboard</h1>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 mb-6">
          <div className="bg-blue-500 text-white p-4 rounded-lg shadow-lg">
            <h2 className="text-lg">Total Applications</h2>
            <p
              className="text-3xl font-bold cursor-pointer"
              onClick={fetchApplicationStats}
            >
              {stats.total}
            </p>
          </div>
          <div className="bg-yellow-500 text-white p-4 rounded-lg shadow-lg">
            <h2 className="md:text-lg">Pending</h2>
            <p className="text-3xl font-bold">{stats.pending}</p>
          </div>
          <div className="bg-green-500 text-white p-4 rounded-lg shadow-lg">
            <h2 className="md:text-lg">Accepted</h2>
            <p className="text-3xl font-bold">{stats.accepted}</p>
          </div>
          <div className="bg-red-500 text-white p-4 rounded-lg shadow-lg">
            <h2 className="md:text-lg">Rejected</h2>
            <p className="text-3xl font-bold">{stats.rejected}</p>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="md:text-lg font-semibold mb-4">
              Applications Overview
            </h2>
            <Bar data={barData} />
          </div>

          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="md:text-lg font-semibold mb-4">
              Application Status Distribution
            </h2>
            <Pie data={pieData} />
          </div>
        </div>
      </div>
    </>
  );
}
