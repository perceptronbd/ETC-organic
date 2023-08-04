import React from "react";
import { Route, Routes } from "react-router-dom";
import { AddProduct, Home, Login, Overview, ProductList } from "./pages";

export default function App() {
  return (
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/" element={<Home />}>
        <Route path="overview" element={<Overview />} />
        <Route path="product-list" element={<ProductList />} />
        <Route path="product-list/add-product" element={<AddProduct />} />
      </Route>
    </Routes>
  );
}
