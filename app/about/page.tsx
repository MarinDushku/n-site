'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  FiAward,
  FiUsers,
  FiTarget,
  FiHeart,
  FiTrendingUp,
  FiShield,
  FiZap,
} from 'react-icons/fi';
import Button from '@/components/Button';

export default function About() {
  const team = [
    {
      name: 'Adnand Dushku',
      role: 'Founder & CEO',
      specialization: 'IT Specialist',
      description: 'Experienced IT specialist dedicated to delivering comprehensive technology solutions for businesses and individuals.',
    },
  ];

  const values = [
    {
      icon: <FiTarget className="w-8 h-8" />,
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering solutions that exceed expectations.',
    },
    {
      icon: <FiHeart className="w-8 h-8" />,
      title: 'Client-Focused',
      description: 'Your success is our priority. We build lasting partnerships based on trust and results.',
    },
    {
      icon: <FiTrendingUp className="w-8 h-8" />,
      title: 'Innovation',
      description: 'We stay ahead of technology trends to provide cutting-edge solutions.',
    },
    {
      icon: <FiShield className="w-8 h-8" />,
      title: 'Integrity',
      description: 'Transparency, honesty, and ethical practices guide everything we do.',
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
              About AD Services
            </h1>
            <p className="text-xl text-secondary-200 leading-relaxed">
              Empowering businesses with innovative technology solutions since 2010.
              We're more than an IT company—we're your technology partner for success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary-600 font-semibold mb-2 block">OUR STORY</span>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-secondary-900 mb-6">
                Building the Future of IT Solutions
              </h2>
              <div className="space-y-4 text-secondary-600 leading-relaxed">
                <p>
                  Founded in 2010, AD Services emerged from a simple vision: to make enterprise-grade technology accessible to businesses of all sizes. What started as a small team of passionate technologists has grown into a full-service IT company serving hundreds of clients nationwide.
                </p>
                <p>
                  Our journey has been driven by a commitment to excellence and a deep understanding that technology is not just about tools—it's about solving real business challenges. We've helped companies streamline operations, scale their infrastructure, and achieve their digital transformation goals.
                </p>
                <p>
                  Today, we're proud to be a trusted partner for businesses ranging from startups to established enterprises, providing comprehensive IT services that drive growth and innovation.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <div className="bg-primary-600 rounded-2xl p-6 text-white">
                  <div className="text-4xl font-bold mb-2">15+</div>
                  <div className="text-primary-100">Years Experience</div>
                </div>
                <div className="bg-secondary-100 rounded-2xl p-6">
                  <div className="text-4xl font-bold text-secondary-900 mb-2">2000+</div>
                  <div className="text-secondary-600">Projects Delivered</div>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-secondary-100 rounded-2xl p-6">
                  <div className="text-4xl font-bold text-secondary-900 mb-2">500+</div>
                  <div className="text-secondary-600">Happy Clients</div>
                </div>
                <div className="bg-primary-600 rounded-2xl p-6 text-white">
                  <div className="text-4xl font-bold mb-2">24/7</div>
                  <div className="text-primary-100">Support Available</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary-600 font-semibold mb-2 block">OUR VALUES</span>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-secondary-900 mb-4">
              What Drives Us
            </h2>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              Our core values shape everything we do and guide our commitment to delivering exceptional service.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="inline-block p-3 bg-primary-50 rounded-lg text-primary-600 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-secondary-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-secondary-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-secondary-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary-600 font-semibold mb-2 block">LEADERSHIP</span>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-secondary-900 mb-4">
              Meet Our Founder
            </h2>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              Dedicated to delivering exceptional IT solutions with expertise and commitment.
            </p>
          </motion.div>

          <div className="flex justify-center">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group max-w-md w-full"
              >
                <div className="p-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white font-bold text-3xl mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="text-xl font-heading font-bold text-secondary-900 text-center mb-1">
                    {member.name}
                  </h3>
                  <div className="text-primary-600 font-medium text-center mb-2">
                    {member.role}
                  </div>
                  <div className="text-sm text-secondary-500 text-center mb-3">
                    {member.specialization}
                  </div>
                  <p className="text-secondary-600 text-sm text-center leading-relaxed">
                    {member.description}
                  </p>
                </div>
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
              Ready to Work Together?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Join hundreds of satisfied clients who trust AD Services for their technology needs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-primary-600 hover:bg-primary-50 px-12 py-6 rounded-lg font-bold text-2xl transition-all duration-300 hover:scale-105 shadow-2xl border-4 border-white"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
