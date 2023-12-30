import Image from "next/image";
import React from "react";
import illustration from "@/assets/login.png";
import AuthForm from "@/components/auth/AuthForm";

const AuthPage = () => {
  return (
    <div className="w-screen h-screen overflow-hidden p-5 flex items-center gap-5">
      <div className="w-[50%] h-full bg-[#000842] text-white rounded-3xl p-5">
        <div className="flex justify-between text-xs">
          <div></div>
          <p>+250987923843</p>
        </div>
        <div className="w-full h-[80%] flex items-center justify-center">
          <Image src={illustration} alt="" className="w-[70%]" />
        </div>
        <div className="p-10">
          <p className="text-3xl font-bold">Elite Teams</p>
          <p>Find the right employee/employer</p>
        </div>
      </div>
      <AuthForm />
    </div>
  );
};

export default AuthPage;
