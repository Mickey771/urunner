"use client";
import Loader from "@/components/Loader";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { useRouter } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isLoading, token } = useSelector((store: RootState) => store.admin);

  const router = useRouter();

  if (token) {
    router.push("/admin/dashboard");
  }

  return (
    <main className="flex">
      <div className="relative h-full  w-full max-w-[720px]">
        <Image
          src={"/adminbanner.svg"}
          height={0}
          width={0}
          sizes="100vw"
          style={{ width: "100%", height: "100%" }}
          alt="admin banner"
        />
      </div>
      {children}
      {isLoading && <Loader />}
    </main>
  );
}
