import { Fitbit, Garmin, Oura, Strava } from "@/assets/svgs";
import React from "react";

const SectionThree = () => {
  return (
    <section className="w-full max-w-max mx-auto mt-[111px] flex flex-col justify-center items-center">
      <h1 className="text-[#202020] text-center text-[64px] font-black font-['Urbanist'] leading-[86.25px]">
        Our Partners
      </h1>
      <p className="w-[710px] mt-[15px] text-center text-[#202020]/80 text-2xl font-semibold font-['Urbanist'] leading-loose">
        We are in collaboration with other notable companies and brands
      </p>
      <div className="mt-[52px] flex gap-4 ">
        <span className="pt-6 px-[30px]">
          <Garmin />
        </span>
        <span className="pt-6 px-[30px]">
          <Fitbit />
        </span>
        <span className="pt-6 px-[30px]">
          <Strava />
        </span>
        <span className="pt-6 px-[30px]">
          <Oura />
        </span>
      </div>
    </section>
  );
};

export default SectionThree;
