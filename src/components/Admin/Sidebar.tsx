import { adminLinks } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { CiSettings } from "react-icons/ci";
import { IoPowerOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/reducers/adminSlice";

const Sidebar = () => {
  const [currentPath, setCurrentPathPath] = useState("");

  const pathname = usePathname();
  const dispatch = useDispatch();

  useEffect(() => {
    setCurrentPathPath(pathname.split("/")[2]);
  }, [pathname]);
  return (
    <div className="pt-[37px] min-w-[231px] h-lvh pr-4 bg-white pb-20">
      <span className="inline-flex px-4">
        <Image
          src={"/logo.svg"}
          height={0}
          width={0}
          sizes="100vw"
          style={{ width: "100%", height: "100%" }}
          alt="logo"
        />
      </span>
      <div className="flex flex-col h-full justify-between ">
        <div className="mt-[50px] flex flex-col gap-4">
          {adminLinks.map((item, index) => {
            const { text, path, icon: Icon } = item;
            return (
              <Link
                href={`/admin/${path}`}
                key={index}
                className="flex items-center gap-6 hover:opacity-40 "
              >
                <span
                  className={`inline-flex border-r-[4px]  rounded-[10px] h-[50px] w-2 ${
                    currentPath === path
                      ? "border-primaryBlue"
                      : "border-transparent"
                  }`}
                ></span>
                <div
                  className={`w-full h-[50px] flex items-center gap-4   p-4 rounded-[6px] ${
                    currentPath === path
                      ? "bg-primaryBlue text-white"
                      : "text-[#333333] bg-transparent"
                  }`}
                >
                  <span>
                    <Icon size={26} />
                  </span>
                  <p className="text-sm font-semibold font-['Nunito Sans'] tracking-tight">
                    {text}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
        <div>
          <Link
            href={`/admin/settings`}
            className="flex items-center gap-6 hover:opacity-40 "
          >
            <span
              className={`inline-flex border-r-[4px]  rounded-[10px] h-[50px] w-2 ${
                currentPath === "settings"
                  ? "border-primaryBlue"
                  : "border-transparent"
              }`}
            ></span>
            <div
              className={`w-full h-[50px] flex items-center gap-4   p-4 rounded-[6px] ${
                currentPath === "settings"
                  ? "bg-primaryBlue text-white"
                  : "text-[#333333] bg-transparent"
              }`}
            >
              <span>
                <CiSettings size={26} />
              </span>
              <p className="text-sm font-semibold font-['Nunito Sans'] tracking-tight">
                Settings
              </p>
            </div>
          </Link>
          <Link
            href={"/admin/signin"}
            onClick={() => dispatch(logout())}
            className="flex items-center gap-6 hover:opacity-40 "
          >
            <span
              className={`inline-flex border-r-[4px] border-transparent  rounded-[10px] h-[50px] w-2 `}
            ></span>
            <div
              className={`w-full h-[50px] text-[#333333] bg-transparent flex items-center gap-4   p-4 rounded-[6px]`}
            >
              <span>
                <IoPowerOutline size={26} />
              </span>
              <p className="text-sm font-semibold font-['Nunito Sans'] tracking-tight">
                Logout
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
