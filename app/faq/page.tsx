'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqCategories = [
    {
      category: 'General',
      questions: [
        {
          question: 'What services does AD Services provide?',
          answer: 'We offer a comprehensive range of IT services including web development, custom PC building and repair, IT support and managed services, IT consulting, cybersecurity solutions, and cloud services. Our team of certified professionals can handle projects of any size, from individual needs to enterprise solutions.',
        },
        {
          question: 'What are your business hours?',
          answer: 'Our office is open Monday through Friday from 9:00 AM to 6:00 PM, and Saturday from 10:00 AM to 4:00 PM. However, we offer 24/7 emergency IT support for our managed service clients and critical infrastructure issues.',
        },
        {
          question: 'Do you work with both businesses and individuals?',
          answer: 'Yes! We serve both business clients and individual customers. Whether you need enterprise IT solutions or a custom gaming PC, our team has the expertise to deliver exceptional results tailored to your specific needs.',
        },
      ],
    },
    {
      category: 'Web Development',
      questions: [
        {
          question: 'What technologies do you use for web development?',
          answer: 'We specialize in modern web technologies including React, Next.js, TypeScript, Node.js, and Tailwind CSS. We also work with various databases (PostgreSQL, MongoDB), cloud platforms (AWS, Azure), and implement best practices for SEO, performance, and accessibility.',
        },
        {
          question: 'How long does it take to build a website?',
          answer: 'Timeline varies based on project complexity. A simple business website typically takes 2-4 weeks, while a complex e-commerce platform or custom web application may take 8-16 weeks. We provide detailed project timelines during our initial consultation.',
        },
        {
          question: 'Do you provide website maintenance after launch?',
          answer: 'Absolutely! We offer ongoing maintenance packages that include security updates, content updates, performance monitoring, backups, and technical support. We believe in building long-term partnerships with our clients.',
        },
      ],
    },
    {
      category: 'PC Building & Repair',
      questions: [
        {
          question: 'Can you build a PC to my specific requirements?',
          answer: 'Yes! We specialize in custom PC builds tailored to your exact needs and budget. Whether you need a high-end gaming rig, a professional workstation for video editing, or an efficient office computer, we will design and build the perfect system for you.',
        },
        {
          question: 'What brands do you work with?',
          answer: 'We work with all major hardware brands including Intel, AMD, NVIDIA, ASUS, MSI, Corsair, and many others. We select components based on quality, performance, and value, and we are happy to accommodate specific brand preferences.',
        },
        {
          question: 'Do you offer warranties on custom builds?',
          answer: 'Yes, all our custom PC builds come with a comprehensive warranty. Individual components carry manufacturer warranties (typically 1-3 years), and we provide 1 year of free labor warranty on our build work. Extended warranties are also available.',
        },
      ],
    },
    {
      category: 'IT Support & Services',
      questions: [
        {
          question: 'What is included in your managed IT services?',
          answer: 'Our managed services include 24/7 network monitoring, regular system maintenance, security updates, data backup and recovery, help desk support, strategic IT planning, and vendor management. We act as your complete IT department.',
        },
        {
          question: 'How quickly do you respond to support requests?',
          answer: 'Response times depend on your service level agreement (SLA). Critical issues receive immediate response (within 1 hour), high-priority issues within 4 hours, and standard requests within 24 hours. Emergency 24/7 support is available for managed service clients.',
        },
        {
          question: 'Can you help with cloud migration?',
          answer: 'Yes! We have extensive experience with cloud migrations to AWS, Azure, and Google Cloud. We handle everything from initial assessment and planning to migration execution and post-migration optimization. Our goal is zero downtime during the transition.',
        },
      ],
    },
    {
      category: 'Pricing & Payment',
      questions: [
        {
          question: 'How do you charge for your services?',
          answer: 'Pricing varies by service type. Web development and custom projects are typically quoted as fixed-price packages. IT support can be hourly or through monthly managed service agreements. PC builds are priced based on components plus labor. We always provide transparent quotes before starting work.',
        },
        {
          question: 'Do you offer free consultations?',
          answer: 'Yes! We offer free initial consultations for all potential projects. This allows us to understand your needs, discuss possible solutions, and provide an accurate quote. There\'s no obligation, and you\'ll receive valuable insights regardless of whether you proceed.',
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept various payment methods including credit cards, bank transfers, checks, and for larger projects, we can arrange payment plans. For ongoing managed services, we offer convenient monthly billing.',
        },
      ],
    },
    {
      category: 'Security & Data',
      questions: [
        {
          question: 'How do you ensure data security?',
          answer: 'We implement industry-standard security practices including encryption, secure access controls, regular security audits, and compliance with relevant regulations (GDPR, HIPAA, etc.). All our team members sign NDAs, and we follow strict data handling protocols.',
        },
        {
          question: 'Do you provide cybersecurity services?',
          answer: 'Yes! Our cybersecurity services include security assessments, penetration testing, firewall configuration, employee security training, incident response, and ongoing security monitoring. We help protect your business from cyber threats.',
        },
        {
          question: 'What happens if there\'s a data breach?',
          answer: 'We have comprehensive incident response procedures in place. Our team will immediately investigate, contain the breach, assess the damage, implement fixes, and help with recovery. For managed service clients, we provide 24/7 monitoring to detect and prevent breaches before they occur.',
        },
      ],
    },
  ];

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  let questionIndex = -1;

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-secondary-200 leading-relaxed">
              Find answers to common questions about our services, pricing, and processes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="space-y-12">
            {faqCategories.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-heading font-bold text-secondary-900 mb-6 pb-3 border-b-2 border-primary-600">
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.questions.map((faq, qIndex) => {
                    questionIndex++;
                    const currentIndex = questionIndex;
                    return (
                      <div
                        key={qIndex}
                        className="bg-secondary-50 rounded-xl overflow-hidden"
                      >
                        <button
                          onClick={() => toggleQuestion(currentIndex)}
                          className="w-full px-6 py-4 flex items-center justify-between hover:bg-secondary-100 transition-colors"
                        >
                          <span className="font-semibold text-secondary-900 text-left">
                            {faq.question}
                          </span>
                          <FiChevronDown
                            className={`w-5 h-5 text-primary-600 flex-shrink-0 ml-4 transition-transform ${
                              openIndex === currentIndex ? 'transform rotate-180' : ''
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {openIndex === currentIndex && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 pb-4 text-secondary-600 leading-relaxed">
                                {faq.answer}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
