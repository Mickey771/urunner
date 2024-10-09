import React, { useEffect, useState } from "react";
import {
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  format,
  isSameMonth,
  isToday,
} from "date-fns";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import moment from "moment";
import { useFetchAdmin } from "@/hooks/useFetchAdmin";
import { useDispatch } from "react-redux";
import {
  setDayEvents,
  setEvents,
  setSelectedevent,
} from "../../redux/reducers/adminSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const CustomCalendar: React.FC<CustomCalendarProps> = ({ setCurrentIndex }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selected, setSelected] = useState<string>();

  const { events } = useFetchAdmin() as {
    events: Events[];
  };

  // const { events } = useSelector((store: RootState) => store.admin);

  const dispatch = useDispatch();

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

  const handleClick = (day: string, dayEvents: Events[]) => {
    dispatch(setDayEvents(dayEvents));
    setCurrentIndex(0);
    dayEvents.length > 0 && dispatch(setSelectedevent(dayEvents[0]._id));
    setSelected(day);
  };

  useEffect(() => {
    const dayEvents = events.filter(
      (item) =>
        moment(item.date).format("MM-DD-YYYY") ===
        moment(Date.now()).format("MM-DD-YYYY")
    );
    dispatch(setDayEvents(dayEvents));
  }, []);

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
      <div className="grid grid-cols-7 gap-1 gap-y-2">
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
          const dayEvents = events.filter(
            (item) =>
              moment(item.date).format("MM-DD-YYYY") ===
              moment(day).format("MM-DD-YYYY")
          );

          return (
            <button
              key={index}
              onClick={() =>
                handleClick(moment(day).format("MM-DD-YYYY"), dayEvents)
              }
              className={`
              p-2 text-center w-11 flex flex-col gap-[2px] items-center text-base font-normal font-['Inter'] leading-normal rounded-full hover:bg-[#007AFF1A]
              ${!isSameMonth(day, currentMonth) ? "opacity-0" : ""}
              ${isToday(day) ? "bg-primaryBlue text-white " : "text-[#1d2639]"}
              ${
                selected === moment(day).format("MM-DD-YYYY") &&
                "bg-[#007bff38]"
              }
            `}
            >
              {format(day, "d")}
              {dayEvents.length > 0 && (
                <span className="inline-flex h-2 w-2 bg-primaryBlue rounded-full"></span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CustomCalendar;
