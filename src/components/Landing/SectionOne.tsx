import {
  Appstore,
  Banner,
  BlackCurve,
  Bluecurve,
  Eclipse,
  Eclipsesmall,
  Playstore,
  Username,
} from "@/assets/svgs";
import React from "react";
import StoreFlag from "./StoreFlag";
import Image from "next/image";
import { LuMoveRight } from "react-icons/lu";

const SectionOne = () => {
  return (
    <section className="w-full max-w-max mx-auto flex gap-[30px] pt-4">
      <div className="relative z-10 mt-[54px]">
        <div className="absolute top-0 left-20">
          <Eclipse />
        </div>
        <h1 className="relative z-[11] text-[#202020] text-[64px] font-black font-['Urbanist'] leading-[86.25px]">
          Kickstarting healthy
          <br />
          lifestyle by tokenizing
          <br />
          global fitness.
        </h1>
        <p className="relative z-[11] text-[#202020]/70 text-2xl  mt-[18px] font-semibold font-['Urbanist'] leading-[32.342px]">
          Lets walk, step, run and earn together
        </p>
        <div className="flex items-center gap-6 mt-[52px]">
          <StoreFlag icon={Playstore} bg={Bluecurve} text="Playstore" />
          <StoreFlag icon={Appstore} bg={BlackCurve} text="Appstore" />
        </div>
        <div
          style={{
            backgroundImage: "url(/shoes.png)",
            backgroundRepeat: "no-repeat",
          }}
          className="mt-[64px] relative z-10 pt-[60px] pl-[56px] h-[342px]"
        >
          <h2 className="text-white text-[40px] font-extrabold font-['Urbanist'] leading-[53.90px]">
            Multiple healthy Routines
          </h2>
          <span className="inline-flex w-[500px] h-[0px] border border-white/60 mt-[22px] mb-6"></span>
          <p className="w-[464px] text-white text-2xl font-semibold font-['Urbanist'] leading-[32.342px]">
            Explore our diverse range of Running Routines, from high-intensity
            interval running to walking sessions, all tailored to burn your
            calories.
          </p>
        </div>
      </div>

      <div className="w-full  relative">
        <div className="absolute top-0 right-[-0px] rotate-0 translate-y-[-55%]">
          <Eclipsesmall />
        </div>
        <div className=" h-[748px] relative flex items-end">
          <div className="absolute z-[2] w-[532px] translate-x-[-78px] top-0  left-0">
            <Banner />
          </div>
          <div className="relative inline-flex h-[553px] w-[553px] bg-primaryBlue rounded-[44px]">
            {/* <div className="absolute z-[3] top-[15px] left-[-169px] w-[333px] h-[96px] bg-[rgba(0,0,0,0.10)] backdrop-blur-[42.5px] rounded-[30px] flex items-center gap-[26px] py-5 px-[22px]">
              <Image src={"/person.png"} width={56} height={56} alt="person" />
              <Username />
              <span className="w-[17px] h-[0px] origin-top-left rotate-90 border border-white inline-flex"></span>
              <span className="inline-flex justify-center items-center flex-col gap-0">
                <p className="text-white text-sm font-semibold font-['Urbanist'] leading-[18.87px]">
                  More
                </p>
                <span>
                  <LuMoveRight color="white" size={22} />
                </span>
              </span>
            </div> */}
          </div>
        </div>
        <div className="w-[669px] flex items-center bg-[#212020] h-[134px] absolute bottom-0 right-0 rounded-[30px] py-5 px-[25px]">
          <button className="flex gap-[10px] items-center bg-primaryBlue p-[25px] pr-[15px] rounded-[20px]">
            <p className="text-white text-[32px] font-medium font-['Urbanist'] leading-[43.12px]">
              Reviews
            </p>
            <span>
              <LuMoveRight
                className="rotate-[-45deg]"
                color="white"
                size={29}
              />
            </span>
          </button>
          <h3 className="text-white ml-6 mr-2.5 text-[52px] font-extrabold font-['Urbanist'] leading-[70.08px]">
            15m+
          </h3>
          <p className="text-white text-[22px] font-semibold font-['Urbanist'] leading-[29.65px]">
            People are projected <br />
            to be with us
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
