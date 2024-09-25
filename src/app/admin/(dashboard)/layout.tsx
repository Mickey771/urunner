"use client";
import Sidebar from "@/components/Admin/Sidebar";
import Topbar from "@/components/Admin/Topbar";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isSidebar } = useSelector((store: RootState) => store.admin);
  return (
    <main className="flex h-lvh">
      {isSidebar && <Sidebar />}
      <div className="bg-[#F5F6FA] w-full h-full  overflow-y-auto">
        <Topbar />
        {children}
      </div>
    </main>
  );
}
