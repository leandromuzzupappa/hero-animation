import { useState } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { Hero } from "../../components/Hero/Hero";

export const Homepage = () => {
  const [category, setCategory] = useState("all");

  return (
    <>
      <Navbar />
      <Hero
        headline="Drive true business results with robust, full funnel Media services."
        section={category}
      />
      <h1>Pepitos</h1>
    </>
  );
};
