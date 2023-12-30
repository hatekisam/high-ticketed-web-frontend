import VerifyAccountForm from "@/components/auth/VerifyAccountForm";
import React from "react";

const VerifyAccount = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="w-[30%] flex flex-col items-center justify-center">
        <p className="text-2xl font-bold mb-3">Verify Account</p>
        <p className="text-gray-800 text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit placeat,
          culpa sed repudiandae fugit laboriosam dolorem, minima sequi sint
          velit distinctio alias aspernatur laudantium ab voluptatem magni unde
          maxime soluta!
        </p>
        <VerifyAccountForm />
      </div>
    </div>
  );
};

export default VerifyAccount;
