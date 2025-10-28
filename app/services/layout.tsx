import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IT Services | AD Services',
  description: 'Comprehensive IT services including web development, PC building & repair, IT support, consulting, cybersecurity, and cloud solutions. Expert technology services for your business.',
  keywords: 'IT services, web development, PC repair, IT support, cybersecurity, cloud services, IT consulting',
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
