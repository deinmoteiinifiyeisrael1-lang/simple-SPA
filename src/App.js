import React from "react";
import {Banner, About, Products, Contact}
from "./index.js";

function App() {
  return(
    <>
    {/* Simple Navigation */}
  <nav> 
    <a href="#banner">Home </a> |{""}
    <a href="#about">About </a> |{""}
    <a href="#products">Products</a> |{""}
    <a href="#contact">Contact</a> 
    </nav>

    {/* Page Sections */}
    <Banner />
    <About />
    <Products />
    <Contact />
    </>
  );
} 
export default App;
