import { useState } from "react";
import "./App.css";
import LoginPage from "./components/pages/login/LoginPage";
import ErrorPage from "./components/pages/error/ErrorPage";
import OrderPage from "./components/pages/order/OrderPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/order/:userName" element={<OrderPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
