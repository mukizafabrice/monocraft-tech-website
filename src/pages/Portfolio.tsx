// pages/Portfolio.tsx
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Portfolio: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projectCategories = [
    { id: 'all', name: 'All Projects' },
    { id: 'software', name: 'Software Development' },
    { id: 'networking', name: 'Network Installation' },
    { id: 'training', name: 'IT Training' },
    { id: 'consulting', name: 'IT Consulting' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Kigali Business Hub Platform',
      category: 'software',
      client: 'City of Kigali',
      description: 'A comprehensive business management platform for local entrepreneurs featuring inventory management, accounting, and customer relationship tools.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'MongoDB', 'TypeScript'],
      duration: '4 months',
      outcome: 'Increased business efficiency by 40% for 500+ local businesses',
      features: ['Inventory Management', 'CRM', 'Accounting', 'Analytics Dashboard'],
      status: 'Completed',
      year: '2023'
    },
    {
      id: 2,
      title: 'Enterprise Network Infrastructure',
      category: 'networking',
      client: 'RwandaTech Corp',
      description: 'Complete network infrastructure overhaul including fiber optic installation, security cameras, and centralized monitoring system.',
      image: '/api/placeholder/600/400',
      technologies: ['Cisco', 'Fiber Optics', 'Hikvision', 'Ubiquiti'],
      duration: '3 months',
      outcome: '99.9% network uptime and 60% faster data transfer',
      features: ['Fiber Optic Backbone', 'Security Cameras', 'Network Monitoring', 'Wireless Access'],
      status: 'Completed',
      year: '2023'
    },
    {
      id: 3,
      title: 'Digital Skills Training Program',
      category: 'training',
      client: 'Ministry of ICT',
      description: 'Nationwide digital literacy program training 1000+ youth in web development, digital marketing, and IT fundamentals.',
      image: '/api/placeholder/600/400',
      technologies: ['HTML/CSS', 'JavaScript', 'Digital Marketing', 'Python'],
      duration: '6 months',
      outcome: '1000+ youth trained, 85% employment rate within 3 months',
      features: ['Web Development', 'Digital Marketing', 'Career Coaching', 'Certification'],
      status: 'Completed',
      year: '2023'
    },
    {
      id: 4,
      title: 'E-Commerce Platform',
      category: 'software',
      client: 'Rwanda Crafts',
      description: 'Modern e-commerce platform for local artisans to showcase and sell their products globally with integrated payment processing.',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'Stripe', 'Cloudinary', 'PostgreSQL'],
      duration: '5 months',
      outcome: '300% increase in online sales within first quarter',
      features: ['Product Management', 'Payment Processing', 'Order Tracking', 'Multi-vendor'],
      status: 'Completed',
      year: '2022'
    },
    {
      id: 5,
      title: 'Campus Security System',
      category: 'networking',
      client: 'University of Rwanda',
      description: 'Comprehensive security system installation across campus including IP cameras, access control, and emergency response integration.',
      image: '/api/placeholder/600/400',
      technologies: ['IP Cameras', 'Access Control', 'Emergency Systems', 'Central Monitoring'],
      duration: '4 months',
      outcome: 'Enhanced campus security with 24/7 monitoring capabilities',
      features: ['200+ Cameras', 'Access Control', 'Emergency Alerts', 'Mobile Monitoring'],
      status: 'Completed',
      year: '2022'
    },
    {
      id: 6,
      title: 'Cloud Migration Consulting',
      category: 'consulting',
      client: 'Bank of Kigali',
      description: 'Strategic consulting and implementation support for migrating critical banking systems to secure cloud infrastructure.',
      image: '/api/placeholder/600/400',
      technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes'],
      duration: '8 months',
      outcome: 'Successfully migrated 15+ critical systems with zero downtime',
      features: ['Cloud Strategy', 'Migration Planning', 'Security Audit', 'Team Training'],
      status: 'Completed',
      year: '2022'
    },
    {
      id: 7,
      title: 'Mobile Health Application',
      category: 'software',
      client: 'Health Ministry Rwanda',
      description: 'Mobile application for remote patient monitoring and telemedicine services in rural areas.',
      image: '/api/placeholder/600/400',
      technologies: ['React Native', 'Firebase', 'WebRTC', 'Node.js'],
      duration: '6 months',
      outcome: 'Extended healthcare access to 50,000+ rural residents',
      features: ['Telemedicine', 'Patient Records', 'Appointment Booking', 'Medication Tracking'],
      status: 'In Progress',
      year: '2024'
    },
    {
      id: 8,
      title: 'Smart Office Implementation',
      category: 'networking',
      client: 'Innovation Lab Rwanda',
      description: 'Smart office setup with IoT devices, automated systems, and energy-efficient network infrastructure.',
      image: '/api/placeholder/600/400',
      technologies: ['IoT Sensors', 'Smart Lighting', 'Energy Management', 'Automation'],
      duration: '3 months',
      outcome: '35% reduction in energy costs and improved workplace efficiency',
      features: ['IoT Integration', 'Energy Monitoring', 'Automated Systems', 'Smart Access'],
      status: 'Completed',
      year: '2023'
    }
  ];

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projects;
    return projects.filter(project => project.category === activeFilter);
  }, [activeFilter, projects]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const ProjectModal: React.FC<{ project: any; onClose: () => void }> = ({ project, onClose }) => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-volt-dark z-10 bg-white rounded-full p-2 shadow-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="aspect-video bg-gradient-to-br from-volt-blue to-blue-600 rounded-t-2xl flex items-center justify-center">
              <span className="text-white text-6xl">🚀</span>
            </div>

            <div className="p-8">
              <div className="flex flex-wrap items-center justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-volt-dark mb-2">{project.title}</h2>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-volt-blue text-white px-3 py-1 rounded-full text-sm">
                      {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                    </span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                      {project.status}
                    </span>
                    <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                      {project.year}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-gray-600">Client</p>
                  <p className="font-semibold text-volt-dark">{project.client}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-volt-dark mb-4">Project Overview</h3>
                  <p className="text-gray-700 mb-6">{project.description}</p>
                  
                  <h4 className="text-lg font-semibold text-volt-dark mb-3">Key Features</h4>
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {project.features.map((feature: string, index: number) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-volt-blue rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <h4 className="text-lg font-semibold text-volt-dark mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech: string, index: number) => (
                      <span key={index} className="bg-volt-light text-volt-dark px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="bg-volt-light rounded-xl p-6 mb-6">
                    <h4 className="text-lg font-semibold text-volt-dark mb-4">Project Details</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Duration:</span>
                        <span className="font-semibold">{project.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Status:</span>
                        <span className="font-semibold">{project.status}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Year:</span>
                        <span className="font-semibold">{project.year}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                    <h4 className="text-lg font-semibold text-green-800 mb-3">Outcome & Impact</h4>
                    <p className="text-green-700">{project.outcome}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
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
              Our <span className="text-volt-blue">Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Discover how we've helped businesses transform through innovative technology solutions and expert IT services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Stats */}
      <section className="py-16 bg-volt-light">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { number: '150+', label: 'Projects Completed' },
              { number: '95%', label: 'Client Satisfaction' },
              { number: '50+', label: 'Active Clients' },
              { number: '5+', label: 'Years Experience' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="text-3xl md:text-4xl font-bold text-volt-blue mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Filter & Grid */}
      <section ref={ref} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {projectCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-volt-blue text-white shadow-lg'
                    : 'bg-volt-light text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative overflow-hidden">
                    <div className="aspect-video bg-gradient-to-br from-volt-blue to-blue-600 flex items-center justify-center">
                      <span className="text-white text-4xl group-hover:scale-110 transition-transform duration-300">
                        {project.category === 'software' && '💻'}
                        {project.category === 'networking' && '📡'}
                        {project.category === 'training' && '🎓'}
                        {project.category === 'consulting' && '🔧'}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 flex gap-2">
                      <span className="bg-volt-blue text-white px-3 py-1 rounded-full text-sm">
                        {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        project.status === 'Completed' 
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        className="bg-white bg-opacity-90 rounded-full p-4"
                      >
                        <span className="text-volt-blue text-lg font-semibold">View Details</span>
                      </motion.div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-volt-dark mb-2 group-hover:text-volt-blue transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span>{project.client}</span>
                      <span>{project.year}</span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech: string, index: number) => (
                        <span key={index} className="bg-volt-light text-volt-dark px-2 py-1 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="bg-volt-light text-volt-dark px-2 py-1 rounded text-xs">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{project.duration}</span>
                      <button className="text-volt-blue hover:text-blue-600 font-medium text-sm flex items-center space-x-1">
                        <span>Learn More</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-volt-dark mb-4">No projects found</h3>
              <p className="text-gray-600 mb-6">We're working on new projects in this category. Check back soon!</p>
              <button
                onClick={() => setActiveFilter('all')}
                className="btn-primary"
              >
                View All Projects
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-volt-blue to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Ready to Start Your Project?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
          >
            Let's work together to bring your vision to life with cutting-edge technology solutions.
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
              Start a Project
            </a>
            <a
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-volt-blue transition-all duration-300"
            >
              Our Services
            </a>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Portfolio;