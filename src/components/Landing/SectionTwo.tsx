import { Globe } from "@/assets/svgs";
import React from "react";
import GlobalisingFitness from "./GlobalisingFitness";
import EveryStep from "./EveryStep";
import YourSuccess from "./YourSuccess";
import Image from "next/image";
import ActivityScore from "./ActivityScore";

const SectionTwo = () => {
  return (
    <section className="w-full px-6 lg:px-0 max-w-max mx-auto mt-[108px] flex flex-col justify-center items-center">
      <h1 className="text-[#202020] text-center text-[32px] md:text-[52px] lg:text-[64px] font-black font-['Urbanist'] lg:leading-[86.25px]">
        Where we are
      </h1>
      <p className="px-6 lg:px-0 lg:w-[710px] mt-[15px] text-center text-[#202020]/80 text-base md:text-xl lg:text-2xl font-semibold font-['Urbanist'] lg:leading-loose">
        {/* We are present in various locations around the world */}
        URunners around the globe
      </p>

      <div className="mt-[52px]">
        <Image
          src={"/map.svg"}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "100%" }}
          alt="map"
        />
      </div>

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
