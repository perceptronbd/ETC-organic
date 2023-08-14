import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
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
  const { user } = useAuth();

  return (
    <Routes>
      <Route
        exact
        path="/login"
        element={!user ? <Login /> : <Navigate to={"/"} />}
      />
      <Route
        exact
        path="/"
        element={user ? <Home /> : <Navigate to={"/login"} />}
      >
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
