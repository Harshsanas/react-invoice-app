import { configureStore } from "@reduxjs/toolkit";
import invoiceReducer from "./reducer";

export const store = configureStore({
    reducer: {
        invoice: invoiceReducer,
    }
});