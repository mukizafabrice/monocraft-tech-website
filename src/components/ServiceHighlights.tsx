// components/ServiceHighlights.tsx
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ServiceHighlights: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const services = [
    {
      icon: "💻",
      title: "Software Development",
      description:
        "Custom web and mobile applications built with cutting-edge technologies.",
      link: "/services#software",
    },
    {
      icon: "📡",
      title: "Network Installation",
      description:
        "Professional camera and network setup with ongoing maintenance support.",
      link: "/services#networking",
    },
    {
      icon: "🛒",
      title: "Tech Device Sales",
      description:
        "Quality tech devices available through our external e-commerce platform.",
      link: "https://shop.monocrafttech.rw",
      external: true,
    },
    {
      icon: "🎓",
      title: "IT Training",
      description:
        "Comprehensive workshops and training programs for all skill levels.",
      link: "/training",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section ref={ref} className="py-20 bg-volt-light">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-volt-dark mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive IT solutions tailored to meet your business needs and
            drive digital transformation.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-volt-dark mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a
                href={service.link}
                target={service.external ? "_blank" : "_self"}
                rel={service.external ? "noopener noreferrer" : ""}
                className="text-volt-blue font-medium hover:text-blue-600 transition-colors duration-300 inline-flex items-center"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceHighlights;
