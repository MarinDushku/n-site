'use client';

import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

const TestimonialCard = ({ name, role, company, content, rating }: TestimonialCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-xl shadow-lg p-6 border border-secondary-100"
    >
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, index) => (
          <FiStar
            key={index}
            className={`w-5 h-5 ${
              index < rating
                ? 'text-yellow-400 fill-yellow-400'
                : 'text-secondary-300'
            }`}
          />
        ))}
      </div>

      <p className="text-secondary-700 mb-6 leading-relaxed italic">
        "{content}"
      </p>

      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white font-bold text-lg">
          {company.charAt(0)}
        </div>
        <div className="ml-4">
          <h4 className="font-semibold text-secondary-900 text-lg">{company}</h4>
          {role && <p className="text-sm text-secondary-600">{role}</p>}
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
