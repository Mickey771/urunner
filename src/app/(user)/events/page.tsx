"use client";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { useEffect, useState } from "react";

const Page = () => {
  const [event, setEvent] = useState<Events>();

  const router = useRouter();
  const { events } = useSelector((store: RootState) => store.user);

  useEffect(() => {
    setEvent(events[0] as Events);
  }, [events]);

  return router.push(`/events/${event?._id}`);
};

export default Page;
