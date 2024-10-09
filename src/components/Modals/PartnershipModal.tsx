import { Box, Modal } from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import { style } from "./config";
import { IoClose } from "react-icons/io5";
import { HiArrowRight } from "react-icons/hi";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setIsLoading } from "../../../redux/reducers/userSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

interface FormData {
  name: string;
  image: File | null;
  email: string;
  contact: string;
  location: string;
  product: string;
  ucoin: number;
}

const PartnershipModal: React.FC<ModalProps> = ({ modal }) => {
  const { isLoading, selectedOffer } = useSelector(
    (store: RootState) => store.user
  );

  const [formData, setFormData] = useState<FormData>({
    name: "",
    image: null,
    email: "",
    contact: "",
    location: "",
    product: selectedOffer._id,
    ucoin: selectedOffer.pieces,
  });

  const dispatch = useDispatch();

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setIsLoading(true));

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null) {
        data.append(key, value);
      }
    });

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/users/partnership/`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Form submitted successfully:", response.data);
      // Handle successful submission (e.g., show a success message, close the modal)
      modal.close();
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error (e.g., show an error message to the user)
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
        className="bg-white  md:max-w-[680px] max-w-[370px] w-full md:w-[680px] rounded-[15px] "
      >
        <div className="flex py-3 px-6 items-center justify-between shadow-[0px_-1px_0px_0px_#E5E7E8_inset] ">
          <h2 className="text-[#191b1c] text-lg font-medium font-['Public Sans'] leading-normal">
            Partner with us
          </h2>
          <span
            onClick={modal.close}
            className="inline-flex cursor-pointer p-2.5 rounded-full bg-[#F5F6F7]"
          >
            <IoClose color="black" size={30} />
          </span>
        </div>
        <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4">
          <label htmlFor="name" className="flex flex-col gap-1.5 ">
            <span className="text-[#191b1c] text-sm font-normal font-['Public Sans'] leading-tight">
              Full Name
            </span>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="py-2.5 px-4 border border-[#E5E7E8] rounded placeholder:text-[#959fa3] text-sm font-normal font-['Public Sans'] leading-tight"
              placeholder="Add company name"
            />
          </label>

          <div className="grid grid-cols-2 gap-4 w-full">
            <label htmlFor="image" className="flex flex-col gap-1.5 ">
              <span className="text-[#191b1c] text-sm font-normal font-['Public Sans'] leading-tight">
                Image
              </span>
              <input
                id="image"
                name="image"
                type="file"
                onChange={handleChange}
                className="py-2.5 px-4 border border-[#E5E7E8] rounded placeholder:text-[#959fa3] text-sm font-normal font-['Public Sans'] leading-tight"
              />
            </label>
            <label htmlFor="product" className="flex flex-col gap-1.5 ">
              <span className="text-[#191b1c] text-sm font-normal font-['Public Sans'] leading-tight">
                Product
              </span>
              <input
                id="product"
                name="product"
                type="text"
                value={selectedOffer.name}
                disabled
                className="py-2.5 px-4 border border-[#E5E7E8] rounded placeholder:text-[#959fa3] text-sm font-normal font-['Public Sans'] leading-tight"
              />
            </label>
          </div>

          <div className="grid grid-cols-2 gap-4 w-full">
            <label htmlFor="email" className="flex flex-col gap-1.5 w-full">
              <span className="text-[#191b1c] text-sm font-normal font-['Public Sans'] leading-tight">
                Email address
              </span>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="h-12 py-2.5 px-4 border border-[#E5E7E8] rounded placeholder:text-[#959fa3] text-sm font-normal font-['Public Sans'] leading-tight"
                placeholder="Add company email"
              />
            </label>
            <label htmlFor="contact" className="flex flex-col gap-1.5 w-full">
              <span className="text-[#191b1c] text-sm font-normal font-['Public Sans'] leading-tight">
                Contact Information
              </span>
              <input
                id="contact"
                type="tel"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                className="h-12 py-2.5 px-4 border border-[#E5E7E8] rounded placeholder:text-[#959fa3] text-sm font-normal font-['Public Sans'] leading-tight"
                placeholder="Add contact number"
              />
            </label>
          </div>

          <label htmlFor="location" className="flex flex-col gap-1.5 ">
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
              placeholder="Must include country and state of residence"
            />
          </label>

          <label htmlFor="contact" className="flex flex-col gap-1.5 w-full">
            <span className="text-[#191b1c] text-sm font-normal font-['Public Sans'] leading-tight">
              Ucoin
            </span>
            <input
              id="contact"
              type="tel"
              name="contact"
              value={selectedOffer.pieces}
              disabled
              className="h-12 py-2.5 px-4 border border-[#E5E7E8] rounded placeholder:text-[#959fa3] text-sm font-normal font-['Public Sans'] leading-tight"
            />
          </label>

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
                {isLoading ? "Sending..." : "Apply Now"}
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

export default PartnershipModal;
