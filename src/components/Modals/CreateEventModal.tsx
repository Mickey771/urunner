import { Box, Modal } from "@mui/material";
import React from "react";
import { style } from "./config";
import { IoClose } from "react-icons/io5";
import { HiArrowRight } from "react-icons/hi";

const CreateEventModal: React.FC<ModalProps> = ({ modal }) => {
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
        <div className="flex py-3 px-[50px] items-center justify-between shadow-[0px_-1px_0px_0px_#E5E7E8_inset] ">
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
        <form action="" className="py-6 px-[50px] flex flex-col gap-4">
          <label htmlFor="title" className="flex flex-col gap-1.5 ">
            <span className="text-[#191b1c] text-sm font-normal font-['Public Sans'] leading-tight">
              Event Title
            </span>
            <input
              id="title"
              type="text"
              className="py-2.5 px-4 border border-[#E5E7E8] rounded placeholder:text-[#959fa3] text-sm font-normal font-['Public Sans'] leading-tight"
              placeholder="Add event name"
            />
          </label>
          <div className="flex gap-4">
            <label htmlFor="title" className="w-full flex flex-col gap-1.5 ">
              <span className="text-[#191b1c] text-sm font-normal font-['Public Sans'] leading-tight">
                Event Image
              </span>
              <input
                id="title"
                type="file"
                className=" py-2.5 px-4 border border-[#E5E7E8] rounded placeholder:text-[#959fa3] text-sm font-normal font-['Public Sans'] leading-tight"
                placeholder="Add event name"
              />
            </label>{" "}
            <label htmlFor="title" className="w-full flex flex-col gap-1.5 ">
              <span className="text-[#191b1c] text-sm font-normal font-['Public Sans'] leading-tight">
                Registration Link
              </span>
              <input
                id="title"
                type="text"
                className="py-2.5 px-4 border border-[#E5E7E8] rounded placeholder:text-[#959fa3] text-sm font-normal font-['Public Sans'] leading-tight"
                placeholder="Add registration link"
              />
            </label>
          </div>
          <label htmlFor="description" className="flex flex-col gap-1.5 w-full">
            <span className="text-[#191b1c] text-sm font-normal font-['Public Sans'] leading-tight">
              Description
            </span>
            <textarea
              id="description"
              name="description"
              className="h-12 py-2.5 px-4 border border-[#E5E7E8] rounded placeholder:text-[#959fa3] text-sm font-normal font-['Public Sans'] leading-tight h-[190px] resize-none"
              placeholder="Add event description"
            />
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
                className="text-[#4a5154] text-sm font-normal font-['Public Sans'] leading-tight py-2.5 px-4 border border-[#E5E7E8] rounded-[4px]"
              />
            </div>
            <div className="w-full flex flex-col gap-1.5">
              <label
                className="text-[#191b1c] text-sm font-normal font-['Public Sans'] leading-tight"
                htmlFor="expiry"
              >
                End Date
              </label>
              <input
                type="date"
                id="expiry"
                name="expiry"
                className="text-[#4a5154] text-sm font-normal font-['Public Sans'] leading-tight py-2.5 px-4 border border-[#E5E7E8] rounded-[4px]"
              />
            </div>
          </div>

          <label htmlFor="title" className="w-full flex flex-col gap-1.5 ">
            <span className="text-[#191b1c] text-sm font-normal font-['Public Sans'] leading-tight">
              Add members
            </span>
            <input
              id="title"
              type="email"
              className="py-2.5 px-4 border border-[#E5E7E8] rounded placeholder:text-[#959fa3] text-sm font-normal font-['Public Sans'] leading-tight"
              placeholder="Member email address"
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
              className=" h-10 px-6 bg-[#005ce7] rounded-full justify-center items-center gap-2 inline-flex"
            >
              <span className="text-white text-sm font-semibold font-['Public Sans'] capitalize leading-10">
                Create Event
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
