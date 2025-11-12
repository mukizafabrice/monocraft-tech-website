// pages/Services.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [activeService, setActiveService] = useState("software");

  const services = {
    software: {
      title: "Software Development",
      icon: "💻",
      description:
        "Custom software solutions tailored to your business needs, from web applications to mobile apps and enterprise systems.",
      features: [
        "Custom Web Applications",
        "Mobile App Development",
        "Enterprise Software",
        "E-Commerce Solutions",
        "API Development & Integration",
        "Cloud-Native Applications",
      ],
      technologies: [
        "React",
        "Node.js",
        "Python",
        "TypeScript",
        "MongoDB",
        "PostgreSQL",
        "AWS",
        "Docker",
      ],
      process: [
        {
          step: 1,
          title: "Discovery & Planning",
          description: "Understanding your requirements and project scope",
        },
        {
          step: 2,
          title: "Design & Prototyping",
          description: "Creating wireframes and interactive prototypes",
        },
        {
          step: 3,
          title: "Development & Testing",
          description: "Agile development with continuous testing",
        },
        {
          step: 4,
          title: "Deployment & Support",
          description: "Production deployment and ongoing maintenance",
        },
      ],
      projects: 85,
      satisfaction: "98%",
    },
    networking: {
      title: "Network Installation & Maintenance",
      icon: "📡",
      description:
        "Complete network infrastructure solutions including installation, configuration, and ongoing maintenance services.",
      features: [
        "Structured Cabling",
        "Wireless Network Setup",
        "Network Security",
        "CCTV & Surveillance Systems",
        "Server Configuration",
        "Network Monitoring",
      ],
      technologies: [
        "Cisco",
        "Ubiquiti",
        "Hikvision",
        "Fortinet",
        "HP Aruba",
        "MikroTik",
      ],
      process: [
        {
          step: 1,
          title: "Site Assessment",
          description: "Comprehensive analysis of your infrastructure needs",
        },
        {
          step: 2,
          title: "Design & Quotation",
          description: "Detailed network design and cost estimation",
        },
        {
          step: 3,
          title: "Installation & Configuration",
          description: "Professional installation and setup",
        },
        {
          step: 4,
          title: "Testing & Training",
          description: "System testing and staff training",
        },
      ],
      projects: 45,
      satisfaction: "96%",
    },
    sales: {
      title: "Tech Device Sales",
      icon: "🛒",
      description:
        "Quality technology devices and equipment through our external e-commerce platform with expert recommendations.",
      features: [
        "Computers & Laptops",
        "Networking Equipment",
        "Security Cameras",
        "Peripherals & Accessories",
        "Software Licenses",
        "IT Consumables",
      ],
      technologies: [
        "Dell",
        "HP",
        "Cisco",
        "Hikvision",
        "Logitech",
        "Microsoft",
        "Apple",
      ],
      process: [
        {
          step: 1,
          title: "Needs Assessment",
          description: "Understanding your hardware requirements",
        },
        {
          step: 2,
          title: "Product Recommendation",
          description: "Expert advice on suitable devices",
        },
        {
          step: 3,
          title: "Purchase & Delivery",
          description: "Seamless ordering and delivery process",
        },
        {
          step: 4,
          title: "Setup Support",
          description: "Assistance with device setup and configuration",
        },
      ],
      projects: 1200,
      satisfaction: "94%",
    },
    training: {
      title: "IT Training & Workshops",
      icon: "🎓",
      description:
        "Comprehensive IT training programs and workshops designed to enhance digital skills for individuals and organizations.",
      features: [
        "Web Development Bootcamps",
        "Network Administration",
        "Cybersecurity Training",
        "Digital Marketing",
        "Data Science & AI",
        "Corporate IT Training",
      ],
      technologies: [
        "HTML/CSS/JS",
        "Python",
        "React",
        "Cybersecurity",
        "AWS",
        "Data Analytics",
      ],
      process: [
        {
          step: 1,
          title: "Skills Assessment",
          description: "Evaluating current skill levels and learning goals",
        },
        {
          step: 2,
          title: "Customized Curriculum",
          description: "Tailoring training content to specific needs",
        },
        {
          step: 3,
          title: "Interactive Sessions",
          description: "Hands-on learning with expert instructors",
        },
        {
          step: 4,
          title: "Certification & Support",
          description: "Certification and ongoing learning support",
        },
      ],
      projects: 65,
      satisfaction: "97%",
    },
    consulting: {
      title: "IT Consulting",
      icon: "🔧",
      description:
        "Strategic IT consulting services to help businesses optimize their technology infrastructure and digital transformation.",
      features: [
        "IT Strategy Planning",
        "Digital Transformation",
        "Cloud Migration",
        "Security Audits",
        "System Optimization",
        "Technology Roadmaps",
      ],
      technologies: [
        "ITIL",
        "COBIT",
        "ISO 27001",
        "Cloud Architecture",
        "Security Frameworks",
      ],
      process: [
        {
          step: 1,
          title: "Business Analysis",
          description: "Understanding your business objectives and challenges",
        },
        {
          step: 2,
          title: "Solution Design",
          description: "Creating tailored technology strategies",
        },
        {
          step: 3,
          title: "Implementation Planning",
          description: "Detailed implementation roadmap",
        },
        {
          step: 4,
          title: "Ongoing Advisory",
          description: "Continuous support and optimization",
        },
      ],
      projects: 35,
      satisfaction: "99%",
    },
  };

  const serviceCategories = [
    { id: "software", name: "Software Development", icon: "💻" },
    { id: "networking", name: "Networking", icon: "📡" },
    { id: "sales", name: "Device Sales", icon: "🛒" },
    { id: "training", name: "IT Training", icon: "🎓" },
    { id: "consulting", name: "Consulting", icon: "🔧" },
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

  const currentService = services[activeService as keyof typeof services];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-volt-dark to-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-volt-blue rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-volt-blue rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Our <span className="text-volt-blue">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Comprehensive IT solutions designed to drive your business forward
              with cutting-edge technology and expert support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Categories Navigation */}
      <section className="py-12 bg-volt-light sticky top-20 z-30 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {serviceCategories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveService(category.id)}
                className={`flex items-center space-x-3 px-6 py-4 rounded-xl font-medium transition-all duration-300 ${
                  activeService === category.id
                    ? "bg-volt-blue text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-gray-50 shadow-md"
                }`}
              >
                <span className="text-2xl">{category.icon}</span>
                <span className="text-lg">{category.name}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Service Content */}
      <section ref={ref} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
          >
            {/* Service Overview */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-6xl">{currentService.icon}</div>
                <div>
                  <h2 className="text-4xl font-bold text-volt-dark">
                    {currentService.title}
                  </h2>
                  <div className="flex items-center space-x-4 mt-2">
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      {currentService.satisfaction} Satisfaction
                    </div>
                    <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {currentService.projects}+ Projects
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-xl text-gray-700 leading-relaxed">
                {currentService.description}
              </p>

              {/* Key Features */}
              <div>
                <h3 className="text-2xl font-bold text-volt-dark mb-6">
                  What We Offer
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentService.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3 p-4 bg-volt-light rounded-lg hover:bg-blue-50 transition-colors duration-300"
                    >
                      <div className="w-2 h-2 bg-volt-blue rounded-full"></div>
                      <span className="text-gray-700 font-medium">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-2xl font-bold text-volt-dark mb-6">
                  Technologies We Use
                </h3>
                <div className="flex flex-wrap gap-3">
                  {currentService.technologies.map((tech, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      className="bg-volt-blue bg-opacity-10 text-volt-blue px-4 py-2 rounded-full font-medium hover:bg-opacity-20 transition-all duration-300"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Process & CTA */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Our Process */}
              <div className="bg-volt-light rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-volt-dark mb-6">
                  Our Process
                </h3>
                <div className="space-y-6">
                  {currentService.process.map((step, index) => (
                    <motion.div
                      key={step.step}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-4"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-volt-blue text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {step.step}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-volt-dark mb-1">
                          {step.title}
                        </h4>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-gradient-to-br from-volt-blue to-blue-600 rounded-2xl p-8 text-white text-center"
              >
                <h3 className="text-2xl font-bold mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-blue-100 mb-6">
                  Let's discuss how our {currentService.title.toLowerCase()}{" "}
                  services can benefit your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-white text-volt-blue px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300"
                  >
                    Get Free Consultation
                  </a>
                  <a
                    href="/portfolio"
                    className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-volt-blue transition-all duration-300"
                  >
                    View Our Work
                  </a>
                </div>
              </motion.div>

              {/* External Link for Sales */}
              {activeService === "sales" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 text-center"
                >
                  <div className="text-4xl mb-3">🛒</div>
                  <h4 className="text-lg font-semibold text-yellow-800 mb-2">
                    Visit Our E-commerce Store
                  </h4>
                  <p className="text-yellow-700 mb-4">
                    Browse our complete catalog of tech devices and equipment
                  </p>
                  <a
                    href="https://shop.monocrafttech.rw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-yellow-600 transition-colors duration-300 inline-flex items-center space-x-2"
                  >
                    <span>Shop Now</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* All Services Overview */}
      <section className="py-20 bg-volt-light">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-volt-dark mb-4">
              Comprehensive IT Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              End-to-end technology services to meet all your business IT
              requirements under one roof.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer ${
                  activeService === category.id ? "ring-2 ring-volt-blue" : ""
                }`}
                onClick={() => setActiveService(category.id)}
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold text-volt-dark mb-3">
                  {category.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {services[
                    category.id as keyof typeof services
                  ].description.slice(0, 100)}
                  ...
                </p>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-volt-blue font-medium">
                    {services[category.id as keyof typeof services].projects}+
                    projects
                  </span>
                  <span className="text-green-600 font-medium">
                    {
                      services[category.id as keyof typeof services]
                        .satisfaction
                    }{" "}
                    satisfaction
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-volt-dark mb-4">
              Why Choose MonoCraft Tech?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🎯",
                title: "Expert Team",
                description:
                  "15+ years combined experience in IT solutions and digital transformation.",
              },
              {
                icon: "⚡",
                title: "Fast Delivery",
                description:
                  "Agile development approach ensuring timely project completion.",
              },
              {
                icon: "🛡️",
                title: "Quality Assurance",
                description:
                  "Rigorous testing and quality control processes for reliable solutions.",
              },
              {
                icon: "📞",
                title: "24/7 Support",
                description:
                  "Round-the-clock technical support and maintenance services.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center p-6"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-volt-dark mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-volt-blue to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Let's Transform Your Business
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
          >
            Get started with a free consultation and discover how our IT
            services can drive your success.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="/contact"
              className="bg-white text-volt-blue px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
            >
              Get Free Consultation
            </a>
            <a
              href="tel:+250788123456"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-volt-blue transition-all duration-300"
            >
              Call Us Now
            </a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;
