import './globals.css';
import type { Metadata } from 'next';

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Cinzel:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="font-inter">
        {children}
      </body>
    </html>
  );
}