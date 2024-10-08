import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import moment from "moment";
import { useFetchAdmin } from "@/hooks/useFetchAdmin";

const PartnerForm = () => {
  const { selectedOffer } = useSelector((store: RootState) => store.admin);
  const { acceptOffer } = useFetchAdmin() as {
    isLoading: boolean;
    error: any;
    events: Events[];
    users: User[];
    offers: Offer[];
    isOffersLoading: boolean;
    acceptOffer: (id: string) => void;
  };

  return (
    <aside className="bg-white rounded-[8px] w-full py-6 px-12">
      <h2 className="text-[#191b1c] pb-5 border-b border-[#E5E7E8] text-lg font-medium font-['Public Sans'] leading-normal">
        Offer
      </h2>

      <form action="" className="mt-6 flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <label
            className="text-[#191b1c] text-sm font-normal font-['Public Sans'] leading-tight"
            htmlFor="company"
          >
            Name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={selectedOffer?.name}
            disabled
            className="text-[#4a5154] text-sm font-normal font-['Public Sans'] leading-tight py-2.5 px-4 border border-[#E5E7E8] rounded-[4px]"
          />
        </div>
        <div className="flex gap-4">
          <div className="w-full flex flex-col gap-1.5">
            <label
              className="text-[#191b1c] text-sm font-normal font-['Public Sans'] leading-tight"
              htmlFor="email"
            >
              Partners
            </label>
            <input
              type="email"
              id="email"
              name="email"
              disabled
              value={selectedOffer?.partners}
              className="text-[#4a5154] text-sm font-normal font-['Public Sans'] leading-tight py-2.5 px-4 border border-[#E5E7E8] rounded-[4px]"
            />
          </div>
          <div className="w-full flex flex-col gap-1.5">
            <label
              className="text-[#191b1c] text-sm font-normal font-['Public Sans'] leading-tight"
              htmlFor="contact"
            >
              Pieces
            </label>
            <input
              type="text"
              id="contact"
              name="contact"
              value={selectedOffer?.pieces}
              disabled
              className="text-[#4a5154] text-sm font-normal font-['Public Sans'] leading-tight py-2.5 px-4 border border-[#E5E7E8] rounded-[4px]"
            />
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-full flex flex-col gap-1.5">
            <label
              className="text-[#191b1c] text-sm font-normal font-['Public Sans'] leading-tight"
              htmlFor="type"
            >
              Price
            </label>
            <input
              type="text"
              id="type"
              name="type"
              value={selectedOffer?.price}
              disabled
              className="text-[#4a5154] text-sm font-normal font-['Public Sans'] leading-tight py-2.5 px-4 border border-[#E5E7E8] rounded-[4px]"
            />
          </div>
        </div>

        <div className="w-full flex flex-col gap-1.5">
          <label
            className="text-[#191b1c] text-sm font-normal font-['Public Sans'] leading-tight"
            htmlFor="location"
          >
            Status
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={selectedOffer?.status}
            disabled
            className="text-[#4a5154] text-sm font-normal font-['Public Sans'] leading-tight py-2.5 px-4 border border-[#E5E7E8] rounded-[4px]"
          />
        </div>

        {/* <div className="w-full flex flex-col gap-1.5">
          <label
            className="text-[#191b1c] text-sm font-normal font-['Public Sans'] leading-tight"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            className="text-[#4a5154] text-sm font-normal font-['Public Sans'] leading-tight py-2.5 px-4 border border-[#E5E7E8] rounded-[4px] resize-none h-[190px]"
          ></textarea>
        </div> */}

        <div className="flex gap-4">
          <div className="w-full flex flex-col gap-1.5">
            <label
              className="text-[#191b1c] text-sm font-normal font-['Public Sans'] leading-tight"
              htmlFor="date"
            >
              Offer Date
            </label>
            <input
              type="text"
              id="date"
              name="date"
              value={moment(selectedOffer?.date).format("DD/MM/YYYY")}
              disabled
              className="text-[#4a5154] text-sm font-normal font-['Public Sans'] leading-tight py-2.5 px-4 border border-[#E5E7E8] rounded-[4px]"
            />
          </div>
          <div className="w-full flex flex-col gap-1.5">
            <label
              className="text-[#191b1c] text-sm font-normal font-['Public Sans'] leading-tight"
              htmlFor="expiry"
            >
              Expiry Date
            </label>
            <input
              type="text"
              id="expiry"
              name="expiry"
              value={moment(selectedOffer?.end_date).format("DD/MM/YYYY")}
              disabled
              className="text-[#4a5154] text-sm font-normal font-['Public Sans'] leading-tight py-2.5 px-4 border border-[#E5E7E8] rounded-[4px]"
            />
          </div>
          {/* <div className="w-full flex flex-col gap-1.5">
            <label
              className="text-[#191b1c] text-sm font-normal font-['Public Sans'] leading-tight"
              htmlFor="offer"
            >
              Offer Value
            </label>
            <input
              type="text"
              id="offer"
              name="offer"
              className="text-[#4a5154] text-sm font-normal font-['Public Sans'] leading-tight py-2.5 px-4 border border-[#E5E7E8] rounded-[4px]"
            />
          </div> */}
        </div>

        <div className="flex justify-end mt-2">
          {/* <button
            type="button"
            className="h-10 px-6 bg-[#f4f6f7] rounded-full justify-center items-center gap-2 inline-flex"
          >
            <span className="text-[#191b1c] text-sm font-semibold font-['Public Sans'] capitalize leading-10">
              Cancel
            </span>
          </button> */}
          <button
            type="button"
            onClick={() => acceptOffer(selectedOffer._id)}
            disabled={selectedOffer?.status !== "pending"}
            className="h-10 px-6 bg-[#005ce7] disabled:opacity-30 rounded-full justify-center items-center gap-2 inline-flex"
          >
            <span className="text-white text-sm font-semibold font-['Public Sans'] capitalize leading-10">
              Accept Offer
            </span>
            <span className="text-white">
              <FaArrowRightLong />
            </span>
          </button>
        </div>
      </form>
    </aside>
  );
};

export default PartnerForm;
