import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from './Layout/Navbar';
import AuthProvider from './context/AuthProvider';
import Providers from './providers';
import { CartProvider } from './context/CartProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Eng Mohammed alkhateeb',
  description: 'E-commerce system',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className='container mx-auto px-6'>
        <CartProvider>
          <Providers>
            <AuthProvider>
              <>
                <Navbar />
                <main className=' p-4 min-h-screen'>{children}</main>
              </>
            </AuthProvider>
          </Providers>
        </CartProvider>
      </body>
    </html>
  );
}
