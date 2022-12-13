import React from 'react'
import { Hero, Sales, FlexContent, Stories, Footer, Navbar, Cart, SellingPage, Products, Error, AddProduct, Login, Products1 } from './components';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./components/form/Form.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<SellingPage />}></Route>
          <Route path="products" element={<Products1 />}></Route>
          <Route path="add" element={<AddProduct />}></Route>
          <Route path="form" element={<Form />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App