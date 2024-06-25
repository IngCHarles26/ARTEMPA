import { createSlice } from "@reduxjs/toolkit";
import { dataStatements } from "../../assets/dataHelp";
import { MonthStatements } from "../../types";


const initialState:MonthStatements[] = [...dataStatements]

const statementsSlice = createSlice({
  name: 'statements',
  initialState,
  reducers:{
    addNewStatement: ( sta , act ) => {
      sta.unshift(act.payload)
    }
  }
})


export const {addNewStatement} = statementsSlice.actions;
export default statementsSlice.reducer;