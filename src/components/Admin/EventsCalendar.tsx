import React from "react";
import CustomCalendar from "../CustomCalendar";
import EventCarousel from "./EventsCarousel";
import { useEventCarousel } from "@/hooks/useEventCarousel";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import DeleteConfirmationModal from "../Modals/DeleteConfirmationModal";

const EventsCalendar = () => {
  const { dayEvents, isDeleteEventModal } = useSelector(
    (store: RootState) => store.admin
  );

  const {
    currentEvent: event,
    goToNextEvent,
    goToPrevEvent,
    setCurrentIndex,
  } = useEventCarousel(dayEvents);

  return (
    <div className="py-6 bg-white w-full max-w-[395px] rounded-[12px] border border-[#E4E7EC]">
      <h2 className="px-6 text-[#101828] pb-4 border-b border-[#E4E7EC] text-lg font-semibold font-['Inter'] leading-relaxed">
        Events Calendar
      </h2>
      <div className="px-6 pb-10 border-b border-[#E4E7EC]">
        {" "}
        <CustomCalendar setCurrentIndex={setCurrentIndex} />
      </div>
      <EventCarousel
        event={event}
        goToNextEvent={goToNextEvent}
        goToPrevEvent={goToPrevEvent}
        events={dayEvents}
      />

      {isDeleteEventModal && (
        <DeleteConfirmationModal setCurrentIndex={setCurrentIndex} />
      )}
    </div>
  );
};

export default EventsCalendar;
