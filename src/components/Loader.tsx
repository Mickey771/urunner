import React from "react";

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center backdrop-blur-[3.5px] bg-gray-900 bg-opacity-50 z-[99999999]">
      <div className="w-[160px] h-[160px] border-t-4 border-b-4 border-primaryBlue rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
