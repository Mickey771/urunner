import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  communityModalStep: number;
  isLoading: boolean;
  isModal: boolean;
  modalMessage: string;
}

const initialState: InitialState = {
  communityModalStep: 0,
  isLoading: false,
  isModal: false,
  modalMessage: "",
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
  },
});

export const {
  setCommunityModalStep,
  setIsLoading,
  setModal,
} = userSlice.actions;
export default userSlice.reducer;
