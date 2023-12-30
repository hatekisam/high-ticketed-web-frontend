"use client";
import React, { useState } from "react";
import Input from "../core/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../core/Button";
const VerifyAccountForm = () => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Please provide a valid email")
      .required("Please provide the email"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [loading, setLoading] = useState(false);
  const onSubmit = (data: { email: string }) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Email"
        placeholder="Enter your email"
        register={register}
        error={errors.email?.message}
      />
      <div className="flex justify-between items-center mt-5">
        <div></div>
        <Button
          type="submit"
          background="#0C21C1"
          foreground="white"
          loading={loading}
          title="Verify"
        />
      </div>
    </form>
  );
};

export default VerifyAccountForm;
