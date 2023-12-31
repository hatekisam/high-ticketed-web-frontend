"use client"
import { DataTable } from "@/components/core/table/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";

const Employees = () => {
  const employees = [
    {
      id: 1,
      name: "John Doe",
      role: "Software Engineer",
      department: "Development",
      salary: 80000,
      experience: 3,
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "UI/UX Designer",
      department: "Design",
      salary: 75000,
      experience: 4,
    },
    {
      id: 3,
      name: "Mike Johnson",
      role: "Project Manager",
      department: "Management",
      salary: 90000,
      experience: 5,
    },
    {
      id: 4,
      name: "Emily Davis",
      role: "Quality Assurance Engineer",
      department: "Quality Assurance",
      salary: 70000,
      experience: 2,
    },
    {
      id: 5,
      name: "Chris Wilson",
      role: "Frontend Developer",
      department: "Development",
      salary: 85000,
      experience: 4,
    },
    {
      id: 6,
      name: "Amanda Turner",
      role: "Backend Developer",
      department: "Development",
      salary: 82000,
      experience: 3,
    },
    {
      id: 7,
      name: "Mark Miller",
      role: "Database Administrator",
      department: "IT",
      salary: 88000,
      experience: 4,
    },
    {
      id: 8,
      name: "Rachel White",
      role: "System Analyst",
      department: "IT",
      salary: 87000,
      experience: 5,
    },
    {
      id: 9,
      name: "Daniel Lee",
      role: "Mobile App Developer",
      department: "Development",
      salary: 83000,
      experience: 3,
    },
    {
      id: 10,
      name: "Olivia Carter",
      role: "Network Engineer",
      department: "IT",
      salary: 86000,
      experience: 4,
    },
    {
      id: 11,
      name: "Justin Brown",
      role: "DevOps Engineer",
      department: "Development",
      salary: 92000,
      experience: 5,
    },
    {
      id: 12,
      name: "Hannah Taylor",
      role: "UI/UX Designer",
      department: "Design",
      salary: 78000,
      experience: 3,
    },
    {
      id: 13,
      name: "Alex Turner",
      role: "Frontend Developer",
      department: "Development",
      salary: 80000,
      experience: 4,
    },
    {
      id: 14,
      name: "Sophie Evans",
      role: "Software Engineer",
      department: "Development",
      salary: 86000,
      experience: 5,
    },
    {
      id: 15,
      name: "Ryan Moore",
      role: "Project Manager",
      department: "Management",
      salary: 92000,
      experience: 6,
    },
    {
      id: 16,
      name: "Isabel Garcia",
      role: "Database Administrator",
      department: "IT",
      salary: 89000,
      experience: 4,
    },
    {
      id: 17,
      name: "Ethan Clark",
      role: "Backend Developer",
      department: "Development",
      salary: 85000,
      experience: 3,
    },
    {
      id: 18,
      name: "Madison Hall",
      role: "Quality Assurance Engineer",
      department: "Quality Assurance",
      salary: 72000,
      experience: 2,
    },
    {
      id: 19,
      name: "Liam Anderson",
      role: "Mobile App Developer",
      department: "Development",
      salary: 80000,
      experience: 3,
    },
    {
      id: 20,
      name: "Ella Martinez",
      role: "System Analyst",
      department: "IT",
      salary: 90000,
      experience: 5,
    },
  ];
  const columns: ColumnDef<any>[] = [
    {
      accessorKey: "id",
      header: "ID",
      cell: ({ row }) => <div>{row.getValue("id")}</div>,
    },
    {
      accessorKey: "name",
      header: "Name",
      cell: ({ row }) => <div>{row.getValue("name")}</div>,
    },
    {
      accessorKey: "role",
      header: "Role",
      cell: ({ row }) => <div>{row.getValue("role")}</div>,
    },
    {
      accessorKey: "department",
      header: "Department",
      cell: ({ row }) => <div>{row.getValue("department")}</div>,
    },
    {
      accessorKey: "salary",
      header: "Salary",
      cell: ({ row }) => <div>{row.getValue("salary")}</div>,
    },
    {
      accessorKey: "experience",
      header: "Experience",
      cell: ({ row }) => <div>{row.getValue("experience")}</div>,
    },
    {
      accessorKey: "actions",
      header: "Actions",
      cell: ({ row }) => (
        <div className="flex items-center  justify-center">
          <button className="px-4 py-1 rounded-full border bg-[#523873] text-white">
            <p>Appeal</p>
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="p-5 overflow-y-auto h-screen">
      <p className="text-xl  mt-2 ">Employees</p>
      <DataTable columns={columns} data={employees} />
    </div>
  );
};

export default Employees;
