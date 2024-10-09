"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import { IoIosLock } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  setIsAuth,
  setIsLoading,
  setToken,
  setUser,
} from "../../../../../redux/reducers/adminSlice";

interface Errors {
  email: string;
  password: string;
}

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPassword, setIsPassword] = useState(false);
  const [errors, setErrors] = useState<Errors>({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const router = useRouter();
  const dispatch = useDispatch();

  const validateForm = () => {
    let newErrors = {} as Errors;
    if (!email.trim()) {
      newErrors.email = "Name is required";
    }
    if (!password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    if (!validateForm()) return;

    if (!email || !password) return;
    dispatch(setIsLoading(true));
    console.log(email, password);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/users/login/`,
        {
          email,
          password,
        }
      );

      if (response.status === 200) {
        const { token, data } = response.data;

        dispatch(setIsAuth(true));
        dispatch(setToken(token));
        dispatch(setUser(data));
        router.push("/admin/dashboard");
      } else {
        throw new Error();
      }
    } catch (error) {
      console.error("Registration failed:", error);
      // Handle error (e.g., show error message)
      if (axios.isAxiosError(error)) {
        setError(
          error.response?.data?.message ||
            error.response?.data?.errors[0]?.msg ||
            "An error occurred during registration"
        );
        console.log(
          "There was an error: ",
          error.response?.data?.message || error.response?.data?.errors
        );
      } else {
        setError("An unexpected error occurred");
        console.log("There was an unexpected error: ", error);
      }
    } finally {
      dispatch(setIsLoading(false));
    }
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
        {errors.email && (
          <div className="text-red-400 text-xs md:text-sm">{errors.email}</div>
        )}
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
        {errors.password && (
          <div className="text-red-400 text-xs md:text-sm">
            {errors.password}
          </div>
        )}
        {error && (
          <div className="text-red-400 text-xs md:text-sm">{error}</div>
        )}
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
