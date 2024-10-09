import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  communityModalStep: number;
  isLoading: boolean;
  isModal: boolean;
  modalMessage: string;
  events: Events[];
  users: User[];
  offers: Offer[];
  selectedOffer: Offer;
}

const initialState: InitialState = {
  communityModalStep: 0,
  isLoading: false,
  isModal: false,
  modalMessage: "",
  events: [],
  users: [],
  offers: [],
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
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCommunityModalStep: (state, action: PayloadAction<number>) => {
      state.communityModalStep = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setModal: (
      state,
      action: PayloadAction<{ open: boolean; message: string }>
    ) => {
      state.isModal = action.payload.open;
      state.modalMessage = action.payload.message;
    },
    setEvents: (state, action: PayloadAction<Events[]>) => {
      state.events = action.payload;
    },
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
    setOffers: (state, action: PayloadAction<Offer[]>) => {
      state.offers = action.payload;
    },
    setSelectedOffer: (state, action: PayloadAction<Offer>) => {
      state.selectedOffer = action.payload;
    },
  },
});

export const {
  setCommunityModalStep,
  setIsLoading,
  setModal,
  setEvents,
  setUsers,
  setOffers,
  setSelectedOffer,
} = userSlice.actions;
export default userSlice.reducer;
