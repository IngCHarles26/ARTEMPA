import { createSlice } from "@reduxjs/toolkit";
import { dataClients, dataSales } from "../../assets/dataHelp";
import { SalesData } from "../../types";



const initialState:SalesData[] = [...dataSales]

const salesSlice = createSlice({
  name: 'sales',
  initialState,
  reducers:{
    addNewSale: ( sta , act ) => {
      sta.unshift(act.payload)
    }
  }
})


export const {addNewSale} = salesSlice.actions;
export default salesSlice.reducer;