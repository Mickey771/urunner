import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  isSidebar: boolean;
}

const initialState: InitialState = { isSidebar: true };

const userSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebar = !state.isSidebar;
    },
  },
});

export const { toggleSidebar } = userSlice.actions;
export default userSlice.reducer;
