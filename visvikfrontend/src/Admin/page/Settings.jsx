import React, { useState } from "react";

export default function Settings() {
  const [profile, setProfile] = useState({
    name: "Admin User",
    email: "admin@example.com",
    phone: "+91 9876543210",
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
  });

  const handleProfileChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setPasswordData({ ...passwordData, [e.target.name]: e.target.value });
  };

  const handleNotificationsChange = (e) => {
    setNotifications({ ...notifications, [e.target.name]: e.target.checked });
  };

  const handleSaveProfile = () => {
    alert("Profile updated successfully!");
  };

  const handleChangePassword = () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert("New passwords do not match!");
      return;
    }
    alert("Password changed successfully!");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Settings</h1>

      {/* Profile Settings */}
      <div className="bg-white p-4 shadow rounded mb-6">
        <h2 className="text-lg font-medium mb-3">Profile Information</h2>
        <div className="space-y-3">
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleProfileChange}
            placeholder="Full Name"
            className="border p-2 rounded w-full"
          />
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleProfileChange}
            placeholder="Email Address"
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            name="phone"
            value={profile.phone}
            onChange={handleProfileChange}
            placeholder="Phone Number"
            className="border p-2 rounded w-full"
          />
        </div>
        <button
          onClick={handleSaveProfile}
          className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Save Profile
        </button>
      </div>

      {/* Password Change */}
      <div className="bg-white p-4 shadow rounded mb-6">
        <h2 className="text-lg font-medium mb-3">Change Password</h2>
        <div className="space-y-3">
          <input
            type="password"
            name="currentPassword"
            value={passwordData.currentPassword}
            onChange={handlePasswordChange}
            placeholder="Current Password"
            className="border p-2 rounded w-full"
          />
          <input
            type="password"
            name="newPassword"
            value={passwordData.newPassword}
            onChange={handlePasswordChange}
            placeholder="New Password"
            className="border p-2 rounded w-full"
          />
          <input
            type="password"
            name="confirmPassword"
            value={passwordData.confirmPassword}
            onChange={handlePasswordChange}
            placeholder="Confirm New Password"
            className="border p-2 rounded w-full"
          />
        </div>
        <button
          onClick={handleChangePassword}
          className="mt-3 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Change Password
        </button>
      </div>

      {/* Notifications */}
      <div className="bg-white p-4 shadow rounded">
        <h2 className="text-lg font-medium mb-3">Notification Preferences</h2>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="email"
              checked={notifications.email}
              onChange={handleNotificationsChange}
              className="mr-2"
            />
            Email Notifications
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="sms"
              checked={notifications.sms}
              onChange={handleNotificationsChange}
              className="mr-2"
            />
            SMS Notifications
          </label>
        </div>
      </div>
    </div>
  );
}
