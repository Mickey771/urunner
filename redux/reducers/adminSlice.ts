import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  isSidebar: boolean;
  isLoading: boolean;
  isAuth: boolean;
  token: string;
  selectedOffer: Offer;
  offers: Offer[];
  selectedPartner: Partner;
  partners: Partner[];
  selectedEvent: Events;
  events: Events[];
  scroll: string;
  user: AdminUser;
  dayEvents: Events[];
  isDeleteEventModal: boolean;
}

const initialState: InitialState = {
  isSidebar: true,
  isLoading: false,
  isAuth: false,
  token: "",
  selectedOffer: {
    _id: "",
    name: "",
    price: 0,
    pieces: 0,
    partners: 0,
    date: "",
    end_date: "",
    image: "",
    status: "",
  },
  offers: [],
  selectedPartner: {
    _id: "",
    email: "",
    company_type: "",
    name: "",
    contact: "",
    location: "",
    description: "",
    checked: false,
    createdAt: "",
    image: "",
    ucoin: 0,
  },
  partners: [],
  selectedEvent: {
    _id: "",
    title: "",
    write_up: "",
    date: "",
    link: "",
    location: "",
    image: "",
  },
  events: [],
  scroll: "",
  user: {
    id: "",
    fullName: "",
    image: "",
    email: "",
  },
  dayEvents: [],
  isDeleteEventModal: false,
};

const userSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebar = !state.isSidebar;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setIsAuth: (state, action) => {
      state.isAuth = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setSelectedOffer: (state, action) => {
      const offer = state.offers.find(
        (offer) => offer._id === action.payload
      ) as Offer;
      state.selectedOffer = offer;
    },
    setOffers: (state, action) => {
      state.offers = action.payload;
    },
    setPartners: (state, action) => {
      state.partners = action.payload;
    },
    setSelectedPartner: (state, action) => {
      const partner = state.partners.find(
        (partner) => partner._id === action.payload
      ) as Partner;
      state.selectedPartner = partner;
    },
    setEvents: (state, action) => {
      state.events = action.payload;
    },
    setSelectedevent: (state, action) => {
      const event = state.events.find(
        (event) => event._id === action.payload
      ) as Events;
      state.selectedEvent = event;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    triggerScroll: (state) => {
      state.scroll = `${Date.now()}`;
    },
    setDayEvents: (state, action) => {
      state.dayEvents = action.payload;
    },
    setIsDeleteEventModal: (state, action) => {
      state.isDeleteEventModal = action.payload;
    },
    // setCurrentIndex: (state, action) => {
    //   const { events, currentIndex } = state;
    //   let newIndex = 0;
    //   if (action.payload === "next") {
    //     newIndex = currentIndex === events.length - 1 ? 0 : currentIndex + 1;
    //   } else if (action.payload === "prev") {
    //     newIndex = currentIndex === 0 ? events.length - 1 : currentIndex - 1;
    //   } else if (action.payload === "reset") {
    //     newIndex = 0;
    //   }
    //   state.currentIndex = newIndex;
    //   state.selectedEvent = events[newIndex];
    // },
    logout: (state) => {
      state.isAuth = false;
      state.token = "";
    },
  },
});

export const {
  toggleSidebar,
  setIsLoading,
  setIsAuth,
  setToken,
  logout,
  setSelectedOffer,
  setOffers,
  setPartners,
  setSelectedPartner,
  setEvents,
  setSelectedevent,
  triggerScroll,
  setUser,
  setDayEvents,
  setIsDeleteEventModal,
} = userSlice.actions;
export default userSlice.reducer;
