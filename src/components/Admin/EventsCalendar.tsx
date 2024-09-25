import React from "react";
import CustomCalendar from "../CustomCalendar";
import UpcomingEvent from "./UpcomingEvent";

const EventsCalendar = () => {
  return (
    <div className="py-6 bg-white w-full max-w-[355px] rounded-[12px] border border-[#E4E7EC]">
      <h2 className="px-6 text-[#101828] pb-4 border-b border-[#E4E7EC] text-lg font-semibold font-['Inter'] leading-relaxed">
        Events Calendar
      </h2>
      <div className="px-6 pb-10 border-b border-[#E4E7EC]">
        {" "}
        <CustomCalendar />
      </div>
      <div className="px-1 mx-auto py-10">
        <UpcomingEvent />
      </div>
    </div>
  );
};

export default EventsCalendar;
