import React from "react";
import Dashboard from "./components/dashboard/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InvoiceForm from "./components/invoice/InvoiceForm";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/new-invoice" element={<InvoiceForm />} />
        <Route path="/edit-invoice/:id" element={<InvoiceForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
