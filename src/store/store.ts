import { configureStore } from "@reduxjs/toolkit";
import categories from "./slices/category";
import dataFromfb from "./slices/dataFromfb";

export const store = configureStore({
  reducer: {
    categories,
    dataFromfb
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
