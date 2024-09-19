import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface CounterState {
//   value: number;
// }

const initialState = { communityModalStep: 0 };

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
