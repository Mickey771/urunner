import Image from "next/image";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { setIsLoading, setModal } from "../../../redux/reducers/userSlice";
import axios from "axios";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const SectionSix = () => {
  const [error, setError] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  } as FormData);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e: ChangeEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let newErrors = {} as FormData;
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;
    dispatch(setIsLoading(true));
    setError("");

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/users/contact_us/`,
        { ...formData }
      );

      if (response.status === 200) {
        setFormData({ name: "", email: "", message: "" }); // Clear form
        dispatch(
          setModal({ message: "Your details have being sent", open: true })
        );
      } else {
        setError(response.data.message);
        throw new Error();
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error.response?.data?.message);
        console.log("There was an error: ", error.response?.data?.message);
      } else {
        setError("An unexpected error occurred");
        console.log("There was an unexpected error: ", error);
      }
    } finally {
      dispatch(setIsLoading(false));
    }
  };

  return (
    <section className="mt-[204px] flex w-full max-w-max mx-auto md:rounded-[40px] overflow-hidden">
      <div className="w-full zr:hidden md:flex max-w-[564px]">
        <Image
          src="/runner.png"
          width={0}
          height={0}
          style={{ width: "100%", height: "auto" }}
          sizes="100vw"
          alt="runner"
        />
      </div>
      <div className="w-full h-full  py-10 px-5 md:px-10 lg:px-20 bg-[#F2F2F2]">
        <h1 className="h-[66px] text-center text-black text-[32px] md:text-[52px] lg:text-[64px] font-black font-['Urbanist'] lg:leading-[37.50px]">
          Contact Us
        </h1>
        <p className="mt-1 h-[72px] text-center text-[#6e6e6e] text-sm lg:text-base font-normal font-['Poppins'] leading-normal">
          Write us a personalized message on what you
          <br />
          need us to do for you.
        </p>

        <form
          onSubmit={handleSubmit}
          className="w-full mt-[33px] max-w-[523px] mx-auto flex flex-col gap-5"
        >
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Type your name"
            className="placeholder:text-[#757575] w-full py-[17px] px-5 md:px-[30px] rounded-[5px] border border-[#00000014] bg-transparent"
          />
          {errors.name && (
            <div className="text-red-400 text-xs md:text-sm">{errors.name}</div>
          )}
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Insert your email"
            className="placeholder:text-[#757575] w-full py-[17px] px-5 md:px-[30px] rounded-[5px] border border-[#00000014] bg-transparent"
          />
          {errors.email && (
            <div className="text-red-400 text-xs md:text-sm">
              {errors.email}
            </div>
          )}
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message"
            className="w-full py-[17px] px-[30px] rounded-[5px] border border-[#00000014] bg-transparent h-[190px] resize-none"
          ></textarea>
          {errors.message && (
            <div className="text-red-400 text-xs md:text-sm">
              {errors.message}
            </div>
          )}
          {error && (
            <div className="text-red-400 text-xs md:text-sm">{error}</div>
          )}
          <button
            type="submit"
            className="h-[48px] lg:h-[57px] bg-primaryBlue hover:bg-white border border-primaryBlue text-white hover:text-primaryBlue rounded-[5px] items-center inline-flex"
          >
            <p className="w-full text-center text-base md:text-[28px] font-bold font-['Urbanist'] tracking-wide">
              Submit
            </p>
          </button>
        </form>
      </div>
    </section>
  );
};

export default SectionSix;
