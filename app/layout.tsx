import { ReactNode } from 'react';

import type { Metadata } from 'next';
import { Roboto, Roboto_Mono } from 'next/font/google';
import './globals.css';

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto-sans',
  weight: ['100', '300', '400', '500', '700', '900'],
});
const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  weight: ['100', '300', '400', '500', '700'],
});

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
      <body
        className={`${roboto.variable} ${robotoMono.variable} flex h-screen flex-col antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
