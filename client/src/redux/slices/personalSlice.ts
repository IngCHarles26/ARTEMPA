import { createSlice } from "@reduxjs/toolkit";
import { dataPersonel } from "../../assets/dataHelp";
import { PersonelData } from "../../types";



const initialState:PersonelData[] = [...dataPersonel]


const personelSlice = createSlice({
  name: 'personel',
  initialState,
  reducers:{
    addPersonel: ( sta , act ) => {
      sta.unshift(act.payload)
    }
  }
})



export const {addPersonel} = personelSlice.actions;
export default personelSlice.reducer;