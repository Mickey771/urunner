import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setEvents } from "../../redux/reducers/userSlice";
import { useEffect } from "react";

export const useEvents = () => {
  const dispatch = useDispatch();
  // Function to fetch events
  const fetchEvents = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/users/events/`
    );
    return response.data;
  };

  // Use React Query to fetch events
  const { data, isLoading, error } = useQuery({
    queryKey: ["events"],
    queryFn: fetchEvents,
  });

  const events = data?.data || ([] as Events[]);

  useEffect(() => {
    dispatch(setEvents(data?.data || ([] as Events[])));
  }, [data]);

  return { isLoading, error, events };
};
