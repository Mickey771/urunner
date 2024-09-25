import OfferCard from "@/components/Admin/OfferCard";
import PartnerForm from "@/components/Admin/PartnerForm";
import React from "react";

const Page = () => {
  return (
    <section className="flex gap-14 mx-auto w-full max-w-admin">
      <div className="flex flex-col gap-4">
        {Array.from({ length: 10 }, (_, index) => (
          <OfferCard key={index} />
        ))}
      </div>
      <PartnerForm />
    </section>
  );
};

export default Page;
