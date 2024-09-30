"use client";
import Community from "@/components/Community";
import AddChatForm from "@/components/Community/AddChatForm";
import CommunityChat from "@/components/Community/CommunityChat";
import CommunityDetailsModal from "@/components/Modals/CommunityDetailsModal";
import { useDisclosure } from "@/hooks/useDisclosure";
import { chats } from "@/utils/chatData";
import moment from "moment";
import Image from "next/image";
import React, { FormEvent, useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";

const page = () => {
  return <Community />;
};

export default page;
