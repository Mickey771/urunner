import { Box, Modal } from "@mui/material";
import React from "react";
import { style } from "./config";
import { IoClose } from "react-icons/io5";
import { HiArrowRight } from "react-icons/hi";

const JoinCommunityModal: React.FC<ModalProps> = ({ modal }) => {
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
            Join Our Community
          </h2>
          <span
            onClick={modal.close}
            className="inline-flex cursor-pointer p-2.5 rounded-full bg-[#F5F6F7]"
          >
            <IoClose color="black" size={30} />
          </span>
        </div>
        <form action="" className="p-6 flex flex-col gap-4">
          <label htmlFor="name" className="flex flex-col gap-1.5 ">
            <span className="text-[#191b1c] text-sm font-normal font-['Public Sans'] leading-tight">
              Full Name
            </span>
            <input
              id="name"
              type="text"
              className="py-2.5 px-4 border border-[#E5E7E8] rounded placeholder:text-[#959fa3] text-sm font-normal font-['Public Sans'] leading-tight"
              placeholder="Add company name"
            />
          </label>
          <label htmlFor="email" className="flex flex-col gap-1.5 w-full">
            <span className="text-[#191b1c] text-sm font-normal font-['Public Sans'] leading-tight">
              Email address
            </span>
            <input
              id="email"
              type="email"
              name="email"
              className="h-12 py-2.5 px-4 border border-[#E5E7E8] rounded placeholder:text-[#959fa3] text-sm font-normal font-['Public Sans'] leading-tight"
              placeholder="Add email"
            />
          </label>
          <div className="grid grid-cols-2 gap-4">
            <label htmlFor="image" className="flex flex-col gap-1.5 w-full">
              <span className="text-[#191b1c] text-sm font-normal font-['Public Sans'] leading-tight">
                Profile Image
              </span>
              <input
                id="image"
                type="file"
                className="h-12 py-2.5 px-4 border border-[#E5E7E8] rounded  placeholder:text-[#959fa3] text-sm font-normal font-['Public Sans'] leading-tight"
              />
            </label>{" "}
            <label htmlFor="location" className="flex flex-col gap-1.5 ">
              <span className="text-[#191b1c] text-sm font-normal font-['Public Sans'] leading-tight">
                Location
              </span>
              <input
                id="location"
                name="location"
                type="text"
                className="h-12  py-2.5 px-4 border border-[#E5E7E8] rounded placeholder:text-[#959fa3] text-sm font-normal font-['Public Sans'] leading-tight"
                placeholder="Must include country and state of residence"
              />
            </label>
          </div>

          <div className="grid grid-cols-2 gap-4 w-full">
            <label htmlFor="contact" className="flex flex-col gap-1.5 w-full">
              <span className="text-[#191b1c] text-sm font-normal font-['Public Sans'] leading-tight">
                Joined Date
              </span>
              <input
                id="contact"
                type="date"
                name="contact"
                className="h-12 py-2.5 px-4 border border-[#E5E7E8] rounded placeholder:text-[#959fa3] text-sm font-normal font-['Public Sans'] leading-tight"
              />
            </label>
            <label htmlFor="contact" className="flex flex-col gap-1.5 w-full">
              <span className="text-[#191b1c] text-sm font-normal font-['Public Sans'] leading-tight">
                Due Date
              </span>
              <input
                id="contact"
                type="date"
                name="contact"
                className="h-12 py-2.5 px-4 border border-[#E5E7E8] rounded placeholder:text-[#959fa3] text-sm font-normal font-['Public Sans'] leading-tight"
              />
            </label>
          </div>

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
                Apply Now
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

export default JoinCommunityModal;
