import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <section className="w-full max-w-max mx-auto mt-16 mb-[140px]">
      <div className="w-full flex rounded-[15px] overflow-hidden">
        <div className="w-full h-full max-w-[655px]">
          <Image
            alt="banner"
            src={"/runnerBig.png"}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "751px" }}
          />
        </div>

        {/* <div className="bg-[#F2F2F2] w-full py-[50px] px-[100px]">
          <h1 className="h-[37.50px] text-center text-black text-[40px] font-bold font-['Poppins'] leading-[37.50px]">
            Contact Us
          </h1>
        </div> */}
        <div className="w-full max-h-[751px] py-[50px] px-[100px] bg-[#F2F2F2]">
          <h1 className="h-[37.50px] text-center text-black text-[40px] font-bold font-['Poppins'] leading-[37.50px]">
            Contact Us
          </h1>
          <div className="mt-6 h-[72px] text-center text-[#6e6e6e] text-base font-normal font-['Poppins'] leading-normal">
            Write to us for personalized advice or for information
            <br />
            on earnings and running routines, all runnings
            <br />
            are recorded and rewarded.
          </div>

          <form className="w-full mt-[33px] max-w-[523px] mx-auto flex flex-col gap-5">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Type your name"
              className="placeholder:text-[#757575] w-full py-[17px] px-[30px] rounded-[5px] border border-[#00000014] bg-transparent"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Insert your email"
              className="placeholder:text-[#757575] w-full py-[17px] px-[30px] rounded-[5px] border border-[#00000014] bg-transparent"
            />
            <textarea
              name="message"
              id="message"
              className="w-full py-[17px] px-[30px] rounded-[5px] border border-[#00000014] bg-transparent h-[214px] resize-none"
            ></textarea>
            <button className="h-[57px]  bg-primaryBlue rounded-[5px] items-center inline-flex">
              <p className="w-full text-center text-white text-[28px] font-bold font-['Urbanist'] tracking-wide">
                Submit
              </p>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default page;
