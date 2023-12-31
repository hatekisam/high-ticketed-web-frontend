import React from "react";
import Task from "./Task";
import Project from "./Project";
import Employee from "./Employees";

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
  const dummyProject = [
    {
      project: "Project 1",
      client: "Client A",
      createdAt: new Date(),
      status: "On Hold",
    },
    {
      project: "Project 2",
      client: "Client B",
      createdAt: new Date(),
      status: "Pending",
    },
    {
      project: "Project 3",
      client: "Client C",
      createdAt: new Date(),
      status: "In Progress",
    },
    {
      project: "Project 4",
      client: "Client D",
      createdAt: new Date(),
      status: "Finished",
    },
  ];
  const dummyEmployees = [
    {
      image: "/path/to/image1.jpg",
      name: "John Doe",
      status: "Developer",
      online: true,
    },
    {
      image: "/path/to/image2.jpg",
      name: "Jane Doe",
      status: "Designer",
      online: false,
    },
    {
      image: "/path/to/image3.jpg",
      name: "Alice Smith",
      status: "Manager",
      online: true,
    },
    {
      image: "/path/to/image4.jpg",
      name: "Bob Johnson",
      status: "Tester",
      online: false,
    },
  ];

  return (
    <div className="my-3">
      <div className="flex  gap-5 ">
        <div className="w-[20%]  grid grid-rows-3 gap-3">
          <div className="bg-[#191A1D] p-3 rounded-md">
            <p>Income</p>
            <p className="text-white font-bold text-xl">3000$</p>
            <p className="text-xs">
              <span className="text-green-500">7.1%</span> up from last Week
            </p>
          </div>
          <div className="bg-[#191A1D] p-3 rounded-md">
            <p>Projects</p>
            <p className="text-white font-bold text-xl">25</p>
            <p className="text-xs">
              <span className="text-green-500">7.1%</span> up from last Week
            </p>
          </div>
          <div className="bg-[#191A1D] p-3 rounded-md">
            <p>Employees</p>
            <p className="text-white font-bold text-xl">10</p>
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
          <p className="text-lg mb-2 text-white">Projects</p>
          {dummyProject.map((project, index) => {
            //@ts-ignore
            return <Project key={index} {...project} />;
          })}
        </div>
        <div className="w-[30%] h-[100%] bg-[#191A1D] rounded-md p-3">
          <p className="text-lg mb-2 text-white">Employees</p>
          {dummyEmployees.map((employee, index) => {
            return <Employee key={index} {...employee} />;
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
