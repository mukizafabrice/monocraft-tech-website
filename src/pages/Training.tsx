// pages/Training.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Add interface for Course
interface Course {
  id: number;
  title: string;
  category: string;
  level: string;
  duration: string;
  format: string;
  price: string;
  upcomingDate: string;
  seats: number;
  description: string;
  objectives: string[];
  technologies: string[];
  instructor: {
    name: string;
    role: string;
    experience: string;
  };
  featured: boolean;
}

const Training: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [showRegistration, setShowRegistration] = useState(false);

  const trainingCategories = [
    { id: "all", name: "All Courses" },
    { id: "development", name: "Web Development" },
    { id: "networking", name: "Networking" },
    { id: "cybersecurity", name: "Cybersecurity" },
    { id: "data-science", name: "Data Science" },
    { id: "digital-marketing", name: "Digital Marketing" },
  ];

  const courses: Course[] = [
    {
      id: 1,
      title: "Full-Stack Web Development Bootcamp",
      category: "development",
      level: "Beginner to Advanced",
      duration: "12 weeks",
      format: "In-person & Online",
      price: "1,200,000 RWF",
      upcomingDate: "2024-03-15",
      seats: 15,
      description:
        "Comprehensive full-stack development course covering frontend, backend, and database technologies.",
      objectives: [
        "Master HTML5, CSS3, and JavaScript ES6+",
        "Build responsive web applications with React",
        "Develop RESTful APIs with Node.js and Express",
        "Work with MongoDB and PostgreSQL databases",
        "Deploy applications to cloud platforms",
        "Implement authentication and authorization",
      ],
      technologies: [
        "HTML/CSS",
        "JavaScript",
        "React",
        "Node.js",
        "MongoDB",
        "Git",
        "AWS",
      ],
      instructor: {
        name: "Alexandre N.",
        role: "Senior Full-Stack Developer",
        experience: "8+ years in web development",
      },
      featured: true,
    },
    {
      id: 2,
      title: "Network Administration & Security",
      category: "networking",
      level: "Intermediate",
      duration: "8 weeks",
      format: "In-person",
      price: "900,000 RWF",
      upcomingDate: "2024-04-01",
      seats: 12,
      description:
        "Hands-on network administration training focusing on security, troubleshooting, and maintenance.",
      objectives: [
        "Configure and manage network devices",
        "Implement network security protocols",
        "Troubleshoot network issues",
        "Set up VPN and firewall systems",
        "Monitor network performance",
        "Disaster recovery planning",
      ],
      technologies: [
        "Cisco",
        "Firewalls",
        "VPN",
        "Network Monitoring",
        "Security Protocols",
      ],
      instructor: {
        name: "David R.",
        role: "Network Solutions Architect",
        experience: "10+ years in network infrastructure",
      },
      featured: true,
    },
    {
      id: 3,
      title: "Cybersecurity Fundamentals",
      category: "cybersecurity",
      level: "Beginner",
      duration: "6 weeks",
      format: "Online",
      price: "750,000 RWF",
      upcomingDate: "2024-03-20",
      seats: 20,
      description:
        "Essential cybersecurity principles and practices for protecting digital assets and data.",
      objectives: [
        "Understand cyber threats and vulnerabilities",
        "Implement security controls",
        "Conduct risk assessments",
        "Incident response planning",
        "Security awareness training",
        "Compliance and regulations",
      ],
      technologies: [
        "Kali Linux",
        "Wireshark",
        "Metasploit",
        "Security Frameworks",
        "Encryption",
      ],
      instructor: {
        name: "Sarah K.",
        role: "Cybersecurity Specialist",
        experience: "6+ years in security operations",
      },
      featured: false,
    },
    {
      id: 4,
      title: "Data Science with Python",
      category: "data-science",
      level: "Intermediate",
      duration: "10 weeks",
      format: "In-person & Online",
      price: "1,100,000 RWF",
      upcomingDate: "2024-04-10",
      seats: 18,
      description:
        "Comprehensive data science course covering data analysis, visualization, and machine learning.",
      objectives: [
        "Data manipulation with Pandas",
        "Statistical analysis and visualization",
        "Machine learning algorithms",
        "Data cleaning and preprocessing",
        "Model deployment",
        "Big data fundamentals",
      ],
      technologies: [
        "Python",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "Matplotlib",
        "SQL",
      ],
      instructor: {
        name: "Dr. Marie U.",
        role: "Data Science Lead",
        experience: "7+ years in data analytics",
      },
      featured: true,
    },
    {
      id: 5,
      title: "Digital Marketing Mastery",
      category: "digital-marketing",
      level: "Beginner to Intermediate",
      duration: "6 weeks",
      format: "Online",
      price: "600,000 RWF",
      upcomingDate: "2024-03-25",
      seats: 25,
      description:
        "Complete digital marketing training covering SEO, social media, content marketing, and analytics.",
      objectives: [
        "Search Engine Optimization (SEO)",
        "Social media marketing strategies",
        "Content creation and marketing",
        "Google Analytics and data interpretation",
        "Email marketing campaigns",
        "Conversion rate optimization",
      ],
      technologies: [
        "Google Analytics",
        "SEO Tools",
        "Social Media Platforms",
        "Email Marketing",
        "CMS",
      ],
      instructor: {
        name: "John P.",
        role: "Digital Marketing Expert",
        experience: "5+ years in digital marketing",
      },
      featured: false,
    },
    {
      id: 6,
      title: "Mobile App Development with React Native",
      category: "development",
      level: "Intermediate",
      duration: "8 weeks",
      format: "In-person",
      price: "950,000 RWF",
      upcomingDate: "2024-04-05",
      seats: 14,
      description:
        "Build cross-platform mobile applications using React Native and modern development practices.",
      objectives: [
        "React Native fundamentals",
        "Mobile UI/UX design principles",
        "Native device features integration",
        "State management with Redux",
        "App deployment to stores",
        "Performance optimization",
      ],
      technologies: [
        "React Native",
        "JavaScript",
        "Redux",
        "Mobile UI",
        "APIs",
        "App Stores",
      ],
      instructor: {
        name: "Alexandre N.",
        role: "Senior Mobile Developer",
        experience: "6+ years in mobile development",
      },
      featured: false,
    },
  ];

  const filteredCourses =
    activeCategory === "all"
      ? courses
      : courses.filter((course) => course.category === activeCategory);

  const stats = [
    { number: "1000+", label: "Students Trained" },
    { number: "95%", label: "Employment Rate" },
    { number: "50+", label: "Corporate Clients" },
    { number: "4.9/5", label: "Average Rating" },
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

  // Add interface for CourseModal props
  interface CourseModalProps {
    course: Course;
    onClose: () => void;
    onRegister: () => void;
  }

  const CourseModal: React.FC<CourseModalProps> = ({
    course,
    onClose,
    onRegister,
  }) => {
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
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="bg-gradient-to-r from-volt-blue to-blue-600 text-white p-8 rounded-t-2xl">
              <div className="flex flex-wrap items-start justify-between">
                <div>
                  <h2 className="text-3xl font-bold mb-2">{course.title}</h2>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                      {course.level}
                    </span>
                    <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                      {course.duration}
                    </span>
                    <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                      {course.format}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">{course.price}</div>
                  <div className="text-blue-100">
                    Next session:{" "}
                    {new Date(course.upcomingDate).toLocaleDateString()}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                <div className="lg:col-span-2">
                  <h3 className="text-2xl font-bold text-volt-dark mb-4">
                    Course Description
                  </h3>
                  <p className="text-gray-700 mb-6">{course.description}</p>

                  <h4 className="text-xl font-semibold text-volt-dark mb-3">
                    Learning Objectives
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                    {course.objectives.map(
                      (objective: string, index: number) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-volt-blue rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{objective}</span>
                        </li>
                      )
                    )}
                  </ul>

                  <h4 className="text-xl font-semibold text-volt-dark mb-3">
                    Technologies Covered
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {course.technologies.map((tech: string, index: number) => (
                      <span
                        key={index}
                        className="bg-volt-light text-volt-dark px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-volt-light rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-volt-dark mb-4">
                      Course Details
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Duration:</span>
                        <span className="font-semibold">{course.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Format:</span>
                        <span className="font-semibold">{course.format}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Level:</span>
                        <span className="font-semibold">{course.level}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Seats Available:</span>
                        <span className="font-semibold">{course.seats}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Next Start Date:</span>
                        <span className="font-semibold">
                          {new Date(course.upcomingDate).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                    <h4 className="text-lg font-semibold text-blue-800 mb-3">
                      Instructor
                    </h4>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-lg">
                          {course.instructor.name
                            .split(" ")
                            .map((n: string) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-blue-900">
                          {course.instructor.name}
                        </div>
                        <div className="text-blue-700 text-sm">
                          {course.instructor.role}
                        </div>
                        <div className="text-blue-600 text-xs">
                          {course.instructor.experience}
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={onRegister}
                    className="w-full bg-volt-blue text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors duration-300"
                  >
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  // Add interface for RegistrationForm props
  interface RegistrationFormProps {
    course: Course;
    onClose: () => void;
  }

  const RegistrationForm: React.FC<RegistrationFormProps> = ({
    course,
    onClose,
  }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);

      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsSubmitted(true);
      setIsSubmitting(false);
    };

    if (isSubmitted) {
      return (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        >
          <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center">
            <div className="text-6xl mb-4">🎉</div>
            <h3 className="text-2xl font-bold text-volt-dark mb-4">
              Registration Successful!
            </h3>
            <p className="text-gray-600 mb-6">
              Thank you for registering for <strong>{course.title}</strong>.
              We've sent a confirmation email with course details.
            </p>
            <button onClick={onClose} className="btn-primary w-full">
              Close
            </button>
          </div>
        </motion.div>
      );
    }

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
          className="bg-white rounded-2xl max-w-md w-full"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6 border-b">
            <h3 className="text-xl font-bold text-volt-dark">
              Register for {course.title}
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-volt-blue focus:border-transparent"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email *
              </label>
              <input
                type="email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-volt-blue focus:border-transparent"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-volt-blue focus:border-transparent"
                placeholder="+250 XXX XXX XXX"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Company/Organization
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-volt-blue focus:border-transparent"
                placeholder="Your company name"
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-volt-blue text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors duration-300 disabled:bg-gray-400"
              >
                {isSubmitting ? "Processing..." : "Complete Registration"}
              </button>
            </div>
          </form>
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
              IT <span className="text-volt-blue">Training</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Advance your career with industry-leading IT training programs
              taught by expert instructors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#courses"
                className="bg-volt-blue text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-600 transition-colors duration-300"
              >
                Browse Courses
              </a>
              <a
                href="#corporate"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-volt-blue transition-all duration-300"
              >
                Corporate Training
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Training Stats */}
      <section className="py-16 bg-volt-light">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {stats.map((stat, index) => (
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

      {/* Course Catalog */}
      <section id="courses" ref={ref} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-volt-dark mb-4">
              Course Catalog
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our comprehensive range of IT training programs
              designed for all skill levels.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {trainingCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-volt-blue text-white shadow-lg"
                    : "bg-volt-light text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>

          {/* Courses Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300"
              >
                {course.featured && (
                  <div className="bg-volt-blue text-white px-4 py-1 text-sm font-medium text-center">
                    Featured Course
                  </div>
                )}

                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-volt-dark">
                      {course.title}
                    </h3>
                    {course.featured && (
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-medium">
                        Popular
                      </span>
                    )}
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {course.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Level:</span>
                      <span className="font-medium">{course.level}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Duration:</span>
                      <span className="font-medium">{course.duration}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Format:</span>
                      <span className="font-medium">{course.format}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Seats:</span>
                      <span className="font-medium">
                        {course.seats} available
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="text-lg font-bold text-volt-blue">
                      {course.price}
                    </div>
                    <div className="text-sm text-gray-500">
                      Starts{" "}
                      {new Date(course.upcomingDate).toLocaleDateString()}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => setSelectedCourse(course)}
                      className="flex-1 bg-volt-light text-volt-dark py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-300"
                    >
                      Learn More
                    </button>
                    <button
                      onClick={() => {
                        setSelectedCourse(course);
                        setShowRegistration(true);
                      }}
                      className="flex-1 bg-volt-blue text-white py-2 rounded-lg font-medium hover:bg-blue-600 transition-colors duration-300"
                    >
                      Register
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredCourses.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-volt-dark mb-4">
                No courses found
              </h3>
              <p className="text-gray-600 mb-6">
                We're adding new courses in this category soon. Check back
                later!
              </p>
              <button
                onClick={() => setActiveCategory("all")}
                className="btn-primary"
              >
                View All Courses
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Corporate Training */}
      <section id="corporate" className="py-20 bg-volt-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-volt-dark mb-6">
                Corporate Training Solutions
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Customized training programs designed to upskill your team and
                drive organizational success.
              </p>

              <div className="space-y-4">
                {[
                  "Tailored curriculum for your specific needs",
                  "Flexible scheduling and delivery formats",
                  "Industry-experienced instructors",
                  "Hands-on, practical learning approach",
                  "Post-training support and resources",
                  "Measurable ROI and skill assessment",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-volt-blue rounded-full flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <a href="/contact" className="btn-primary inline-block">
                  Request Corporate Training
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-volt-dark mb-6">
                Training Benefits
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    icon: "📈",
                    title: "Increased Productivity",
                    desc: "More efficient teams",
                  },
                  {
                    icon: "💡",
                    title: "Innovation",
                    desc: "Fresh ideas and approaches",
                  },
                  {
                    icon: "🛡️",
                    title: "Security",
                    desc: "Reduced cybersecurity risks",
                  },
                  {
                    icon: "💰",
                    title: "Cost Savings",
                    desc: "Reduced outsourcing needs",
                  },
                  {
                    icon: "🚀",
                    title: "Competitive Edge",
                    desc: "Stay ahead of trends",
                  },
                  {
                    icon: "👥",
                    title: "Team Morale",
                    desc: "Increased job satisfaction",
                  },
                ].map((benefit, index) => (
                  <div key={index} className="text-center p-4">
                    <div className="text-3xl mb-2">{benefit.icon}</div>
                    <h4 className="font-semibold text-volt-dark mb-1">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
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
            Start Your Learning Journey Today
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
          >
            Transform your career with hands-on IT training from industry
            experts.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#courses"
              className="bg-white text-volt-blue px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
            >
              Browse All Courses
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-volt-blue transition-all duration-300"
            >
              Get Course Advice
            </a>
          </motion.div>
        </div>
      </section>

      {/* Course Modal */}
      {selectedCourse && (
        <CourseModal
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
          onRegister={() => {
            setShowRegistration(true);
          }}
        />
      )}

      {/* Registration Modal */}
      {showRegistration && selectedCourse && (
        <RegistrationForm
          course={selectedCourse}
          onClose={() => {
            setShowRegistration(false);
            setSelectedCourse(null);
          }}
        />
      )}
    </motion.div>
  );
};

export default Training;
