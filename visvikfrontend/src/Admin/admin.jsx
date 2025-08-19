import { Routes, Route } from "react-router-dom";
import SideBar from "./layout/SideBar";
import Dashboard from "./page/DashBoard";
import Job from "./page/Job";
import TeamPage from "./page/Team";
import ApplicationManagement from "./page/Application";
import Settings from "./page/Settings";
import Quary from "./page/quary";
import Getintouch from "./page/getintouch";

export default function Admin() {
  return (
    <div className="flex min-h-screen">
      <SideBar />
      <div className="flex-1 md:p-6 p-2">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="jobs" element={<Job />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="quary" element={<Quary />} />
          <Route path="getintouch" element={<Getintouch />} />
          <Route path="applications" element={<ApplicationManagement />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}
