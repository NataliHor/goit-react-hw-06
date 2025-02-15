import { configureStore } from "@reduxjs/toolkit";
import contactReduser from "./contactsSlice";
import filterReducer from "./filtersSlice";

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

const persistedContactReduser = persistReducer(
  {
    key: "new-contact",
    storage,
    whitelist: ["items"],
  },
  contactReduser
);

export const store = configureStore({
  reducer: {
    contacts: persistedContactReduser,
    filters: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
