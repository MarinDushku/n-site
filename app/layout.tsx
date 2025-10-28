import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AD Services | Professional IT Services & Support",
  description: "Expert IT services including web development, PC building & repair, custom software solutions, and comprehensive IT support. Transform your technology challenges into opportunities.",
  keywords: "IT services, web development, PC repair, IT support, custom software, tech solutions, AD Services",
  authors: [{ name: "AD Services" }],
  openGraph: {
    title: "AD Services | Professional IT Services",
    description: "Expert IT services for businesses and individuals",
    type: "website",
    images: [
      {
        url: "/images/logo-with-background.png",
        width: 1200,
        height: 630,
        alt: "AD Services Logo",
      },
    ],
  },
  icons: {
    icon: "/images/logo-with-background.png",
    apple: "/images/logo-with-background.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`} data-scroll-behavior="smooth">
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
