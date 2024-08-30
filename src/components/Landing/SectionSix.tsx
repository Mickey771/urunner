import Image from "next/image";
import React from "react";

const SectionSix = () => {
  return (
    <section className="mt-[204px] flex w-full max-w-max mx-auto md:rounded-[40px] overflow-hidden">
      <div className="w-full zr:hidden md:flex max-w-[564px]">
        <Image
          src={"/runner.png"}
          width={0}
          height={0}
          style={{ width: "100%", height: "auto" }}
          sizes="100vw"
          alt="runner"
        />
      </div>
      <div className="w-full h-full max-h-[672px] py-10 px-5 md:px-10 lg:px-20 bg-[#F2F2F2]">
        <h1 className="h-[66px] text-center text-black text-[32px] md:text-[52px] lg:text-[64px] font-black font-['Urbanist'] lg:leading-[37.50px]">
          Contact Us
        </h1>
        <p className=" mt-1 h-[72px] text-center text-[#6e6e6e] text-sm lg:text-base font-normal font-['Poppins'] leading-normal">
          Write us a personalized message on what you
          <br />
          need us to do for you.
        </p>

        <form className="w-full mt-[33px] max-w-[523px] mx-auto flex flex-col gap-5">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Type your name"
            className="placeholder:text-[#757575] w-full py-[17px] px-5 md:px-[30px] rounded-[5px] border border-[#00000014] bg-transparent"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Insert your email"
            className="placeholder:text-[#757575] w-full py-[17px] px-5 md:px-[30px] rounded-[5px] border border-[#00000014] bg-transparent"
          />
          <textarea
            name="message"
            id="message"
            className="w-full py-[17px] px-[30px] rounded-[5px] border border-[#00000014] bg-transparent h-[190px] resize-none"
          ></textarea>
          <button className="h-[48px] lg:h-[57px]  bg-primaryBlue rounded-[5px] items-center inline-flex">
            <p className="w-full text-center text-white text-base md:text-[28px] font-bold font-['Urbanist'] tracking-wide">
              Submit
            </p>
          </button>
        </form>
      </div>
    </section>
  );
};

export default SectionSix;
