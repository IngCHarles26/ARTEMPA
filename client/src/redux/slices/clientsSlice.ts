import { createSlice } from "@reduxjs/toolkit";
import { dataClients } from "../../assets/dataHelp";
import { ClientsData } from "../../types";


const initialState:ClientsData[] = [...dataClients];


const clientsSlice = createSlice({
  name: 'clients',
  initialState,
  reducers:{
    addNewClient: ( sta , act ) => {
      sta.unshift(act.payload)
      // sta.push(act.payload)
    }
  }
})


export const {addNewClient} = clientsSlice.actions;
export default clientsSlice.reducer;