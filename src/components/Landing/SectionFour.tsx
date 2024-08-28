import { Bentman, Quotesclose, Quotesopen } from "@/assets/svgs";
import Image from "next/image";
import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { HiOutlineChevronRight } from "react-icons/hi";

const SectionFour = () => {
  return (
    <section className="w-full max-w-max mx-auto mt-[153px] flex flex-col justify-center items-center">
      <h1 className="text-[#202020] text-center text-[64px] font-black font-['Urbanist'] leading-[86.25px]">
        Our Events
      </h1>
      <p className="w-[710px] mt-[15px] text-center text-[#202020]/80 text-2xl font-semibold font-['Urbanist'] leading-loose">
        We have amazing events upcoming for your taste and progress.
      </p>

      <div className="flex items-center gap-[38px] mt-[52px]">
        {Array.from({ length: 3 }, (_, index) => (
          <div
            key={index}
            className="flex flex-col rounded-[6px] shadow-[7px_10px_40px_0px_rgba(0,0,0,0.10)] p-[15px]"
          >
            <Image src={"/adults.png"} width={314} height={173} alt="adult" />
            <h3 className="text-[#202224] text-[28px] font-bold font-['Urbanist'] mt-[19px] mb-[15px]">
              Design Conference
            </h3>
            <p className="text-[#646464] text-xl font-semibold font-['Urbanist']">
              Zillul Design Agency
            </p>
            <p className="text-[#909090] text-xl font-semibold font-['Urbanist'] my-2">
              Today 07:19 AM
            </p>
            <p className="text-[#969696] text-xl font-semibold font-['Urbanist'] leading-[18px]">
              tyruj hdtgfj jhfjkg ..........
            </p>

            <div className="mt-[46px] flex justify-between items-center">
              <div className=" flex gap-2 items-center">
                <Image
                  src={"/man1.png"}
                  height={34}
                  width={34}
                  alt="man"
                  className="rounded-full"
                />
                <Image
                  src={"/man2.png"}
                  height={34}
                  width={34}
                  alt="man"
                  className="rounded-full"
                />
                <Image
                  src={"/man3.png"}
                  height={34}
                  width={34}
                  alt="man"
                  className="rounded-full"
                />

                <span className="w-[30px] h-[30px] flex items-center justify-center border border-[#b0559b] rounded-full">
                  <p className="text-[#b0559b] text-[13px] font-medium font-['Circular Std']">
                    15+
                  </p>
                </span>
              </div>
              <span>
                <HiOutlineChevronRight size={25} />
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-primaryBlue w-full mt-[360px] rounded-[60px] h-[514px] flex items-center px-[166px]">
        <div className="w-full flex flex-col gap-[61px]">
          <h2 className="relative text-white text-[40px] font-bold font-['Urbanist'] leading-[53.90px]">
            The only person you are
            <br />
            destined to become is the
            <br />
            person you decide to be.
            <span className="absolute top-[-20%] left-[-16.4%]">
              <Quotesopen />
            </span>
            <span className="absolute bottom-[-20%] right-[-7%]">
              <Quotesclose />
            </span>
          </h2>
          <p className="text-white text-[32px] font-semibold font-['Urbanist'] leading-[43.12px]">
            Ralph Waldo Emersone
          </p>
        </div>
        <div className="w-full h-full relative">
          <span className="absolute bottom-0 right-0">
            <Bentman />
          </span>
        </div>
      </div>
    </section>
  );
};

export default SectionFour;
