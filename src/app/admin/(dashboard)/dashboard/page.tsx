"use client";
import AnalyticsCard from "@/components/Admin/AnalyticsCard";
import CommunityPost from "@/components/Admin/CommunityPost";
import PartnershipOffer from "@/components/Admin/PartnershipOffer";
import UpcomingEvent from "@/components/Admin/UpcomingEvent";
import { useEvents } from "@/hooks/useEvents";
import { headers } from "@/utils/adminData";
import Link from "next/link";
import React from "react";
import { RiPulseFill } from "react-icons/ri";

const Page = () => {
  const { isLoading, error, events } = useEvents() as {
    isLoading: boolean;
    error: any;
    events: Events[];
  };

  return (
    <div className="py-6 px-5">
      <div className="flex justify-end w-full max-w-admin mx-auto">
        <div className="h-9 px-3 py-2 rounded-md border border-[#d0d4dd] justify-center items-center gap-2 inline-flex">
          <span className="w-4 h-4 relative">
            <RiPulseFill />
          </span>
          <div className="text-center text-[#344054] text-sm font-medium font-['Inter'] leading-tight">
            View Analytics
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 w-full max-w-admin mx-auto gap-[30px]">
        {headers.map((item, index) => (
          <AnalyticsCard key={index} {...item} />
        ))}
      </div>

      <div className="w-full max-w-admin mx-auto">
        <h2 className="mt-9 w-[307px] text-[#202224] text-2xl font-bold font-['Nunito Sans'] leading-tight">
          Upcoming Events
        </h2>
        <div className="flex py-7 w-full overflow-x-auto max-w-admin gap-[30px] ">
          {isLoading ? (
            <p>Loading...x</p>
          ) : (
            events.map((item, index) => <UpcomingEvent key={index} {...item} />)
          )}
        </div>
      </div>

      <div className="w-full max-w-admin mx-auto">
        <h2 className="mt-9 w-[307px] text-[#202224] text-2xl font-bold font-['Nunito Sans'] leading-tight">
          Community Posts
        </h2>

        <div className="flex gap-[30px] mt-7 w-full overflow-x-auto max-w-admin">
          {Array.from({ length: 5 }, (_, index) => (
            <CommunityPost key={index} />
          ))}
        </div>
      </div>

      <div className="w-full max-w-admin mx-auto">
        <h2 className="mt-9 flex items-center justify-between  text-[#202224] text-2xl font-bold font-['Nunito Sans'] leading-tight">
          Partnership Offers
          <Link
            href={"/admin/offers"}
            className="w-[104px] h-9 px-[25px] py-[7px] bg-[#ededed] rounded justify-center items-center gap-2.5 inline-flex"
          >
            <span className="text-[#202224] text-base font-semibold font-['Nunito Sans']">
              See all
            </span>
          </Link>
        </h2>

        <div className="mt-7 flex gap-[30px]">
          <PartnershipOffer />
          <PartnershipOffer />
        </div>
      </div>
    </div>
  );
};

export default Page;
