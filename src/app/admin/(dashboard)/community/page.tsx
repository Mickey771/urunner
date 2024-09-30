"use client";
import Community from "@/components/Community";
import React from "react";

const Page = () => {
  return (
    <div className="w-full max-w-admin mx-auto p-[30px]">
      <h1 className="text-[#202224] text-[32px] font-bold font-['Nunito Sans'] mb-4">
        Community
      </h1>
      <Community />
    </div>
  );
};

export default Page;
