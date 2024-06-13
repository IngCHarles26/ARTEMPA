import { createSlice } from "@reduxjs/toolkit";
import { ClientData } from "../../components/accountant-office/ClientsData";
import { clientsDirection } from "../../assets/dataHelp";


const initialState:ClientData[] = [...clientsDirection];


const clientsSlice = createSlice({
  name: 'clients',
  initialState,
  reducers:{
    addNewClient: ( sta , act ) => {
      // sta.unshift(act.payload)
      sta.push(act.payload)
    }
  }
})


export const {addNewClient} = clientsSlice.actions;
export default clientsSlice.reducer;