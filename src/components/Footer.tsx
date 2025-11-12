// components/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-volt-dark text-volt-light py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-volt-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">M</span>
              </div>
              <span className="text-white text-xl font-bold">MonoCraft Tech</span>
            </div>
            <p className="text-gray-400 mb-4">
              Kigali's leading IT solutions provider, driving digital innovation and transformation.
            </p>
            <div className="flex space-x-4">
              {['twitter', 'linkedin', 'github', 'facebook'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-gray-400 hover:text-volt-blue transition-colors duration-300"
                >
                  <span className="sr-only">{social}</span>
                  {/* Icon would go here */}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Portfolio', 'Training', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                    className="text-gray-400 hover:text-volt-blue transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="text-white font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                'Software Development',
                'Network Installation',
                'Tech Device Sales',
                'IT Training',
                'IT Consulting'
              ].map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-400 hover:text-volt-blue transition-colors duration-300">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h3 className="text-white font-bold mb-4">Contact Info</h3>
            <address className="text-gray-400 not-italic space-y-2">
              <p>Kigali, Rwanda</p>
              <p>Email: info@monocrafttech.rw</p>
              <p>Phone: +250 788 123 456</p>
              <p>Hours: Mon-Fri 8AM-6PM</p>
            </address>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400"
        >
          <p>&copy; {new Date().getFullYear()} MonoCraft Tech. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link to="/privacy" className="hover:text-volt-blue transition-colors duration-300">
              Privacy Policy
            </Link>
            <span>•</span>
            <a href="#" className="hover:text-volt-blue transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;