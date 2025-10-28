import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | AD Services',
  description: 'Learn about AD Services - over 15 years of IT excellence. Meet our expert team and discover our commitment to delivering exceptional technology solutions.',
  keywords: 'about us, IT company, technology experts, IT team, company history',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
