'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  FiCode,
  FiMonitor,
  FiServer,
  FiTool,
  FiShield,
  FiDatabase,
  FiCloud,
  FiSettings,
  FiCheckCircle,
} from 'react-icons/fi';
import Button from '@/components/Button';

export default function Services() {
  const services = [
    {
      id: 'web-dev',
      icon: <FiCode className="w-12 h-12" />,
      title: 'Web Development',
      description: 'Build powerful, scalable web solutions that drive business growth and engage your audience.',
      features: [
        'Custom Website Development',
        'Responsive Design (Mobile-First)',
        'E-commerce Solutions',
        'Content Management Systems',
        'Progressive Web Apps (PWAs)',
        'API Development & Integration',
        'Performance Optimization',
        'SEO-Friendly Architecture',
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS'],
    },
    {
      id: 'pc-building',
      icon: <FiMonitor className="w-12 h-12" />,
      title: 'PC Building & Repair',
      description: 'Expert hardware solutions from custom builds to repairs, optimized for your specific needs.',
      features: [
        'Custom Gaming PC Builds',
        'Workstation Configurations',
        'Hardware Diagnostics & Repair',
        'Component Upgrades',
        'Performance Tuning',
        'Cable Management',
        'Cooling Solutions',
        'Warranty Support',
      ],
      technologies: ['AMD', 'Intel', 'NVIDIA', 'Custom Cooling', 'RGB Integration'],
    },
    {
      id: 'it-support',
      icon: <FiServer className="w-12 h-12" />,
      title: 'IT Support & Managed Services',
      description: 'Comprehensive IT support to keep your business running smoothly 24/7.',
      features: [
        '24/7 Help Desk Support',
        'Network Management',
        'System Monitoring',
        'Data Backup & Recovery',
        'Cloud Migration',
        'Email Solutions',
        'Remote Support',
        'On-Site Assistance',
      ],
      technologies: ['Microsoft 365', 'Azure', 'AWS', 'Google Workspace'],
    },
    {
      id: 'consulting',
      icon: <FiTool className="w-12 h-12" />,
      title: 'IT Consulting',
      description: 'Strategic technology guidance to optimize your IT infrastructure and drive innovation.',
      features: [
        'Technology Strategy Planning',
        'Digital Transformation',
        'System Architecture Design',
        'Security Audits & Compliance',
        'Vendor Selection',
        'Budget Planning',
        'Process Automation',
        'Training & Documentation',
      ],
      technologies: ['Enterprise Solutions', 'Cloud Platforms', 'Security Frameworks'],
    },
    {
      id: 'security',
      icon: <FiShield className="w-12 h-12" />,
      title: 'Cybersecurity Solutions',
      description: 'Protect your business with comprehensive security measures and best practices.',
      features: [
        'Security Assessments',
        'Penetration Testing',
        'Firewall Configuration',
        'Antivirus & Malware Protection',
        'Employee Security Training',
        'Compliance Management',
        'Incident Response',
        'Security Monitoring',
      ],
      technologies: ['Zero Trust', 'Multi-Factor Auth', 'Encryption', 'SIEM'],
    },
    {
      id: 'cloud',
      icon: <FiCloud className="w-12 h-12" />,
      title: 'Cloud Services',
      description: 'Seamless cloud solutions for scalability, flexibility, and cost optimization.',
      features: [
        'Cloud Migration Strategy',
        'Infrastructure Setup',
        'Cloud Storage Solutions',
        'Serverless Architecture',
        'Container Orchestration',
        'Cost Optimization',
        'Disaster Recovery',
        'Multi-Cloud Management',
      ],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes'],
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Consultation',
      description: 'We discuss your needs and goals to understand your requirements.',
    },
    {
      number: '02',
      title: 'Planning',
      description: 'We create a detailed project plan with timelines and deliverables.',
    },
    {
      number: '03',
      title: 'Implementation',
      description: 'Our expert team executes the plan with precision and quality.',
    },
    {
      number: '04',
      title: 'Support',
      description: 'Ongoing maintenance and support to ensure continued success.',
    },
  ];

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
              Our Services
            </h1>
            <p className="text-xl text-secondary-200 leading-relaxed">
              Comprehensive IT solutions tailored to your business needs. From web development to cybersecurity, we've got you covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-24"
              >
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="inline-block p-4 bg-primary-50 rounded-2xl text-primary-600 mb-6">
                      {service.icon}
                    </div>
                    <h2 className="text-3xl font-heading font-bold text-secondary-900 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-secondary-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-secondary-900 mb-3">Technologies We Use:</h3>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Button href="/contact" size="lg" className="mt-4 shadow-lg">
                      Get a Quote
                    </Button>
                  </div>

                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="bg-secondary-50 rounded-2xl p-8">
                      <h3 className="text-xl font-semibold text-secondary-900 mb-6">
                        What's Included:
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.map((feature, i) => (
                          <div key={i} className="flex items-start space-x-3">
                            <FiCheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                            <span className="text-secondary-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 bg-secondary-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary-600 font-semibold mb-2 block">OUR PROCESS</span>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-secondary-900 mb-4">
              How We Work
            </h2>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              A streamlined, transparent process designed to deliver exceptional results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-6xl font-bold text-primary-100 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-heading font-bold text-secondary-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-secondary-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary-300"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Contact us today for a free consultation and discover how our services can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-primary-600 hover:bg-primary-50 px-10 py-5 rounded-lg font-bold text-xl transition-all duration-300 hover:scale-105 shadow-2xl border-4 border-white"
              >
                Request a Quote
              </Link>
              <Link
                href="/faq"
                className="inline-flex items-center justify-center border-4 border-white bg-transparent text-white hover:bg-white hover:text-primary-600 px-10 py-5 rounded-lg font-bold text-xl transition-all duration-300 hover:scale-105 shadow-2xl"
              >
                View FAQ
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
