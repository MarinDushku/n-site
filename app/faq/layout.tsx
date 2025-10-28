import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ | AD Services',
  description: 'Frequently asked questions about our IT services, pricing, support, and processes. Find answers to common questions about web development, PC building, and IT support.',
  keywords: 'FAQ, frequently asked questions, IT services questions, support, pricing',
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
