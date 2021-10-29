import React, { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import BannerImage from "../components/BannerImage";
import Empresas from "../components/Empresas";
import MaiorCentro from "../components/MaiorCentro";
import KnowMore from "../components/KnowMore";
import ProductFeatured from "../components/ProductFeatured";
import SingleCategory from "../components/SingleCategory"
import Contact from "../components/Contact"
import Testmonials from "../components/Testmonials"
 
import Footer from "../components/Footer";

function Main() {

  return (
    <>
      <Navbar />

      <Hero />

      <BannerImage />

      <KnowMore />

      <ProductFeatured />

      <Empresas />

      <MaiorCentro />

      <Footer />
    </>
  );
}

export default Main;
