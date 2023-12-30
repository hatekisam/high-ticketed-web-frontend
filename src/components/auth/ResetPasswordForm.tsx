"use client";
import React, { useState } from "react";
import Input from "../core/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../core/Button";
const ResetPasswordForm = () => {
  const schema = yup.object().shape({
    password: yup
      .string()
      .max(25, "The password must be at most 25 characters long")
      .min(8, "The password must be at least 8 characters long")
      .required("Please provide the password"),
    "confirm password": yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match")
      .required("Please provide the password"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [loading, setLoading] = useState(false);
  const onSubmit = (data: { "confirm password": string; password: string }) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Password"
        placeholder="Enter your Password"
        type="password"
        error={errors.password?.message}
        register={register}
      />
      <Input
        label="Confirm Password"
        placeholder="Retype your Password"
        type="password"
        error={errors.password?.message}
        register={register}
      />
      <div className="flex justify-between items-center mt-5">
        <div></div>
        <Button
          type="submit"
          background="#0C21C1"
          foreground="white"
          loading={loading}
          title="Next"
        />
      </div>
    </form>
  );
};

export default ResetPasswordForm;
