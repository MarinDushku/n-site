'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiHome, FiArrowLeft } from 'react-icons/fi';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary-50 via-white to-primary-50 px-4">
      <div className="text-center max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8">
            <h1 className="text-9xl font-heading font-bold text-primary-600 mb-4">404</h1>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-secondary-900 mb-4">
              Page Not Found
            </h2>
            <p className="text-lg text-secondary-600 mb-8">
              Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <FiHome className="w-5 h-5 mr-2" />
              Go to Homepage
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-8 py-4 rounded-lg font-medium transition-all duration-300"
            >
              <FiArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </button>
          </div>

          <div className="mt-12 text-secondary-500 text-sm">
            <p>Need help? <Link href="/contact" className="text-primary-600 hover:underline">Contact us</Link></p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
