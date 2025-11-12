// components/StatsCounter.tsx
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const StatsCounter: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const stats = [
    { number: 150, suffix: "+", label: "Projects Completed" },
    { number: 500, suffix: "+", label: "Clients Served" },
    { number: 1000, suffix: "+", label: "Students Trained" },
    { number: 5, suffix: "+", label: "Years Experience" },
  ];

  return (
    <section ref={ref} className="py-20 bg-volt-dark text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Impact</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Delivering excellence and driving digital transformation across
            Rwanda.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="text-4xl md:text-6xl font-bold text-volt-blue mb-2">
                {inView && (
                  <CountUp
                    start={0}
                    end={stat.number}
                    duration={2.5}
                    suffix={stat.suffix}
                  />
                )}
              </div>
              <div className="text-lg text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
