import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { style } from "./config";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../../../redux/reducers/userSlice";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import { RootState } from "../../../redux/store";
import {
  setDayEvents,
  setEvents,
  setIsDeleteEventModal,
  setIsLoading,
  setSelectedevent,
} from "../../../redux/reducers/adminSlice";

const DeleteConfirmationModal: React.FC<{
  setCurrentIndex: (index: number) => void;
}> = ({ setCurrentIndex }) => {
  const [error, setError] = React.useState("");

  const dispatch = useDispatch();

  const {
    token,
    selectedEvent,
    events,
    dayEvents,
    isDeleteEventModal,
  } = useSelector((store: RootState) => store.admin);

  //   console.log(event);

  const handleDelete = async () => {
    dispatch(setIsLoading(true));

    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_BASE_URL}/admin/delete_event/${selectedEvent._id}`,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        console.log("Event deleted successfully:", response.data);

        const updatedEvents = events.filter(
          (event) => event._id !== selectedEvent._id
        );
        const updatedDayEvents = dayEvents.filter(
          (event) => event._id !== selectedEvent._id
        );
        dispatch(setEvents([...updatedEvents]));
        dispatch(setSelectedevent({}));
        dispatch(setDayEvents(updatedDayEvents));
        setCurrentIndex(0);

        dispatch(setIsDeleteEventModal(false));
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
      console.log("error", error);
    } finally {
      dispatch(setIsLoading(false));
    }
  };

  return (
    <Modal
      open={isDeleteEventModal}
      onClose={() => dispatch(setIsDeleteEventModal(false))}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="backdrop-blur-[3px]"
    >
      <Box
        sx={style}
        className="bg-white pt-[30px] pb-24 max-h-[90%] relative  overflow-y-scroll  w-[936px] rounded-[15px] "
      >
        <h2 className="text-[#333333] text-center mb-[42px] text-[22px] font-medium font-['Poppins']">
          CONFIRMATION
        </h2>
        <div className="flex flex-col items-center">
          <span className="inline-flex bg-[#D50000] mt-[27px] mb-10 h-[90px] w-[90px] justify-center items-center rounded-full ">
            <MdDelete fontSize={60} color="white" />
          </span>

          <p className="text-center text-zinc-800 mb-10 text-lg font-normal font-['Poppins']">
            Are you sure you want to delete this event
          </p>
          <div className="flex gap-10 w-full justify-center">
            <button
              onClick={handleDelete}
              className="w-full max-w-[207px] h-[51px] mt-0 mb-4 flex items-center justify-center gap-2 bg-[#D50000] hover:bg-white hover:text-[#D50000] text-white border border-[#D50000] rounded-[10px]"
            >
              <p className="text-center  text-lg font-medium font-['Poppins']">
                DELETE
              </p>
            </button>
            <button
              onClick={() => dispatch(setIsDeleteEventModal(false))}
              className="w-full max-w-[207px] h-[51px] mt-0 mb-4 flex items-center justify-center gap-2 bg-primaryBlue text-white hover:bg-white hover:text-primaryBlue border border-primaryBlue rounded-[10px]"
            >
              <p className="text-center  text-lg font-medium font-['Poppins']">
                CLOSE
              </p>
            </button>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default DeleteConfirmationModal;
