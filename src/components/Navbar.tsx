"use client";
import { URunner } from "@/assets/svgs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { HiMenuAlt3 } from "react-icons/hi";

const navLinks = [
  {
    path: "/",
    text: "Home",
  },
  {
    path: "/privacy-policy",
    text: "Privacy Policy",
  },
  {
    path: "/events",
    text: "Events",
  },
  {
    path: "/faq",
    text: "FAQs",
  },
];

const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false);
  const [isButton, setIsButton] = useState(false);

  const path = usePathname();

  return (
    <nav className="w-full sticky top-0 lg:top-3 z-[999] ">
      <div className="bg-white py-4 px-4 flex justify-between items-center rounded-[12px] w-full max-w-max mx-auto shadow-[0px_4px_15px_0px_rgba(0,0,0,0.15)] gap-4 lg:gap-2 relative">
        <span className="zr:[&>svg]:scale-[75%] md:[&>svg]:scale-[80%] lg:[&>svg]:scale-100">
          <URunner />
        </span>
        <div
          className={`md:relative absolute h-fit top-[100%] md:flex-row flex-col w-full md:w-fit md:py-0 py-6 bg-white left-0 flex items-center gap-10 md:gap-[20px] lg:gap-[58px] ${
            isMenu
              ? "translate-y-0 opacity-100"
              : " zr:translate-y-[-120%] md:translate-y-0 zr:opacity-0 md:opacity-100"
          } `}
        >
          {navLinks.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className={` text-[18px] lg:text-[22px] font-medium font-['Poppins'] tracking-wide ${
                path === item.path
                  ? "text-white px-2.5 bg-primaryBlue rounded-[8px]"
                  : "text-[#000000B2]"
              }`}
            >
              {item.text}
            </Link>
          ))}
          {/* <span className="zr:hidden md:flex">
            <BiSearch size={24} color="#000000B2" />
          </span> */}
        </div>
        <div className="flex items-center gap-2">
          <button
            onMouseEnter={() => setIsButton(true)}
            onMouseLeave={() => setIsButton(false)}
            className="h-[40px] transition-all zr:hidden mb:flex md:h-[55px] lg:h-[67px] p-3 md:p-5 bg-[#007aff] rounded-[10px] md:rounded-[16px] lg:rounded-[20px] justify-center items-center gap-2.5 inline-flex"
          >
            <p className="text-white w-max text-[14px] md:text-[18px] lg:text-[22px] font-semibold font-['Inter']">
              Download App
            </p>
            <div
              className={`items-center gap-2 ${isButton ? "flex" : "hidden"}`}
            >
              <span className="inline-flex h-full w-[1px] bg-white"></span>
              <a
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.app.urunner"
                className="inline-flex h-[15px] sm:h-[30px] md:h-[42px] lg:h-[55px] w-[15px] sm:w-[30px] md:w-[42px] lg:w-[55px]"
              >
                <Image
                  src={`/playstore.svg`}
                  width={0}
                  height={0}
                  sizes="100vw"
                  alt="store"
                  style={{ width: "100%", height: "auto" }}
                />
              </a>
              <a
                target="_blank"
                href="https://apps.apple.com/us/app/urunner/id1617568183"
                className="inline-flex h-[15px] sm:h-[30px] md:h-[42px] lg:h-[55px] w-[15px] sm:w-[30px] md:w-[42px] lg:w-[55px]"
              >
                <Image
                  src={`/appstore.svg`}
                  width={0}
                  height={0}
                  sizes="100vw"
                  alt="store"
                  style={{ width: "100%", height: "auto" }}
                />
              </a>
            </div>
          </button>
          <span
            onClick={() => setIsMenu((prev) => !prev)}
            className={`cursor-pointer zr:flex md:hidden ${
              isMenu ? "rotate-180" : "rotate-0"
            } `}
          >
            <HiMenuAlt3 size={30} />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
