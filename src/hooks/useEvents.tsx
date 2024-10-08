import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setEvents, setOffers, setUsers } from "../../redux/reducers/userSlice";
import { useEffect } from "react";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

export const useEvents = () => {
  const { token } = useSelector((store: RootState) => store.admin);

  const dispatch = useDispatch();

  // Function to fetch events
  const fetchEvents = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/users/events/`
    );
    return response.data;
  };

  // Function to fetch users
  const fetchUsers = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/admin/users/`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  };

  // Function to fetch users
  const fetchOffers = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/users/offers/`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  };

  // Use React Query to fetch events
  const { data, isLoading, error } = useQuery({
    queryKey: ["events"],
    queryFn: fetchEvents,
  });

  // Use React Query to fetch users
  const {
    data: usersData,
    isLoading: isUsersLoading,
    error: usersError,
  } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  // Use React Query to fetch offers
  const {
    data: offersData,
    isLoading: isOffersLoading,
    error: offersError,
  } = useQuery({
    queryKey: ["offers"],
    queryFn: fetchOffers,
  });

  const events = data?.data || ([] as Events[]);

  const users = usersData?.data || ([] as User[]);

  const offers = offersData?.data || ([] as Offer[]);

  useEffect(() => {
    dispatch(setEvents(data?.data || ([] as Events[])));
  }, [data]);

  useEffect(() => {
    dispatch(setUsers(usersData?.data || ([] as User[])));
  }, [usersData]);

  useEffect(() => {
    dispatch(setOffers(offersData?.data || ([] as Offer[])));
  }, [offersData]);

  return {
    isLoading,
    error,
    events,
    users,
    isUsersLoading,
    usersError,
    offers,
    isOffersLoading,
    offersError,
  };
};
