"use client";
import OfferCard from "@/components/Admin/OfferCard";
import PartnerForm from "@/components/Admin/PartnerForm";
import OffersSelectorLoader from "@/components/OffersSelectorLoader";
import { useEvents } from "@/hooks/useEvents";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../redux/store";

const Page = () => {
  const { offers } = useSelector((store: RootState) => store.admin);

  console.log(offers);

  const { isOffersLoading } = useEvents();

  return (
    <section className="flex gap-14 mx-auto w-full max-w-admin">
      <div className="flex flex-col gap-4 ">
        {isOffersLoading ? (
          <OffersSelectorLoader />
        ) : offers.length > 0 ? (
          offers?.map((item, index) => <OfferCard {...item} key={index} />)
        ) : (
          <p className="min-w-[300px]">No offers to display</p>
        )}
      </div>
      <PartnerForm />
    </section>
  );
};

export default Page;
