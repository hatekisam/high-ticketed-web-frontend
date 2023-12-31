"use client";
import ADocument from "@/components/documents/ADocument";
import React from "react";

const Documents = () => {
  const dummyData = [
    {
      format: "doc",
      name: "Project Proposal",
      size: 3.5,
      uploadedAt: new Date("2023-01-10T08:30:00"),
    },
    {
      format: "pdf",
      name: "User Manual",
      size: 2.2,
      uploadedAt: new Date("2023-01-12T09:45:00"),
    },
    {
      format: "doc",
      name: "Meeting Notes",
      size: 1.8,
      uploadedAt: new Date("2023-01-15T11:20:00"),
    },
    {
      format: "pdf",
      name: "Technical Documentation",
      size: 4.6,
      uploadedAt: new Date("2023-01-18T14:15:00"),
    },
    {
      format: "doc",
      name: "Contract Agreement",
      size: 3.2,
      uploadedAt: new Date("2023-01-20T16:40:00"),
    },
    {
      format: "pdf",
      name: "Financial Report",
      size: 5.1,
      uploadedAt: new Date("2023-01-22T18:00:00"),
    },
    {
      format: "doc",
      name: "Product Roadmap",
      size: 2.9,
      uploadedAt: new Date("2023-01-25T10:30:00"),
    },
    {
      format: "pdf",
      name: "Security Guidelines",
      size: 3.8,
      uploadedAt: new Date("2023-01-28T12:45:00"),
    },
    {
      format: "doc",
      name: "Employee Handbook",
      size: 1.5,
      uploadedAt: new Date("2023-01-30T15:10:00"),
    },
    {
      format: "pdf",
      name: "Marketing Strategy",
      size: 6.0,
      uploadedAt: new Date("2023-02-02T17:20:00"),
    },
    {
      format: "doc",
      name: "Code Review Checklist",
      size: 2.4,
      uploadedAt: new Date("2023-02-05T19:30:00"),
    },
    {
      format: "pdf",
      name: "Project Timeline",
      size: 4.3,
      uploadedAt: new Date("2023-02-08T21:45:00"),
    },
    {
      format: "doc",
      name: "Release Notes",
      size: 1.9,
      uploadedAt: new Date("2023-02-10T08:30:00"),
    },
    {
      format: "pdf",
      name: "Training Manual",
      size: 3.7,
      uploadedAt: new Date("2023-02-13T09:50:00"),
    },
    {
      format: "doc",
      name: "Project Budget",
      size: 2.1,
      uploadedAt: new Date("2023-02-16T11:15:00"),
    },
  ];
  return (
    <div className="p-5 overflow-y-auto h-screen">
      <p className="text-xl  mt-2 ">Documents</p>
      <div className="mt-5 grid grid-cols-5 gap-4">
        {dummyData.map((item, index) => (
          <ADocument
            key={index}
            //@ts-ignore
            format={item.format}
            name={item.name}
            size={item.size}
            uploadedAt={item.uploadedAt}
          />
        ))}
      </div>
    </div>
  );
};

export default Documents;
