import { Sol } from "@/assets/svgs";
import Image from "next/image";
import React from "react";

const EveryStep = () => {
  return (
    <div className="relative flex flex-col-reverse md:flex-row items-center mt-[109px] lg:mt-6 pt-[75px] lg-[pt-0]">
      <div className="flex flex-col gap-10">
        <h2 className="absolute top-0 left-0 md:relative w-full text-center lg:text-left md:leading-[53.90px] text-[24px] md:text-[32px] lg:text-[40px] font-extrabold font-['Urbanist'] ">
          <span className="text-[#202020] "> Every </span>
          <span className="text-white bg-primaryBlue rounded-[5px] py-1">
            Step and Calorie
          </span>
          <span className="text-[#202020] "> counts</span>
        </h2>
        <div className="max-w-[636px]">
          <span className="text-[#202020]/70 text-base md:text-[20px] lg:text-[24px] font-medium font-['Urbanist'] leading-relaxed lg:leading-loose">
            With years of unrealized health benefits, URunner is the{" "}
            {"world's "}
            first App to empower your fitness and health goals with real
            rewards. Leveraging the technology of the{" "}
          </span>
          <span className="text-[#202020] text-base md:text-[20px] lg:text-[24px] font-extrabold font-['Urbanist'] leading-relaxed lg:leading-loose">
            Solana Blockchain
          </span>
          <span className="text-[#202020]/70 text-base md:text-[20px] lg:text-[24px] font-medium font-['Urbanist'] leading-relaxed lg:leading-loose">
            , the URunner coin, named{" "}
          </span>
          <span className="text-[#007aff] text-base md:text-[20px] lg:text-[24px] font-extrabold font-['Urbanist'] leading-relaxed lg:leading-loose">
            URN
          </span>
          <span className="text-[#202020] text-base md:text-[20px] lg:text-[24px] font-extrabold font-['Urbanist'] leading-relaxed lg:leading-loose">
            Coin
          </span>
          <span className="text-[#202020]/70 text-base md:text-[20px] lg:text-[24px] font-medium font-['Urbanist'] leading-relaxed lg:leading-loose">
            , will tokenize global fitness and health to promote a global
            approach to incentivizing your daily activities. <br />
          </span>
          <span className="text-[#007aff] text-base md:text-[20px] lg:text-[24px] font-extrabold font-['Urbanist'] leading-relaxed lg:leading-loose">
            U
          </span>
          <span className="text-[#202020] text-base md:text-[20px] lg:text-[24px] font-extrabold font-['Urbanist'] leading-relaxed lg:leading-loose">
            Burn
          </span>
          <span className="text-[#202020]/70 text-base md:text-[20px] lg:text-[24px] font-extrabold font-['Urbanist'] leading-relaxed lg:leading-loose">
            {" "}
          </span>
          <span className="text-[#007aff] text-base md:text-[20px] lg:text-[24px] font-extrabold font-['Urbanist'] leading-relaxed lg:leading-loose">
            U
          </span>
          <span className="text-[#202020] text-base md:text-[20px] lg:text-[24px] font-extrabold font-['Urbanist'] leading-relaxed lg:leading-loose">
            Earn
          </span>
          <span className="text-[#202020]/70 text-base md:text-[20px] lg:text-[24px] font-extrabold font-['Urbanist'] leading-relaxed lg:leading-loose"></span>
        </div>
      </div>
      <span className="inline-flex w-full max-w-[623px]">
        <Image
          src={"sol.svg"}
          width={0}
          height={0}
          style={{ width: "100%", height: "100%" }}
          alt="globe"
          sizes="100vw"
        />
      </span>
    </div>
  );
};

export default EveryStep;
