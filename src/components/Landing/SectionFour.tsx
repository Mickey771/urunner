import { upcomingEvents } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiOutlineChevronRight } from "react-icons/hi";

const SectionFour = () => {
  return (
    <section className="w-full max-w-max mx-auto mt-[153px] flex flex-col justify-center items-center ">
      <h1 className="text-[#202020] text-center text-[32px] md:text-[52px] lg:text-[64px] font-black font-['Urbanist'] lg:leading-[86.25px]">
        Our Events
      </h1>
      <p className="px-6 lg:px-0 lg:w-[710px] mt-[15px] text-center text-[#202020]/80 text-base md:text-xl lg:text-2xl font-semibold font-['Urbanist'] lg:leading-loose">
        Come join us at our next event
      </p>

      <div className="flex lg:justify-center items-center gap-[15px] md:gap-[38px] mt-[20px] lg:mt-[52px] w-full px-6 lg:px-0 py-8  overflow-x-scroll">
        {upcomingEvents.map((item, index) => (
          <Link
            href={`/events/${item.id}`}
            key={index}
            className="flex flex-col w-full min-w-[266px] max-w-[344px] rounded-[6px] shadow-[7px_10px_40px_0px_rgba(0,0,0,0.10)] p-[15px]"
          >
            <Image
              src={`/${item.image}`}
              width={314}
              height={173}
              alt="adult"
              className="max-h-[173px] object-cover"
            />
            <h3 className="text-[#202224] text-[18px] md:text-[22px] lg:text-[28px] font-bold font-['Urbanist'] mt-[19px] mb-[15px]">
              {item.heading.slice(0, 20)}
              {item.heading.length > 20 && "..."}
            </h3>
            <p className="text-[#646464] text-sm md:text-base lg:text-xl font-semibold font-['Urbanist']">
              {item.company}
            </p>
            <p className="text-[#909090] text-sm md:text-base lg:text-xl font-semibold font-['Urbanist'] my-2">
              {item.time}
            </p>
            <p className="text-[#969696] text-sm md:text-base lg:text-xl font-semibold font-['Urbanist'] leading-[18px]">
              {item.description.slice(0, 60)}...
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
          </Link>
        ))}
      </div>

      <div className="bg-primaryBlue w-full mt-[300px] lg:mt-[360px] rounded-[25px] md:rounded-[35px] lg:rounded-[60px] h-[514px] flex gap-5 flex-col-reverse lg:flex-row  items-center px-[30px] md:px-[80px] lg:px-[166px] pb-[87px] lg:pb-0">
        <div className="w-full flex flex-col items-center gap-[32px] lg:gap-[61px]">
          <h2 className="relative w-fit text-left text-white text-24px md:text-[32px] lg:text-[40px] font-bold font-['Urbanist'] lg:leading-[53.90px]">
            The only person you are
            <br />
            destined to become is the
            <br />
            person you decide to be.
            <span className="inline-flex absolute top-[-20%] w-[42px] md:w-[82px] left-[-22%] lg:left-[-16.4%]">
              {/* <Quotesopen /> */}
              <Image
                src={"/quotesopen.svg"}
                height={0}
                width={0}
                alt="quote"
                sizes="100vw"
                style={{ width: "100%", height: "100%" }}
              />
            </span>
            <span className="inline-flex absolute bottom-[-22%] w-[42px] md:w-[82px] right-[-19%] lg:right-[-11%]">
              {/* <Quotesclose /> */}
              <Image
                src={"/quotesclose.svg"}
                height={0}
                width={0}
                alt="quote"
                sizes="100vw"
                style={{ width: "100%", height: "100%" }}
              />
            </span>
          </h2>
          <p className="w-fit text-center text-white text-[18px] md:text-[26px] lg:text-[32px] font-semibold font-['Urbanist'] leading-[43.12px]">
            Ralph Waldo Emerson
          </p>
        </div>
        <div className="w-full h-[255px] lg:h-full  relative">
          <div className="inline-flex justify-center absolute bottom-0 right-0 w-full">
            <span className="  w-full max-w-[216px] lg:max-w-[424px]">
              {/* <Bentman /> */}
              <Image
                src={"bentman.svg"}
                height={0}
                width={0}
                sizes="100vw"
                alt="man"
                style={{ width: "100%", height: "100%" }}
              />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFour;
