import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
 import { ToastContainer, toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";
 import { RouterProvider, createBrowserRouter } from "react-router-dom";

 const router = createBrowserRouter([
   {
     path: "/",
     element: <App />,
    
    
   },
  
 ]);



createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router}>
      
      <ToastContainer />
    </RouterProvider>
  </>
);
