'use client'
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Index = ({ children }) => {
  const [isSideBarOpen, setisSideBarOpen] = useState(false);
  const sideBarOpen = ()=>{
    setisSideBarOpen(!isSideBarOpen)
  }
  return (
    <div className="flex">
      <Sidebar />
      <main className="w-[calc(100%-245px)] 3xl:w-[calc(100%-280px)] bg-white ml-[245px] 3xl:ml-[280px]">
        <Header />
        {children}
      </main>
    </div>
  );
};

export default Index;
