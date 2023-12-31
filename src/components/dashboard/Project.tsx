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
        return "#EF4444";
      case "Pending":
        return "#EAB308";
      case "In Progress":
        return "#3B82F6";
      case "Finished":
        return "#22C55E";
      default:
        return "#2B2B2B";
    }
  };
  return (
    <div
      className={clsx(
        "flex justify-between items-center gap-4 my-3" ,
        getStatusColor()
      )}
    >
      <div className="flex items-start gap-2">
        <div style={{ color: getStatusColor() }}>
          <FaRegFolder size={50} />
        </div>
        <div>
          <p className="font-bold">{project}</p>
          <p className="text-xs">{client}</p>
          <p className="px-4 py-1 text-xs bg-[#2d2d2d] rounded-md">
            {new Date(createdAt).getUTCDate()}
          </p>
        </div>
      </div>
      <div
        className="text-xs rounded-md bg-[#2b2b2b] w-fit px-4 py-1"
        style={{ backgroundColor: getStatusColor() }}
      >
        {status}
      </div>
    </div>
  );
};

export default Project;
