import { Box, Modal } from "@mui/material";
import React, { useState } from "react";
import { style } from "./config";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import CommunityDetailHeader from "./CommunityDetailHeader";
import {
  CommunityDetailsStepOne,
  CommunityDetailsStepThree,
  CommunityDetailsStepTwo,
} from "../Steps";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { setCommunityModalStep } from "../../../redux/reducers/userSlice";

const navigation = [
  {
    id: 1,
    icon: "/users.svg",
    component: <CommunityDetailsStepOne />,
  },
  {
    id: 2,
    icon: "/info.svg",
    component: <CommunityDetailsStepTwo />,
  },
  {
    id: 3,
    icon: "/media.svg",
    component: <CommunityDetailsStepThree />,
  },
];

const CommunityDetailsModal: React.FC<ModalProps> = ({ modal }) => {
  const { communityModalStep: step } = useSelector(
    (store: RootState) => store.user
  );

  const dispatch = useDispatch();

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
        className="bg-white relative h-full max-h-[90%] w-full  md:w-[784px] max-w-[370px] md:max-w-[784px] overflow-y-hidden  rounded-[15px] "
      >
        <div className=" px-8 py-4 border-b border-[#E5E7E8] flex items-center justify-between">
          <div className="w-[151px] h-10 relative flex items-center border-[0.6px] border-[#D5D5D5] px-3 rounded-[19px]">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => dispatch(setCommunityModalStep(item.id - 1))}
                className={`inline-flex justify-center px-2.5 py-2 ${
                  item.id - 1 === step
                    ? "border border-x-[#007bff20] border-y-primaryBlue"
                    : ""
                }`}
              >
                <Image src={item.icon} height={22} width={22} alt={item.icon} />
              </button>
            ))}
          </div>
          <button className="p-2 rounded-full bg-[#F5F6F7]">
            <IoClose size={25} />
          </button>
        </div>
        <div className="flex flex-col h-full   pt-7 pb-24 gap-5   overflow-y-auto ">
          <CommunityDetailHeader />
          {navigation[step].component}
        </div>
      </Box>
    </Modal>
  );
};

export default CommunityDetailsModal;
