import { Quotesgrey } from "@/assets/svgs";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";

const reviews = [
  {
    text:
      "This is by far one of the best fitness apps I have used. Highly recommend trying it out if you are looking for a way to motivate yourself to workout! My friends and I love comparing our activity scores at the end of the day!",
    name: "IOS App user",
    image: "user",
  },
  {
    text: "Great App",
    name: "Mickey",
    image: "user",
  },
];

const SectionFive = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeReview, setActiveReview] = useState(reviews[currentIndex]);

  const handleChangeReview = (action: string) => {
    if (action === "next") {
      if (currentIndex === reviews.length - 1) {
        setCurrentIndex(0);
        return;
      }
      setCurrentIndex((prev) => prev + 1);
    } else if (action === "prev") {
      if (currentIndex === 0) {
        setCurrentIndex(reviews.length - 1);
        return;
      }
      setCurrentIndex((prev) => prev - 1);
    }
  };

  useEffect(() => {
    setActiveReview(reviews[currentIndex]);
  }, [currentIndex]);

  return (
    <section className="mt-[150px] md:mt-[193px] w-full">
      <div
        style={{
          backgroundImage: "url(/peopleBg.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="w-full flex flex-col gap-[87px] lg:gap-[105px] justify-center items-center min-h-[512px] lg:min-h-[552px] rounded-[30px] lg:rounded-[50px]"
      >
        <h1 className="px-3 lg:px-0 text-center text-white text-[24px] md:text-[32px] lg:text-[40px] font-extrabold font-['Urbanist'] lg:leading-[53.90px]">
          See what our users say about us
        </h1>
        <div className="relative  bg-white w-full max-w-[304px] lg:max-w-[534px] h-[277px] rounded-[17px] flex flex-col items-center">
          <span className="w-fit h-full absolute top-0 right-0 flex items-center justify-center">
            <button
              onClick={() => handleChangeReview("next")}
              className="translate-x-[50%] rounded-full text-base md:text-xl lg:text-2xl h-[38px] md:h-[48px] lg:h-[62px] w-[38px] md:w-[48px] lg:w-[62px] bg-[#737373] flex justify-center items-center"
            >
              <HiArrowLongRight color="white" />
            </button>
          </span>
          <span className="w-fit h-full absolute top-0 left-0 flex items-center justify-center">
            <button
              onClick={() => handleChangeReview("prev")}
              className="translate-x-[-50%] rounded-full text-base md:text-xl lg:text-2xl h-[38px] md:h-[48px] lg:h-[62px] w-[38px] md:w-[48px] lg:w-[62px] bg-[#737373] flex justify-center items-center"
            >
              <HiArrowLongLeft color="white" />
            </button>
          </span>
          <div className="absolute h-fit">
            <Image
              src={`/user.png`}
              height={120}
              width={120}
              alt="profile"
              className="translate-y-[-50%] rounded-full"
            />
          </div>
          <h2 className="w-fit max-w-[176px] lg:max-w-[390px] relative mt-[99px] text-center text-black text-[12px] lg:text-[18px] font-extrabold font-['Urbanist'] lg:leading-[34.449px] tracking-wider">
            {activeReview.text.slice(0, 85)}...
            {/* <span className="inline-flex absolute top-[-27%] lg:top-[-75%] w-[42px] md:w-[82px] left-[-22%] lg:left-[-18%]">
              <Image
                src={"/quotesgrey.svg"}
                height={0}
                width={0}
                alt="quote"
                sizes="100vw"
                style={{ width: "100%", height: "100%" }}
              />
            </span> */}
          </h2>
          <p className="w-[141px] lg:w-[195.64px] mt-[23px] text-center text-black text-base lg:text-xl font-semibold font-['Urbanist'] leading-[24px] tracking-wide">
            - {activeReview.name}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionFive;
