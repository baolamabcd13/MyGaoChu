import React from "react";
import Hero from "@/app/layouts/Hero";
import Products from "./Products/Products";
import Dishes from "./Dishes/Dishes";
import Gallery from "./Gallery/Gallery";
import Footer from "@/app/layouts/Footer";

const LandingPage = () => {
  return (
    <section className="flex flex-col w-full">
      <Hero />
      <Products />
      <Dishes />
      <Gallery />
      <Footer />
    </section>
  );
};

export default LandingPage;
