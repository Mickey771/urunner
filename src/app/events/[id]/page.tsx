"use client";
import { upcomingEvents } from "@/utils/data";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

interface Item {
  id: string;
  heading: string;
  company: string;
  date: string;
  time: string;
  description: string;
  image: string;
  location: string;
}

const Page = () => {
  const [item, setItem] = useState<Item>();
  const { id } = useParams();

  useEffect(() => {
    const item = upcomingEvents.find((item) => item.id === id);
    setItem(item);
  }, [id]);

  return (
    <article className="w-full max-w-[834px] py-[18px] md:py-[28px] px-2 md:px-4 lg:px-6 border-[0.3px] border-[#B9B9B9] rounded-[14px]">
      <div className="flex items-center justify-between">
        <p className=" opacity-60 text-[#202224] text-xs md:text-base font-semibold font-['Nunito Sans']">
          {item?.date}, 2024 {item?.location}
        </p>
        <h2 className=" text-right text-[#202224] text-[18px] md:text-[24px] lg:text-[32px] font-bold font-['Nunito Sans']">
          {item?.heading}
        </h2>
      </div>
      <div className="w-full mt-9">
        <Image
          src={`/${item?.image}`}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "100%" }}
          alt="vr image"
          className="max-h-[294px] object-cover rounded-[15px]"
        />
      </div>
      <p className="lg:h-[159px]">
        <span className="text-[#1b1b1b] text-lg font-normal font-['Poppins']">
          <br />
        </span>
        <span className="text-[#1b1b1b] text-xs md:text-base font-normal font-['Poppins']">
          {item?.description}
        </span>
      </p>

      <h3 className="h-8 text-[#202224] text-base md:text-xl lg:text-2xl font-bold font-['Nunito Sans'] mt-[28px]">
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
          <p className=" text-[#007aff] text-xs md:text-base font-bold font-['Nunito Sans']">
            14+
          </p>
        </span>
      </div>

      <button className="w-full md:w-[200px] h-12 mt-[60px] px-[30px] py-3 bg-[#007aff] rounded-[10px] shadow shadow-inner justify-center items-center gap-2.5 inline-flex">
        <p className="text-center text-white text-base md:text-xl font-semibold font-['Urbanist'] leading-normal">
          Register Now
        </p>
      </button>
    </article>
  );
};

export default Page;
