"use client";
import CreateOfferModal from "@/components/Modals/CreateOfferModal";
import { useDisclosure } from "@/hooks/useDisclosure";
import Link from "next/link";
import { useState } from "react";
import { BsClockHistory } from "react-icons/bs";
import { HiMiniUserGroup } from "react-icons/hi2";
import { IoHomeOutline } from "react-icons/io5";
import { LiaTimesCircle } from "react-icons/lia";
import { MdDoneAll } from "react-icons/md";
import { TbCirclePlus } from "react-icons/tb";

const filters = [
  {
    text: "All Offers",
    icon: IoHomeOutline,
  },
  {
    text: "Pending Offers",
    icon: BsClockHistory,
  },
  {
    text: "Concluded Offers",
    icon: MdDoneAll,
  },
  {
    text: "Expired Offers",
    icon: LiaTimesCircle,
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [selected, setSelected] = useState("All Offers");

  const createOfferModal = useDisclosure();

  return (
    <main className="flex flex-col gap-[30px]  pb-20 pt-10 px-7 ">
      <div className=" flex justify-between">
        <div className="flex gap-2.5 mx-auto w-full max-w-admin">
          {filters.map((item, index) => {
            const { text, icon: Icon } = item;
            return (
              <Link
                href={"/admin/offers/"}
                key={index}
                onClick={() => setSelected(text)}
                className={`h-9 px-3 py-2 rounded-md  justify-center items-center gap-2 inline-flex ${
                  selected === text
                    ? "bg-[#007AFF12]"
                    : "bg-transparent border border-[#d0d4dd]"
                }`}
              >
                <div
                  className={`w-4 h-4 relative ${
                    selected === text ? "text-[#007AFF]" : "text-[#344054]"
                  }`}
                >
                  <Icon />
                </div>
                <div
                  className={`text-center text-sm font-medium font-['Inter'] leading-tight ${
                    selected === text ? "text-[#007AFF]" : "text-[#344054]"
                  }`}
                >
                  {text}
                </div>
                <div
                  className={`px-2  rounded-xl flex-col justify-center items-center gap-2 inline-flex ${
                    selected === text
                      ? "text-[#fff] bg-[#007AFF]"
                      : "text-[#344054] bg-[#eff1f4]"
                  }`}
                >
                  <span
                    className={`text-center text-xs font-medium font-['Inter'] leading-[17.40px] `}
                  >
                    0
                  </span>
                </div>
              </Link>
            );
          })}
          <Link
            href={"/admin/offers/partners"}
            onClick={() => setSelected("partners")}
            className={`h-9 px-3 py-2 rounded-md  justify-center items-center gap-2 inline-flex ${
              selected === "partners"
                ? "bg-[#007AFF12]"
                : "bg-transparent border border-[#d0d4dd]"
            }`}
          >
            <div
              className={`w-4 h-4 relative ${
                selected === "partners" ? "text-[#007AFF]" : "text-[#344054]"
              }`}
            >
              <HiMiniUserGroup />
            </div>
            <div
              className={`text-center text-sm font-medium font-['Inter'] leading-tight ${
                selected === "partners" ? "text-[#007AFF]" : "text-[#344054]"
              }`}
            >
              {"Partners"}
            </div>
            <div
              className={`px-2  rounded-xl flex-col justify-center items-center gap-2 inline-flex ${
                selected === "partners"
                  ? "text-[#fff] bg-[#007AFF]"
                  : "text-[#344054] bg-[#eff1f4]"
              }`}
            >
              <span
                className={`text-center text-xs font-medium font-['Inter'] leading-[17.40px] `}
              >
                0
              </span>
            </div>
          </Link>
        </div>

        <button
          onClick={createOfferModal.open}
          className="h-9 w-[165px] px-3 py-2 bg-[#007aff] rounded-md  items-center gap-2 inline-flex text-white text-sm font-medium font-['Inter'] leading-tight"
        >
          <span className="text-white relative">
            <TbCirclePlus size={22} />
          </span>
          Create Offers
        </button>
      </div>
      {children}

      {/* CREATE OFFER MODAL */}
      {createOfferModal.isOpen && <CreateOfferModal modal={createOfferModal} />}
    </main>
  );
}
