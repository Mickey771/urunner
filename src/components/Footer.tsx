import {
  Appstoresmall,
  Bluecurvesmall,
  Fb,
  In,
  Ln,
  Mail,
  Playstoresmall,
  Tw,
  URunner,
  Whitecurvesmall,
} from "@/assets/svgs";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full my-6 max-w-max mx-auto flex gap-[18px]">
      <div className="bg-[#161313] rounded-[20px] px-10 py-[55px]">
        <h1 className="text-white text-[40px] font-semibold font-['Inter'] leading-[48px]">
          Get Our Mobile
          <br />
          Application
        </h1>
        <p className="w-[329px] mt-3 text-[#e3dada] text-base font-normal font-['Inter'] leading-normal">
          Join 1000+ individuals, innovators, and creators who have embraced
          fitness, progress, and wealth.
        </p>
        <div className="flex mt-[37px] gap-[15px]">
          <button className="relative w-fit ">
            <Bluecurvesmall />
            <span className="inline-flex h-full absolute top-0 w-fit left-0 justify-center items-center pl-[9px]">
              <Playstoresmall />
            </span>
            <p className="text-white text-2xl font-bold font-['Urbanist'] eading-loose absolute top-0 right-0 h-full w-fit inline-flex items-center justify-center pr-[15px]">
              Playstore
            </p>
          </button>
          <button className="relative w-fit ">
            <Whitecurvesmall />
            <span className="inline-flex h-full absolute top-0 w-fit left-0 justify-center items-center pl-[9px]">
              <Appstoresmall />
            </span>
            <p className="text-[#212020] text-2xl font-bold font-['Urbanist'] eading-loose absolute top-0 right-0 h-full w-fit inline-flex items-center justify-center pr-[15px]">
              Appstore
            </p>
          </button>
        </div>
      </div>

      <div className="p-[36px] bg-[#007AFF14] w-full rounded-[20px] flex flex-col gap-10">
        <div className="flex justify-between">
          <div className="flex flex-col gap-6">
            <p className="text-[#8c8484] text-sm font-medium font-['Inter'] leading-tight">
              Product
            </p>
            <p className="w-[118px] text-[#3e3737] text-sm font-medium font-['Inter'] leading-tight">
              App
            </p>
            <p className="w-[118px] text-[#3e3737] text-sm font-medium font-['Inter'] leading-tight">
              Company
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-[#8c8484] text-sm font-medium font-['Inter'] leading-tight">
              Contact Us
            </p>
            <a
              href="mailto:info@urunner.io"
              className="text-[#007aff] text-sm font-medium font-['Inter'] leading-tight"
            >
              info@urunner.io
            </a>
          </div>
          <span>
            <URunner />
          </span>
        </div>

        <div className="flex gap-4 items-center">
          <h2 className="text-[#202020] mr-2 w-full max-w-[240px] text-[28px] font-bold font-['Urbanist'] leading-[33.60px]">
            Join our newsletter
          </h2>
          <label className="bg-white border border-[#D0D5DD] p-4 flex gap-2 w-full rounded-[6px] placeholder:text-[#98a1b2] text-sm">
            <span>
              <Mail />
            </span>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email address"
              className="focus:outline-none"
            />
          </label>
          <button className=" px-6 py-4 bg-[#007aff] rounded-lg flex-col justify-center items-center gap-2.5 inline-flex">
            <div className="justify-center items-center gap-2 inline-flex">
              <div className="text-center text-white text-base font-semibold font-['Inter'] leading-normal">
                Subscribe
              </div>
            </div>
          </button>
        </div>

        <div className="flex gap-4 items-center">
          <p className="text-[#344054] text-sm font-semibold font-['Inter'] leading-tight">
            Follow Us
          </p>
          <div className="flex gap-2">
            <span>
              <Fb />
            </span>
            <span>
              <Tw />
            </span>
            <span>
              <In />
            </span>
            <span>
              <Ln />
            </span>
          </div>
        </div>

        <div className="flex items-center w-full max-w-[630px] justify-between gap-3">
          <div className="flex items-center gap-4">
            <p className="text-[#504949] text-sm font-semibold font-['Inter'] leading-tight">
              Privacy Policy
            </p>
            <span className="inline-flex w-1.5 h-1.5 bg-[#e3dada] rounded-full" />
            <p className="text-[#504949] text-sm font-semibold font-['Inter'] leading-tight">
              Terms of Use
            </p>
          </div>
          <p className="w-[193px] text-right text-[#504949] text-base font-normal font-['Inter'] leading-normal">
            © 2024 Urunner Ltd
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
