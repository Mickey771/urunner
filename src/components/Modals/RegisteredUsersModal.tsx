import { Box, Modal } from "@mui/material";
import React from "react";
import { style } from "./config";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import { FaDeleteLeft } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { AiOutlineUserAdd } from "react-icons/ai";

const RegisteredUsersModal: React.FC<ModalProps> = ({ modal }) => {
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
        className="bg-white min-h-[70%] md:max-w-[680px] max-w-[370px] w-full md:w-[680px] rounded-[15px] "
      >
        <div className="flex py-3 px-6 items-center justify-between shadow-[0px_-1px_0px_0px_#E5E7E8_inset] ">
          <h2 className="text-[#191b1c] text-lg font-medium font-['Public Sans'] leading-normal">
            Registered Users
          </h2>
          <span
            onClick={modal.close}
            className="inline-flex cursor-pointer p-2.5 rounded-full bg-[#F5F6F7]"
          >
            <IoClose color="black" size={30} />
          </span>
        </div>
        <div className="px-6">
          <h3 className="mt-4 ">
            <span className="text-[#191b1c] text-base font-semibold font-['Public Sans'] leading-[23px]">
              Members{" "}
            </span>
            <span className="text-[#626c70] text-base font-normal font-['Public Sans'] leading-normal">
              (12)
            </span>
          </h3>

          <div className="grid grid-cols-3  mt-4 gap-4">
            {Array.from({ length: 12 }, (_, index) => (
              <div className="flex items-center gap-2">
                <span className="inline-flex h-12 w-12">
                  <Image src={"/guy.png"} height={48} width={48} alt="person" />
                </span>
                <div className=" flex flex-col gap-1">
                  <p className=" text-[#191b1c] text-sm font-medium font-['Public Sans'] leading-tight">
                    Brooklyn Simmons
                  </p>
                  <p className=" text-[#7b878c] text-sm font-normal font-['Public Sans'] leading-tight">
                    ateniese@mac.com
                  </p>
                </div>
                <span>
                  <MdDelete color="#333" />
                </span>
              </div>
            ))}
          </div>

          <button className="mt-8 w-[123px] h-10 flex items-center justify-center bg-[#ededed] rounded-[10px]">
            <span>
              <AiOutlineUserAdd color="#333333" />
            </span>
            <p className="w-[73px] text-[#333333] text-sm font-medium font-['Poppins']">
              Add User
            </p>
          </button>
        </div>
      </Box>
    </Modal>
  );
};

export default RegisteredUsersModal;
