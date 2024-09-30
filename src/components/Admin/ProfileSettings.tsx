import React from "react";
import { BiSolidFilePng } from "react-icons/bi";
import { CiMail } from "react-icons/ci";
import { LuUser } from "react-icons/lu";

const ProfileSettings = () => {
  return (
    <div className="bg-white w-full rounded-[12px] border border-[#EDEDF2] p-6">
      <h2 className="text-[#1a1a21] text-xl font-semibold font-['Inter'] leading-normal">
        Profile Settings
      </h2>
      <p className="text-[#8b94a6] text-base font-normal font-['Inter'] leading-normal">
        These are your personal details, they are visible to the public
      </p>

      <form className="mt-8 flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <label
            htmlFor="name"
            className="text-[#101828] text-sm font-medium font-['Inter'] leading-tight"
          >
            Full Name
          </label>
          <div className="flex gap-2 items-center p-4 border border-[#D0D5DD] rounded-md">
            <span>
              <LuUser />
            </span>
            <input
              type="text"
              className=""
              id="name"
              name="name"
              placeholder="John Doe"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="email"
            className="text-[#101828] text-sm font-medium font-['Inter'] leading-tight"
          >
            Email
          </label>
          <div className="flex gap-2 items-center p-4 border border-[#D0D5DD] rounded-md">
            <span>
              <CiMail />
            </span>
            <input
              type="email"
              className=""
              id="email"
              name="email"
              placeholder="user@mail.com"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="picture"
            className="text-[#101828] text-sm font-medium font-['Inter'] leading-tight"
          >
            Profile Picture
          </label>
          <div className="flex gap-2 items-center p-4 border border-[#D0D5DD] rounded-md">
            <span>
              <BiSolidFilePng />
            </span>
            <input
              type="file"
              className=""
              id="picture"
              name="picture"
              placeholder="John Doe"
            />
          </div>
        </div>

        <div className="flex justify-between mt-4">
          <button className="w-[220px] h-[55px] px-6 py-4 bg-white rounded-lg border border-[#007aff] flex-col justify-center items-center gap-2.5 inline-flex">
            <span className="text-center text-[#007aff] text-base font-semibold font-['Inter'] leading-normal">
              Cancel
            </span>
          </button>
          <button className="h-[55px] px-6 py-4 bg-[#007aff] rounded-lg flex-col justify-center items-center gap-2.5 inline-flex">
            <span className="text-center text-white text-base font-semibold font-['Inter'] leading-normal">
              Save Changes
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileSettings;
