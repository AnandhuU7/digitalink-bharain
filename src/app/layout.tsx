import './globals.css'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Digital Link Bahrain | Digital Solutions',
  description: 'Your trusted partner for web development, mobile apps, and digital marketing in Bahrain',
  keywords: ['digital solutions', 'web development', 'mobile apps', 'digital marketing', 'Bahrain'],
  authors: [{ name: 'Digital Link Bahrain' }],
  openGraph: {
    title: 'Digital Link Bahrain',
    description: 'Your trusted partner for digital solutions in Bahrain',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}