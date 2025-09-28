import './globals.css';
import type { Metadata } from 'next';
import { Inter, Cinzel, Playfair_Display } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const cinzel = Cinzel({ subsets: ['latin'], variable: '--font-cinzel' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'Buynestt - Find it, stock it, sell it.',
  description: 'Professional B2B marketplace for retailers to discover and source products.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cinzel.variable} ${playfair.variable} font-inter`}>
        {children}
      </body>
    </html>
  );
}