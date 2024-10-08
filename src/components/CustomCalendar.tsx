import React, { useState } from "react";
import {
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  format,
  isSameMonth,
  isToday,
} from "date-fns";
import { FaAngleLeft } from "react-icons/fa";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import moment from "moment";

const CustomCalendar: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const { events } = useSelector((store: RootState) => store.user);

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const monthDays = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const prevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
    );
  };

  const nextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
    );
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <div className="flex justify-between items-center mb-4">
        <button onClick={prevMonth} className=" text-white rounded">
          <GoChevronLeft size={25} color="#667185" />
        </button>
        <h2 className="text-center  text-[#1d2639] text-lg font-bold font-['Inter'] leading-relaxed">
          {format(currentMonth, "MMMM yyyy")}
        </h2>
        <button onClick={nextMonth} className=" text-white rounded">
          <GoChevronRight size={25} color="#667185" />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1">
        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
          <div
            key={day}
            className="w-11 text-center text-[#344054] text-base font-semibold font-['Inter'] leading-normal"
          >
            {day}
          </div>
        ))}
        {monthDays.map((day, index) => {
          // this is checking if an event is happening on a day
          const isDay = events.find(
            (item) =>
              moment(item.date).format("MM-DD-YYYY") ===
              moment(day).format("MM-DD-YYYY")
          );

          return (
            <button
              key={index}
              className={`
              p-2 text-center w-11  text-base font-normal font-['Inter'] leading-normal rounded-full hover:bg-[#007AFF1A]
              ${isToday(day) ? "bg-primaryBlue text-white " : "text-[#1d2639]"}
              ${!isSameMonth(day, currentMonth) ? "opacity-0" : ""}
              ${isDay ? "text-red-500" : ""}
            `}
            >
              {format(day, "d")}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CustomCalendar;
