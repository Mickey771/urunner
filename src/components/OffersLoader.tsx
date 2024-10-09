import React from "react";
import ContentLoader from "react-content-loader";

const OfferCardLoader = () => (
  <div className="bg-white p-4 rounded-lg shadow-sm">
    <ContentLoader
      speed={2}
      width={300}
      height={300}
      viewBox="0 0 300 300"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      {/* Image or code block */}
      <rect x="0" y="0" rx="5" ry="5" width="300" height="150" />

      {/* Title */}
      <rect x="0" y="160" rx="4" ry="4" width="200" height="20" />

      {/* Date */}
      <rect x="220" y="160" rx="3" ry="3" width="80" height="20" />

      {/* UCoins */}
      <rect x="0" y="190" rx="3" ry="3" width="150" height="30" />

      {/* Accept button */}
      <rect x="0" y="230" rx="20" ry="20" width="100" height="40" />
    </ContentLoader>
  </div>
);

const OffersLoader: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      <OfferCardLoader />
      <OfferCardLoader />
      <OfferCardLoader />
      <OfferCardLoader />
      <OfferCardLoader />
      <OfferCardLoader />
    </div>
  );
};

export default OffersLoader;
