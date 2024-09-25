import { HiOutlineUserGroup } from "react-icons/hi2";
import { IoCalendarOutline, IoSpeedometerOutline } from "react-icons/io5";
import { MdInfoOutline } from "react-icons/md";

export const upcomingEvents = [
  {
    id: "1",
    heading: "Mumbai 10k Challenge 2.0",
    company: "K2kSportsManagement",
    date: "Sep 08",
    time: "05:00 AM (IST)",
    description:
      "Official Qualifier for all Major Half Marathons across Pan India.",
    image: "mumbai.png",
    location: "HGallant Sports Arena, Mumbai, Maharashtra 400049",
    url: "https://events.fitasf.com/mumbai-10k-challenge-2-0.html",
  },
  {
    id: "2",
    heading: "California SC10 Event",
    company: "Surfcity10",
    date: "Sep 14-15",
    time: "09:00 AM (PST)",
    description:
      "All courses start on Pacific Coast Highway at Main Street in front of Huntington Beach Pier Plaza and finish on Pacific Coast Highway at Sixth Street.",
    image: "surfer.webp",
    location: "Huntington Beach, CA 92648",
    url: "https://www.surfcity10.com/event-schedule/",
  },
];

export const countries = [
  {
    text: "Japan",
    icon: "japan",
  },
  {
    text: "Canada",
    icon: "canada",
  },
  {
    text: "Philippines",
    icon: "philippines",
  },
  {
    text: "Ukraine",
    icon: "ukraine",
  },
  {
    text: "Ghana",
    icon: "ghana",
  },
  {
    text: "Denmark",
    icon: "denmark",
  },
  {
    text: "Australia",
    icon: "australia", //
  },
  {
    text: "Germany",
    icon: "germany",
  },
  {
    text: "France",
    icon: "france",
  },
  {
    text: "Jordan",
    icon: "jordan",
  },
  {
    text: "Vietnam",
    icon: "vietnam",
  },
  {
    text: "Spain",
    icon: "spain",
  },
  {
    text: "Taiwan",
    icon: "taiwan",
  },
  {
    text: "Pakistan",
    icon: "pakistan",
  },
  {
    text: "Luxembourg",
    icon: "luxembourg",
  },
  {
    text: "Bulgaria",
    icon: "bulgaria",
  },
  {
    text: "Turkiye",
    icon: "turkey",
  },
  {
    text: "Belgium",
    icon: "belgium",
  },
  {
    text: "Saudi Arabia",
    icon: "saudi-arabia",
  },
  {
    text: "New Zealand",
    icon: "new-zealand",
  },
  {
    text: "Italy",
    icon: "italy", //
  },
  {
    text: "Sweden",
    icon: "sweden", //
  },
];

export const comments = [
  {
    imageSrc: "/boy.png",
    name: "Jane Cooper",
    text: "@Everyone Great Job.",
    timeStamp: "10 mins ago",
  },
  {
    imageSrc: "/guy.png",
    name: "Brooklyn Simmons (You)",
    text:
      "In lobortis fermentum venenatis. Phasellus orci libero, feugiat et velit non, sagittis feugiat eros. In placerat risus vitae est faucibus, in laoreet enim rutrum. ",
    timeStamp: "13 hours ago",
  },
];

export const adminLinks = [
  {
    text: "Dashboard",
    path: "dashboard",
    icon: IoSpeedometerOutline,
  },
  {
    text: "Offers",
    path: "offers",
    icon: MdInfoOutline,
  },
  {
    text: "Events",
    path: "events",
    icon: IoCalendarOutline,
  },
  {
    text: "Community",
    path: "community",
    icon: HiOutlineUserGroup,
  },
];
