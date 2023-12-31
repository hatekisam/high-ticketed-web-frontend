import Image from "next/image";
import React from "react";

interface Props {
  image: string;
  name: string;
  status: string;
  online: boolean;
}

const Employee: React.FC<Props> = ({ image, name, status, online }) => {
  const getColor = () => {
    if (online) return "#22C55E";
    return "#EF4444";
  };
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2 my-2">
        <Image
          src={image}
          alt={name}
          width={50}
          height={50}
          className="rounded-full"
        />
        <div>
          <p className="font-bold">{name}</p>
          <p className="text-xs">{status}</p>
        </div>
      </div>
      <p
        className="px-4 py-1 text-xs bg-[#2d2d2d] rounded-md"
        style={{ backgroundColor: getColor() }}
      >
        {online ? "Working" : "Absent"}
      </p>
    </div>
  );
};

export default Employee;
