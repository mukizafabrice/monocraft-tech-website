// pages/Privacy.tsx
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Privacy: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const privacySections = [
    {
      id: "information-collection",
      title: "1. Information We Collect",
      content: `We collect information that you provide directly to us, including:

• Personal Identification Information: Name, email address, phone number, company details
• Contact Information: Mailing address, contact preferences
• Professional Information: Job title, company size, industry
• Technical Information: IP address, browser type, device information
• Usage Data: Website interactions, service usage patterns, preferences

We collect this information through:
• Contact forms and service inquiries
• Training registrations and course applications
• Newsletter subscriptions
• Client onboarding processes
• Technical support requests`,
    },
    {
      id: "how-we-use",
      title: "2. How We Use Your Information",
      content: `We use the collected information for the following purposes:

• Service Delivery: To provide and maintain our IT services and solutions
• Client Communication: To respond to inquiries and provide customer support
• Training Programs: To manage course registrations and deliver training services
• Business Operations: To process transactions and manage client accounts
• Marketing: To send promotional materials and updates (with your consent)
• Improvement: To analyze usage patterns and improve our services
• Security: To protect against fraudulent activities and ensure security
• Legal Compliance: To comply with applicable laws and regulations`,
    },
    {
      id: "data-sharing",
      title: "3. Data Sharing and Disclosure",
      content: `We respect your privacy and do not sell your personal information. We may share your data with:

• Service Providers: Trusted third-party vendors who assist in delivering our services
• Legal Authorities: When required by law or to protect our legal rights
• Business Transfers: In connection with mergers, acquisitions, or business transfers
• Professional Advisors: Lawyers, accountants, and other professional service providers

We ensure all third parties maintain appropriate security measures and use your data only for specified purposes.`,
    },
    {
      id: "data-security",
      title: "4. Data Security",
      content: `We implement comprehensive security measures to protect your personal information:

• Encryption: Data transmission using SSL/TLS encryption protocols
• Access Controls: Role-based access restrictions to personal data
• Network Security: Firewalls and intrusion detection systems
• Physical Security: Secure data center facilities with controlled access
• Employee Training: Regular privacy and security awareness training
• Incident Response: Established procedures for data breach response

While we implement robust security measures, no method of transmission over the Internet is 100% secure. We continuously review and enhance our security practices.`,
    },
    {
      id: "data-retention",
      title: "5. Data Retention",
      content: `We retain personal information only for as long as necessary to fulfill the purposes outlined in this policy:

• Client Data: Retained for the duration of our business relationship and for legal compliance periods
• Prospect Data: Retained for reasonable business development periods
• Training Records: Maintained for certification and compliance purposes
• Technical Data: Stored for security and analytical purposes as needed

We regularly review our data retention practices and securely delete information that is no longer required.`,
    },
    {
      id: "your-rights",
      title: "6. Your Rights and Choices",
      content: `You have the following rights regarding your personal information:

• Access: Request access to the personal data we hold about you
• Correction: Request correction of inaccurate or incomplete information
• Deletion: Request deletion of your personal data under certain circumstances
• Objection: Object to processing of your personal data
• Restriction: Request restriction of processing in specific situations
• Portability: Request transfer of your data to another organization
• Withdrawal: Withdraw consent for marketing communications at any time

To exercise these rights, please contact us using the information provided below.`,
    },
    {
      id: "cookies",
      title: "7. Cookies and Tracking Technologies",
      content: `We use cookies and similar tracking technologies to enhance your experience:

• Essential Cookies: Required for website functionality and security
• Analytics Cookies: Help us understand how visitors interact with our website
• Preference Cookies: Remember your settings and preferences
• Marketing Cookies: Used for targeted advertising (with your consent)

You can control cookie preferences through your browser settings. Note that disabling cookies may affect website functionality.`,
    },
    {
      id: "international-transfers",
      title: "8. International Data Transfers",
      content: `As a Rwanda-based company serving international clients, your data may be transferred to and processed in countries outside of Rwanda. We ensure appropriate safeguards are in place:

• Adequacy Decisions: Transfer to countries with adequate data protection laws
• Standard Contracts: Use of approved contractual clauses for data protection
• Security Measures: Implementation of additional security measures for international transfers
• Transparency: Clear communication about data transfer practices

We comply with applicable data protection laws regarding international data transfers.`,
    },
    {
      id: "children-privacy",
      title: "9. Children's Privacy",
      content: `Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children without parental consent.

If we become aware that we have collected personal information from a child without verification of parental consent, we will take steps to remove that information from our servers.

Parents or guardians who believe their child has provided us with personal information should contact us immediately.`,
    },
    {
      id: "policy-changes",
      title: "10. Changes to This Privacy Policy",
      content: `We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by:

• Posting the updated policy on our website with a new effective date
• Sending email notifications to registered users
• Displaying prominent notices on our services

We encourage you to review this policy periodically to stay informed about how we protect your information.`,
    },
    {
      id: "contact-us",
      title: "11. Contact Us",
      content: `If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:

MonoCraft Tech
Kigali, Rwanda
Email: privacy@monocrafttech.rw
Phone: +250 788 123 456

We take all privacy concerns seriously and will respond to your inquiry promptly.

For data protection requests, please allow us 30 days to process your request. You also have the right to lodge a complaint with the relevant data protection authority.`,
    },
  ];

  const quickNavItems = [
    { id: "information-collection", label: "Information Collection" },
    { id: "how-we-use", label: "How We Use Data" },
    { id: "data-sharing", label: "Data Sharing" },
    { id: "data-security", label: "Data Security" },
    { id: "your-rights", label: "Your Rights" },
    { id: "contact-us", label: "Contact Us" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20 min-h-screen bg-volt-light"
    >
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-volt-dark to-black text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-volt-blue rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-volt-blue rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Privacy <span className="text-volt-blue">Policy</span>
            </h1>
            <p className="text-xl text-gray-300 mb-4">
              Last updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Your privacy is important to us. This policy explains how
              MonoCraft Tech collects, uses, and protects your personal
              information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section ref={ref} className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Quick Navigation */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-32">
                <h3 className="text-lg font-bold text-volt-dark mb-4">
                  Quick Navigation
                </h3>
                <nav className="space-y-2">
                  {quickNavItems.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block text-gray-600 hover:text-volt-blue transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-volt-light"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-volt-dark mb-2">
                    Download Policy
                  </h4>
                  <button className="w-full bg-volt-light text-volt-dark py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center space-x-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    <span>PDF Version</span>
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Privacy Policy Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* Introduction */}
                <div className="p-8 border-b border-gray-200">
                  <motion.div variants={itemVariants}>
                    <h2 className="text-2xl font-bold text-volt-dark mb-4">
                      Introduction
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      At MonoCraft Tech, we are committed to protecting your
                      privacy and ensuring the security of your personal
                      information. This Privacy Policy outlines how we collect,
                      use, disclose, and safeguard your information when you use
                      our services, visit our website, or interact with us in
                      any way.
                    </p>
                    <p className="text-gray-700 leading-relaxed mt-4">
                      By using our services, you consent to the practices
                      described in this policy. We encourage you to read this
                      policy carefully to understand our views and practices
                      regarding your personal data.
                    </p>
                  </motion.div>
                </div>

                {/* Policy Sections */}
                {privacySections.map((section, index) => (
                  <div
                    key={section.id}
                    id={section.id}
                    className="p-8 border-b border-gray-200 last:border-b-0"
                  >
                    <motion.div variants={itemVariants}>
                      <h3 className="text-xl font-bold text-volt-dark mb-4">
                        {section.title}
                      </h3>
                      <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                        {section.content}
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>

              {/* Additional Information */}
              <motion.div
                variants={itemVariants}
                className="mt-8 bg-blue-50 rounded-2xl p-6 border border-blue-200"
              >
                <h3 className="text-lg font-bold text-blue-800 mb-3">
                  Need More Information?
                </h3>
                <p className="text-blue-700 mb-4">
                  If you have any questions about this Privacy Policy or how we
                  handle your personal information, don't hesitate to reach out
                  to our Data Protection Officer.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="mailto:privacy@monocrafttech.rw"
                    className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg font-medium hover:bg-blue-200 transition-colors duration-300 text-center"
                  >
                    Email Privacy Team
                  </a>
                  <a
                    href="/contact"
                    className="bg-volt-blue text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-600 transition-colors duration-300 text-center"
                  >
                    Contact Us
                  </a>
                </div>
              </motion.div>

              {/* Policy Updates Notice */}
              <motion.div
                variants={itemVariants}
                className="mt-6 bg-yellow-50 rounded-2xl p-6 border border-yellow-200"
              >
                <div className="flex items-start space-x-3">
                  <div className="text-yellow-600 text-xl">⚠️</div>
                  <div>
                    <h4 className="font-semibold text-yellow-800 mb-2">
                      Policy Updates Notice
                    </h4>
                    <p className="text-yellow-700 text-sm">
                      This privacy policy may be updated periodically. We
                      recommend checking this page regularly to stay informed
                      about any changes. Significant updates will be
                      communicated through our website or direct notifications
                      when appropriate.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Compliance Badges */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-volt-dark mb-8">
              Our Compliance Framework
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                {
                  name: "Data Protection",
                  icon: "🛡️",
                  description: "GDPR Compliant",
                },
                {
                  name: "Security Standards",
                  icon: "🔒",
                  description: "ISO 27001 Aligned",
                },
                {
                  name: "Privacy by Design",
                  icon: "📝",
                  description: "Built-in Privacy",
                },
                {
                  name: "Regular Audits",
                  icon: "📊",
                  description: "Continuous Monitoring",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-volt-light rounded-xl p-6 text-center"
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <div className="font-semibold text-volt-dark mb-1">
                    {item.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {item.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Privacy;
