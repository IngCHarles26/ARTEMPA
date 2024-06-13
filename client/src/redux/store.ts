import { configureStore } from "@reduxjs/toolkit";
import userInfoSlice from "./slices/userInfoSlice";
import styleSlice from "./slices/styleSlice";
import clientsSlice from "./slices/clientsSlice";


export const store = configureStore({
  reducer:{
    userInfo: userInfoSlice,
    style: styleSlice,
    clients: clientsSlice,
  }
})


export type TypeStore = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch