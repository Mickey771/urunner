import moment from "moment";
import React from "react";
import { MdOutlineCheck } from "react-icons/md";
import { setSelectedOffer } from "../../../redux/reducers/adminSlice";
import { useDispatch } from "react-redux";

const OfferCard: React.FC<Offer> = ({ _id, name, end_date, price, status }) => {
  const dispatch = useDispatch();
  const toggleSelectedOffer = (_id: string) => {
    dispatch(setSelectedOffer(_id));
  };
  return (
    <button
      onClick={() => toggleSelectedOffer(_id)}
      className="min-w-[290px] h-[66px] bg-white rounded justify-start items-start inline-flex"
    >
      <div className="w-1.5 self-stretch justify-start items-start gap-2.5 flex">
        <div
          className={`grow shrink basis-0 self-stretch  rounded-l-[4px] ${
            status === "pending"
              ? "bg-[#0D5EBA]"
              : status === "completed"
              ? "bg-[#04802E]"
              : "bg-[#CB1A14]"
          } `}
        />
      </div>
      <div className="grow h-[66px] px-4 py-3 rounded border-r border-t border-b border-[#e4e7ec] justify-start items-start gap-3 flex">
        <div
          className={`w-6 h-6 p-1.5 bg-[#e7f6ec] rounded-lg border  justify-center items-center flex ${
            status === "pending"
              ? "bg-[#E3EFFC] border-[#C6DDF7]"
              : status === "completed"
              ? "bg-[#E7F6EC] border-[#b5e3c4]"
              : "bg-[#FBEAE9] border-[#F2BCBA]"
          } `}
        >
          <div
            className={`relative flex-col justify-start items-start flex p-[2px]  rounded-full ${
              status === "pending"
                ? "bg-[#0D5EBA]"
                : status === "completed"
                ? "bg-[#04802E]"
                : "bg-[#CB1A14]"
            }  `}
          >
            <MdOutlineCheck color="white" size={10} />
          </div>
        </div>
        <div className=" flex-col justify-start items-start gap-0.5 flex">
          <p className="">
            <span className="text-[#101828] text-sm font-semibold font-['Inter'] ">
              {name}{" "}
            </span>
            <span
              className={` text-sm font-semibold font-['Inter'] ${
                status === "pending"
                  ? "text-[#0D5EBA]"
                  : status === "completed"
                  ? "text-[#04802E]"
                  : "text-[#CB1A14]"
              } `}
            >
              (${price})
            </span>
          </p>
          <span className=" text-[#475267] text-sm font-normal font-['Inter'] ">
            EXP date: {moment(end_date).format("DD/MM/YYYY")}
          </span>
        </div>
      </div>
    </button>
  );
};

export default OfferCard;
