import React from "react";
import { DocIcon, PdfIcon } from "../core/icons";

interface Props {
  format: "pdf" | "doc";
  name: string;
  size: number;
  uploadedAt: Date;
}

const ADocument: React.FC<Props> = ({ format, name, size, uploadedAt }) => {
  return (
    <div className="rounded-md bg-[#191A1D]">
      <div className="flex items-center flex-col justify-center py-10 px-4 gap-2">
        {format === "doc" ? <DocIcon /> : <PdfIcon />}
        <p className="text-sm text-center">{name}</p>
      </div>
      <div className="border-t-2 border-t-gray-400 flex justify-between p-2 text-xs">
        <p>
          Size: <span>{size}mb</span>
        </p>
        <p>
          Uploaded: <span>{new Date(uploadedAt).getDate()}</span>
        </p>
      </div>
    </div>
  );
};

export default ADocument;
