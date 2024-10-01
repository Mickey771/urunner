import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userSlice";
import adminReducer from "./reducers/adminSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  // Optionally, you can blacklist or whitelist specific reducers
  // blacklist: ['someReducer']
  // whitelist: ['someReducer']
};

export const rootReducer = combineReducers({
  user: userReducer,
  admin: adminReducer,
  // Add other reducers here
});

// const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer);
const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//   reducer: persistedReducer,
// });

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);

// Infer the type of makeStore
export type AppStore = ReturnType<typeof rootReducer>;
// Infer the RootState and AppDispatch types from the store itself
export type RootState = ReturnType<typeof rootReducer>;
