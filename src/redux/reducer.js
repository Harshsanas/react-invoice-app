import { createSlice } from "@reduxjs/toolkit";

const invoiceListSlice = createSlice({
    name: "invoice",
    initialState: [],
    reducers: {
        addInvoice: (state, action) => {
            return [...state, action.payload];
        },
        updateInvoice: (state, action) => {
            const updatedInvoice = action.payload;
            return state.map((invoice) =>
                invoice.id === updatedInvoice.id ? updatedInvoice : invoice
            );
        },
        deleteInvoice: (state, action) => {
            return state.filter(item => item.id !== action.payload);
        },
    }
})

export const { addInvoice, updateInvoice, deleteInvoice } = invoiceListSlice.actions;
export default invoiceListSlice.reducer