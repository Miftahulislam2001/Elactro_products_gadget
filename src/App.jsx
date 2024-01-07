import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header/>
      <div className="min-h-[calc(100vh-137px)]">
      <Outlet/></div>
      <Footer/>
    </div>
  );
};

export default App;
