import Image from "next/image";
import React from "react";
import { IoIosTrendingDown, IoIosTrendingUp } from "react-icons/io";

const AnalyticsCard: React.FC<AnalyticsCardProps> = ({
  heading,
  icon,
  value,
  percentageChange,
  timeStamp,
}) => {
  return (
    <div className="w-full max-w-[262px] h-[121px] flex flex-col justify-between mt-6 bg-white rounded-[14px] shadow p-4">
      <div className="flex justify-between">
        <div className="flex flex-col gap-4">
          <h2 className="opacity-70 text-[#202224] text-base font-semibold font-['Nunito Sans']">
            {heading}
          </h2>
          <h3 className="text-[#202224] text-[28px] font-bold font-['Nunito Sans'] tracking-wide">
            {value}
          </h3>
        </div>
        <span className="inline-flex max-w-[60px]">
          <Image
            src={`/${icon}.svg`}
            height={0}
            width={0}
            sizes="100vw"
            style={{ width: "100%", height: "100%" }}
            alt="user"
          />
        </span>
      </div>
      {/* <div className="flex items-center gap-1">
        <span>
          {percentageChange < 1 ? (
            <IoIosTrendingDown color="#F93C65" />
          ) : (
            <IoIosTrendingUp color="#00b69b" />
          )}
        </span>
        <span
          className={` text-base font-semibold font-['Nunito Sans'] ${
            percentageChange < 1 ? "text-[#F93C65]" : "text-[#00b69b]"
          } `}
        >
          {Math.abs(percentageChange)}%
        </span>

        <span className="text-[#606060] text-base font-semibold font-['Nunito Sans']">
          {percentageChange < 1 ? "Down" : "Up"} from {timeStamp}
        </span>
      </div> */}
    </div>
  );
};

export default AnalyticsCard;
