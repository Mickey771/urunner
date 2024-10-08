"use client";
import { upcomingEvents } from "@/utils/data";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setEvents } from "../../../../../redux/reducers/userSlice";
import axios from "axios";

// Function to fetch events
const fetchEvents = async () => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/users/events/`
  );
  return response.data;
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { id } = useParams();

  const dispatch = useDispatch();

  // Use React Query to fetch events
  const { data, isLoading, error } = useQuery({
    queryKey: ["events"],
    queryFn: fetchEvents,
  });

  const events = data?.data || ([] as Events[]);

  useEffect(() => {
    dispatch(setEvents(data?.data || ([] as Events[])));
  }, [data, dispatch]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred:</div>;

  return (
    <section className="w-full  pt-10 pb-40 px-6 lg:px-0 bg-[#F5F6FA]">
      <div className="w-full max-w-max  mx-auto mt-10 flex flex-wrap lg:flex-nowrap gap-20 justify-center">
        <aside className="w-full lg:max-w-[296px] rounded-[14px] border-[#B9B9B933] border-[0.3px] px-4 py-[30px] bg-white">
          <h2 className="text-[#202224] text-lg font-bold font-['Nunito Sans']">
            Our Events
          </h2>
          <div className="mt-[15px] grid grid-cols-2 md:flex flex-col md:flex-row lg:flex-col gap-1 md:gap-3 lg:gap-10">
            {events.map((item: Events) => (
              <Link
                href={`/events/${item._id}`}
                key={item._id}
                className={`${
                  id === item._id &&
                  "py-3 md:py-6 bg-primaryBlue text-white rounded-[14px] border-[0.3px] border-[#B9B9B9]"
                } px-1 md:px-2 lg:px-6 py-3 md:py-6 lg:py-4 text-[#202224] flex gap-3`}
              >
                <div className="w-[38px] h-[38px]">
                  <Image
                    src={"/mumbai.png"} // Replace with actual image from API if available
                    height={38}
                    width={38}
                    alt="event img"
                    className="rounded-full md:min-w-[38px]"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <h3 className="opacity-90 text-xs md:text-sm font-bold font-['Nunito Sans'] leading-relaxed">
                    {item.title}
                  </h3>
                  <p className="zr:hidden lg:flex opacity-60 text-xs font-semibold font-['Nunito Sans'] leading-relaxed">
                    {item.write_up}
                  </p>
                  <p className="zr:hidden lg:flex opacity-60 text-xs font-semibold font-['Nunito Sans'] leading-relaxed">
                    {new Date(item.date).toLocaleDateString()}
                  </p>
                  <a
                    href={item.link}
                    className="zr:hidden lg:flex opacity-60 text-xs font-semibold font-['Nunito Sans'] leading-relaxed text-blue-500 hover:underline"
                  >
                    Event Link
                  </a>

                  <div className="zr:hidden md:flex items-center gap-2">
                    <Image
                      src={"/man1.png"}
                      width={30}
                      height={30}
                      alt="profile"
                      className="rounded-full"
                    />
                    <Image
                      src={"/man2.png"}
                      width={30}
                      height={30}
                      alt="profile"
                      className="rounded-full"
                    />
                    <Image
                      src={"/man3.png"}
                      width={30}
                      height={30}
                      alt="profile"
                      className="rounded-full"
                    />
                    <span className="h-6 w-6 flex items-center justify-center border border-primaryBlue rounded-full">
                      <p className="text-[#007aff] text-[10px] font-bold font-['Nunito Sans']">
                        20+
                      </p>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </aside>

        {children}
      </div>
    </section>
  );
}
