// pages/Home.tsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import ServiceHighlights from "../components/ServiceHighlights";
import StatsCounter from "../components/StatsCounter";
import CTA from "../components/CTA";

const Home: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <ServiceHighlights />
      <StatsCounter />
      <CTA />
    </motion.div>
  );
};

export default Home;
