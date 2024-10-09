import Image from "next/image";
import React from "react";
import { FaRegBell } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../../../redux/reducers/adminSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const Topbar = () => {
  const { user } = useSelector((store: RootState) => store.admin);
  const dispatch = useDispatch();
  return (
    <div className="sticky top-0 left-0 w-full z-20 px-5 py-4 bg-white ">
      <div className="w-full max-w-admin mx-auto flex justify-between">
        <div className="flex items-center gap-6 w-full">
          <button onClick={() => dispatch(toggleSidebar())}>
            <FiMenu color="#202224" size={26} />
          </button>
          <label
            htmlFor="search"
            className="bg-[#F5F6FA] w-full max-w-[388px] border-[0.6px] rounded-full border-[#D5D5D5] py-2.5 px-4 flex items-center gap-3 "
          >
            <span>
              <IoSearchOutline color="#333" size={20} />
            </span>
            <input
              type="text"
              id="search"
              name="search"
              className="bg-transparent w-full focus:outline-none"
              placeholder="Search"
            />
          </label>
        </div>
        <div className="flex items-center gap-6">
          {/* <span>
            <FaRegBell size={25} />
          </span> */}
          <div className="w-[125px] flex gap-4 items-center">
            <span className="inline-flex w-full rounded-full h-[50px] max-w-[50px]">
              <Image
                src={user.image}
                height={0}
                width={0}
                sizes="100vw"
                style={{ width: "100%", height: "100%" }}
                alt="logo"
                className="rounded-full "
              />
            </span>
            <div className=" flex flex-col gap-1">
              <p className="text-neutral-700 text-sm font-bold font-['Nunito Sans']">
                {user.fullName}
              </p>
              <p className="text-[#565656] text-xs font-semibold font-['Nunito Sans']">
                Admin
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
