import React from "react";
import ContentLoader from "react-content-loader";

const UpcomingEventsLoader: React.FC = () => {
  const EventCardLoader = () => (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <ContentLoader
        speed={2}
        width={300}
        height={300}
        viewBox="0 0 300 300"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        {/* Event image */}
        <rect x="0" y="0" rx="8" ry="8" width="250" height="150" />

        {/* Event title */}
        <rect x="0" y="160" rx="4" ry="4" width="200" height="20" />

        {/* Event organizer */}
        <rect x="0" y="190" rx="3" ry="3" width="150" height="15" />

        {/* Event date */}
        <rect x="0" y="215" rx="3" ry="3" width="180" height="15" />

        {/* Attendee avatars */}
        <circle cx="20" cy="260" r="20" />
        <circle cx="65" cy="260" r="20" />
        <circle cx="110" cy="260" r="20" />

        {/* More attendees indicator */}
        <rect x="155" y="245" rx="15" ry="15" width="40" height="30" />
      </ContentLoader>
    </div>
  );

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <EventCardLoader />
        <EventCardLoader />
        <EventCardLoader />
        <EventCardLoader />
      </div>
    </div>
  );
};

export default UpcomingEventsLoader;
