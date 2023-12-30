import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm";
import React from "react";

const ForgotPassword = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="w-[30%] flex flex-col items-center justify-center">
        <p className="text-2xl font-bold mb-3">Forgot Password</p>
        <p className="text-gray-800 text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit placeat,
          culpa sed repudiandae fugit laboriosam dolorem, minima sequi sint
          velit distinctio alias aspernatur laudantium ab voluptatem magni unde
          maxime soluta!
        </p>
        <ForgotPasswordForm />
      </div>
    </div>
  );
};

export default ForgotPassword;
