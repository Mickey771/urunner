import Image from "next/image";
import React from "react";

const YourSuccess = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center mt-[109px] md:mt-6 pt-[75px] lg-[pt-0]">
      <span className="inline-flex w-full max-w-[623px]">
        <Image
          src={"darts.svg"}
          width={0}
          height={0}
          style={{ width: "100%", height: "100%" }}
          alt="globe"
          sizes="100vw"
        />
      </span>
      <div className="flex w-full flex-col gap-10">
        <h2 className="absolute top-0 left-0 md:relative w-full text-center lg:text-left md:leading-[53.90px] text-[24px] md:text-[32px] lg:text-[40px] font-extrabold font-['Urbanist']  ">
          <span className="text-[#202020] ">Your </span>
          <span className="text-white bg-primaryBlue rounded-[5px] py-1">
            Success
          </span>
          <span className="text-[#202020] "> is our goal</span>
        </h2>
        <div>
          <span className="text-[#212020]/70 text-base md:text-[20px] lg:text-[24px] font-medium font-['Urbanist'] leading-relaxed md:leading-loose">
            We understand that adapting new fitness habits is difficult and
            often times fails. Our goal is to change your view on fitness, so
            that it becomes a part of who you are and your lifestyle. We
            strongly believe that healthy habits lead to a healthy lifestyle.{" "}
            <br />
          </span>
          <span className="text-[#202020] text-base md:text-[20px] lg:text-[24px] font-extrabold font-['Urbanist'] leading-relaxed md:leading-loose">
            We will work together!!!
          </span>
          <span className="text-[#202020]/80 text-base md:text-[20px] lg:text-[24px] font-extrabold font-['Urbanist'] leading-relaxed md:leading-loose">
            {" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default YourSuccess;
