import { Globe } from "@/assets/svgs";
import React from "react";
import GlobalisingFitness from "./GlobalisingFitness";
import EveryStep from "./EveryStep";
import YourSuccess from "./YourSuccess";

const SectionTwo = () => {
  return (
    <section className="w-full max-w-max mx-auto mt-[108px] flex flex-col justify-center items-center">
      <h1 className="text-[#202020] text-center text-[64px] font-black font-['Urbanist'] leading-[86.25px]">
        Who we are
      </h1>
      <GlobalisingFitness />
      <EveryStep />
      <YourSuccess />
    </section>
  );
};

export default SectionTwo;
