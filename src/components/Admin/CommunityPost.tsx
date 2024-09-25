import Image from "next/image";
import React from "react";

const CommunityPost = () => {
  return (
    <div className="min-w-[316px] h-[248px] p-3 bg-[#f9f9fb] rounded-lg border border-[#eff1f4] flex-col justify-start items-start gap-2 inline-flex">
      <div className="self-stretch justify-start items-center gap-2 inline-flex">
        <div className="w-5 h-5 justify-center items-center flex">
          <Image
            className="w-5 h-5 rounded-[200px] border border-white"
            src="/blackgirl.png"
            width={20}
            height={20}
            alt="profile pic"
          />
        </div>
        <div className="self-stretch justify-start items-center flex">
          <div className="justify-start items-start gap-1 flex">
            <div className="justify-start items-center gap-2 flex">
              <div className="text-[#344054] text-sm font-medium font-['Inter'] leading-tight">
                David
              </div>
            </div>
          </div>
          <div className="justify-start items-start flex">
            <div className="text-[#98a1b2] text-xs font-normal font-['Inter'] leading-[17.40px]">
              ・
            </div>
            <div className="text-[#98a1b2] text-xs font-normal font-['Inter'] leading-[17.40px]">
              2 hours ago
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch text-[#475267] text-sm font-normal font-['Inter'] leading-tight">
        Kindly resolve the discrepancies, this is the blank empty state to start
        with nothing to share just you and the engineering team hating on the
        CPO
      </div>
      <div className="justify-start items-start gap-2 inline-flex">
        <div className="pl-1 pr-2 py-1 bg-white rounded-lg border border-[#eff1f4] justify-start items-center gap-2 flex">
          <div className="w-6 h-6 p-1.5 bg-[#ffece5] rounded border border-[#ffece5] justify-center items-center flex">
            <div className="w-3 h-3 relative flex-col justify-start items-start flex">
              <Image
                className="w-4 h-4 "
                src="/videocam.png"
                width={16}
                height={16}
                alt="profile pic"
              />
            </div>
          </div>
          <div className="self-stretch flex-col justify-center items-start inline-flex">
            <div className="justify-start items-center gap-1 inline-flex">
              <div>
                <span className="text-[#344054] text-xs font-semibold font-['Inter'] leading-[17.40px]">
                  Video
                </span>
                <span className="text-[#667185] text-xs font-normal font-['Inter'] leading-[17.40px]">
                  .MP3
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-start items-start gap-2 inline-flex">
        <div className="self-stretch px-2 py-1 bg-white rounded-lg border border-[#eff1f4] justify-start items-center gap-2 flex">
          <div className="self-stretch flex-col justify-center items-start inline-flex">
            <div className="justify-start items-center gap-1 inline-flex">
              <div className="text-[#344054] text-xs font-semibold font-['Inter'] leading-tight">
                10 views
              </div>
            </div>
          </div>
        </div>
        <div className="px-2 py-1 bg-white rounded-lg border border-[#eff1f4] justify-start items-center flex">
          <div className=" gap-0 justify-center items-center inline-flex">
            <span className="inline-flex h-5 w-5">
              <Image
                className="object-contain rounded-[200px] border border-white"
                src="/message.png"
                width={14}
                height={14}
                alt="profile pic"
              />
            </span>
            <div className="justify-start items-center gap-1 inline-flex">
              <span className="text-[#344054] text-xs font-semibold font-['Inter'] leading-tight">
                12{" "}
              </span>
              <span className="text-[#344054] text-xs font-normal font-['Inter'] leading-tight">
                Replies
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="px-3 py-1 bg-white rounded-md border border-[#d0d4dd] flex-col justify-center items-start gap-2.5 flex">
        <div className="justify-center items-center gap-2 inline-flex">
          <div className="text-center text-[#344054] text-xs font-semibold font-['Inter'] leading-tight">
            See message
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPost;
