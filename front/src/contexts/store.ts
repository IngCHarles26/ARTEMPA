import { configureStore } from "@reduxjs/toolkit";
import alertsSlice from "./slices/alertsSlice";

export const store = configureStore({
  reducer:{
    alert:      alertsSlice,
  }
})


export type TypeStore = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
