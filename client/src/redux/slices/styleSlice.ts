import { createSlice } from "@reduxjs/toolkit";

interface Info {
  fullPage: boolean,
}

const initialState:Info = {
  fullPage: false,
}

const styleSlice = createSlice({
  name: 'style',
  initialState,
  reducers: {
    setFullPage: ( sta , act ) =>  { sta.fullPage = act.payload},
  }
})

export const {setFullPage}  = styleSlice.actions;
export default styleSlice.reducer;
