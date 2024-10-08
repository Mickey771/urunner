"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../redux/store";

const Page = () => {
  const [event, setEvent] = useState<Events>();
  const { id } = useParams();

  const { events } = useSelector((store: RootState) => store.user);

  useEffect(() => {
    setEvent(events.find((e) => e._id === id) as Events);
    console.log("event", event);
  }, [id, events]);

  return (
    <article className="w-full max-w-[834px] py-[18px] md:py-[28px] px-2 md:px-4 lg:px-6 border-[0.3px] border-[#B9B9B9] rounded-[14px]">
      <div className="flex items-center justify-between">
        <p className="text-[#202224] max-w-[150px] md:max-w-[400px] text-xs md:text-base font-['Nunito Sans']">
          <span className="font-extrabold opacity-100">
            {event && new Date(event.date).toLocaleDateString()}{" "}
          </span>
          <span className="opacity-60 font-bold">
            {event?.location || "Location not specified"}
          </span>
        </p>
        <h2 className="text-right text-[#202224] text-[18px] md:text-[24px] lg:text-[32px] font-semibold font-['Nunito Sans']">
          {event?.title}
        </h2>
      </div>
      <div className="w-full mt-9">
        {event && (
          <img
            src={event?.image} // Replace with actual image from API if available
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "100%" }}
            alt="event image"
            className="max-h-[294px] object-cover rounded-[15px]"
          />
        )}
      </div>
      <p className="lg:h-[159px]">
        <span className="text-[#1b1b1b] text-lg font-normal font-['Poppins']">
          <br />
        </span>
        <span className="text-[#1b1b1b] text-xs md:text-base font-normal font-['Poppins']">
          {event?.write_up}
        </span>
      </p>

      {/* <h3 className="h-8 text-[#202224] text-base md:text-xl lg:text-2xl font-bold font-['Nunito Sans'] mt-[28px]">
        Registered Attendees
      </h3>
      <div className="flex items-center gap-3 mt-[14px]">
        {Array.from({ length: 1 }, (_, index) => (
          <div key={index}>
            <Image
              src={"/man3.png"}
              alt="profile"
              height={41}
              width={41}
              className="rounded-full"
            />
          </div>
        ))}
        <span className="w-8 md:w-10 h-8 md:h-10 inline-flex justify-center items-center border border-primaryBlue rounded-full bg-[#DFE9FF5E]">
          <p className="text-[#007aff] text-xs md:text-base font-bold font-['Nunito Sans']">
            14+
          </p>
        </span>
      </div> */}

      <a
        href={event?.link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full md:w-[200px] h-12 mt-[30px] px-[30px] py-3 bg-[#007aff] rounded-[10px] shadow-inner justify-center items-center gap-2.5 inline-flex"
      >
        <p className="text-center text-white text-base md:text-xl font-semibold font-['Urbanist'] leading-normal">
          Register Now
        </p>
      </a>
    </article>
  );
};

export default Page;
