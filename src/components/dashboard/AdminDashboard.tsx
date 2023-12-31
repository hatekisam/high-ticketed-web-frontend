import React from "react";

const AdminDashboard = () => {
  return (
    <div className="my-5">
      <div className="flex flex-row gap-5 items-center">
        <div className="w-[20%]  grid grid-rows-3 gap-3">
          <div className="bg-[#191A1D] p-3 rounded-md">
            <p>REGULAR</p>
            <p className="text-white font-bold text-xl">412.1 Hours</p>
            <p className="text-xs">
              <span className="text-green-500">7.1%</span> up from last Week
            </p>
          </div>
          <div className="bg-[#191A1D] p-3 rounded-md">
            <p>REGULAR</p>
            <p className="text-white font-bold text-xl">412.1 Hours</p>
            <p className="text-xs">
              <span className="text-green-500">7.1%</span> up from last Week
            </p>
          </div>
          <div className="bg-[#191A1D] p-3 rounded-md">
            <p>REGULAR</p>
            <p className="text-white font-bold text-xl">412.1 Hours</p>
            <p className="text-xs">
              <span className="text-green-500">7.1%</span> up from last Week
            </p>
          </div>
        </div>
        <div className="w-[40%] h-[100%] bg-[#191A1D] rounded-md">
          <p>fasdfasfsadfasd</p>
        </div>
        <div className="w-[40%] h-[100%] bg-[#191A1D] rounded-md">
          <p>Task Completion</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
