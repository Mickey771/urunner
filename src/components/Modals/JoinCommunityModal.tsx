import React, { useState, ChangeEvent, FormEvent } from "react";
import { Box, Modal } from "@mui/material";
import { IoClose } from "react-icons/io5";
import { HiArrowRight } from "react-icons/hi";
import axios from "axios";
import { style } from "./config";
import Loader from "../Loader";
import { useDispatch } from "react-redux";
import { setModal } from "../../../redux/reducers/userSlice";
import { useRouter } from "next/navigation";

interface ModalProps {
  modal: {
    isOpen: boolean;
    close: () => void;
  };
}

interface FormData {
  fullName: string;
  email: string;
}

interface Errors {
  fullName: string;
  email: string;
}

const JoinCommunityModal: React.FC<ModalProps> = ({ modal }) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<Errors>({
    fullName: "",
    email: "",
  });
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const router = useRouter();

  const validateForm = () => {
    let newErrors = {} as Errors;
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);
    setError("");

    const { fullName, email } = formData;

    // console.log("image", image);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/users/register/`,
        { fullName, email }
      );
      console.log("Registration successful:", response.data);
      modal.close();
      dispatch(
        setModal({
          open: true,
          message: "You have successfully joined our community",
        })
      );
      setTimeout(() => {
        router.push("/community/home");
      }, 2000);
      // Handle successful registration (e.g., show success message, redirect)
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
      setIsLoading(false);
    }
  };

  return (
    <Modal
      open={modal.isOpen}
      onClose={modal.close}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="backdrop-blur-[3px]"
    >
      <Box
        sx={style}
        className="bg-white md:max-w-[680px] min-h-[400px] max-w-[370px] w-full md:w-[680px] rounded-[15px]"
      >
        <div className="flex py-3 px-6 items-center justify-between shadow-[0px_-1px_0px_0px_#E5E7E8_inset]">
          <h2 className="text-[#191b1c] text-lg font-medium font-['Public Sans'] leading-normal">
            Join Our Community
          </h2>
          <span
            onClick={modal.close}
            className="inline-flex cursor-pointer p-2.5 rounded-full bg-[#F5F6F7]"
          >
            <IoClose color="black" size={30} />
          </span>
        </div>
        <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4">
          <label htmlFor="fullName" className="flex flex-col gap-1.5">
            <span className="text-[#191b1c] text-sm font-normal font-['Public Sans'] leading-tight">
              Full Name
            </span>
            <input
              id="fullName"
              name="fullName"
              type="text"
              value={formData.fullName}
              onChange={handleChange}
              className="py-2.5 px-4 border border-[#E5E7E8] rounded placeholder:text-[#959fa3] text-sm font-normal font-['Public Sans'] leading-tight"
              placeholder="Enter your full name"
            />
            {errors.fullName && (
              <div className="text-red-400 text-xs md:text-sm">
                {errors.fullName}
              </div>
            )}
          </label>
          <label htmlFor="email" className="flex flex-col gap-1.5 w-full">
            <span className="text-[#191b1c] text-sm font-normal font-['Public Sans'] leading-tight">
              Email address
            </span>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="h-12 py-2.5 px-4 border border-[#E5E7E8] rounded placeholder:text-[#959fa3] text-sm font-normal font-['Public Sans'] leading-tight"
              placeholder="Enter your email"
            />
            {errors.email && (
              <div className="text-red-400 text-xs md:text-sm">
                {errors.email}
              </div>
            )}
          </label>

          {error && (
            <div className="text-red-400 text-xs md:text-sm">{error}</div>
          )}
          <div className="flex justify-between mt-16">
            <button
              type="button"
              onClick={modal.close}
              className="h-10 px-6 bg-[#f4f6f7] rounded-full justify-center items-center gap-2 inline-flex"
            >
              <span className="text-[#191b1c] text-sm font-semibold font-['Public Sans'] capitalize leading-10">
                Cancel
              </span>
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="h-10 px-6 bg-[#005ce7] rounded-full justify-center items-center gap-2 inline-flex"
            >
              <span className="text-white text-sm font-semibold font-['Public Sans'] capitalize leading-10">
                {isLoading ? "Submitting..." : "Apply Now"}
              </span>
              <span>
                <HiArrowRight color="white" />
              </span>
            </button>
          </div>
        </form>
        {isLoading && <Loader />}
      </Box>
    </Modal>
  );
};

export default JoinCommunityModal;
