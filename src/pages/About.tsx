// pages/About.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  const values = [
    {
      icon: '🚀',
      title: 'Innovation',
      description: 'We constantly explore new technologies and methodologies to deliver cutting-edge solutions.'
    },
    {
      icon: '🎯',
      title: 'Excellence',
      description: 'We strive for perfection in every project, ensuring quality and reliability in our deliverables.'
    },
    {
      icon: '🤝',
      title: 'Partnership',
      description: 'We build long-term relationships with our clients, working collaboratively towards shared success.'
    },
    {
      icon: '🌍',
      title: 'Impact',
      description: 'We are committed to driving digital transformation and creating positive change in our community.'
    }
  ];

  const teamMembers = [
    {
      name: 'Alexandre N.',
      role: 'Chief Technology Officer',
      image: '/api/placeholder/300/300',
      description: '15+ years in software architecture and team leadership.'
    },
    {
      name: 'Marie U.',
      role: 'Head of Training',
      image: '/api/placeholder/300/300',
      description: 'Expert in IT education with focus on practical skills development.'
    },
    {
      name: 'David R.',
      role: 'Network Solutions Lead',
      image: '/api/placeholder/300/300',
      description: 'Specialized in enterprise network infrastructure and security.'
    },
    {
      name: 'Sarah K.',
      role: 'Project Manager',
      image: '/api/placeholder/300/300',
      description: 'PMP certified with extensive experience in agile project delivery.'
    }
  ];

  const milestones = [
    {
      year: '2019',
      title: 'Company Founded',
      description: 'MonoCraft Tech established in Kigali with focus on software development.'
    },
    {
      year: '2020',
      title: 'Expansion to Hardware',
      description: 'Added network installation and tech device sales to our service portfolio.'
    },
    {
      year: '2021',
      title: 'Training Division Launch',
      description: 'Started IT training programs to address local skills gap.'
    },
    {
      year: '2022',
      title: '100+ Projects',
      description: 'Successfully delivered over 100 projects to satisfied clients.'
    },
    {
      year: '2023',
      title: 'Regional Recognition',
      description: 'Awarded as one of the top IT service providers in East Africa.'
    }
  ];

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
              About <span className="text-volt-blue">MonoCraft</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Driving digital innovation in Rwanda and beyond through cutting-edge technology solutions and expert IT services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section ref={ref} className="py-20 bg-volt-light">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-bold text-volt-dark mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700 text-lg">
                <p>
                  Founded in 2019, MonoCraft Tech emerged from a simple yet powerful vision: to bridge the digital divide in Rwanda by providing comprehensive, world-class IT solutions tailored to local needs.
                </p>
                <p>
                  What started as a small software development studio has grown into a full-service IT company, serving businesses, government institutions, and individuals across East Africa.
                </p>
                <p>
                  Our name "MonoCraft" reflects our philosophy: mastering one craft at a time with precision and dedication, while maintaining a cohesive, streamlined approach to technology.
                </p>
              </div>
              
              <motion.div
                variants={itemVariants}
                className="mt-8 grid grid-cols-2 gap-6"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-volt-blue mb-2">5+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-volt-blue mb-2">50+</div>
                  <div className="text-gray-600">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-volt-blue mb-2">150+</div>
                  <div className="text-gray-600">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-volt-blue mb-2">1000+</div>
                  <div className="text-gray-600">Students Trained</div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="aspect-video bg-gradient-to-br from-volt-blue to-blue-600 rounded-lg mb-6 flex items-center justify-center">
                  <span className="text-white text-6xl">🚀</span>
                </div>
                <h3 className="text-2xl font-bold text-volt-dark mb-4">Our Mission</h3>
                <p className="text-gray-600 mb-6">
                  To empower businesses and individuals through innovative technology solutions that drive growth, efficiency, and digital transformation.
                </p>
                <h3 className="text-2xl font-bold text-volt-dark mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To be East Africa's leading IT solutions provider, recognized for excellence, innovation, and positive community impact.
                </p>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-volt-blue rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-volt-blue rounded-full opacity-30 animate-pulse delay-1000"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-volt-dark mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and define who we are as a company.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-volt-light rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-volt-dark mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-volt-dark text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Key milestones in our growth and development as a company.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-volt-blue h-full"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white text-volt-dark rounded-2xl p-6 shadow-lg">
                      <div className="text-volt-blue font-bold text-lg mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-volt-blue rounded-full border-4 border-volt-dark z-10"></div>
                  
                  {/* Spacer */}
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-volt-light">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-volt-dark mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Passionate professionals dedicated to delivering exceptional IT solutions and driving digital innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <div className="aspect-square bg-gradient-to-br from-volt-blue to-blue-600 flex items-center justify-center">
                    <span className="text-white text-6xl">👤</span>
                  </div>
                  <div className="absolute inset-0 bg-volt-blue opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center p-4">
                      <p className="text-sm">{member.description}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-volt-dark mb-2">
                    {member.name}
                  </h3>
                  <p className="text-volt-blue font-medium">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 mb-6">
              Join our growing team of experts and help shape the future of technology in Africa.
            </p>
            <a
              href="/contact"
              className="btn-primary inline-block"
            >
              Join Our Team
            </a>
          </motion.div>
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
            Ready to Work With Us?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
          >
            Let's discuss how MonoCraft Tech can help transform your business with innovative technology solutions.
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
              Get In Touch
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
    </motion.div>
  );
};

export default About;