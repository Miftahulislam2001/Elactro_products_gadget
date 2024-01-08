import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import Shop from './components/Shop.jsx';
import Cart from './components/Cart.jsx';
import { productsAndCartData } from './Loader/getCart&ProductsData.js';
import { Toaster } from 'react-hot-toast';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    loader: productsAndCartData,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/shop",
        element: <Shop/>,
        loader: ()=> fetch('products.json')
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/cart",
        element: <Cart/>,
        loader: productsAndCartData,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <>
      <Toaster/>
      <RouterProvider router={router} />
    </>
  
)
