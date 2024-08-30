import { Globe } from "@/assets/svgs";
import Image from "next/image";
import React from "react";

const GlobalisingFitness = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center mt-6 pt-[75px] lg-[pt-0]">
      <span className="inline-flex w-full max-w-[623px]">
        <Image
          src={"globe.svg"}
          width={0}
          height={0}
          style={{ width: "100%", height: "100%" }}
          alt="globe"
          sizes="100vw"
        />
      </span>
      <div>
        <h2 className="absolute top-0 left-0 md:relative w-full text-center lg:text-left md:leading-[53.90px] text-[24px] md:text-[32px] lg:text-[40px] font-extrabold font-['Urbanist']  ">
          <span className="text-white bg-primaryBlue rounded-[5px] py-1">
            Globalising
          </span>
          <span className="text-[#202020] "> fitness together</span>
        </h2>
        <div className="mt-5 md:mt-10 max-w-[636px]">
          <span className="text-[#212020b2] text-base md:text-xl lg:text-2xl font-medium font-['Urbanist'] md:leading-loose">
            Our goal is to promote fitness and health by incentivizing
            <br />
            your daily activities on the Solana Blockchain. We simply
            <br />
            connect to your fitness App and bring awareness of self
            <br />
            health by tokenizing and rewarding your daily steps and calories.{" "}
            <br />
          </span>
          <span className="text-[#007aff] text-base md:text-xl lg:text-2xl font-extrabold font-['Urbanist'] leading-loose">
            U
          </span>
          <span className="text-[#202020] text-base md:text-xl lg:text-2xl font-extrabold font-['Urbanist'] leading-loose">
            Step
          </span>
          <span className="text-[#212020b2] text-base md:text-xl lg:text-2xl font-extrabold font-['Urbanist'] leading-loose">
            {" "}
          </span>
          <span className="text-[#007aff] text-base md:text-xl lg:text-2xl font-extrabold font-['Urbanist'] leading-loose">
            U
          </span>
          <span className="text-[#202020] text-base md:text-xl lg:text-2xl font-extrabold font-['Urbanist'] leading-loose">
            Run
          </span>
          <span className="text-[#007aff] text-base md:text-xl lg:text-2xl font-extrabold font-['Urbanist'] leading-loose">
            {" "}
            U
          </span>
          <span className="text-[#202020] text-base md:text-xl lg:text-2xl font-extrabold font-['Urbanist'] leading-loose">
            Earn
          </span>
          <span className="text-[#202020]/70 text-base md:text-xl lg:text-2xl font-extrabold font-['Urbanist'] leading-loose">
            {" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default GlobalisingFitness;
