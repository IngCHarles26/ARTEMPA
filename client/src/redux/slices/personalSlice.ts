import { createSlice } from "@reduxjs/toolkit";
import { dataPersonel } from "../../assets/dataHelp";
import { PersonelData } from "../../types";


const initialState = {
  data: [...dataPersonel],
  types: ['admin','tecnico','oficina','contador'],
}


const personelSlice = createSlice({
  name: 'personel',
  initialState,
  reducers:{
    setTypes: ( sta , act ) =>{
      sta.types = act.payload
    },
    addPersonel: ( sta , act ) => {
      sta.data.unshift(act.payload)
    }
  }
})



export const {addPersonel,setTypes} = personelSlice.actions;
export default personelSlice.reducer;