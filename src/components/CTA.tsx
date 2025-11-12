// components/CTA.tsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-volt-blue to-blue-600">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          Ready to Transform Your Business?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
        >
          Let's discuss how our IT solutions can drive your success in the
          digital age.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            to="/contact"
            className="bg-white text-volt-blue px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
          >
            Get Started
          </Link>
          <Link
            to="/portfolio"
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-volt-blue transition-all duration-300"
          >
            View Our Work
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
