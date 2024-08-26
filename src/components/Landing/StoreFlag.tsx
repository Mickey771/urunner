import React from "react";

const StoreFlag: React.FC<{ text: string; bg: any; icon: any }> = ({
  icon: Icon,
  text,
  bg: Bg,
}) => {
  return (
    <button className="relative w-fit ">
      <Bg />
      <span className="inline-flex h-full absolute top-0 w-fit left-0 justify-center items-center pl-2.5">
        <Icon />
      </span>
      <p className="text-white text-[28px] font-bold font-['Urbanist'] leading-[37.73px] absolute top-0 right-0 h-full w-fit inline-flex items-center justify-center pr-[29px]">
        Get on {text}
      </p>
    </button>
  );
};

export default StoreFlag;
