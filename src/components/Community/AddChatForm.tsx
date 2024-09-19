import Image from "next/image";
import React from "react";

const AddChatForm: React.FC<AddChatFormProps> = ({
  handleSubmit,
  message,
  handleChange,
}) => {
  return (
    <form
      onSubmit={(e) => handleSubmit(e, message)}
      className="py-7 px-6 border-t-[0.87px] border-[#E0E0E0]"
    >
      <div className="flex items-center gap-[30px]">
        <span className="">
          <Image src={"/voice.svg"} height={16} width={16} alt="voice icon" />
        </span>
        <input
          type="text"
          name="message"
          id="message"
          value={message}
          onChange={(e) => handleChange(e.target)}
          placeholder="Write message"
          className="w-[70%] focus:outline-none"
        />
        <div className=" flex items-center gap-[30px]">
          <span>
            <Image src={"/file.svg"} height={16} width={16} alt="voice icon" />
          </span>
          <span>
            <Image src={"/pic.svg"} height={16} width={16} alt="voice icon" />
          </span>
          <button
            type="submit"
            className="w-24 h-[34px] bg-[#007aff] rounded-md flex items-center justify-center gap-2 text-white"
          >
            Send
            <span>
              <Image
                src={"/send.svg"}
                height={15}
                width={15}
                alt="voice icon"
              />
            </span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddChatForm;
