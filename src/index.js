import React from "react";
import {render} from "react-dom";
import  ReactDOM  from "react-dom/client";
import { BrowserRouter, Routes, Route} from "react-router-dom";

import "./index.css";
import HomePage from "./pages/Homepage";
import ProductPage from "./pages/productPage"
import PaymentPage from "./pages/productPage"


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<div>
  <div>MY app</div>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/product" element={<ProductPage />}/>
      <Route path="/payment" element={<PaymentPage />}/>
    </Routes>
  </BrowserRouter>
</div>
);

