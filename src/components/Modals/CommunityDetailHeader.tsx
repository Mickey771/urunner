import Image from "next/image";
import React from "react";

const CommunityDetailHeader = () => {
  return (
    <div className="flex justify-between items-center ">
      <div className="flex flex-col gap-[27px]">
        <h1 className="text-[#191b1c] text-lg font-semibold font-['Public Sans'] leading-normal">
          URunner Community
        </h1>
        <div className=" flex gap-20">
          <div className="flex flex-col gap-2">
            <p className=" text-[#959fa3] text-xs font-medium font-['Public Sans'] uppercase leading-3">
              Created date
            </p>
            <p className=" text-[#191b1c] text-sm font-normal font-['Public Sans'] leading-tight">
              12 Nov, 2021 at 9:40 PM
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className=" text-[#959fa3] text-xs font-medium font-['Public Sans'] uppercase leading-3">
              Created date
            </p>
            <p className=" text-[#191b1c] text-sm font-normal font-['Public Sans'] leading-tight">
              12 Nov, 2021 at 9:40 PM
            </p>
          </div>
        </div>
      </div>
      <span className="inline-flex">
        <Image
          src={"/community.png"}
          height={135}
          width={135}
          alt="community"
        />
      </span>
    </div>
  );
};

export default CommunityDetailHeader;
