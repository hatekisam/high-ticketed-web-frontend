import Image from "next/image";
import React from "react";

interface Props {
  image: string;
  project: string;
  currentTask: string;
  completion: number;
}

const Task: React.FC<Props> = ({ image, project, currentTask, completion }) => {
  return (
    <div className="flex justify-between items-center gap-4">
      <div className="flex items-center gap-2">
        <Image src={image} alt={project} width={50} height={50} />
        <div>
          <p>{project}</p>
          <p>{currentTask}</p>
        </div>
      </div>
      <div className="h-4 rounded-md bg-[#2b2b2b] relative">
        <div
          className="absolute top-0 left-0"
          style={{ width: `${completion}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Task;
