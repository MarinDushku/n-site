'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
  href?: string;
}

const ServiceCard = ({ icon, title, description, features, href = '/services' }: ServiceCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-secondary-100 group"
    >
      <div className="mb-4 inline-block p-3 bg-primary-50 rounded-lg text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
        <div className="w-8 h-8">
          {icon}
        </div>
      </div>

      <h3 className="text-xl font-heading font-bold text-secondary-900 mb-3">
        {title}
      </h3>

      <p className="text-secondary-600 mb-4 leading-relaxed">
        {description}
      </p>

      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start text-sm text-secondary-600">
            <span className="text-primary-600 mr-2 mt-1">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        href={href}
        className="inline-flex items-center text-primary-600 font-medium group-hover:text-primary-700 transition-colors"
      >
        <span>Learn More</span>
        <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
