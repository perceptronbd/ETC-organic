import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  AddProduct,
  EditProduct,
  Home,
  Login,
  Overview,
  ProductList,
  Purchase,
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
      </Route>
    </Routes>
  );
}
