import Link from 'next/link';
import Image from 'next/image';
import {
  FiMail,
  FiMapPin,
} from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
  ];

  const services = [
    { href: '/services#web-dev', label: 'Web Development' },
    { href: '/services#pc-building', label: 'PC Building & Repair' },
    { href: '/services#it-support', label: 'IT Support' },
    { href: '/services#consulting', label: 'IT Consulting' },
  ];

  const resources = [
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' },
    { href: '/services', label: 'All Services' },
  ];


  return (
    <footer className="bg-secondary-900 text-secondary-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Image
                src="/images/logo-navbar.png"
                alt="AD Services Logo"
                width={150}
                height={50}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-secondary-300 text-sm leading-relaxed">
              Empowering businesses with cutting-edge IT solutions. We transform technology challenges into opportunities for growth.
            </p>
            <div className="space-y-2">
              <div className="flex items-start space-x-2 text-sm">
                <FiMapPin className="w-4 h-4 mt-1 text-primary-500 flex-shrink-0" />
                <span className="text-secondary-300">Tiran, Albania</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <FiMail className="w-4 h-4 text-primary-500 flex-shrink-0" />
                <a href="mailto:ad@adservice.al" className="text-secondary-300 hover:text-primary-500 transition-colors">
                  ad@adservice.al
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-secondary-300 hover:text-primary-500 transition-colors text-sm flex items-center group"
                  >
                    <span className="mr-2 group-hover:mr-3 transition-all">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-heading font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-secondary-300 hover:text-primary-500 transition-colors text-sm flex items-center group"
                  >
                    <span className="mr-2 group-hover:mr-3 transition-all">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-heading font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-secondary-300 hover:text-primary-500 transition-colors text-sm flex items-center group"
                  >
                    <span className="mr-2 group-hover:mr-3 transition-all">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-secondary-800 pt-8">
          <div className="text-center">
            {/* Copyright */}
            <p className="text-secondary-400 text-sm">
              © {currentYear} AD Services. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
