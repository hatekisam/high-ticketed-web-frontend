import React from "react";
import Task from "./Task";

const AdminDashboard = () => {
  const dummyTasks = [
    {
      image: "/path/to/image1.jpg",
      project: "Project 1",
      currentTask: "Task 1",
      completion: 75,
    },
    {
      image: "/path/to/image2.jpg",
      project: "Project 2",
      currentTask: "Task 2",
      completion: 50,
    },
    {
      image: "/path/to/image3.jpg",
      project: "Project 3",
      currentTask: "Task 3",
      completion: 20,
    },
    {
      image: "/path/to/image4.jpg",
      project: "Project 4",
      currentTask: "Task 4",
      completion: 90,
    },
    {
      image: "/path/to/image3.jpg",
      project: "Project 3",
      currentTask: "Task 3",
      completion: 20,
    },
  ];

  return (
    <div className="my-3">
      <div className="flex  gap-5 ">
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
        <div className="w-[40%] h-[100%] bg-[#191A1D] rounded-md p-3">
          <p className="text-lg mb-2 text-white">Task Completion</p>
          {dummyTasks.map((task, index) => {
            return <Task key={index} {...task} />;
          })}
        </div>
      </div>
      <div className="flex  gap-5 mt-3 ">
        <div className="w-[35%] h-[100%] bg-[#191A1D] rounded-md p-3">
          <p className="text-lg mb-2 text-white">Task Completion</p>
          {dummyTasks.map((task, index) => {
            return <Task key={index} {...task} />;
          })}
        </div>
        <div className="w-[30%] h-[100%] bg-[#191A1D] rounded-md p-3">
          <p className="text-lg mb-2 text-white">Task Completion</p>
          {dummyTasks.map((task, index) => {
            return <Task key={index} {...task} />;
          })}
        </div>
        <div className="w-[35%] h-[100%] bg-[#191A1D] rounded-md p-3">
          <p className="text-lg mb-2 text-white">Task Completion</p>
          {dummyTasks.map((task, index) => {
            return <Task key={index} {...task} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
