import { Eclipse, Eclipsesmall } from "@/assets/svgs";
import React from "react";
import StoreFlag from "../Landing/StoreFlag";
import { LuMoveRight } from "react-icons/lu";
import Image from "next/image";
import { useDisclosure } from "@/hooks/useDisclosure";
import PartnershipModal from "../Modals/PartnershipModal";
import JoinCommunityModal from "../Modals/JoinCommunityModal";
import Link from "next/link";

const partners = ["garmin", "fitbit", "strava", "oura"];

const CommunityLanding = () => {
  const joinCommunityModal = useDisclosure();

  return (
    <main className="pb-40">
      <section className="w-full lg:flex-row flex-col h-fit overflow-hidden max-w-max mx-auto lg:px-0 px-6 flex gap-[30px] pt-4">
        <div className="w-full relative   z-10 mt-[54px]">
          <div className="absolute top-0 left-20">
            <Eclipse />
          </div>
          <h1 className="w-full max-w-[500px] lg:max-w-[682px] relative z-[11] text-[#202020] text-[32px] mb:text-[45px] md:text-[58px] lg:text-[64px] font-black font-['Urbanist'] leading-[53px] md:leading-[70px] lg:leading-[86.25px]">
            Get updated on all our events & Videos on our Community
          </h1>
          <p className="relative z-[11] text-[#202020]/70 text-xl md:text-2xl  mt-[18px] font-semibold font-['Urbanist'] leading-[32.342px]">
            Become a part of the Urunner family and get updated.
          </p>
          <div className="flex items-center w-full gap-3 md:gap-6 mt-[52px] ">
            <a
              target="_blank"
              href="https://play.google.com/store/apps/details?id=com.app.urunner"
              className="cursor-pointer"
            >
              <StoreFlag
                icon={"playstore"}
                bg={"blueCurve"}
                text="Google Play"
              />
            </a>
            <a
              target="_blank"
              href="https://apps.apple.com/us/app/urunner/id1617568183"
              className="cursor-pointer"
            >
              <StoreFlag icon={"appstore"} bg={"blackCurve"} text="App Store" />
            </a>
          </div>
          <div className="lg:h-[157px] flex items-end">
            <div className="lg:w-[418px] flex items-center bg-[#212020] h-[70px] mb:h-[89px] md:h-[110px] lg:h-[134px] relative mt-10 z-10 bottom-0 left-0 rounded-[15px]  md:rounded-[30px] py-3 md:py-5 px-[15px] md:px-[25px]">
              <button
                onClick={joinCommunityModal.open}
                className="flex gap-[5px] md:gap-[10px] items-center bg-primaryBlue p-[9px] md:p-[20px] lg:p-[25px] pr-[8px] md:pr-[12px] lg:pr-[15px] rounded-[10px] lg:rounded-[20px]"
              >
                <span className="text-white text-[18px] md:text-[24px] lg:text-[32px] font-medium font-['Urbanist'] lg:leading-[43.12px]">
                  Join Our Community
                </span>
                <span className="text-[15px] md:text-[18px] lg:text-[30px]">
                  <LuMoveRight className="rotate-[-45deg]" color="white" />
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="w-full flex  h-full  relative">
          <div className="absolute zr:hidden lg:flex top-0 right-[-0px] rotate-0 translate-y-[-55%]">
            <Eclipsesmall />
          </div>
          <div className=" lg:h-[774px] relative flex items-end">
            <span className="w-full   inline-flex max-w-[618px]">
              <Image
                src={"/communityBanner.svg"}
                height={0}
                width={0}
                alt="banner"
                sizes="100vw"
                style={{ width: "100%", height: "100%" }}
                className="object-cover"
              />
            </span>
          </div>
        </div>
      </section>
      <section className="w-full max-w-max mx-auto mt-[111px] flex flex-col justify-center items-center px-6 lg:px-0">
        <h1 className="text-[#202020] text-center text-[32px] md:text-[52px] lg:text-[64px] font-black font-['Urbanist'] lg:leading-[86.25px]">
          Connect to URunner
        </h1>
        <p className="w-full max-w-[710px] mt-[15px] text-center text-[#202020]/80 text-base md:text-xl lg:text-2xl font-semibold font-['Urbanist'] lg:leading-loose">
          We are in collaboration with other notable companies and brands
        </p>
        <div className="mt-[52px] [&>span>svg]:scale-50 flex gap-[20px] md:gap-[40px] lg:gap-[75px] ">
          {partners.map((item, index) => (
            <span key={index} className="pt-6  w-full max-w-[256px]">
              <Image
                src={`/${item}.svg`}
                width={0}
                height={0}
                alt={item}
                sizes="100vw"
                style={{ width: "100%", height: "100%" }}
              />
            </span>
          ))}
          <span className="pt-6  w-full max-w-[256px]">
            <Image
              src={`/kasports.png`}
              width={0}
              height={0}
              alt="kasports"
              sizes="100vw"
              style={{ width: "100%", height: "100%" }}
            />
          </span>
        </div>
        <Link
          href={"/offers"}
          className="mt-20 flex gap-[5px] md:gap-[10px] items-center bg-primaryBlue p-[9px] md:p-[20px] lg:p-[25px] pr-[8px] md:pr-[12px] lg:pr-[15px] rounded-[10px] lg:rounded-[20px]"
        >
          <p className="text-white text-[18px] md:text-[24px] lg:text-[32px] font-medium font-['Urbanist'] lg:leading-[43.12px]">
            Partner with us
          </p>
          <span className="text-[15px] md:text-[18px] lg:text-[30px]">
            <LuMoveRight className="rotate-[-45deg]" color="white" />
          </span>
        </Link>
      </section>
      {joinCommunityModal.isOpen && (
        <JoinCommunityModal modal={joinCommunityModal} />
      )}
    </main>
  );
};

export default CommunityLanding;
