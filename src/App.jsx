import React, { createContext, useState } from "react";
import Header from "./components/Header";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

export const productsContext = createContext([]);
export const cartContext = createContext([]);

const App = () => {
  const { cartArray, products } = useLoaderData();
  const [cart, setCart] = useState(cartArray);
  let [isOpen, setIsOpen] = useState(false)

  const cartAlert = sessionStorage.getItem('alert')
  if(cart.length > 0 && cartAlert !== 'true'){
    setIsOpen(true)
    sessionStorage.setItem('alert', true)
  }

  return (
    <productsContext.Provider value={products}>
      <cartContext.Provider value={[cart, setCart]}>
        <Header />
        <div className="min-h-[calc(100vh-137px)]">
          <Outlet />
        </div>
        <Footer />
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
      </cartContext.Provider>
    </productsContext.Provider>
  );
};

export default App;
