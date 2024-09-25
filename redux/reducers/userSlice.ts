import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  communityModalStep: number;
}

const initialState: InitialState = { communityModalStep: 0 };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCommunityModalStep: (state, action: PayloadAction<number>) => {
      state.communityModalStep = action.payload;
    },
  },
});

export const { setCommunityModalStep } = userSlice.actions;
export default userSlice.reducer;
