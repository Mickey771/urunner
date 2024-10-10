"use client";
import Sidebar from "@/components/Admin/Sidebar";
import Topbar from "@/components/Admin/Topbar";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Loader from "@/components/Loader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isSidebar, isLoading, isAuth, scroll } = useSelector(
    (store: RootState) => store.admin
  );

  const router = useRouter();

  useEffect(() => {
    window.scroll(0, 0);
    console.log(scroll);
  }, [scroll]);

  if (!isAuth) router.push("/admin/signin");
  return (
    <main className="flex h-lvh">
      {isSidebar && <Sidebar />}
      <div className="bg-[#F5F6FA] w-full overflow-y-scroll">
        <Topbar />
        {children}
        {isLoading && <Loader />}
      </div>
    </main>
  );
}
