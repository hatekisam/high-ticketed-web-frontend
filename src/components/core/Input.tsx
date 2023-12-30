import React, { SetStateAction, useState } from "react";
import { ClosedEye, OpenEye } from "./icons";
import clsx from "clsx";
import { UseFormRegister } from "react-hook-form";

interface Props {
  label: string;
  placeholder: string;
  error?: string;
  type?: string;
  register: any;
}

const Input: React.FC<Props> = ({
  label,
  placeholder,
  error,
  type,
  register,
}) => {
  const [showPw, setShowP] = useState(false);
  return (
    <div className="my-2 w-full">
      <p className="text-black capitalize mb-1 text-sm">{label}</p>
      {type !== "password" ? (
        <input
          {...register(label.toLowerCase())}
          type={type || "text"}
          className={clsx(
            "px-4 py-2 rounded-full border  outline-none w-full",
            error ? "border-red-500" : "border-[#0C21C1]"
          )}
          placeholder={placeholder}
        />
      ) : (
        <div className="relative w-full ">
          <input
            {...register(label.toLowerCase())}
            type={showPw ? "text" : "password"}
            className={clsx(
              "px-4 py-2 pr-10 rounded-full border  outline-none w-full",
              error ? "border-red-500" : "border-[#0C21C1]"
            )}
            placeholder={placeholder}
          />
          <button
            type="button"
            className="absolute right-3 top-[23%]"
            onClick={() => setShowP(!showPw)}
          >
            {!showPw ? <OpenEye /> : <ClosedEye />}
          </button>
        </div>
      )}
      <p className="text-sm text-red-500 text-center">{error}</p>
    </div>
  );
};

export default Input;
