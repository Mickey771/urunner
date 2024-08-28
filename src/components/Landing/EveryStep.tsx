import { Sol } from "@/assets/svgs";
import React from "react";

const EveryStep = () => {
  return (
    <div className="flex items-center mt-6">
      <div className="flex flex-col gap-10">
        <h2 className="leading-[53.90px] text-[40px] font-extrabold font-['Urbanist'] ">
          <span className="text-[#202020] "> Every </span>
          <span className="text-white bg-primaryBlue rounded-[5px] py-1">
            Step and Calorie
          </span>
          <span className="text-[#202020] "> counts</span>
        </h2>
        <div className="max-w-[636px]">
          <span className="text-[#202020]/70 text-2xl font-medium font-['Urbanist'] leading-loose">
            With years of unrealized health benefits, URunner is the {"world's"}
            first App to empower your fitness and health goals with real
            rewards. Leveraging the technology of the{" "}
          </span>
          <span className="text-[#202020] text-2xl font-extrabold font-['Urbanist'] leading-loose">
            Solana Blockchain
          </span>
          <span className="text-[#202020]/70 text-2xl font-medium font-['Urbanist'] leading-loose">
            , the URunner coin, named{" "}
          </span>
          <span className="text-[#007aff] text-2xl font-extrabold font-['Urbanist'] leading-loose">
            URN
          </span>
          <span className="text-[#202020] text-2xl font-extrabold font-['Urbanist'] leading-loose">
            Coin
          </span>
          <span className="text-[#202020]/70 text-2xl font-medium font-['Urbanist'] leading-loose">
            , will tokenize global fitness and health to promote a global
            approach to incentivizing your daily activities. <br />
          </span>
          <span className="text-[#007aff] text-2xl font-extrabold font-['Urbanist'] leading-loose">
            U
          </span>
          <span className="text-[#202020] text-2xl font-extrabold font-['Urbanist'] leading-loose">
            Burn
          </span>
          <span className="text-[#202020]/70 text-2xl font-extrabold font-['Urbanist'] leading-loose">
            {" "}
          </span>
          <span className="text-[#007aff] text-2xl font-extrabold font-['Urbanist'] leading-loose">
            U
          </span>
          <span className="text-[#202020] text-2xl font-extrabold font-['Urbanist'] leading-loose">
            Earn
          </span>
          <span className="text-[#202020]/70 text-2xl font-extrabold font-['Urbanist'] leading-loose"></span>
        </div>
      </div>
      <span>
        <Sol />
      </span>
    </div>
  );
};

export default EveryStep;
