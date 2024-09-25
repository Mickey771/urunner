import React from "react";
import { MdOutlineCheck } from "react-icons/md";

const OfferCard = () => {
  return (
    <div className="w-[390px] h-[66px] bg-white rounded justify-start items-start inline-flex">
      <div className="w-1.5 self-stretch justify-start items-start gap-2.5 flex">
        <div className="grow shrink basis-0 self-stretch bg-[#037f2d]" />
      </div>
      <div className="grow shrink basis-0 h-[66px] px-4 py-3 rounded border-r border-t border-b border-[#e4e7ec] justify-start items-start gap-3 flex">
        <div className="w-6 h-6 p-1.5 bg-[#e7f6ec] rounded-lg border border-[#b5e3c4] justify-center items-center flex">
          <div className=" relative flex-col justify-start items-start flex p-[2px] bg-[#04802E] rounded-full">
            <MdOutlineCheck color="white" size={10} />
          </div>
        </div>
        <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-0.5 inline-flex">
          <div className="self-stretch">
            <span className="text-[#101828] text-sm font-semibold font-['Inter'] leading-tight">
              Offer from Timo Agency{" "}
            </span>
            <span className="text-[#037f2d] text-sm font-semibold font-['Inter'] leading-tight">
              ($2000)
            </span>
          </div>
          <div className="self-stretch text-[#475267] text-sm font-normal font-['Inter'] leading-tight">
            EXP date: 07/06/25
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
