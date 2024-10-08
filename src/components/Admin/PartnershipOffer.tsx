import Link from "next/link";
import React from "react";
import { MdOutlineCheck } from "react-icons/md";
import { useDispatch } from "react-redux";
import { setSelectedOffer } from "../../../redux/reducers/adminSlice";

const PartnershipOffer: React.FC<PartnershipOfferProps> = ({
  name,
  end_date,
  price,
  _id,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="w-[568px] h-[139px] bg-white rounded justify-start items-start inline-flex">
      <div className="w-1.5 self-stretch justify-start items-start gap-2.5 flex">
        <div className="grow shrink basis-0 self-stretch bg-[#0d5dba]" />
      </div>
      <div className="grow shrink basis-0 self-stretch p-5 rounded border-r border-t border-b border-[#e4e7ec] justify-start items-start gap-4 flex">
        <div className="w-8 h-8 p-2 bg-[#e3effc] rounded-lg border border-[#c6ddf7] justify-center items-center flex">
          <div className=" relative flex-col justify-start items-start flex p-1 bg-[#1671D9] rounded-full">
            <MdOutlineCheck color="white" size={10} />
          </div>
        </div>
        <div className="grow shrink basis-0 flex-col justify-center items-start gap-4 inline-flex">
          <div className="self-stretch h-[47px] flex-col justify-start items-start gap-1 flex">
            <div className="self-stretch">
              <span className="text-[#101828] text-base font-semibold font-['Inter'] leading-normal">
                {name}{" "}
              </span>
              <span className="text-[#0d5dba] text-base font-semibold font-['Inter'] leading-normal">
                ({price})
              </span>
            </div>
            <div className="self-stretch text-[#475267] text-sm font-normal font-['Inter'] leading-tight">
              EXP date: {end_date}
            </div>
          </div>
          <Link
            href={"/admin/offers"}
            onClick={() => dispatch(setSelectedOffer(_id))}
            className="self-stretch justify-start items-center gap-2 inline-flex"
          >
            <div className="px-4 py-2 bg-[#0d5dba] rounded-lg flex-col justify-center items-center gap-2.5 flex">
              <span className="text-center text-white text-sm font-semibold font-['Inter'] leading-tight">
                View Offer
              </span>
            </div>
          </Link>
        </div>
        <div className="self-stretch justify-start items-start gap-4 flex">
          <div className="w-[99px] h-px relative origin-top-left -rotate-90">
            <div className="w-[99px] h-px left-0 top-0 absolute bg-[#eff1f4]" />
          </div>
          <div className="justify-center items-center gap-2 flex">
            <div className="w-5 h-5 relative" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnershipOffer;
