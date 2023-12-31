"use client";
import ADocument from "@/components/documents/ADocument";
import React from "react";

const Documents = () => {
  const dummyData = [
    {
      format: "doc",
      name: "Document 1",
      size: 5,
      uploadedAt: new Date("2023-01-15"),
    },
    {
      format: "pdf",
      name: "Document 2",
      size: 8,
      uploadedAt: new Date("2023-02-20"),
    },
  ];
  return (
    <div className="p-5 overflow-y-auto h-screen">
      <p className="text-xl  mt-2 ">Employees</p>
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
