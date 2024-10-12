import { useDisclosure } from "@/hooks/useDisclosure";
import Image from "next/image";
import React from "react";
import { GoPaperclip } from "react-icons/go";
import { SlPencil } from "react-icons/sl";
import RegisteredUsersModal from "../Modals/RegisteredUsersModal";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import moment from "moment";
import DeleteConfirmationModal from "../Modals/DeleteConfirmationModal";
import { setIsDeleteEventModal } from "../../../redux/reducers/adminSlice";
import { useDispatch } from "react-redux";

const EventItem = () => {
  const { selectedEvent } = useSelector((store: RootState) => store.admin);
  const registeredUsersModal = useDisclosure();
  const deleteConfirmationModal = useDisclosure();

  const dispatch = useDispatch();

  if (!selectedEvent?._id) return <p>No event selected</p>;

  return (
    <section className="relative w-full ">
      <aside className="w-full sticky left-0 top-[110px] ">
        <div className="flex justify-between items-center">
          <p className="w-[241px]  opacity-60 text-[#202224] text-base font-semibold font-['Nunito Sans']">
            {moment(selectedEvent?.date).format("DD MMM YYYY")}{" "}
            {selectedEvent?.location}
          </p>
          <h2 className="w-[335px] text-right text-[#202224] text-[32px] font-bold font-['Nunito Sans']">
            {selectedEvent?.title}
          </h2>
        </div>
        <span className="inline-flex w-full h-[264px] mt-9">
          <Image
            src={selectedEvent?.image}
            width={0}
            height={0}
            style={{ width: "100%", height: "100%" }}
            sizes="100vw"
            alt="bg"
            className="object-cover rounded-[15px]"
          />
        </span>
        <p className="max-h-[159px]">
          <span className="text-[#1b1b1b] text-lg font-normal font-['Poppins']">
            <br />
          </span>
          <span className="text-[#1b1b1b] text-base font-normal font-['Poppins']">
            {selectedEvent?.write_up}
          </span>
        </p>

        <form className="mt-7">
          <label
            htmlFor="link"
            className="text-[#101828] text-sm font-medium font-['Inter'] leading-tight"
          >
            Registration Link
          </label>
          <div className="flex mt-1 gap-2 items-center bg-white w-fit [375px] p-4 border border-[#D0D5DD] rounded-md">
            <span>
              <GoPaperclip size={18} color="#98A2B3" />
            </span>
            {/* <input
              type="text"
              placeholder="https://registration_link.com"
              className="w-full focus:outline-none"
            /> */}
            <a target="_blank" href={selectedEvent?.link}>
              {selectedEvent?.link}
            </a>
            {/* <span>
              <SlPencil size={18} color="#98A2B3" />
            </span> */}
          </div>
        </form>

        {/* <h2 className="mt-10 h-8 text-[#202224] text-2xl font-bold font-['Nunito Sans']">
          Registered Attendees
        </h2> */}

        {/* <div className="flex gap-4 mt-4">
          {Array.from({ length: 5 }, (_, index) => (
            <span key={index} className="">
              <Image
                src={"/man2.png"}
                height={50}
                width={50}
                alt="man"
                className="rounded-full object-cover"
              />
            </span>
          ))}
          <button
            onClick={registeredUsersModal.open}
            className="w-[50px] h-[50px] flex justify-center items-center text-[#007aff] text-base font-bold font-['Nunito Sans'] p-2 border border-[#007AFF] rounded-full"
          >
            <span>14+</span>
          </button>
        </div> */}

        {/* THIS MODAL WAS ADDED IN src/components/Admin/EventsCalendar.tsx */}
        <button
          type="button"
          onClick={() => dispatch(setIsDeleteEventModal(true))}
          className="mt-[60px] h-[55px] px-6 py-4 bg-[#D50000] rounded-lg flex-col justify-center items-center gap-2.5 inline-flex"
        >
          <span className="text-center text-[#fff] text-base font-semibold font-['Inter'] leading-normal">
            Delete Event
          </span>
        </button>

        {registeredUsersModal.isOpen && (
          <RegisteredUsersModal modal={registeredUsersModal} />
        )}
      </aside>
    </section>
  );
};

export default EventItem;
