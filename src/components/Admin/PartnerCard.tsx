import Image from "next/image";
import React from "react";
import { CiMail, CiMoneyCheck1 } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import moment from "moment";

const PartnerCard = () => {
  const { selectedPartner } = useSelector((store: RootState) => store.admin);
  return (
    <section className="relative w-full max-w-[453px]">
      <aside className="flex sticky top-[90px] left-0  flex-col px-11 py-20 items-center w-full max-w-[453px] bg-white rounded-[16px]">
        <span className="inline-flex h-[138px] w-[138px]">
          <Image
            src={selectedPartner.image}
            width={138}
            height={138}
            alt="woman"
            className="rounded-full"
          />
        </span>
        <h3 className="mt-4 mb-1 text-center text-[#1a1a1a] text-base font-bold font-['Kumbh Sans']">
          {selectedPartner.name}
        </h3>
        <p className="text-center text-[#a7a7a7] text-sm font-medium font-['Kumbh Sans']">
          {selectedPartner.company_type}
        </p>
        <p className="mt-2 mb-5 text-center text-[#252525] text-sm font-medium font-['Kumbh Sans']">
          {selectedPartner.location}
        </p>
        <div className="flex gap-4">
          <span className="text-[#A7A7A7] bg-[#EFF3FA] p-1.5 rounded-full">
            <FiPhoneCall size={20} />
          </span>
          <span className="text-[#A7A7A7] bg-[#EFF3FA] p-1.5 rounded-full">
            <IoMailOutline size={20} />
          </span>
        </div>

        <form action="" className="mt-5 w-full flex flex-col gap-[30px]">
          <div className="flex flex-col gap-1 w-full">
            <label
              htmlFor="email"
              className="text-[#101828] text-sm font-medium font-['Inter'] leading-tight"
            >
              Email Address
            </label>
            <div className="w-full flex border  border-[#D0D5DD] rounded-[6px] px-4 py-2 bg-white">
              <input
                type="email"
                name="email"
                id="email"
                value={selectedPartner.email}
                disabled
                className="w-full focus:outline-none"
              />
              <span>
                <CiMail size={20} color="#667185" />
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label
              htmlFor="offer"
              className="text-[#101828] text-sm font-medium font-['Inter'] leading-tight"
            >
              Offer Value
            </label>
            <div className="w-full flex border border-[#D0D5DD] rounded-[6px] px-4 py-2 bg-white">
              <input
                name="offer"
                id="offer"
                type="text"
                value={selectedPartner.ucoin}
                disabled
                className="w-full focus:outline-none"
              />
              <span>
                <CiMoneyCheck1 size={20} color="#667185" />
              </span>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex flex-col gap-1 w-full">
              <label
                htmlFor="offer"
                className="text-[#101828] text-sm font-medium font-['Inter'] leading-tight"
              >
                Time of offer
              </label>
              <div className="w-full flex border border-[#D0D5DD] rounded-[6px] px-4 py-2 bg-white">
                <input
                  name="offer"
                  id="offer"
                  type="text"
                  disabled
                  value={moment(selectedPartner.createdAt).format("DD/MM/YYYY")}
                  className="w-full focus:outline-none"
                />
              </div>
            </div>
            {/* <div className="flex flex-col gap-1 w-full">
              <label
                htmlFor="offer"
                className="text-[#101828] text-sm font-medium font-['Inter'] leading-tight"
              >
                Expiration of offer
              </label>
              <div className="w-full flex border border-[#D0D5DD] rounded-[6px] px-4 py-2 bg-white">
                <input
                  name="offer"
                  id="offer"
                  type="date"
                  className="w-full focus:outline-none"
                />
              </div>
            </div> */}
          </div>

          <div className="flex flex-col gap-1 w-full">
            <label
              htmlFor="description"
              className="text-[#101828] text-sm font-medium font-['Inter'] leading-tight"
            >
              Company Description
            </label>
            <div className="w-full flex border border-[#D0D5DD] rounded-[6px] px-4 py-2 bg-white">
              <textarea
                name="description"
                id="description"
                className="w-full resize-none h-[127px] focus:outline-none"
                value={selectedPartner.description}
                disabled
              />
            </div>
          </div>

          {/* <div>
            <button
              type="submit"
              className="h-10 px-6 bg-[#F5F6F7] rounded-full justify-center items-center gap-2 inline-flex"
            >
              <span className="text-[#191b1c] text-sm font-semibold font-['Public Sans'] capitalize leading-10">
                Cancel Partnership
              </span>
            </button>
          </div> */}
        </form>
      </aside>
    </section>
  );
};

export default PartnerCard;
