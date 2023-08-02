import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Login, Overview, ProductList } from "./pages";

export default function App() {
  return (
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/" element={<Home />}>
        <Route path="overview" element={<Overview />} />
        <Route path="product-list" element={<ProductList />} />
      </Route>
    </Routes>
  );
}
