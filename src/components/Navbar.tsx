"use client";
import { URunner } from "@/assets/svgs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { BiSearch } from "react-icons/bi";

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
    path: "/contact-us",
    text: "Contact Us",
  },
];

const Navbar = () => {
  const path = usePathname();

  console.log(path);

  return (
    <nav className="w-full sticky top-3 z-[999] ">
      <div className="bg-white py-4 px-4 flex justify-between items-center rounded-[12px] w-full max-w-max mx-auto shadow-[0px_4px_15px_0px_rgba(0,0,0,0.15)]">
        <span>
          <URunner />
        </span>
        <div className="flex items-center gap-[58px]">
          {navLinks.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className={` text-[22px] font-medium font-['Poppins'] tracking-wide ${
                path === item.path
                  ? "text-white px-2.5 bg-primaryBlue rounded-[8px]"
                  : "text-[#000000B2]"
              }`}
            >
              {item.text}
            </Link>
          ))}
          <span>
            <BiSearch size={24} color="#000000B2" />
          </span>
        </div>
        <button className="h-[67px] p-5 bg-[#007aff] rounded-[20px] justify-center items-center gap-2.5 inline-flex">
          <p className="text-white text-[22px] font-semibold font-['Inter']">
            Download App
          </p>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
