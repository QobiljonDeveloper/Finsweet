import React from "react";
import Header from "./components/header/Header";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import About from "./pages/aboutUs/About";
import Pricing from "./pages/pricing/Pricing";
import Work from "./pages/work/Work";
import Blogs from "./pages/blogs/Blogs";
import Contact from "./pages/contact/Contact";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/work" element={<Work />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
