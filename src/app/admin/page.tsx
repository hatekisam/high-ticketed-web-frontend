import AdminDashboard from "@/components/dashboard/AdminDashboard";
import React from "react";

const Admin = () => {
  const getGreeting = () => {
    const currentTime = new Date().getHours();
    let greeting = "";
    if (currentTime >= 5 && currentTime < 12) {
      greeting = "Good Morning ☀️";
    } else if (currentTime >= 12 && currentTime < 18) {
      greeting = "Good Afternoon 🌤️";
    } else {
      greeting = "Good Evening 🌙";
    }
    return greeting;
  };
  return (
    <div className="p-5">
      <p className="text-xl  mt-2 ">
        {getGreeting()} <span className="font-extrabold">Mugisha</span>
      </p>
      <AdminDashboard />
    </div>
  );
};

export default Admin;
