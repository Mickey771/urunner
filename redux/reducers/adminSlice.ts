import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  isSidebar: boolean;
  isLoading: boolean;
  isAuth: boolean;
  token: string;
}

const initialState: InitialState = {
  isSidebar: true,
  isLoading: false,
  isAuth: false,
  token: "",
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
} = userSlice.actions;
export default userSlice.reducer;
