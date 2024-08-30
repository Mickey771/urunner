import Image from "next/image";
import React from "react";

const partners = ["garmin", "fitbit", "strava", "oura"];

const SectionThree = () => {
  return (
    <section className="w-full max-w-max mx-auto mt-[111px] flex flex-col justify-center items-center px-6 lg:px-0">
      <h1 className="text-[#202020] text-center text-[32px] md:text-[52px] lg:text-[64px] font-black font-['Urbanist'] lg:leading-[86.25px]">
        Our Partners
      </h1>
      <p className="w-full max-w-[710px] mt-[15px] text-center text-[#202020]/80 text-base md:text-xl lg:text-2xl font-semibold font-['Urbanist'] lg:leading-loose">
        We are in collaboration with other notable companies and brands
      </p>
      <div className="mt-[52px] [&>span>svg]:scale-50 flex gap-[20px] md:gap-[40px] lg:gap-[75px] ">
        {partners.map((item, index) => (
          <span key={index} className="pt-6  w-full max-w-[256px]">
            <Image
              src={`/${item}.svg`}
              width={0}
              height={0}
              alt={item}
              sizes="100vw"
              style={{ width: "100%", height: "100%" }}
            />
          </span>
        ))}
      </div>
    </section>
  );
};

export default SectionThree;
