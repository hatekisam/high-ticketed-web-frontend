import clsx from "clsx";
import Image from "next/image";
import React from "react";
import { FaRegFolder } from "react-icons/fa6";

interface Props {
  project: string;
  client: string;
  createdAt: Date;
  status: "On Hold" | "Pending" | "In Progress" | "Finished";
}

const Project: React.FC<Props> = ({ project, client, createdAt, status }) => {
  const getStatusColor = () => {
    switch (status) {
      case "On Hold":
        return "bg-red-500";
      case "Pending":
        return "bg-yellow-500";
      case "In Progress":
        return "bg-blue-500";
      case "Finished":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };
  return (
    <div
      className={clsx(
        "flex justify-between items-center gap-4",
        getStatusColor()
      )}
    >
      <div className="flex items-center gap-2">
        <FaRegFolder />
        <div>
          <p className="font-bold">{project}</p>
          <p className="text-xs">{client}</p>
          <p className="px-4 py-1 text-xs bg-[#2d2d2d] rounded-md">
            {new Date(createdAt).getUTCDate()}
          </p>
        </div>
      </div>
      <div
        className="text-sm rounded-md bg-[#2b2b2b] w-fit px-4 py-1"
        style={{ backgroundColor: getStatusColor() }}
      >
        {status}
      </div>
    </div>
  );
};

export default Project;
