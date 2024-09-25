import Image from "next/image";
import React from "react";
import { HiOutlineChevronRight } from "react-icons/hi2";

const UpcomingEvent = () => {
  return (
    <div
      // href={`/events/${item.id}`}
      className="flex flex-col w-full min-w-[266px] lg:min-w-[344px] max-w-[344px] rounded-[6px] shadow-[7px_10px_40px_0px_rgba(0,0,0,0.10)] p-[15px]"
    >
      <Image
        src={`/mumbai.png`}
        width={314}
        height={173}
        alt="adult"
        className="max-h-[173px] object-cover"
      />
      <h3 className="text-[#202224] text-[18px] md:text-[22px] lg:text-[28px] font-bold font-['Urbanist'] mt-[19px] mb-[15px]">
        Design Conference
      </h3>
      <p className="text-[#646464] text-sm md:text-base lg:text-xl font-semibold font-['Urbanist']">
        Zillul Design Agency
      </p>
      <p className="text-[#909090] text-sm md:text-base lg:text-xl font-semibold font-['Urbanist'] my-2">
        Today 07:19 AM
      </p>
      <p className="text-[#969696] text-sm md:text-base lg:text-xl font-semibold font-['Urbanist'] leading-[18px]">
        tyruj hdtgfj jhfjkg ..........
      </p>

      <div className="mt-[20px] lg:mt-[46px] flex justify-between items-center">
        <div className=" flex gap-2 items-center">
          <span className="inline-flex w-[20px] lg:w-[34px]">
            <Image
              src={"/man1.png"}
              height={0}
              width={0}
              alt="man"
              sizes="100vw"
              style={{ width: "100%", height: "100%" }}
              className="rounded-full"
            />
          </span>
          <span className="inline-flex w-[20px] lg:w-[34px]">
            <Image
              src={"/man2.png"}
              height={0}
              width={0}
              alt="man"
              sizes="100vw"
              style={{ width: "100%", height: "100%" }}
              className="rounded-full"
            />
          </span>
          <span className="inline-flex w-[20px] lg:w-[34px]">
            <Image
              src={"/man3.png"}
              height={0}
              width={0}
              alt="man"
              sizes="100vw"
              style={{ width: "100%", height: "100%" }}
              className="rounded-full"
            />
          </span>

          <span className="w-full max-w-5 px-1  h-5 lg:max-w-[30px] lg:h-[30px] flex items-center justify-center border border-[#b0559b] rounded-full">
            <p className="text-[#b0559b] text-[10px] lg:text-[13px] font-medium font-['Circular Std']">
              15+
            </p>
          </span>
        </div>
        <span>
          <HiOutlineChevronRight size={25} />
        </span>
      </div>
    </div>
  );
};

export default UpcomingEvent;
