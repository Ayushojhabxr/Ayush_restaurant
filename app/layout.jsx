import './globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { Instagram, Facebook } from 'lucide-react';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Restaurant Name - Authentic Dining Experience',
  description: 'Experience the perfect blend of traditional recipes and modern dining atmosphere.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="fixed w-full z-50 bg-[#FDF6E9]/95 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="text-[#E65527] text-2xl font-bold">
              Ayush Resturant
            </Link>
            <div className="flex items-center space-x-8">
              <Link href="/about" className="text-gray-700 hover:text-[#E65527] transition-colors">
                About Us
              </Link>
              <Link href="/menu" className="text-gray-700 hover:text-[#E65527] transition-colors">
                Menu
              </Link>
              <Link href="/testimonials" className="text-gray-700 hover:text-[#E65527] transition-colors">
                Testimonials
              </Link>
              <Link href="/gallery" className="text-gray-700 hover:text-[#E65527] transition-colors">
                Gallery
              </Link>
              <div className="flex items-center space-x-4">
                <Link href="https://instagram.com" className="text-gray-700 hover:text-[#E65527] transition-colors">
                  <Instagram size={20} />
                </Link>
                <Link href="https://facebook.com" className="text-gray-700 hover:text-[#E65527] transition-colors">
                  <Facebook size={20} />
                </Link>
              </div>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}