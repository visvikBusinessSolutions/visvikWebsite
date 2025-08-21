import { Routes, Route } from "react-router-dom";
import SideBar from "./layout/SideBar";
import Dashboard from "./page/DashBoard";
import Job from "./page/Job";
import TeamPage from "./page/Team";
import ApplicationManagement from "./page/Application";
import Settings from "./page/Settings";
import Quary from "./page/quary";
import Getintouch from "./page/getintouch";
import Welcome from "./layout/TopBar";

export default function Admin() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <SideBar />
      <div className="md:flex-1 md:p-2 p-2">
        <Welcome />
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
