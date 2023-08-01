import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home, Login, Overview, ProductList } from "./pages";

export default function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}>
        <Route exact path="overview" element={<Overview />} />
        <Route exact path="product-list" element={<ProductList />} />
      </Route>
    </Routes>
  );
}
