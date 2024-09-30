import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { FaAngleLeft, FaCheck } from "react-icons/fa6";
import { style } from "./config";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { setModal } from "../../../redux/reducers/userSlice";

const ConfirmationModal = () => {
  const { isModal, modalMessage } = useSelector(
    (store: RootState) => store.user
  );

  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <Modal
      open={isModal}
      onClose={() => dispatch(setModal({ message: "", open: false }))}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="backdrop-blur-[3px]"
    >
      <Box
        sx={style}
        className="bg-white pt-[30px] pb-24 max-h-[90%] relative  overflow-y-scroll  w-[936px] rounded-[15px] "
      >
        <h2 className="text-[#333333] text-center mb-[62px] text-[22px] font-medium font-['Poppins']">
          FORM SUBMISSION
        </h2>
        <div className="flex flex-col items-center">
          <h3 className="text-zinc-800 text-2xl font-semibold font-['Poppins']">
            Congratulations
          </h3>
          <span className="inline-flex bg-[#1FAF38] mt-[27px] mb-10 h-[70px] w-[70px] justify-center items-center rounded-full ">
            <FaCheck fontSize={40} color="white" />
          </span>
          <p className="text-center text-zinc-800 mb-10 text-lg font-normal font-['Poppins']">
            {modalMessage}
          </p>
          <button
            onClick={() => {
              dispatch(setModal({ message: "", open: false }));
            }}
            className="w-full max-w-[407px] h-[51px] mt-0 mx-auto mb-4 flex items-center justify-center gap-2 bg-primaryBlue rounded-[10px]"
          >
            <p className="text-center text-white text-lg font-medium font-['Poppins']">
              CLOSE
            </p>
          </button>
        </div>
      </Box>
    </Modal>
  );
};

export default ConfirmationModal;
