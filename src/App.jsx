import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Detail from "./components/Detail";
import Search from "./components/Search";
import Products from "./components/pages/Products";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/contact"} element={<Contact />} />
        <Route path={"/products"} element={<Products />} />
        <Route path={"/detail/:id"} element={<Detail />} />
        <Route path={"/search/:name"} element={<Search />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
