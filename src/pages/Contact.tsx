// pages/Contact.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Form submitted:", formData);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: "📧",
      title: "Email Us",
      details: "info@monocrafttech.rw",
      description: "Send us an email anytime",
      link: "mailto:info@monocrafttech.rw",
    },
    {
      icon: "📞",
      title: "Call Us",
      details: "+250 788 123 456",
      description: "Mon-Fri from 8AM to 6PM",
      link: "tel:+250788123456",
    },
    {
      icon: "💬",
      title: "WhatsApp",
      details: "+250 788 123 456",
      description: "Quick responses via WhatsApp",
      link: "https://wa.me/250788123456",
    },
    {
      icon: "📍",
      title: "Visit Us",
      details: "Kigali, Rwanda",
      description: "Come see us in person",
      link: "https://maps.google.com/?q=Kigali,Rwanda",
    },
  ];

  const services = [
    "Software Development",
    "Network Installation",
    "Camera Systems",
    "IT Training",
    "Tech Device Sales",
    "IT Consulting",
    "Other",
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
              Get In <span className="text-volt-blue">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Ready to start your next project? Let's discuss how we can help
              transform your business with technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-volt-light">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.link}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-volt-dark mb-2">
                  {method.title}
                </h3>
                <p className="text-volt-blue font-medium mb-1">
                  {method.details}
                </p>
                <p className="text-gray-600 text-sm">{method.description}</p>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section ref={ref} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            {/* Contact Form */}
            <motion.div
              variants={itemVariants}
              className="bg-volt-light rounded-2xl p-8"
            >
              <h2 className="text-3xl font-bold text-volt-dark mb-6">
                Send us a Message
              </h2>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="text-6xl mb-4">🎉</div>
                  <h3 className="text-2xl font-bold text-volt-dark mb-4">
                    Thank You!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Your message has been sent successfully. We'll get back to
                    you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="btn-primary"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-volt-blue focus:border-transparent transition-all duration-300 ${
                          errors.name ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="Your full name"
                      />
                      {errors.name && (
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-red-500 text-sm mt-1"
                        >
                          {errors.name}
                        </motion.p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-volt-blue focus:border-transparent transition-all duration-300 ${
                          errors.email ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="your.email@example.com"
                      />
                      {errors.email && (
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-red-500 text-sm mt-1"
                        >
                          {errors.email}
                        </motion.p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-volt-blue focus:border-transparent transition-all duration-300"
                        placeholder="+250 XXX XXX XXX"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-volt-blue focus:border-transparent transition-all duration-300"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-volt-blue focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-volt-blue focus:border-transparent transition-all duration-300 ${
                        errors.message ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Tell us about your project or inquiry..."
                    />
                    {errors.message && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-red-500 text-sm mt-1"
                      >
                        {errors.message}
                      </motion.p>
                    )}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className={`w-full py-4 px-8 rounded-lg font-medium text-white transition-all duration-300 ${
                      isSubmitting
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-volt-blue hover:bg-blue-600"
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Sending...
                      </div>
                    ) : (
                      "Send Message"
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Map & Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Map Placeholder */}
              <div className="bg-volt-light rounded-2xl overflow-hidden shadow-lg">
                <div className="aspect-video bg-gradient-to-br from-volt-blue to-blue-600 flex items-center justify-center relative">
                  <div className="text-white text-center">
                    <div className="text-4xl mb-2">📍</div>
                    <h3 className="text-xl font-bold mb-2">Our Location</h3>
                    <p className="text-blue-100">Kigali, Rwanda</p>
                  </div>
                  {/* Map markers */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-8 h-8 bg-red-500 rounded-full border-4 border-white shadow-lg animate-pulse"></div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-volt-dark mb-4">
                    Visit Our Office
                  </h3>
                  <div className="space-y-2 text-gray-600">
                    <p>📌 Kigali City Center</p>
                    <p>🏢 Tech Innovation Hub</p>
                    <p>🕐 Mon-Fri: 8:00 AM - 6:00 PM</p>
                    <p>🕐 Sat: 9:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="bg-volt-dark text-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">
                  Why Choose MonoCraft Tech?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="text-volt-blue text-lg">✓</div>
                    <div>
                      <h4 className="font-semibold">Expert Team</h4>
                      <p className="text-gray-300 text-sm">
                        15+ years combined experience in IT solutions
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="text-volt-blue text-lg">✓</div>
                    <div>
                      <h4 className="font-semibold">Quick Response</h4>
                      <p className="text-gray-300 text-sm">
                        We respond to all inquiries within 24 hours
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="text-volt-blue text-lg">✓</div>
                    <div>
                      <h4 className="font-semibold">Free Consultation</h4>
                      <p className="text-gray-300 text-sm">
                        Get expert advice with no obligation
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="text-volt-blue text-lg">✓</div>
                    <div>
                      <h4 className="font-semibold">Local Support</h4>
                      <p className="text-gray-300 text-sm">
                        Dedicated support team based in Rwanda
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-volt-light">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-volt-dark mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Quick answers to common questions about our services and process.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "How quickly can you start a new project?",
                answer:
                  "We can typically start within 1-2 weeks after initial consultation and agreement.",
              },
              {
                question: "Do you offer ongoing support?",
                answer:
                  "Yes, we provide comprehensive maintenance and support packages for all our solutions.",
              },
              {
                question: "What areas in Rwanda do you serve?",
                answer:
                  "We serve clients nationwide, with physical presence in Kigali and remote support across Rwanda.",
              },
              {
                question: "Can you work with existing systems?",
                answer:
                  "Absolutely! We specialize in integrating with and enhancing existing technology infrastructure.",
              },
              {
                question: "What's your typical project timeline?",
                answer:
                  "Timelines vary by project scope, but most software projects take 4-12 weeks from start to completion.",
              },
              {
                question: "Do you offer training for delivered solutions?",
                answer:
                  "Yes, comprehensive training is included with all our software and system implementations.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-lg font-bold text-volt-dark mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
