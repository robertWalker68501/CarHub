import { ReactNode } from 'react';

import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/sonner';
import './globals.css';

export const metadata: Metadata = {
  title: 'CarHub',
  description:
    'CarHub is your ultimate destination for hassle-free online car shopping',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`bg-[#EBF2F7] antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
