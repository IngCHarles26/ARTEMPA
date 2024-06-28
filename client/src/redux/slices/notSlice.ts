import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  message: 'Mensaje Prueba mensaje mensaje           mensaje',
  color: 'bg-green-500',
  time: 1000,
}


const notSlice = createSlice({
  name: 'not',
  initialState,
  reducers:{
    setMessage: ( sta , act ) => {
      const {message,color} = act.payload
      sta.message = message
      sta.color = color
    }
  }
})



export const { setMessage } = notSlice.actions;
export default notSlice.reducer;