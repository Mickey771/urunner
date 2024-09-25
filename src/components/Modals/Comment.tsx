import Image from "next/image";
import React from "react";

const Comment: React.FC<CommentProps> = ({
  imageSrc,
  text,
  timeStamp,
  name,
  line,
}) => {
  return (
    <div
      className={`flex gap-3 mt-3 pb-4  ${line && "border-b border-[#E5E7E8]"}`}
    >
      <span>
        <Image src={imageSrc} width={44} height={44} alt="boy" />
      </span>
      <div className="flex flex-col gap-1">
        <div className="flex gap-1.5">
          <p className="text-[#191b1c] text-sm font-normal font-['Public Sans'] leading-tight">
            {name}
          </p>
          <div className="text-[#4a5154] text-sm font-normal font-['Public Sans'] leading-tight">
            •
          </div>
          <p className="text-[#959fa3] text-sm font-normal font-['Public Sans'] leading-tight">
            {timeStamp}
          </p>
        </div>
        <div className="flex gap-1.5">
          {/* <p className="text-[#005ce7] text-sm font-medium font-['Public Sans'] leading-tight">
            @Everyone
          </p> */}
          <p className="text-[#4a5154] text-sm font-normal font-['Public Sans'] leading-tight">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
