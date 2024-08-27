import { Darts } from "@/assets/svgs";
import React from "react";

const YourSuccess = () => {
  return (
    <div className="flex items-center mt-24">
      <span>
        <Darts />
      </span>
      <div className="flex flex-col gap-10">
        <h2 className="leading-[53.90px] text-[40px] font-extrabold font-['Urbanist'] ">
          <span className="text-[#202020] ">Your </span>
          <span className="text-white bg-primaryBlue rounded-[5px] py-1">
            Success
          </span>
          <span className="text-[#202020] "> is our goal</span>
        </h2>
        <div>
          <span className="text-[#212020]/70 text-2xl font-medium font-['Urbanist'] leading-loose">
            We understand that adapting new fitness habits is difficult and
            often times fails. Our goal is to change your view on fitness, so
            that it becomes a part of who you are and your lifestyle. We
            strongly believe that healthy habits lead to a healthy lifestyle.{" "}
            <br />
          </span>
          <span className="text-[#202020] text-2xl font-extrabold font-['Urbanist'] leading-loose">
            We will work together!!!
          </span>
          <span className="text-[#202020]/80 text-2xl font-extrabold font-['Urbanist'] leading-loose">
            {" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default YourSuccess;
