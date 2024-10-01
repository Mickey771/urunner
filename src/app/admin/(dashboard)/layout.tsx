"use client";
import Sidebar from "@/components/Admin/Sidebar";
import Topbar from "@/components/Admin/Topbar";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { useRouter } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isSidebar, isAuth } = useSelector((store: RootState) => store.admin);

  const router = useRouter();

  if (!isAuth) router.push("/admin/signin");
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
