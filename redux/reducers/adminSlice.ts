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
} = userSlice.actions;
export default userSlice.reducer;
