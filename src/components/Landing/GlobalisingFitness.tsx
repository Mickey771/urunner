import { Globe } from "@/assets/svgs";
import React from "react";

const GlobalisingFitness = () => {
  return (
    <div className="flex items-center mt-6">
      <span>
        <Globe />
      </span>
      <div>
        <h2 className="leading-[53.90px] text-[40px] font-extrabold font-['Urbanist'] ">
          <span className="text-white bg-primaryBlue rounded-[5px] py-1">
            Globalising
          </span>
          <span className="text-[#202020] "> fitness together</span>
        </h2>
        <div className="mt-10 max-w-[636px]">
          <span className="text-[#212020b2] text-2xl font-medium font-['Urbanist'] leading-loose">
            Our goal is to promote fitness and health by incentivizing
            <br />
            your daily activities on the Solana Blockchain. We simply
            <br />
            connect to your fitness App and bring awareness of self
            <br />
            health by tokenizing and rewarding your daily steps and calories.{" "}
            <br />
          </span>
          <span className="text-[#007aff] text-2xl font-extrabold font-['Urbanist'] leading-loose">
            U
          </span>
          <span className="text-[#202020] text-2xl font-extrabold font-['Urbanist'] leading-loose">
            Step
          </span>
          <span className="text-[#212020b2] text-2xl font-extrabold font-['Urbanist'] leading-loose">
            {" "}
          </span>
          <span className="text-[#007aff] text-2xl font-extrabold font-['Urbanist'] leading-loose">
            U
          </span>
          <span className="text-[#202020] text-2xl font-extrabold font-['Urbanist'] leading-loose">
            Run
          </span>
          <span className="text-[#007aff] text-2xl font-extrabold font-['Urbanist'] leading-loose">
            {" "}
            U
          </span>
          <span className="text-[#202020] text-2xl font-extrabold font-['Urbanist'] leading-loose">
            Earn
          </span>
          <span className="text-[#202020]/70 text-2xl font-extrabold font-['Urbanist'] leading-loose">
            {" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default GlobalisingFitness;
