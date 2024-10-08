import React from "react";
import ContentLoader from "react-content-loader";

const PartnersListAndDetailsLoader: React.FC = () => {
  const TableRowLoader = () => (
    <ContentLoader
      speed={2}
      width={800}
      height={40}
      viewBox="0 0 800 40"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="10" rx="3" ry="3" width="150" height="20" />
      <rect x="170" y="10" rx="3" ry="3" width="200" height="20" />
      <rect x="390" y="10" rx="3" ry="3" width="150" height="20" />
      <rect x="560" y="10" rx="3" ry="3" width="100" height="20" />
      <rect x="680" y="10" rx="3" ry="3" width="50" height="20" />
    </ContentLoader>
  );

  const PartnerDetailsLoader = () => (
    <div className="flex flex-col space-y-4">
      <ContentLoader
        speed={2}
        width={300}
        height={300}
        viewBox="0 0 300 300"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        {/* Profile Image */}
        <circle cx="150" cy="70" r="70" />

        {/* Name */}
        <rect x="50" y="150" rx="3" ry="3" width="200" height="20" />

        {/* Company */}
        <rect x="75" y="180" rx="3" ry="3" width="150" height="15" />

        {/* Address */}
        <rect x="25" y="205" rx="3" ry="3" width="250" height="15" />

        {/* Contact Icons */}
        <circle cx="130" cy="240" r="15" />
        <circle cx="170" cy="240" r="15" />
      </ContentLoader>

      {/* Form Fields */}
      <ContentLoader
        speed={2}
        width={300}
        height={300}
        viewBox="0 0 300 300"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="0" rx="3" ry="3" width="100" height="15" />
        <rect x="0" y="25" rx="3" ry="3" width="300" height="40" />

        <rect x="0" y="75" rx="3" ry="3" width="100" height="15" />
        <rect x="0" y="100" rx="3" ry="3" width="300" height="40" />

        <rect x="0" y="150" rx="3" ry="3" width="140" height="15" />
        <rect x="0" y="175" rx="3" ry="3" width="140" height="40" />
        <rect x="160" y="150" rx="3" ry="3" width="140" height="15" />
        <rect x="160" y="175" rx="3" ry="3" width="140" height="40" />

        <rect x="0" y="225" rx="3" ry="3" width="150" height="15" />
        <rect x="0" y="250" rx="3" ry="3" width="300" height="40" />
      </ContentLoader>
    </div>
  );

  return (
    <div className="flex">
      <div className="w-2/3 pr-4">
        <div className="mb-4">
          <ContentLoader
            speed={2}
            width={200}
            height={40}
            viewBox="0 0 200 40"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="0" y="10" rx="3" ry="3" width="180" height="20" />
          </ContentLoader>
        </div>
        <div className="space-y-2">
          {[...Array(10)].map((_, index) => (
            <TableRowLoader key={index} />
          ))}
        </div>
      </div>
      <div className="w-1/3">
        <PartnerDetailsLoader />
      </div>
    </div>
  );
};

export default PartnersListAndDetailsLoader;
