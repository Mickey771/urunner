import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
        {/* <div className="absolute left-0 top-0 w-full h-full flex items-end justify-center pb-[56px] ">
          <div className=" h-[397.65px] p-8 bg-[#3e3737] rounded-3xl shadow flex-col justify-start items-center gap-8 inline-flex">
            <div className="flex-col justify-start items-center gap-8 flex">
              <div className="p-[12.32px] bg-[#007aff] rounded-[123.24px] justify-center items-center gap-[12.32px] inline-flex">
                <div className="w-6 h-6 relative">
                  {" "}
                  <Image
                    src={"/message.svg"}
                    height={0}
                    width={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "100%" }}
                    alt="message"
                  />
                </div>
              </div>
              <div className="flex-col justify-center items-center gap-6 flex">
                <div className="w-[290.40px] text-center text-[#FFFFFFE5] text-base font-normal font-['Inter'] leading-normal">
                  URunner has completely transformed the way our team approaches
                  design. <br />
                  The sheer range of components and the seamless integration of
                  the design system into our workflow have been game-changers.{" "}
                </div>
                <div className="flex-col justify-start items-center gap-2 flex">
                  <div className="text-center text-white text-sm font-semibold font-['Inter'] leading-tight">
                    Ariana Grande
                  </div>
                  <div className="text-center text-[#a19999] text-xs font-normal font-['Inter'] leading-[17.40px]">
                    Visual Designer, Google
                  </div>
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-[9.84px] inline-flex">
              <div className="w-2 h-2 bg-[#007aff] rounded-full" />
              <div className="w-2 h-2 bg-[#645c5c] rounded-full" />
              <div className="w-2 h-2 bg-[#645c5c] rounded-full" />
            </div>
          </div>
        </div> */}
      </div>
      {children}
    </main>
  );
}
