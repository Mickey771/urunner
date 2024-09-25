"use client";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import { IoIosLock } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPassword, setIsPassword] = useState(false);

  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(email, password);
    router.push("/admin/dashboard");
  };

  return (
    <div className="flex justify-center items-center w-full flex-col">
      <h1 className="text-[#1b1818] text-4xl font-bold font-['Inter'] leading-[43.20px]">
        Login with your email
      </h1>
      <p className="text-[#645c5c] mt-2 text-sm font-normal font-['Inter'] leading-tight">
        Enter the email and password provided by admin 🔐
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 w-full max-w-[442px] mt-12"
      >
        <label
          htmlFor="email"
          className="px-4 py-[18px] flex items-center gap-2 border border-[#007AFF80] rounded-md"
        >
          <span>
            <MdEmail color="#007AFF" />
          </span>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            name="email"
            className="h-full focus:outline-none w-full"
            placeholder="Email"
          />
        </label>
        <label
          htmlFor="password"
          className="px-4 py-[18px] flex items-center gap-2 border border-[#007AFF80] rounded-md"
        >
          <span>
            <IoIosLock color="#007AFF" />
          </span>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={isPassword ? "text" : "password"}
            id="password"
            name="password"
            className="h-full focus:outline-none w-full bg-transparent"
            placeholder="Password"
          />
          <span
            onClick={() => setIsPassword(!isPassword)}
            className="text-primaryBlue text-sm cursor-pointer"
          >
            {!isPassword ? "Show" : "Hide"}
          </span>
        </label>
        <button
          type="submit"
          className="h-[55px] px-6 py-4 bg-[#007aff] text-white hover:text-primaryBlue hover:bg-transparent hover:border hover:border-primaryBlue rounded-lg flex-col justify-center items-center gap-2.5 inline-flex"
        >
          <span className="text-center  text-base font-semibold font-['Inter'] leading-normal">
            Login
          </span>
        </button>
      </form>
    </div>
  );
};

export default Page;
