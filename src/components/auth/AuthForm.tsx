"use client";
import React, { useState } from "react";
import Input from "../core/Input";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { clsx } from "clsx";
import Link from "next/link";
import Button from "../core/Button";

const AuthForm = () => {
  const [loading, setLoading] = useState(false);
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Please provide a valid email")
      .required(`Please provider your email `),
    password: yup
      .string()
      .max(25, "The password must be at most 25 characters long")
      .min(8, "The password must be at least 8 characters long")
      .required("Please provide the password"),
    username: yup.string().required("Please provide your username"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <div className="flex flex-col items-center justify-center w-[50%] h-full">
      <p className="text-white text-center my-3 text-xl font-bold">
        Enter your Credentials to login
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="w-[70%]">
        <Input
          label="Email"
          placeholder="Enter your Email"
          error={errors.email?.message}
          register={register}
        />
        <Input
          label="Password"
          placeholder="Enter your Password"
          type="password"
          error={errors.password?.message}
          register={register}
        />
        <div className="flex justify-between my-2 text-sm">
          <div className="flex gap-2 items-center">
            <input type="checkbox" name="" id="" />
            <p>Remember me</p>
          </div>
          <Link href={"/auth/forgot-password"}>Forgot Password</Link>
        </div>
        <div className="flex justify-between items-center mt-5">
          <div></div>
          <Button
            type="submit"
            background="#0C21C1"
            foreground="white"
            loading={loading}
            title={"Sign In"}
          />
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
