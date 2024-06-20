import { createSlice } from "@reduxjs/toolkit";

interface Info {
  fullPage: boolean,
  menuHidden: boolean,
}

const initialState:Info = {
  fullPage: false,
  menuHidden: false,
}

const styleSlice = createSlice({
  name: 'style',
  initialState,
  reducers: {
    setFullPage:    ( sta , act ) => { sta.fullPage   = act.payload},
    setMenuHidden:  ( sta , act ) => { sta.menuHidden = act.payload}
  }
})

export const {setFullPage,setMenuHidden}  = styleSlice.actions;
export default styleSlice.reducer;
