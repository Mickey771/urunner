"use client";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { useEffect, useState } from "react";

const Page = () => {
  const router = useRouter();
  const { events } = useSelector((store: RootState) => store.user);

  useEffect(() => {
    events.length > 0 && router.push(`/events/${events[0]?._id}`);
  }, [events]);
};

export default Page;
