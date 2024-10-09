"use client";
import ProfileSettings from "@/components/Admin/ProfileSettings";
import UpdatePassword from "@/components/Admin/UpdatePassword";
import React from "react";

const Page = () => {
  return (
    <div className="p-[50px] w-full max-w-admin mx-auto">
      <h1 className="text-black  text-2xl font-semibold font-['Inter'] leading-[28.80px]">
        Settings
      </h1>
      <p className="text-[#667185] mt-2 text-sm font-normal font-['Inter'] leading-tight">
        Control your profile setup and integrations
      </p>

      <div className="mt-6 flex gap-5 ">
        <ProfileSettings />
        <UpdatePassword />
      </div>
    </div>
  );
};

export default Page;
