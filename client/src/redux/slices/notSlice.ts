import { createSlice } from "@reduxjs/toolkit";

type Type = 'success' | 'info' | 'alert' | 'error';

interface InitialState {
  message: string[],
  type: Type,
  visible: boolean,
}

const initialState:InitialState = {
  message: [],
  type: 'error',
  visible: false,
}


const notSlice = createSlice({
  name: 'not',
  initialState,
  reducers:{
    setMessage: ( sta , act ) => {
      const {message,type} = act.payload
      sta.message = message
      sta.type = type
      sta.visible = true
    },
    delMessage: ( sta ) => {
      sta.visible = false
    }
  }
})



export const { setMessage , delMessage } = notSlice.actions;
export default notSlice.reducer;


export const notSlConvert = (message:string[],type:Type) => ({message,type})