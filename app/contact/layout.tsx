import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | AD Services',
  description: 'Get in touch with AD Services. Contact us for a free consultation on web development, IT support, PC building, and all your technology needs.',
  keywords: 'contact us, IT consultation, get quote, IT support contact, technology services',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
