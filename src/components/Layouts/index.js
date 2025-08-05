"use client";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Toaster } from "react-hot-toast";
import { ToastContainer } from "react-toastify";

const Index = ({ children }) => {
  const [isMenuOpen, setisMenuOpen] = useState(true);
  console.log(isMenuOpen);
  
  return (
    // <Provider store={store}>
    // <VendorAuthProvider>
    <div className="md:flex">
      <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            style={{ top: '1rem', right: '6rem' }} // adjust spacing here
          />
      <Sidebar isMenuOpen={isMenuOpen} setisMenuOpen={setisMenuOpen} />
      <main className={`${isMenuOpen ? 'w-full smd:w-[calc(100%-245px)] 3xl:w-[calc(100%-280px)] smd:ml-[245px] 3xl:ml-[280px]':'md:w-[calc(100%-200px)] md:ml-[200px] smd:w-[calc(100%-245px)] 3xl:w-[calc(100%-280px)] smd:ml-[245px] 3xl:ml-[280px]'} bg-white transition-all ease-in-out duration-300`}>
        <Header setisMenuOpen={setisMenuOpen} isMenuOpen={isMenuOpen}/>
       
         {children}
      </main>
    </div>
    
  );
};

export default Index;
