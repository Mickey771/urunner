"use client";
import EventItem from "@/components/Admin/EventItem";
import EventsCalendar from "@/components/Admin/EventsCalendar";
import EventDetailsLoader from "@/components/EventDetailsLoader";
import CreateEventModal from "@/components/Modals/CreateEventModal";
import { useDisclosure } from "@/hooks/useDisclosure";
import { useEvents } from "@/hooks/useEvents";
import React, { useState } from "react";
import { BsClockHistory } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";
import { LiaTimesCircle } from "react-icons/lia";
import { TbCirclePlus } from "react-icons/tb";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../redux/store";
import { setEvents } from "../../../../../redux/reducers/adminSlice";
import { useFetchAdmin } from "@/hooks/useFetchAdmin";

const filters = [
  {
    text: "All Events",
    icon: IoHomeOutline,
  },
  // {
  //   text: "Upcoming Events",
  //   icon: BsClockHistory,
  // },
  // {
  //   text: "Cancelled Events",
  //   icon: LiaTimesCircle,
  // },
];

const Page = () => {
  const [selected, setSelected] = useState("All Events");

  const createEventModal = useDisclosure();

  const { isLoading, error } = useFetchAdmin();

  const { events } = useSelector((store: RootState) => store.admin);

  // console.log(events);
  // useEffect(() => {
  //   dispatch(setEvents(data?.data || ([] as Events[])));
  // }, [data]);

  if (error) return <div>An error occurred:</div>;

  return (
    <div className="py-9  mx-auto w-full max-w-admin">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="w-[200px] text-black text-2xl font-semibold font-['Inter'] leading-[28.80px]">
            My Events
          </h1>
          <p className="text-[#667185] text-sm font-normal font-['Inter'] leading-tight">
            Check and edit all events here
          </p>
        </div>
        <button
          onClick={createEventModal.open}
          className="h-9 w-[165px] px-3 py-2 bg-[#007aff] rounded-md  items-center gap-2 inline-flex justify-center text-white text-sm font-medium font-['Inter'] leading-tight"
        >
          <span className="text-white relative">
            <TbCirclePlus size={22} />
          </span>
          New Event
        </button>
      </div>

      <div className="mt-6 flex gap-2.5 ">
        {filters.map((item, index) => {
          const { text, icon: Icon } = item;
          return (
            <button
              key={index}
              onClick={() => setSelected(text)}
              className={`h-9 px-3 py-2 rounded-md  justify-center items-center gap-2 inline-flex ${
                selected === text
                  ? "bg-[#007AFF12]"
                  : "bg-transparent border border-[#d0d4dd]"
              }`}
            >
              <div
                className={`w-4 h-4 relative ${
                  selected === text ? "text-[#007AFF]" : "text-[#344054]"
                }`}
              >
                <Icon />
              </div>
              <div
                className={`text-center text-sm font-medium font-['Inter'] leading-tight ${
                  selected === text ? "text-[#007AFF]" : "text-[#344054]"
                }`}
              >
                {text}
              </div>
              <div
                className={`px-2  rounded-xl flex-col justify-center items-center gap-2 inline-flex ${
                  selected === text
                    ? "text-[#fff] bg-[#007AFF]"
                    : "text-[#344054] bg-[#eff1f4]"
                }`}
              >
                <span
                  className={`text-center text-xs font-medium font-['Inter'] leading-[17.40px] `}
                >
                  {events.length}
                </span>
              </div>
            </button>
          );
        })}
      </div>
      <div className="flex mt-6 gap-[26px] mb-10">
        <EventsCalendar />
        {isLoading ? <EventDetailsLoader /> : <EventItem />}
      </div>

      {createEventModal && <CreateEventModal modal={createEventModal} />}
    </div>
  );
};

export default Page;
