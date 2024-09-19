import React from "react";
import Member from "./Member";
import { HiArrowRight } from "react-icons/hi";

const Members: React.FC<{
  heading: string;
  total: number;
  seeMore: boolean;
}> = ({ heading, total, seeMore }) => {
  return (
    <div className="mb-5">
      <div className="w-[720px]">
        <span className="text-[#191b1c] text-base font-semibold font-['Public Sans'] leading-[23px]">
          {heading}{" "}
        </span>
        <span className="text-[#626c70] text-base font-normal font-['Public Sans'] leading-normal">
          ({total})
        </span>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-x-[20px] gap-y-[18px]">
        {Array.from({ length: total }, (_, index) => (
          <Member key={index} />
        ))}
        {seeMore && (
          <button className="max-w-[140px] h-10 px-6 bg-[#005ce7] rounded-full justify-center items-center gap-2 inline-flex">
            <span className="text-white text-sm font-semibold font-['Public Sans'] capitalize leading-10">
              see more
            </span>
            <span className="">
              <HiArrowRight size={20} color="white" />
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Members;
