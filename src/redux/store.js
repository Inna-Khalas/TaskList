import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./taskSlice";
import filterReducer from "./filterSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "tasks",
  storage,
};

const persistedReducer = persistReducer(persistConfig, tasksReducer);

export const store = configureStore({
  reducer: {
    tasks: persistedReducer,
    filters: filterReducer,
  },
});
export const persistor = persistStore(store);
