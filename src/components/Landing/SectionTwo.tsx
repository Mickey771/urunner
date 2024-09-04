import { Globe } from "@/assets/svgs";
import React from "react";
import GlobalisingFitness from "./GlobalisingFitness";
import EveryStep from "./EveryStep";
import YourSuccess from "./YourSuccess";
import Image from "next/image";
import ActivityScore from "./ActivityScore";
import ScrollingCountries from "./ScrollingCountries";
import { countries } from "@/utils/data";

const SectionTwo = () => {
  return (
    <section className="w-full px-6 lg:px-0 max-w-max mx-auto mt-[108px] flex flex-col justify-center items-center">
      <h1 className="text-[#202020] text-center text-[32px] md:text-[52px] lg:text-[64px] font-black font-['Urbanist'] lg:leading-[86.25px]">
        Where we are
      </h1>
      <p className="px-6 lg:px-0 lg:w-[710px] mt-[15px] text-center text-[#202020]/80 text-base md:text-xl lg:text-2xl font-semibold font-['Urbanist'] lg:leading-loose">
        URunners around the globe
      </p>

      <div className="mt-[52px] max-h-[724px]">
        <Image
          src={"/map.svg"}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "100%" }}
          alt="map"
        />
      </div>

      {/* <p className="px-6 lg:px-0 lg:w-[710px] mt-[15px] mb-16 text-center text-[#202020]/80 text-base md:text-xl lg:text-2xl font-semibold font-['Urbanist'] lg:leading-loose">
        We are located in the following countries and more
      </p> */}

      {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mb-40"> */}
      {/* <div className="w-full p-10 mb-40 overflow-x-scroll">
        <div className="flex w-full transition-all duration-[10s] translate-x-[-100%] gap-10 ">
          {countries.map((item, index) => (
            <div
              key={index}
              className=" flex gap-2.5 items-center justify-center w-full py-4 md:py-6 lg:py-1 px-2 md:px-3 lg:px-5 shadow-[0px_3.01px_15.427px_rgba(20,0,66,0.1)] rounded-[10px]"
            >
              <span className="w-6 h-6 inline-flex rounded-full">
                <Image
                  src={`/countries/${item.icon}.png`}
                  height={0}
                  width={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "100%" }}
                  alt={item.icon}
                  className="object-cover rounded-full"
                />
              </span>
              <p className="  text-black text-[12px] mb:text-[16px] md:text-[20px] lg:text-[25.53px] font-semibold font-['Poppins']">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div> */}
      <ScrollingCountries countries={countries} />

      <h1 className="text-[#202020] text-center text-[32px] md:text-[50px] lg:text-[64px] font-black font-['Urbanist'] leading-[86.25px]">
        Who we are
      </h1>
      <GlobalisingFitness />
      <EveryStep />
      <YourSuccess />
      <ActivityScore />
    </section>
  );
};

export default SectionTwo;
