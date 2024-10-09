"use client";
import PartnerCard from "@/components/Admin/PartnerCard";
import { useFetchAdmin } from "@/hooks/useFetchAdmin";
import moment from "moment";
import Image from "next/image";
import React from "react";
import { RootState } from "../../../../../../redux/store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setSelectedPartner } from "../../../../../../redux/reducers/adminSlice";
import PartnersListAndDetailsLoader from "@/components/PartnersListLoader";

const Page = () => {
  const { selectedPartner } = useSelector((store: RootState) => store.admin);

  const { partners, isPartnersLoading } = useFetchAdmin() as {
    partners: Partner[];
    isPartnersLoading: boolean;
  };

  const dispatch = useDispatch();

  if (isPartnersLoading)
    return (
      <section className="flex w-full max-w-admin mx-auto">
        <PartnersListAndDetailsLoader />
      </section>
    );

  return (
    <section className="flex w-full max-w-admin mx-auto ">
      <table className="w-full pb-0">
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
          {partners.length > 0 ? (
            partners.map((item, index) => (
              <tr
                key={index}
                onClick={() => dispatch(setSelectedPartner(item._id))}
                className={`grid grid-cols-5 text-[#414141] hover:text-white hover:bg-primaryBlue cursor-pointer ${
                  selectedPartner?._id === item._id
                    ? "text-white bg-primaryBlue"
                    : index % 2 !== 0
                    ? "bg-[#EBF6FF80]"
                    : "bg-white"
                }`}
              >
                <td className="px-2 py-4 flex items-center gap-2 text-xs font-medium font-['Kumbh Sans']">
                  <span className="inline-flex w-[24px] h-6">
                    <Image
                      src={item.image}
                      width={24}
                      height={24}
                      alt="pic"
                      className="rounded-full"
                    />
                  </span>{" "}
                  {item.name}
                </td>
                <td className="break-all #667185 px-2 py-4 text-xs font-medium font-['Kumbh Sans']">
                  {item.email}
                </td>
                <td className="px-2 py-4 text-xs font-medium font-['Kumbh Sans']">
                  {item.contact}
                </td>
                <td className="px-2 py-4 text-xs font-medium font-['Kumbh Sans']">
                  {moment(item.createdAt).format("DD/MM/YYYY")}
                </td>
                <td className="px-2 py-4 text-xs font-medium font-['Kumbh Sans']">
                  {item.ucoin}
                </td>
              </tr>
            ))
          ) : (
            <p>No Partners to display</p>
          )}
        </tbody>
      </table>
      <PartnerCard />
    </section>
  );
};

export default Page;
