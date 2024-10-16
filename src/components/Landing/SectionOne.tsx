import { Eclipse, Eclipsesmall } from "@/assets/svgs";
import React from "react";
import StoreFlag from "./StoreFlag";
import { LuMoveRight } from "react-icons/lu";
import Image from "next/image";

const SectionOne = () => {
  return (
    <section className="w-full lg:flex-row flex-col h-fit overflow-hidden max-w-max mx-auto lg:px-0 px-6 flex gap-[30px] pt-4">
      <div className="w-full relative   z-10 mt-[54px]">
        <div className="absolute top-0 left-20">
          <Eclipse />
        </div>
        <h1 className="w-full max-w-[500px] lg:max-w-[682px] relative z-[11] text-[#202020] text-[32px] mb:text-[45px] md:text-[58px] lg:text-[64px] font-black font-['Urbanist'] leading-[53px] md:leading-[70px] lg:leading-[86.25px]">
          Kickstarting healthy lifestyles by tokenizing global fitness.
        </h1>
        <p className="relative z-[11] text-[#202020]/70 text-xl md:text-2xl  mt-[18px] font-semibold font-['Urbanist'] leading-[32.342px]">
          Lets walk, step, run and earn together
        </p>
        <div className="flex items-center w-full gap-3 md:gap-6 mt-[52px] ">
          <a
            target="_blank"
            href="https://play.google.com/store/apps/details?id=com.app.urunner"
            className="cursor-pointer"
          >
            <StoreFlag icon={"playstore"} bg={"blueCurve"} text="Google Play" />
          </a>
          <a
            target="_blank"
            href="https://apps.apple.com/us/app/urunner/id1617568183"
            className="cursor-pointer"
          >
            <StoreFlag icon={"appstore"} bg={"blackCurve"} text="App Store" />
          </a>
        </div>
        <div className="lg:h-[157px] flex items-end">
          <div className="lg:w-[669px] flex items-center bg-[#212020] h-[99px] md:h-[110px] lg:h-[134px] relative mt-10 z-10 bottom-0 left-0 rounded-[15px]  md:rounded-[30px] py-3 md:py-5 px-[15px] md:px-[25px]">
            <button className="flex gap-[5px] md:gap-[10px] items-center bg-primaryBlue p-[9px] md:p-[20px] lg:p-[25px] pr-[8px] md:pr-[12px] lg:pr-[15px] rounded-[10px] lg:rounded-[20px]">
              <p className="text-white text-[18px] md:text-[24px] lg:text-[32px] font-medium font-['Urbanist'] lg:leading-[43.12px]">
                Reviews
              </p>
              <span className="text-[15px] md:text-[18px] lg:text-[30px]">
                <LuMoveRight className="rotate-[-45deg]" color="white" />
              </span>
            </button>
            <h3 className="text-white ml-3 md:ml-6 mr-1.5 md:mr-2.5 text-[24px] md:text-[40px] lg:text-[52px] font-extrabold font-['Urbanist'] leading-[70.08px]">
              15m+
            </h3>
            <p className="text-white text-sm md:text-[18px] lg:text-[22px] font-semibold font-['Urbanist'] lg:leading-[29.65px]">
              People are projected <br />
              to be with us
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex  h-full  relative">
        <div className="absolute zr:hidden lg:flex top-0 right-[-0px] rotate-0 translate-y-[-55%]">
          <Eclipsesmall />
        </div>
        <div className="h-[402px] lg:h-[668px] relative flex items-end">
          <div className="absolute z-[2] w-full max-w-[532px] translate-x-[-0px] top-0  left-0">
            {/* <Banner /> */}
            <span className="w-full   inline-flex max-w-[532px]">
              <Image
                src={"/banner.svg"}
                height={0}
                width={0}
                alt="banner"
                sizes="100vw"
                style={{ width: "100%", height: "100%" }}
                className="object-cover"
              />
            </span>
          </div>
          <div className="relative inline-flex h-[325px] lg:h-[453px] w-[332px] mb:w-[400px] sm:w-[440px] md:w-[500px] lg:w-[553px] bg-primaryBlue rounded-[44px]"></div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
