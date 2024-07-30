import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type AlertType = 'success' | 'info' | 'alert' | 'error'

interface AlertState{
  messages: string[],
  type: AlertType,
  visible: boolean,
}

const initialState:AlertState = {
  messages: [],
  type: 'error',
  visible: false,
}

const alertSlice = createSlice({
  name: 'alertSlice',
  initialState,
  reducers:{
    setMessages: ( sta , act:PayloadAction<{ messages: string[]; type: AlertType }> ) => {
      const {messages,type} = act.payload
      sta.messages = messages
      sta.type = type
      sta.visible = true
    },
    delMessages: ( sta ) => {
      sta.visible = false
      sta.messages = []
    }
  }
})


export const { setMessages , delMessages} = alertSlice.actions;
export default alertSlice.reducer;

export const convertAlert = ( messages:string[] , type:AlertType) => ({messages,type})
