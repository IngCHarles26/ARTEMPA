import { createSlice } from "@reduxjs/toolkit";
import { dataHistoryInventory, dataStock } from "../../assets/dataHelp";
import { Inventory } from "../../components/office";
import { Company, HistoryStockData, StockData } from "../../types";

interface InitialState {
  history: HistoryStockData[],
  inventory: StockData[],
  petition: {
    code: string,
    quantity: number,
    ot: number,
    company: Company,
    id: string,
    user: string,
  }
}

const initialState:InitialState = {
  history: [...dataHistoryInventory],
  inventory: [...dataStock],
  petition: {
    code:'',
    quantity:0,
    ot: 0,
    company:'abm',
    id: '',
    user: '',
  }
}

const inventorySlice = createSlice({
  name: 'inventory',
  initialState,
  reducers:{

  }
})

export const {} = inventorySlice.actions;
export default inventorySlice.reducer;