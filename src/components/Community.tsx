import AddChatForm from "@/components/Community/AddChatForm";
import CommunityChat from "@/components/Community/CommunityChat";
import CommunityDetailsModal from "@/components/Modals/CommunityDetailsModal";
import { useDisclosure } from "@/hooks/useDisclosure";
import { chats } from "@/utils/chatData";
import moment from "moment";
import Image from "next/image";
import React, { FormEvent, useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";

const Community = () => {
  let userId = 1;

  const [currentChats, setCurrentChats] = useState<Chats[]>([]);
  const [message, setMessage] = useState("");

  const communityDetailsModal = useDisclosure();

  useEffect(() => {
    setCurrentChats(chats as Chats[]);
  }, []);

  const handleChange = (e: HTMLInputElement) => {
    setMessage(e.value);
  };

  const handleSubmit = (e: FormEvent<Element>, message: string) => {
    e.preventDefault();
    console.log(message);

    const newChat = {
      senderId: userId,
      name: "User2",
      timestamp: moment().format("h:mm A"),
      text: message,
      image: false,
      imageSrc: "",
      profilePic: "/",
    };

    setCurrentChats([...currentChats, newChat] as Chats[]);
    setMessage("");
  };

  return (
    <section className="w-full max-w-[834px]  rounded-[14px] border-[#B9B9B933] border-[0.3px] bg-white">
      <div className="flex items-center justify-between py-5 px-7 border-b-[0.87px] border-[#E0E0E0]">
        <h1 className="text-[#202224] flex items-center gap-4 text-xl font-bold font-['Nunito Sans']">
          {/* <span>
            <Image src={"/back.svg"} height={24} width={24} alt="back button" />
          </span> */}
          URunner Community
        </h1>

        <div className="flex gap-2 items-center">
          <label className="w-[258px] flex items-center px-4 py-2.5 gap-1.5 h-[38px] bg-[#f5f6fa] rounded-[19px] border-[0.6px] border-[#D5D5D5]">
            <span>
              <Image
                src={"/search.svg"}
                height={15}
                width={15}
                alt="back button"
              />
            </span>
            <input
              type="text"
              className="h-full w-full bg-[#f5f6fa]  focus:outline-none"
              placeholder="Search User"
            />
          </label>
          <div className="w-[131px] h-10 relative flex items-center border-[0.6px] border-[#D5D5D5] rounded-[19px]">
            <button
              onClick={communityDetailsModal.open}
              className="inline-flex px-2.5 py-2"
            >
              <Image
                src={"/users.svg"}
                height={22}
                width={22}
                alt="back button"
              />
            </button>
            <span className="inline-flex px-2.5 py-2 border-x-[0.6px] border-[#D5D5D5]">
              <Image
                src={"/info.svg"}
                height={22}
                width={22}
                alt="back button"
              />
            </span>
            <span className="inline-flex px-2.5 py-2">
              <MdDelete color="#333333" size={20} />
            </span>
          </div>
        </div>
      </div>

      <CommunityChat chats={currentChats} userId={userId} />
      <AddChatForm
        handleSubmit={handleSubmit}
        message={message}
        handleChange={handleChange}
      />

      {communityDetailsModal.isOpen && (
        <CommunityDetailsModal modal={communityDetailsModal} />
      )}
    </section>
  );
};

export default Community;
