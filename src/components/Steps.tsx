import Image from "next/image";
import Members from "./Modals/Members";
import { HiArrowRight } from "react-icons/hi";
import Comment from "./Modals/Comment";
import { comments } from "@/utils/data";

export const CommunityDetailsStepOne = () => {
  return (
    <>
      <Members heading="Members" total={12} seeMore={false} />
      <Members heading="Medical Practitionals" total={3} seeMore={false} />
    </>
  );
};

export const CommunityDetailsStepTwo = () => {
  return (
    <>
      <div className="flex px-8 flex-col gap-2 pb-10">
        <h2 className="w-[720px] text-[#191b1c] text-base font-semibold font-['Public Sans'] leading-[23px]">
          Description
        </h2>
        <p className="w-[720px] text-[#626c70] text-sm font-normal font-['Public Sans'] leading-tight">
          In lobortis fermentum venenatis. Phasellus orci libero, feugiat et
          velit non, sagittis feugiat eros. In placerat risus vitae est
          faucibus, in laoreet enim rutrum. Mauris posuere vitae felis at
          convallis. Integer consequat et tellus vel tincidunt. Aenean rhoncus
          ligula eu risus molestie semper.
        </p>
      </div>
      <Members heading="Members" total={5} seeMore={true} />

      <div className="flex px-8 border-b border-[#E5E7E8]">
        <button className="h-11 px-4 py-3 bg-white  border-b-2 border-[#0E5FD9] justify-start items-start gap-2.5 inline-flex">
          <span className="text-[#191b1c] text-sm font-medium font-['Public Sans'] leading-tight">
            Comments
          </span>
        </button>
        <button className="h-11 px-4 py-3 bg-white  justify-start items-start gap-2.5 inline-flex">
          <span className="text-[#191b1c] text-sm font-medium font-['Public Sans'] leading-tight">
            Attach File
          </span>
        </button>
      </div>

      <form className="flex flex-col px-7">
        <h2 className="text-[#191b1c] text-sm font-semibold font-['Public Sans'] leading-tight">
          Post Comments
        </h2>
        <div className="flex gap-3 mt-4 w-full">
          <label
            htmlFor="comment"
            className="bg-[#F5F6F7] w-full rounded-full flex px-4 py-2.5 items-center gap-3 "
          >
            <span>
              <Image
                src={"/chatbubble.svg"}
                width={20}
                height={20}
                alt="chat bubble"
              />
            </span>
            <input
              placeholder="Write down your questions and comments..."
              type="text"
              className="bg-transparent focus:outline-none "
            />
          </label>
          <button className="h-10 px-6 bg-[#005ce7] rounded-full justify-center items-center gap-2 inline-flex">
            <div className="text-white text-sm font-semibold font-['Public Sans'] capitalize leading-10">
              Post
            </div>
            <HiArrowRight size={20} color="white" />
          </button>
        </div>
      </form>

      <div className="px-7">
        <h2 className="text-[#191b1c] text-sm font-semibold font-['Public Sans'] leading-tight">
          Latest Comments
        </h2>
        {comments.map((item, index) => (
          <Comment key={index} {...item} line={index !== comments.length - 1} />
        ))}
      </div>
    </>
  );
};

export const CommunityDetailsStepThree = () => {
  return (
    <div className="px-7 pb-10">
      <div className="">
        <span className="text-[#191b1c] text-base font-semibold font-['Public Sans'] leading-[23px]">
          Media{" "}
        </span>
        <span className="text-[#626c70] text-base font-normal font-['Public Sans'] leading-normal">
          (12)
        </span>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-4">
        {Array.from({ length: 12 }, (_, index) => (
          <span key={index}>
            <Image src={"/book.png"} width={168} height={184} alt="book" />
          </span>
        ))}
      </div>
    </div>
  );
};
