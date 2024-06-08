import { configureStore } from "@reduxjs/toolkit";
import userInfoSlice from "./slices/userInfoSlice";
import styleSlice from "./slices/styleSlice";


export const store = configureStore({
  reducer:{
    userInfo: userInfoSlice,
    style: styleSlice,
  }
})


export type TypeStore = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch