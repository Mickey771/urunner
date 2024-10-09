import React from "react";
import { BiSolidFilePng } from "react-icons/bi";
import { CiLock, CiMail } from "react-icons/ci";
import { LuUser } from "react-icons/lu";

const UpdatePassword = () => {
  return (
    <div className="bg-white w-full h-fit rounded-[12px] border border-[#EDEDF2] p-6">
      <h2 className="text-[#1a1a21] text-xl font-semibold font-['Inter'] leading-normal">
        Update Profile Picture
      </h2>
      <p className="text-[#8b94a6] text-base font-normal font-['Inter'] leading-normal">
        Enter your current password to make update
      </p>

      <form className="mt-8 flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <label
            htmlFor="name"
            className="text-[#101828] text-sm font-medium font-['Inter'] leading-tight"
          >
            Current Password
          </label>
          <div className="flex gap-2 items-center p-4 border border-[#D0D5DD] rounded-md">
            <span>
              <CiLock />
            </span>
            <input
              type="text"
              className=""
              id="name"
              name="name"
              placeholder="Enter Old Password"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="email"
            className="text-[#101828] text-sm font-medium font-['Inter'] leading-tight"
          >
            New Password
          </label>
          <div className="flex gap-2 items-center p-4 border border-[#D0D5DD] rounded-md">
            <span>
              <CiLock />
            </span>
            <input
              type="email"
              className=""
              id="email"
              name="email"
              placeholder="Enter New Password"
            />
          </div>
        </div>

        <div className="flex justify-end mt-10 gap-4">
          <button className="h-[55px] px-6 py-4 bg-[#007aff] rounded-lg flex-col justify-center items-center gap-2.5 inline-flex">
            <span className="text-center text-white text-base font-semibold font-['Inter'] leading-normal">
              Update password
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdatePassword;
