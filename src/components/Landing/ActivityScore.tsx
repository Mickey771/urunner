import React from "react";
import Image from "next/image";

const ActivityScore = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center mt-[109px] md:mt-6 pt-[75px] lg-[pt-0]">
      <div className="flex w-full flex-col gap-10">
        <h2 className="absolute top-0 left-0 md:relative w-full text-center lg:text-left md:leading-[53.90px] text-[24px] md:text-[32px] lg:text-[40px] font-extrabold font-['Urbanist']  ">
          <span className="text-[#202020] ">What's your </span>
          <span className="text-white bg-primaryBlue rounded-[5px] py-1">
            Activity Score?
          </span>
        </h2>
        <div>
          <span className="text-[#212020]/70 text-base md:text-xl lg:text-2xl font-medium font-['Urbanist'] leading-loose">
            The Activity Score is an objective index of your daily activity
            based on movement and energy burned. It takes your steps and
            calories and creates the Activity score which can be used to set
            fitness goals and tracked. The URunner App will give you the 7 day
            average Activity Score to show the trend for the past 7 days.   
          </span>
          <span className="text-[#202020] text-base md:text-xl lg:text-2xl font-extrabold font-['Urbanist'] leading-loose">
            Keep a great score!!! 
          </span>
          <span className="text-[#202020]/80 text-base md:text-xl lg:text-2xl font-extrabold font-['Urbanist'] leading-loose">
            {" "}
          </span>
        </div>
      </div>
      <span className="inline-flex w-full max-w-[623px]">
        <Image
          src={"running.svg"}
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

export default ActivityScore;
