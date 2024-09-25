import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userSlice";
import adminReducer from "./reducers/adminSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      user: userReducer,
      admin: adminReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the RootState and AppDispatch types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
