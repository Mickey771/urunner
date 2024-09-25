import PartnerCard from "@/components/Admin/PartnerCard";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <section className="flex w-full max-w-admin mx-auto">
      <table className="w-full">
        <thead>
          <tr className="grid grid-cols-5">
            <td className="text-[#414141] px-2 py-4 text-xs font-bold font-['Kumbh Sans']">
              Company Name
            </td>
            <td className="text-[#414141] px-2 py-4 text-xs font-bold font-['Kumbh Sans']">
              Email address
            </td>
            <td className="text-[#414141] px-2 py-4 text-xs font-bold font-['Kumbh Sans']">
              Phone Number
            </td>
            <td className="text-[#414141] px-2 py-4 text-xs font-bold font-['Kumbh Sans']">
              Date of offer
            </td>
            <td className="text-[#414141] px-2 py-4 text-xs font-bold font-['Kumbh Sans']">
              Value
            </td>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 15 }, (_, index) => (
            <tr
              key={index}
              className={`grid grid-cols-5 text-[#414141] hover:text-white hover:bg-primaryBlue  ${
                index % 2 !== 0 ? "bg-[#EBF6FF80]" : "bg-white"
              }`}
            >
              <td className="px-2 py-4 flex items-center gap-2 text-xs font-medium font-['Kumbh Sans']">
                <span>
                  <Image
                    src={"/blackgirl.png"}
                    width={24}
                    height={24}
                    alt="pic"
                  />
                </span>{" "}
                Eneh Mercy
              </td>
              <td className="break-all #667185 px-2 py-4 text-xs font-medium font-['Kumbh Sans']">
                michelle.rivera@example.com
              </td>
              <td className="px-2 py-4 text-xs font-medium font-['Kumbh Sans']">
                +144 456 567 5678
              </td>
              <td className="px-2 py-4 text-xs font-medium font-['Kumbh Sans']">
                09 / 08 / 2024
              </td>
              <td className="px-2 py-4 text-xs font-medium font-['Kumbh Sans']">
                $30,000
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <PartnerCard />
    </section>
  );
};

export default Page;
