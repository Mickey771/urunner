import React from "react";
import ContentLoader from "react-content-loader";

const EventDetailsLoader: React.FC = () => {
  return (
    <div className="w-full max-w-3xl">
      <ContentLoader
        speed={2}
        width={700}
        height={600}
        viewBox="0 0 700 600"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        {/* Event date and location */}
        <rect x="0" y="0" rx="3" ry="3" width="300" height="20" />

        {/* Event title */}
        <rect x="0" y="40" rx="3" ry="3" width="500" height="36" />

        {/* Event image */}
        <rect x="0" y="100" rx="10" ry="10" width="700" height="300" />

        {/* Event description */}
        <rect x="0" y="420" rx="3" ry="3" width="700" height="20" />
        <rect x="0" y="450" rx="3" ry="3" width="680" height="20" />
        <rect x="0" y="480" rx="3" ry="3" width="660" height="20" />
        <rect x="0" y="510" rx="3" ry="3" width="700" height="20" />

        {/* Registration link section */}
        <rect x="0" y="550" rx="3" ry="3" width="150" height="24" />
        <rect x="0" y="585" rx="5" ry="5" width="700" height="40" />
      </ContentLoader>
    </div>
  );
};

export default EventDetailsLoader;
