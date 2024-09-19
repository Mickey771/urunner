import Image from "next/image";
import React from "react";

const Member = () => {
  return (
    <div className="flex gap-3 items-center">
      <span className="inline-flex ">
        <Image src={"/guy.png"} height={48} width={48} alt="community" />
      </span>
      <div>
        <h2 className=" text-[#191b1c] text-sm font-medium font-['Public Sans'] leading-tight">
          Brooklyn Simmons
        </h2>
        <p className=" text-[#7b878c] text-sm font-normal font-['Public Sans'] leading-tight">
          ateniese@mac.com
        </p>
      </div>
    </div>
  );
};

export default Member;
