import Image from "next/image";
import React from "react";

const StoreFlag: React.FC<{ text: string; bg: any; icon: any }> = ({
  icon,
  text,
  bg,
}) => {
  return (
    <button
      className="relative  h-[36px] sm:h-[64px] md:h-[75px] lg:h-[86px] w-[150px] sm:w-[250px] md:w-[300px] lg:w-[351px] "
      style={{
        backgroundImage: `url(/${bg}.png)`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <span className="inline-flex h-full absolute top-0   left-0 justify-center items-center pl-1.5 lg:pl-2.5">
        <span className="inline-flex h-[15px] sm:h-[30px] md:h-[42px] lg:h-[55px] w-[15px] sm:w-[30px] md:w-[42px] lg:w-[55px]">
          <Image
            src={`/${icon}.svg`}
            width={0}
            height={0}
            sizes="100vw"
            alt="store"
            style={{ width: "100%", height: "auto" }}
          />
        </span>
      </span>
      <p className="text-white  text-[12px] sm:text-[18px] md:text-[22px] lg:text-[28px] font-bold font-['Urbanist'] leading-[37.73px] absolute top-0 right-0 h-full w-fit inline-flex items-center justify-center pr-[8px] sm:pr-[12px] md:pr-[18px] lg:pr-[20px]">
        Get on {text}
      </p>
    </button>
  );
};

export default StoreFlag;
