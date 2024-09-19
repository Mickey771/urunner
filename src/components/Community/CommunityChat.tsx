import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { BiUser } from "react-icons/bi";
import { CgUser } from "react-icons/cg";

const CommunityChat: React.FC<CommunityChatProps> = ({ chats, userId }) => {
  const chatContainerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chats]);

  return (
    <section
      ref={chatContainerRef}
      className="max-h-[70vh] w-full overflow-y-auto"
    >
      <div className="min-h-full flex flex-col p-[30px] gap-[40px]">
        {chats.map((item, index) => (
          <div
            key={index}
            className={`flex ${
              item.senderId === userId ? "justify-end" : "justify-start"
            }`}
          >
            <div className="flex items-end gap-4">
              {item.senderId !== userId && (
                <span className="inline-flex h-10 w-10 rounded-full bg-blue-500 justify-center items-center">
                  <BiUser color="white" size={25} />
                </span>
              )}
              <div className="flex flex-col gap-2">
                {item.image ? (
                  <span>
                    <Image
                      src={item.imageSrc}
                      height={200}
                      width={300}
                      alt="image"
                    />
                  </span>
                ) : (
                  <p
                    className={`max-w-[420px] text-sm font-normal font-['Inter'] leading-tight py-2 px-3 ${
                      item.senderId === userId
                        ? "bg-blue-500 text-white rounded-[8px_8px_0px_8px]"
                        : "bg-gray-100 text-gray-900 rounded-[8px_8px_8px_0px]"
                    }`}
                  >
                    {item.text}
                  </p>
                )}
                <div
                  className={`flex gap-1 ${
                    item.senderId === userId ? "justify-end" : "justify-start"
                  }`}
                >
                  <p className="text-gray-700 text-xs font-normal font-['Inter'] leading-[17.40px]">
                    {item.name}
                  </p>
                  <span className="text-gray-700 text-xs font-normal font-['Inter'] leading-[17.40px]">
                    •
                  </span>
                  <p className="text-gray-700 text-xs font-normal font-['Inter'] leading-[17.40px]">
                    {item.timestamp}
                  </p>
                </div>
              </div>
              {item.senderId === userId && (
                <span className="inline-flex p-2 rounded-full bg-black">
                  <CgUser color="white" size={30} />
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CommunityChat;
