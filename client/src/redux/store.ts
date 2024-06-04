import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
  reducer:{

  }
})


export type TypeStore = ReturnType<typeof store.getState>