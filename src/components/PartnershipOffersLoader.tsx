import React from "react";
import ContentLoader from "react-content-loader";

const PartnershipOffersLoader: React.FC = () => {
  const OfferCardLoader = () => (
    <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
      <div className="w-1 h-16 bg-blue-600 mr-4"></div>
      <ContentLoader
        speed={2}
        width={300}
        height={80}
        viewBox="0 0 300 80"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        {/* Checkmark circle */}
        <circle cx="20" cy="20" r="20" />

        {/* Offer title */}
        <rect x="50" y="10" rx="4" ry="4" width="150" height="20" />

        {/* EXP date text */}
        <rect x="50" y="40" rx="3" ry="3" width="80" height="15" />

        {/* View Offer button */}
        <rect x="200" y="25" rx="20" ry="20" width="80" height="30" />
      </ContentLoader>
    </div>
  );

  return (
    <div className="space-y-4 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <OfferCardLoader />
        <OfferCardLoader />
      </div>
    </div>
  );
};

export default PartnershipOffersLoader;
