import React from "react";
import ContentLoader from "react-content-loader";

const EventsLoader = () => (
  <div className="flex w-full max-w-7xl mx-auto p-4">
    {/* Other Events List */}
    <div className="w-1/3 pr-4">
      <ContentLoader
        speed={2}
        width={300}
        height={600}
        viewBox="0 0 300 600"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="0" rx="5" ry="5" width="200" height="30" />{" "}
        {/* "Other Events" title */}
        {/* Event cards (4 cards) */}
        <rect x="0" y="50" rx="10" ry="10" width="300" height="100" />
        <rect x="0" y="170" rx="10" ry="10" width="300" height="100" />
        <rect x="0" y="290" rx="10" ry="10" width="300" height="100" />
        <rect x="0" y="410" rx="10" ry="10" width="300" height="100" />
      </ContentLoader>
    </div>

    {/* Main Event Details */}
    <div className="w-2/3">
      <ContentLoader
        speed={2}
        width={600}
        height={600}
        viewBox="0 0 600 600"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        {/* Event title and date */}
        <rect x="0" y="0" rx="5" ry="5" width="300" height="30" />
        <rect x="0" y="40" rx="5" ry="5" width="200" height="20" />

        {/* Code block */}
        <rect x="0" y="80" rx="10" ry="10" width="600" height="200" />

        {/* Event description */}
        <rect x="0" y="300" rx="5" ry="5" width="500" height="20" />

        {/* Registered Attendees title */}
        <rect x="0" y="340" rx="5" ry="5" width="200" height="30" />

        {/* Attendee circles */}
        <circle cx="30" cy="400" r="20" />
        <circle cx="80" cy="400" r="20" />
        <circle cx="130" cy="400" r="20" />

        {/* Register Now button */}
        <rect x="0" y="450" rx="20" ry="20" width="150" height="40" />
      </ContentLoader>
    </div>
  </div>
);

export default EventsLoader;
