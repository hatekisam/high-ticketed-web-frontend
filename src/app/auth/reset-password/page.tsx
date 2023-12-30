import ResetPasswordForm from "@/components/auth/ResetPasswordForm";
import React from "react";

const ResetPassword = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="w-[30%] flex flex-col items-center justify-center">
        <p className="text-2xl font-bold mb-3">Reset Password</p>
        <p className="text-gray-800 text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit placeat,
          culpa sed repudiandae fugit laboriosam dolorem, minima sequi sint
          velit distinctio alias aspernatur laudantium ab voluptatem magni unde
          maxime soluta!
        </p>
        <ResetPasswordForm />
      </div>
    </div>
  );
};

export default ResetPassword;
