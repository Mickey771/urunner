import React, { useState, useCallback, useRef, useEffect } from "react";
import Image from "next/image";
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi";
import { useDispatch } from "react-redux";
import moment from "moment";
import { setSelectedevent } from "../../../redux/reducers/adminSlice";

const EventCarousel: React.FC<EventCarouselProps> = ({
  event,
  goToNextEvent,
  goToPrevEvent,
  events,
}) => {
  const dispatch = useDispatch();

  const handleEventClick = useCallback(() => {
    if (event) {
      dispatch(setSelectedevent(event._id));
      // console.log(event);
    }
  }, [dispatch, event]);

  if (events?.length === 0) {
    return <p className="py-10 px-4">No events on this day</p>;
  }

  return (
    <div
      onClick={handleEventClick}
      className="px-1 mx-auto py-10 relative cursor-pointer  h-[450px]"
    >
      <div className="flex flex-col mx-auto w-full min-w-[294px] max-w-[234px] rounded-[6px] shadow-[7px_10px_40px_0px_rgba(0,0,0,0.10)] p-[15px]">
        <Image
          src={event?.image || ""}
          width={314}
          height={173}
          alt="event"
          className="max-h-[173px] object-cover"
        />
        <h3 className="text-[#202224] text-[18px] md:text-[22px] lg:text-[28px] font-bold font-['Urbanist'] mt-[19px] mb-[15px]">
          {event?.title}
        </h3>
        <p className="text-[#909090] text-sm md:text-base lg:text-xl font-semibold font-['Urbanist'] my-2">
          {event?.date ? moment(event.date).format("DD MMM YYYY") : ""}
        </p>
        <p className="text-[#969696] text-sm md:text-base lg:text-xl font-semibold font-['Urbanist'] leading-[18px]">
          {event?.write_up}
        </p>
      </div>

      {events?.length > 1 && (
        <>
          <button
            onClick={goToPrevEvent}
            className="absolute left-1 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
          >
            <HiOutlineChevronLeft size={25} />
          </button>
          <button
            onClick={goToNextEvent}
            className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
          >
            <HiOutlineChevronRight size={25} />
          </button>
        </>
      )}
    </div>
  );
};

export default EventCarousel;
