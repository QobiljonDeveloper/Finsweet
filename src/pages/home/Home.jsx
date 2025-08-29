import React from "react";
import Hero from "../../components/hero/Hero";
import Projects from "../../components/projects/Projects";
import Features from "../../components/features/Features";
import Clients from "../../components/clients/Clients";

const Home = () => {
  return (
    <main>
      <Hero />
      <Projects />
      <Features />
      <Clients />
    </main>
  );
};

export default Home;
