import React, { useState, ChangeEvent, FormEvent } from "react";
import { Box, Modal } from "@mui/material";
import { IoClose } from "react-icons/io5";
import { HiArrowRight } from "react-icons/hi";
import axios from "axios";
import { style } from "./config";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { useDispatch } from "react-redux";
import { setIsLoading, setOffers } from "../../../redux/reducers/adminSlice";

interface FormData {
  name: string;
  price: string;
  pieces: string;
  image: File | null;
  date: string;
  end_date: string;
}

const CreateOfferModal: React.FC<ModalProps> = ({ modal }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    price: "",
    pieces: "",
    image: null,
    date: "",
    end_date: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const { token, offers } = useSelector((store: RootState) => store.admin);

  const dispatch = useDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, files } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "file" ? files?.[0] || null : value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setIsLoading(true));
    setError("");

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null) {
        data.append(key, value);
      }
    });

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/admin/create_offer/`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        console.log("Offer created successfully:", response.data);
        modal.close();
        dispatch(
          setOffers([
            ...offers,
            { ...response.data.data, status: "pending", partners: 0 },
          ])
        );
      } else {
        console.log("there was and error", response.status);
      }
      // Handle successful offer creation (e.g., show success message, refresh offers list)
    } catch (error) {
      console.error("Offer creation failed:", error);
      if (axios.isAxiosError(error)) {
        setError(
          error.response?.data?.message ||
            "An error occurred while creating the offer"
        );
      } else {
        setError("An unexpected error occurred");
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
            Create Offer
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
          <label htmlFor="name" className="flex flex-col gap-1.5">
            <span className="text-[#191b1c] text-sm font-normal font-['Public Sans'] leading-tight">
              Offer Name
            </span>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="py-2.5 px-4 border border-[#E5E7E8] rounded placeholder:text-[#959fa3] text-sm font-normal font-['Public Sans'] leading-tight"
              placeholder="Add offer name"
            />
          </label>
          <div className="flex gap-5 w-full">
            <label htmlFor="price" className="flex w-full flex-col gap-1.5">
              <span className="text-[#191b1c] text-sm font-normal font-['Public Sans'] leading-tight">
                Price
              </span>
              <input
                id="price"
                name="price"
                type="text"
                value={formData.price}
                onChange={handleChange}
                className="py-2.5 px-4 border border-[#E5E7E8] rounded placeholder:text-[#959fa3] text-sm font-normal font-['Public Sans'] leading-tight"
                placeholder="Add offer price"
              />
            </label>
            <label htmlFor="pieces" className="flex w-full flex-col gap-1.5">
              <span className="text-[#191b1c] text-sm font-normal font-['Public Sans'] leading-tight">
                Pieces
              </span>
              <input
                id="pieces"
                name="pieces"
                type="text"
                value={formData.pieces}
                onChange={handleChange}
                className="py-2.5 px-4 border border-[#E5E7E8] rounded placeholder:text-[#959fa3] text-sm font-normal font-['Public Sans'] leading-tight"
                placeholder="Add offer pieces"
              />
            </label>
          </div>
          <label htmlFor="image" className="flex w-full flex-col gap-1.5">
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
          <div className="flex gap-4">
            <div className="w-full flex flex-col gap-1.5">
              <label
                className="text-[#191b1c] text-sm font-normal font-['Public Sans'] leading-tight"
                htmlFor="date"
              >
                Offer Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="text-[#4a5154] text-sm font-normal font-['Public Sans'] leading-tight py-2.5 px-4 border border-[#E5E7E8] rounded-[4px]"
              />
            </div>
            <div className="w-full flex flex-col gap-1.5">
              <label
                className="text-[#191b1c] text-sm font-normal font-['Public Sans'] leading-tight"
                htmlFor="end_date"
              >
                Expiry Date
              </label>
              <input
                type="date"
                id="end_date"
                name="end_date"
                value={formData.end_date}
                onChange={handleChange}
                className="text-[#4a5154] text-sm font-normal font-['Public Sans'] leading-tight py-2.5 px-4 border border-[#E5E7E8] rounded-[4px]"
              />
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
              disabled={isSubmitting}
              className="h-10 px-6 bg-[#005ce7] rounded-full justify-center items-center gap-2 inline-flex"
            >
              <span className="text-white text-sm font-semibold font-['Public Sans'] capitalize leading-10">
                {isSubmitting ? "Creating..." : "Create Offer"}
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

export default CreateOfferModal;
