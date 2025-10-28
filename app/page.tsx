'use client';

import { motion } from 'framer-motion';
import {
  FiCode,
  FiMonitor,
  FiServer,
  FiTool,
  FiShield,
  FiZap,
  FiUsers,
  FiAward,
  FiCheckCircle,
  FiArrowRight,
} from 'react-icons/fi';
import Button from '@/components/Button';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import Link from 'next/link';

export default function Home() {
  const services = [
    {
      icon: <FiCode className="w-full h-full" />,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies for optimal performance.',
      features: [
        'Responsive Design',
        'E-commerce Solutions',
        'CMS Integration',
        'Progressive Web Apps',
      ],
      href: '/services#web-dev',
    },
    {
      icon: <FiMonitor className="w-full h-full" />,
      title: 'PC Building & Repair',
      description: 'Expert hardware solutions from custom PC builds to comprehensive repair services.',
      features: [
        'Custom PC Building',
        'Hardware Upgrades',
        'Troubleshooting',
        'Performance Optimization',
      ],
      href: '/services#pc-building',
    },
    {
      icon: <FiServer className="w-full h-full" />,
      title: 'IT Support',
      description: '24/7 comprehensive IT support to keep your systems running smoothly.',
      features: [
        'Help Desk Support',
        'Network Management',
        'Data Backup Solutions',
        'Cloud Services',
      ],
      href: '/services#it-support',
    },
    {
      icon: <FiTool className="w-full h-full" />,
      title: 'IT Consulting',
      description: 'Strategic technology consulting to help your business leverage IT effectively.',
      features: [
        'Technology Strategy',
        'Digital Transformation',
        'System Integration',
        'Security Audits',
      ],
      href: '/services#consulting',
    },
  ];

  const testimonials = [
    {
      name: '',
      role: '',
      company: 'Albavia',
      content: 'AD Services provided comprehensive IT solutions that streamlined our operations. Their technical expertise and reliable support have been invaluable to our business growth.',
      rating: 5,
    },
    {
      name: '',
      role: '',
      company: 'Ave Consulting',
      content: 'Professional, knowledgeable, and always responsive. AD Services handles all our IT infrastructure needs with exceptional service. Highly recommend their expertise!',
      rating: 5,
    },
  ];

  const stats = [
    { icon: FiUsers, value: '500+', label: 'Happy Clients' },
    { icon: FiCheckCircle, value: '2000+', label: 'Projects Completed' },
    { icon: FiAward, value: '15+', label: 'Years Experience' },
    { icon: FiZap, value: '99.9%', label: 'Uptime Guaranteed' },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary-50 via-white to-primary-50 pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-6">
                Professional IT Solutions Since 2010
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-secondary-900 mb-6 leading-tight">
                Transform Your Business with
                <span className="block text-primary-600 mt-2">
                  Cutting-Edge IT Solutions
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-secondary-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                From web development to IT support, we provide comprehensive technology services that drive growth and innovation for businesses of all sizes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button href="/contact" size="lg" icon={<FiArrowRight />}>
                Get Started Today
              </Button>
              <Button href="/services" variant="outline" size="lg">
                Explore Services
              </Button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-16 flex flex-wrap justify-center items-center gap-8 text-secondary-600"
            >
              <div className="flex items-center space-x-2">
                <FiShield className="w-5 h-5 text-primary-600" />
                <span className="text-sm">Certified Professionals</span>
              </div>
              <div className="flex items-center space-x-2">
                <FiCheckCircle className="w-5 h-5 text-primary-600" />
                <span className="text-sm">100% Satisfaction Guarantee</span>
              </div>
              <div className="flex items-center space-x-2">
                <FiZap className="w-5 h-5 text-primary-600" />
                <span className="text-sm">24/7 Support Available</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <Icon className="w-10 h-10 text-white mx-auto mb-3" />
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-primary-100">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary-600 font-semibold mb-2 block">OUR SERVICES</span>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-secondary-900 mb-4">
              Comprehensive IT Solutions
            </h2>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              We offer a complete range of IT services designed to meet the unique needs of your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-secondary-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary-600 font-semibold mb-2 block">WHY CHOOSE US</span>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-secondary-900 mb-6">
                Your Trusted IT Partner for Success
              </h2>
              <p className="text-secondary-600 mb-8 leading-relaxed">
                With over 15 years of experience, we've helped hundreds of businesses achieve their technology goals. Our team of certified professionals is committed to delivering excellence in every project.
              </p>

              <div className="space-y-4">
                {[
                  'Expert team with industry certifications',
                  'Cutting-edge technology solutions',
                  'Personalized service and support',
                  'Competitive pricing with transparent quotes',
                  'Proven track record of success',
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <FiCheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-secondary-700">{item}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8">
                <Button href="/about" size="lg">
                  Learn More About Us
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-8 shadow-2xl">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
                  <h3 className="text-white font-bold text-2xl mb-2">15+ Years</h3>
                  <p className="text-primary-100">of Industry Excellence</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
                  <h3 className="text-white font-bold text-2xl mb-2">500+ Clients</h3>
                  <p className="text-primary-100">Trust Our Services</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-white font-bold text-2xl mb-2">99.9% Uptime</h3>
                  <p className="text-primary-100">Guaranteed Performance</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary-600 font-semibold mb-2 block">TESTIMONIALS</span>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-secondary-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from some of our satisfied clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TestimonialCard {...testimonial} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Get in touch with us today for a free consultation and discover how we can help you achieve your technology goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-primary-600 px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Get Free Consultation
                <FiArrowRight className="ml-2" />
              </Link>
              <Link
                href="tel:+1234567890"
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:bg-white hover:text-primary-600"
              >
                Call Us Now
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
