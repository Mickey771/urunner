import React, { useState, ChangeEvent, FormEvent } from "react";
import { Box, Modal } from "@mui/material";
import { IoClose } from "react-icons/io5";
import { HiArrowRight } from "react-icons/hi";
import axios from "axios";
import { style } from "./config";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { useDispatch } from "react-redux";
import { setEvents, setIsLoading } from "../../../redux/reducers/adminSlice";

interface FormData {
  title: string;
  image: File | null;
  link: string;
  write_up: string;
  date: string;
  end_date: string;
  location: string;
}

interface Errors {
  title: string;
  image: string;
  link: string;
  write_up: string;
  date: string;
  end_date: string;
  location: string;
}

const CreateEventModal: React.FC<ModalProps> = ({ modal }) => {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    image: null,
    link: "",
    write_up: "",
    date: "",
    end_date: "",
    location: "",
  });
  const [errors, setErrors] = useState<Errors>({
    title: "",
    image: "",
    link: "",
    write_up: "",
    date: "",
    end_date: "",
    location: "",
  });
  const [error, setError] = useState("");

  const { token, isLoading, events } = useSelector(
    (store: RootState) => store.admin
  );

  const dispatch = useDispatch();

  const validateForm = () => {
    let newErrors = {} as Errors;
    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    }
    if (!formData.image) {
      newErrors.image = "Image is required";
    }
    if (!formData.link.trim()) {
      newErrors.link = "Link is required";
    }
    if (!formData.write_up.trim()) {
      newErrors.write_up = "Description is required";
    }
    if (!formData.date.trim()) {
      newErrors.date = "Start Date is required";
    }
    if (!formData.end_date) {
      newErrors.end_date = "Expiry date is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "file") {
      const fileInput = e.target as HTMLInputElement;
      setFormData((prev) => ({
        ...prev,
        [name]: fileInput.files ? fileInput.files[0] : null,
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    if (!validateForm()) return;

    dispatch(setIsLoading(true));

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null) {
        data.append(key, value);
      }
    });

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/admin/create_event/`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        console.log("Event created successfully:", response.data);
        const newEvent = response.data.data;
        dispatch(setEvents([...events, { ...newEvent }]));
        modal.close();
        setFormData({
          title: "",
          image: null,
          link: "",
          write_up: "",
          date: "",
          end_date: "",
          location: "",
        });
      } else {
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
      }
      // Handle successful event creation (e.g., show success message, refresh events list)
    } catch (error) {
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
    <Modal
      open={modal.isOpen}
      onClose={modal.close}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="backdrop-blur-[3px]"
    >
      <Box
        sx={style}
        className="bg-white md:max-w-[680px] max-w-[370px] w-full md:w-[680px] rounded-[15px]"
      >
        <div className="flex py-3 px-[50px] items-center justify-between shadow-[0px_-1px_0px_0px_#E5E7E8_inset]">
          <h2 className="text-[#191b1c] text-lg font-medium font-['Public Sans'] leading-normal">
            Create Event
          </h2>
          <span
            onClick={modal.close}
            className="inline-flex cursor-pointer p-2.5 rounded-full bg-[#F5F6F7]"
          >
            <IoClose color="black" size={30} />
          </span>
        </div>
        <form
          onSubmit={handleSubmit}
          className="py-6 px-[50px] flex flex-col gap-4"
        >
          <label htmlFor="title" className="flex flex-col gap-1.5">
            <span className="text-[#191b1c] text-sm font-normal font-['Public Sans'] leading-tight">
              Event Title
            </span>
            <input
              id="title"
              name="title"
              type="text"
              value={formData.title}
              onChange={handleChange}
              className="py-2.5 px-4 border border-[#E5E7E8] rounded placeholder:text-[#959fa3] text-sm font-normal font-['Public Sans'] leading-tight"
              placeholder="Add event name"
            />
            {errors.title && (
              <div className="text-red-400 text-xs md:text-sm">
                {errors.title}
              </div>
            )}
          </label>
          <div className="flex gap-4">
            <label htmlFor="image" className="w-full flex flex-col gap-1.5">
              <span className="text-[#191b1c] text-sm font-normal font-['Public Sans'] leading-tight">
                Event Image
              </span>
              <input
                id="image"
                name="image"
                type="file"
                onChange={handleChange}
                className="py-2.5 px-4 border border-[#E5E7E8] rounded placeholder:text-[#959fa3] text-sm font-normal font-['Public Sans'] leading-tight"
              />
              {errors.image && (
                <div className="text-red-400 text-xs md:text-sm">
                  {errors.image}
                </div>
              )}
            </label>
            <label htmlFor="link" className="w-full flex flex-col gap-1.5">
              <span className="text-[#191b1c] text-sm font-normal font-['Public Sans'] leading-tight">
                Registration Link
              </span>
              <input
                id="link"
                name="link"
                type="text"
                value={formData.link}
                onChange={handleChange}
                className="py-2.5 px-4 border border-[#E5E7E8] rounded placeholder:text-[#959fa3] text-sm font-normal font-['Public Sans'] leading-tight"
                placeholder="Add registration link"
              />
              {errors.link && (
                <div className="text-red-400 text-xs md:text-sm">
                  {errors.link}
                </div>
              )}
            </label>
          </div>
          <label htmlFor="location" className="w-full flex flex-col gap-1.5">
            <span className="text-[#191b1c] text-sm font-normal font-['Public Sans'] leading-tight">
              Location
            </span>
            <input
              id="location"
              name="location"
              type="text"
              value={formData.location}
              onChange={handleChange}
              className="py-2.5 px-4 border border-[#E5E7E8] rounded placeholder:text-[#959fa3] text-sm font-normal font-['Public Sans'] leading-tight"
              placeholder="Add location"
            />
            {errors.link && (
              <div className="text-red-400 text-xs md:text-sm">
                {errors.location}
              </div>
            )}
          </label>
          <label htmlFor="write_up" className="flex flex-col gap-1.5 w-full">
            <span className="text-[#191b1c] text-sm font-normal font-['Public Sans'] leading-tight">
              Description
            </span>
            <textarea
              id="write_up"
              name="write_up"
              value={formData.write_up}
              onChange={handleChange}
              className="h-[190px] py-2.5 px-4 border border-[#E5E7E8] rounded placeholder:text-[#959fa3] text-sm font-normal font-['Public Sans'] leading-tight resize-none"
              placeholder="Add event description"
            />
            {errors.write_up && (
              <div className="text-red-400 text-xs md:text-sm">
                {errors.write_up}
              </div>
            )}
          </label>
          <div className="flex gap-4">
            <div className="w-full flex flex-col gap-1.5">
              <label
                className="text-[#191b1c] text-sm font-normal font-['Public Sans'] leading-tight"
                htmlFor="date"
              >
                Start Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="text-[#4a5154] text-sm font-normal font-['Public Sans'] leading-tight py-2.5 px-4 border border-[#E5E7E8] rounded-[4px]"
              />
              {errors.date && (
                <div className="text-red-400 text-xs md:text-sm">
                  {errors.date}
                </div>
              )}
            </div>
            <div className="w-full flex flex-col gap-1.5">
              <label
                className="text-[#191b1c] text-sm font-normal font-['Public Sans'] leading-tight"
                htmlFor="end_date"
              >
                End Date
              </label>
              <input
                type="date"
                id="end_date"
                name="end_date"
                value={formData.end_date}
                onChange={handleChange}
                className="text-[#4a5154] text-sm font-normal font-['Public Sans'] leading-tight py-2.5 px-4 border border-[#E5E7E8] rounded-[4px]"
              />
              {errors.end_date && (
                <div className="text-red-400 text-xs md:text-sm">
                  {errors.end_date}
                </div>
              )}
            </div>
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <div className="flex justify-between mt-6">
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
                {isLoading ? "Creating..." : "Create Event"}
              </span>
              <span>
                <HiArrowRight color="white" />
              </span>
            </button>
          </div>
        </form>
      </Box>
    </Modal>
  );
};

export default CreateEventModal;
