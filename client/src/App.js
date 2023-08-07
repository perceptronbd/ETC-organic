import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  AddProduct,
  EditProduct,
  Employees,
  Home,
  Login,
  Orders,
  Overview,
  ProductList,
  Purchase,
  PurchaseReport,
  Sales,
  SalesReport,
} from "./pages";

export default function App() {
  return (
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/" element={<Home />}>
        <Route path="overview" element={<Overview />} />
        <Route path="product-list" element={<ProductList />} />
        <Route path="product-list/add-product" element={<AddProduct />} />
        <Route path="product-list/edit-product" element={<EditProduct />} />
        <Route path="purchase" element={<Purchase />} />
        <Route path="sales" element={<Sales />} />
        <Route path="sales-report" element={<SalesReport />} />
        <Route path="purchase-report" element={<PurchaseReport />} />
        <Route path="orders" element={<Orders />} />
        <Route path="employees" element={<Employees />} />
      </Route>
    </Routes>
  );
}
