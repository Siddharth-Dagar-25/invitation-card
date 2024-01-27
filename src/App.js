import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GetStarted from "./components/GetStarted.jsx";
import Home from "./components/Home.jsx"

const Body = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GetStarted />} />
        <Route path="/home" element={ <Home /> } />
      </Routes>
    </BrowserRouter>
  );
};

export default Body;