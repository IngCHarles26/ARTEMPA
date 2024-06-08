import { createSlice } from "@reduxjs/toolkit";

interface Info {
  typeUpser: string,
  currentNav: string,
  nameUser: string,
}

const initialState:Info = {
  typeUpser: '',
  currentNav: '',
  nameUser: '',
}

const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    setTypeUser:    ( sta , act ) =>  { sta.typeUpser   = act.payload},
    setCurrentNav:  ( sta , act ) =>  { sta.currentNav  = act.payload},
    setNameUser:    ( sta , act ) =>  { sta.nameUser    = act.payload},
  }
})

export const {setTypeUser,setCurrentNav,setNameUser}  = userInfoSlice.actions;
export default userInfoSlice.reducer;
