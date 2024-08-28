import { Quotesgrey } from "@/assets/svgs";
import Image from "next/image";
import React from "react";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";

const SectionFive = () => {
  return (
    <section className="mt-[193px] w-full">
      <div
        style={{
          backgroundImage: "url(/peopleBg.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="w-full flex flex-col gap-[105px] justify-center items-center min-h-[552px] rounded-[50px]"
      >
        <h1 className="text-center text-white text-[40px] font-extrabold font-['Urbanist'] leading-[53.90px]">
          See what our users say about us
        </h1>
        <div className="relative  bg-white w-full max-w-[534px] h-[277px] rounded-[17px] flex flex-col items-center">
          <span className="w-fit h-full absolute top-0 right-0 flex items-center justify-center">
            <button className="translate-x-[50%] rounded-full h-[62px] w-[62px] bg-[#737373] flex justify-center items-center">
              <HiArrowLongRight color="white" size={25} />
            </button>
          </span>
          <span className="w-fit h-full absolute top-0 left-0 flex items-center justify-center">
            <button className="translate-x-[-50%] rounded-full h-[62px] w-[62px] bg-[#737373] flex justify-center items-center">
              <HiArrowLongLeft color="white" size={25} />
            </button>
          </span>
          <div className="absolute h-fit">
            <Image
              src={"/profile.png"}
              height={120}
              width={120}
              alt="profile"
              className="translate-y-[-50%]"
            />
          </div>
          <h2 className="w-full max-w-[390px] relative mt-[99px] text-center text-black text-[32px] font-extrabold font-['Urbanist'] leading-[34.449px] tracking-wider">
            Reviews are
            <br />
            coming soon
            <span className="absolute top-[-65%] left-[-10%]">
              <Quotesgrey />
            </span>
          </h2>
          <p className="w-[195.64px] mt-[23px] text-center text-black text-xl font-semibold font-['Urbanist'] leading-[24px] tracking-wide">
            Urunner - Administration
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionFive;
