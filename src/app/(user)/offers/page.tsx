"use client";
import PartnershipModal from "@/components/Modals/PartnershipModal";
import { useDisclosure } from "@/hooks/useDisclosure";
import { useEvents } from "@/hooks/useEvents";
import moment from "moment";
import Image from "next/image";
import React from "react";
import { setSelectedOffer } from "../../../../redux/reducers/userSlice";
import { useDispatch } from "react-redux";
import OffersLoader from "@/components/OffersLoader";

const Page = () => {
  const { offers, isOffersLoading } = useEvents() as {
    offers: Offer[];
    isOffersLoading: boolean;
  };

  const dispatch = useDispatch();

  const partnershipModal = useDisclosure();

  return (
    <main className="pb-40">
      <section className="w-full  flex-col  max-w-max mx-auto lg:px-0 px-6 flex gap-[30px] pt-4">
        <h1 className="text-[#202020] text-[40px] md:text-[54px] font-black font-['Urbanist'] leading-[86.25px]">
          Offers
        </h1>

        <div className="bg-[#4880FF] rounded-[14px] py-[50px] px-[40px] md:px-[70px] lg:px-[90px]">
          {/* <p className="text-white text-sm md:text-base font-semibold font-['Nunito Sans'] leading-[30px]">
            September 12-22
          </p> */}
          <h2 className="text-white my-2 text-2xl md:text-[37px] font-black font-['Nunito Sans'] md:leading-[48px]">
            Enjoy free usable
            <br />
            products with your UcCoins
          </h2>
          {/* <p className="opacity-80 text-white text-sm md:text-base font-semibold font-['Nunito Sans'] md:leading-[30px]">
            Designer Dresses - Pick from trendy Designer Dress.
          </p> */}

          <div className="mt-[60px]">
            <a
              href="#offers"
              className="w-[156px] p-4  h-11 text-white  bg-[#ff8743] border border-[#ff8743] hover:bg-white hover:text-[#ff8743] rounded-[11px]"
            >
              <span className="text-sm font-bold font-['Nunito Sans'] leading-7 tracking-wide">
                Get Started
              </span>
            </a>
          </div>
        </div>

        {isOffersLoading ? (
          <OffersLoader />
        ) : (
          <div
            id="offers"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 gap-y-14 w-full"
          >
            {offers.length > 0 ? (
              offers?.map((item, index) => (
                <div
                  key={index}
                  className="bg-white shadow-[6px_6px_54px_0px_rgba(0,0,0,0.05)] max-h-[497px] rounded-[14px]"
                >
                  <span className="inline-flex  w-full h-[317px]">
                    <Image
                      src={item.image}
                      height={0}
                      width={0}
                      alt={item.name}
                      style={{ height: "100%", width: "100%" }}
                      sizes="100vw"
                      className="object-cover rounded-t-[14px]"
                    />
                  </span>

                  <div className="flex flex-col gap-6 p-6 pb-16 justify-between w-full ">
                    <div className="flex w-full justify-between">
                      <div className="flex flex-col gap-2">
                        <h3 className="text-[#202224] text-2xl capitalize font-bold font-['Nunito Sans'] leading-tight">
                          {item.name}
                        </h3>
                        <p className="text-[#4880ff] text-lg font-bold font-['Nunito Sans'] leading-tight">
                          {item.pieces} UCoins
                        </p>
                      </div>
                      <p className="w-[114px] opacity-40 text-right text-black text-sm font-semibold font-['Nunito Sans']">
                        {moment(item.date).format("DD MMM YYYY")}
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        partnershipModal.open();
                        dispatch(setSelectedOffer(item));
                      }}
                      className="w-[126px] h-[38px] opacity-70 bg-[#e2eaf8] rounded-xl"
                    >
                      <span className="text-[#202224] text-sm font-bold font-['Nunito Sans'] leading-7">
                        Accept
                      </span>
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-xl">No offers to display</p>
            )}
          </div>
        )}
      </section>
      {partnershipModal.isOpen && <PartnershipModal modal={partnershipModal} />}
    </main>
  );
};

export default Page;
