import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUsers } from "../../redux/reducers/userSlice";
import { useEffect } from "react";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import {
  setEvents,
  setIsLoading,
  setOffers,
  setPartners,
  setSelectedOffer,
} from "../../redux/reducers/adminSlice";

export const useFetchAdmin = () => {
  const { token, offers: oldOffers } = useSelector(
    (store: RootState) => store.admin
  );

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

  // Function to fetch offers
  const fetchOffers = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/users/offers/`
    );
    return response.data;
  };

  // Function to fetch partners
  const fetchPartners = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/admin/partnership_offers/`,
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

  // Use React Query to fetch partners
  const {
    data: partnersData,
    isLoading: isPartnersLoading,
    error: partnersError,
  } = useQuery({
    queryKey: ["partners"],
    queryFn: fetchPartners,
  });

  const events = data?.data || ([] as Events[]);

  const users = usersData?.data || ([] as User[]);

  const offers = offersData?.data || ([] as Offer[]);

  const partners = partnersData?.data || ([] as Partner[]);

  useEffect(() => {
    dispatch(setEvents(data?.data || ([] as Events[])));
  }, [data]);

  useEffect(() => {
    dispatch(setUsers(usersData?.data || ([] as User[])));
  }, [usersData]);

  useEffect(() => {
    dispatch(setOffers(offersData?.data || ([] as Offer[])));
  }, [offersData]);

  useEffect(() => {
    dispatch(setPartners(partnersData?.data || ([] as Partner[])));
  }, [partnersData]);

  const acceptOffer = async (id: string) => {
    dispatch(setIsLoading(true));
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/admin/update_offer/${id}`,
        {
          status: "completed",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        const updatedOffer = oldOffers.find((offer: Offer) => offer._id === id);

        const remainingOffers = oldOffers.filter(
          (offer: Offer) => offer._id !== id
        );

        dispatch(
          setOffers([
            ...remainingOffers,
            { ...updatedOffer, status: "completed" },
          ])
        );
        dispatch(setSelectedOffer({ ...updatedOffer, status: "completed" }));
      } else {
        console.log("there was an error");
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setIsLoading(false));
    }
  };

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
    acceptOffer,
    partners,
    isPartnersLoading,
  };
};
