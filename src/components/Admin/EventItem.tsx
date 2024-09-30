import { useDisclosure } from "@/hooks/useDisclosure";
import Image from "next/image";
import React from "react";
import { GoPaperclip } from "react-icons/go";
import { SlPencil } from "react-icons/sl";
import RegisteredUsersModal from "../Modals/RegisteredUsersModal";

const EventItem = () => {
  const registeredUsersModal = useDisclosure();

  return (
    <aside className="w-full">
      <div className="flex justify-between items-center">
        <p className="w-[241px]  opacity-60 text-[#202224] text-base font-semibold font-['Nunito Sans']">
          Jan 1, 2024 11th Street Chicago
        </p>
        <h2 className="w-[335px]  text-right text-[#202224] text-[32px] font-bold font-['Nunito Sans']">
          Design Conference 2.0
        </h2>
      </div>
      <span className="inline-flex w-full mt-9">
        <Image
          src={"/vrBg.png"}
          width={0}
          height={0}
          style={{ width: "100%", height: "100%" }}
          sizes="100vw"
          alt="bg"
          className="object-cover"
        />
      </span>
      <p className="h-[159px]">
        <span className="text-[#1b1b1b] text-lg font-normal font-['Poppins']">
          <br />
        </span>
        <span className="text-[#1b1b1b] text-base font-normal font-['Poppins']">
          The is also known as the Roseline Etuokwu Sigma Secondary School Quiz
          Competition is one of the philanthropic activities of the club to
          bring the club closer to the grassroots. It is the club’s believe that
          the secondary school students would grow to become University
          students. As such, introducing the club to them right from their
          secondary school days would guide them in manners to act and way of
          life to live as a student of higher institutions.{" "}
        </span>
      </p>

      <form className="mt-7">
        <label
          htmlFor="link"
          className="text-[#101828] text-sm font-medium font-['Inter'] leading-tight"
        >
          Registration Link
        </label>
        <div className="flex mt-1 gap-2 items-center bg-white max-w-[375px] p-4 border border-[#D0D5DD] rounded-md">
          <span>
            <GoPaperclip size={18} color="#98A2B3" />
          </span>
          <input
            type="text"
            placeholder="https://registration_link.com"
            className="w-full focus:outline-none"
          />
          <span>
            <SlPencil size={18} color="#98A2B3" />
          </span>
        </div>
      </form>

      <h2 className="mt-10 h-8 text-[#202224] text-2xl font-bold font-['Nunito Sans']">
        Registered Attendees
      </h2>

      <div className="flex gap-4 mt-4">
        {Array.from({ length: 5 }, (_, index) => (
          <span key={index} className="">
            <Image
              src={"/man2.png"}
              height={50}
              width={50}
              alt="man"
              className="rounded-full object-cover"
            />
          </span>
        ))}
        <button
          onClick={registeredUsersModal.open}
          className="w-[50px] h-[50px] flex justify-center items-center text-[#007aff] text-base font-bold font-['Nunito Sans'] p-2 border border-[#007AFF] rounded-full"
        >
          <span>14+</span>
        </button>
      </div>
      <button className="mt-[60px] h-[55px] px-6 py-4 bg-[#d0d4dd] rounded-lg flex-col justify-center items-center gap-2.5 inline-flex">
        <span className="text-center text-[#252525] text-base font-semibold font-['Inter'] leading-normal">
          Cancel Event
        </span>
      </button>

      {registeredUsersModal.isOpen && (
        <RegisteredUsersModal modal={registeredUsersModal} />
      )}
    </aside>
  );
};

export default EventItem;
